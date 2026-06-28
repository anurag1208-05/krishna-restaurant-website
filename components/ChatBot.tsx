"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Namaste! 🙏 Welcome to Krishna Restaurant. Ask me about our menu, timings, or reservations!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const data = await res.json();
      setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...updatedMessages, {
        role: "assistant",
        content: "Sorry, kuch problem ho gayi. Please try again! 🙏",
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {open && (
        <div style={{
          position: "fixed", bottom: 90, right: 24, zIndex: 1000,
          width: 340, height: 460, background: "#fff",
          borderRadius: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          display: "flex", flexDirection: "column", overflow: "hidden",
          fontFamily: "sans-serif"
        }}>
          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #FF6B00, #FF8C00)",
            padding: "14px 16px", display: "flex",
            alignItems: "center", justifyContent: "space-between"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 24 }}>🪔</span>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>Krishna Assistant</div>
                <div style={{ color: "#ffe0b2", fontSize: 11 }}>● Online</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", color: "#fff", fontSize: 20, cursor: "pointer" }}>
              ✕
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: 12, background: "#fdf6ec", display: "flex", flexDirection: "column", gap: 8 }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                background: m.role === "user" ? "#FF6B00" : "#fff",
                color: m.role === "user" ? "#fff" : "#333",
                padding: "9px 13px", borderRadius: 12,
                maxWidth: "80%", fontSize: 13, lineHeight: 1.5,
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
              }}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div style={{
                alignSelf: "flex-start", background: "#fff",
                padding: "9px 13px", borderRadius: 12, fontSize: 13,
                color: "#999", boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
              }}>
                Typing... ✍️
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: "10px 12px", borderTop: "1px solid #f0e0cc",
            display: "flex", gap: 8, background: "#fff"
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Ask about menu, timings..."
              style={{
                flex: 1, border: "1px solid #ddd", borderRadius: 20,
                padding: "8px 14px", fontSize: 13, outline: "none"
              }}
            />
            <button onClick={sendMessage} disabled={loading}
              style={{
                background: "#FF6B00", border: "none", borderRadius: "50%",
                width: 36, height: 36, color: "#fff", fontSize: 16,
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
              }}>
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Floating Bubble */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 1001,
          width: 56, height: 56, borderRadius: "50%",
          background: "linear-gradient(135deg, #FF6B00, #FF8C00)",
          border: "none", cursor: "pointer", fontSize: 26,
          boxShadow: "0 4px 16px rgba(255,107,0,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        {open ? "✕" : "🪔"}
      </button>
    </>
  );
}