'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Calendar, Clock, Users, Check, Phone, Mail } from 'lucide-react'

const timeSlots = [
  '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
]

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8]

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    specialRequests: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]
  // Get maximum date (3 months from now)
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)
  const maxDateStr = maxDate.toISOString().split('T')[0]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">Reserve Your Experience</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
            Make a Reservation
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Secure your table for an unforgettable dining experience at KRISHNA.
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-sm p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-green-800">Reservation Confirmed!</h2>
              <p className="text-green-700 mb-2">
                Thank you, <span className="font-semibold">{formData.name}</span>!
              </p>
              <p className="text-green-700 mb-6">
                Your table for <span className="font-semibold">{formData.guests} {parseInt(formData.guests) === 1 ? 'guest' : 'guests'}</span> has been reserved for{' '}
                <span className="font-semibold">{new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span> at{' '}
                <span className="font-semibold">{formData.time}</span>.
              </p>
              <p className="text-green-600 text-sm mb-8">
                A confirmation email has been sent to {formData.email}
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    guests: '',
                    occasion: '',
                    specialRequests: '',
                  })
                }}
                className="px-8 py-3 bg-green-600 text-primary-foreground font-medium rounded-sm hover:bg-green-700 transition-colors"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold mb-4">Book Your Table</h2>
                <p className="text-muted-foreground">
                  Fill out the form below to reserve your table. For parties larger than 8, please call us directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Date, Time, Guests Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="date" className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      required
                      min={today}
                      max={maxDateStr}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Time *
                    </label>
                    <select
                      id="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Users className="w-4 h-4 text-primary" />
                      Guests *
                    </label>
                    <select
                      id="guests"
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select guests</option>
                      {guestOptions.map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="occasion" className="block text-sm font-medium mb-2">
                      Special Occasion
                    </label>
                    <select
                      id="occasion"
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">None</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Dinner</option>
                      <option value="date">Date Night</option>
                      <option value="celebration">Celebration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    rows={4}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-input rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Dietary restrictions, seating preferences, or any other special requests..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide uppercase rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Confirming Reservation...' : 'Confirm Reservation'}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold mb-2">Large Parties</h3>
              <p className="text-muted-foreground text-sm mb-3">
                For groups of 9 or more, please contact us directly to arrange your reservation.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary">
                <Phone className="w-4 h-4" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Private Events</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Host your special occasion in our private dining room. Contact us for details.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary">
                <Mail className="w-4 h-4" />
                <span className="font-medium">events@krishna.com</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cancellation Policy</h3>
              <p className="text-muted-foreground text-sm">
                Please notify us at least 4 hours in advance if you need to cancel or modify your reservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
