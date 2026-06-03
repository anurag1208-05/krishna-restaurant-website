import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight, Quote } from 'lucide-react'

const timeline = [
  {
    year: '2009',
    title: 'The Beginning',
    description: 'KRISHNA opened its doors in a small corner of the city, bringing authentic Indian flavors to the community.',
  },
  {
    year: '2013',
    title: 'First Award',
    description: 'Recognized as "Best Indian Restaurant" by the City Food Critics Association.',
  },
  {
    year: '2016',
    title: 'Expansion',
    description: 'Moved to our current location with expanded seating and a dedicated tandoor kitchen.',
  },
  {
    year: '2019',
    title: 'A Decade of Excellence',
    description: 'Celebrated 10 years of serving the community with a special anniversary menu.',
  },
  {
    year: '2024',
    title: 'Continuing the Legacy',
    description: 'Introducing new seasonal menus while preserving our beloved traditional recipes.',
  },
]

const team = [
  {
    name: 'Chef Rajesh Kumar',
    role: 'Executive Chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=500&fit=crop',
    bio: 'With over 25 years of experience, Chef Rajesh brings authentic North Indian flavors to every dish.',
  },
  {
    name: 'Priya Sharma',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=500&fit=crop',
    bio: 'Specializing in traditional Indian desserts with a modern twist, creating sweet memories.',
  },
  {
    name: 'Vikram Singh',
    role: 'Tandoor Master',
    image: 'https://images.unsplash.com/photo-1583394293214-28ez5e9c3c59?w=400&h=500&fit=crop',
    bio: 'A true artisan of the clay oven, perfecting the art of tandoori cooking for 15 years.',
  },
]

const values = [
  {
    title: 'Authenticity',
    description: 'We stay true to traditional recipes while sourcing the finest ingredients from trusted suppliers.',
  },
  {
    title: 'Quality',
    description: 'Every dish is prepared fresh with premium spices and the highest quality produce.',
  },
  {
    title: 'Hospitality',
    description: 'We treat every guest like family, ensuring a warm and memorable dining experience.',
  },
  {
    title: 'Sustainability',
    description: 'We are committed to eco-friendly practices and supporting local communities.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&h=600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
            About KRISHNA
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            A journey of passion, tradition, and culinary excellence since 2009.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">Our Heritage</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
                A Passion Born in the Heart of India
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                KRISHNA was born from a deep love for Indian cuisine and a desire to share its rich heritage with the world. Our founder, inspired by the vibrant street food of Mumbai and the royal kitchens of Rajasthan, set out to create a dining experience that honors tradition while embracing innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every recipe at KRISHNA tells a story — of spices hand-selected from the markets of Kerala, of techniques passed down through generations, and of a relentless pursuit of perfection in every dish we serve.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue that legacy, inviting you to experience the true essence of Indian hospitality and cuisine in every visit.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-sm overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=533&fit=crop"
                    alt="Indian spices"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-sm overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop"
                    alt="Traditional cooking"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-sm overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop"
                    alt="Indian cuisine"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-sm overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=533&fit=crop"
                    alt="Restaurant ambiance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-gold mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-serif text-primary-foreground leading-relaxed mb-6">
            Food is not just sustenance; it is an expression of love, culture, and the bonds that bring us together.
          </blockquote>
          <cite className="text-primary-foreground/80 not-italic">
            — The Philosophy of KRISHNA
          </cite>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`bg-secondary p-8 rounded-sm ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                      <span className="text-gold font-serif text-2xl font-bold">{item.year}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary-foreground">
                    {value.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">The Artisans</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[4/5] rounded-sm overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gold font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
            Experience KRISHNA for Yourself
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            We invite you to join us for an unforgettable dining experience. Taste the tradition, feel the warmth, and create memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide uppercase rounded-sm hover:bg-primary/90 transition-all hover:gap-3"
            >
              Book a Table
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-medium tracking-wide uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
