import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
    systemInstruction: `You are a warm and helpful assistant for KRISHNA Restaurant — a premium vegetarian Indian restaurant.

MENU HIGHLIGHTS:
- Starters: Paneer Tikka (₹220), Hara Bhara Kabab (₹180), Veg Seekh Kabab (₹200)
- Main Course: Paneer Butter Masala (₹280), Dal Makhani (₹220), Kadai Paneer (₹260), Veg Biryani (₹240)
- Breads: Butter Naan (₹40), Garlic Naan (₹50), Laccha Paratha (₹45)
- Desserts: Gulab Jamun (₹80), Rasmalai (₹100), Kulfi (₹90)

TIMINGS: 11:00 AM – 11:00 PM (All days including Sunday)
LOCATION: Indore, Madhya Pradesh
RESERVATIONS: Call [Your phone number] for table booking.

SPECIAL OFFERS:
- Lunch Thali (12–3 PM): ₹199 only
- Weekend Special: Buy 2 main course get 1 dessert free

RULES:
- Only answer restaurant-related queries
- Be friendly and warm
- Keep responses short and helpful`,
  });

  const history = messages.slice(0, -1)
    .filter((m: { role: string; content: string }) => m.role === "user")
    .map((m: { role: string; content: string }) => ({
      role: "user",
      parts: [{ text: m.content }],
    }));

  const chat = model.startChat({ history });
  

  const lastMessage = messages[messages.length - 1].content;
  const result = await chat.sendMessage(lastMessage);

  return Response.json({ reply: result.response.text() });
}