import Link from 'next/link'
import { ArrowRight, Star, Utensils, Award, Users } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const featuredDishes = [
  {
    name: 'Butter Chicken',
    description: 'Tender chicken in rich, creamy tomato sauce with aromatic spices',
    price: '$18',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=400&fit=crop',
  },
  {
    name: 'Lamb Biryani',
    description: 'Fragrant basmati rice layered with slow-cooked lamb and saffron',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop',
  },
  {
    name: 'Paneer Tikka',
    description: 'Marinated cottage cheese grilled in traditional tandoor oven',
    price: '$16',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&h=400&fit=crop',
  },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    text: 'The most authentic Indian food I have ever tasted outside of India. The flavors are absolutely incredible!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    text: 'KRISHNA has become our go-to spot for special occasions. The ambiance and service are exceptional.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    text: 'Every dish tells a story. You can taste the love and tradition in every bite. Truly remarkable!',
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-6">
            Authentic Indian Cuisine
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight text-balance">
            A Journey Through<br />
            <span className="text-gold">Indian Flavors</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the rich tapestry of Indian cuisine, where every dish is a celebration of tradition, spice, and culinary artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-gold-foreground font-medium tracking-wide uppercase rounded-sm hover:bg-gold/90 transition-all hover:gap-3"
            >
              Explore Menu
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-medium tracking-wide uppercase rounded-sm hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Book a Table
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Utensils className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Traditional Recipes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Recipes passed down through generations, prepared with authentic techniques and premium ingredients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Award Winning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Recognized for excellence in Indian cuisine, celebrating the artistry of our master chefs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Warm Hospitality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience the legendary Indian hospitality in an elegant, welcoming atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=1000&fit=crop"
                  alt="KRISHNA Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-sm hidden lg:flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <p className="text-4xl font-serif font-bold">15+</p>
                  <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
                Where Tradition Meets Culinary Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2009, KRISHNA brings the authentic flavors of India to your table. Our journey began with a simple vision: to share the rich culinary heritage of India with food lovers around the world.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every dish at KRISHNA tells a story — of spices carefully sourced from the finest regions, of recipes perfected over generations, and of a passion for creating unforgettable dining experiences.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">Our Specialties</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance">
              Signature Dishes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <div
                key={dish.name}
                className="group bg-card rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif font-semibold">{dish.name}</h3>
                    <span className="text-primary font-semibold">{dish.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide uppercase rounded-sm hover:bg-primary/90 transition-all hover:gap-3"
            >
              View Full Menu
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance">
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-secondary p-8 rounded-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">
            Reserve Your Table Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join us for an unforgettable culinary journey. Whether it&apos;s a romantic dinner, family celebration, or business meeting, we&apos;re here to make it special.
          </p>
          <Link
            href="/reservations"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold text-gold-foreground font-medium tracking-wide uppercase rounded-sm hover:bg-gold/90 transition-all hover:gap-3"
          >
            Make a Reservation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
