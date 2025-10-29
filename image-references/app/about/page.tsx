import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">About Snappify</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your trusted partner for premium tech accessories in South Africa
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in the heart of Midrand, Snappify has been serving South African tech enthusiasts with premium
                  accessories since our inception. We believe that quality tech accessories shouldn't be a luxury, but a
                  standard for everyone who values their devices.
                </p>
                <p>
                  Our carefully curated collection features the latest in tech accessories, from wireless audio
                  solutions to protective gear, charging technology, and professional equipment for content creators.
                  Every product in our catalogue has been tested and selected for its quality, durability, and value.
                </p>
                <p>
                  At Snappify, we're more than just a tech accessories provider. We're a team of technology enthusiasts
                  who understand the importance of having reliable, high-quality accessories that enhance your digital
                  lifestyle. Whether you're a professional, student, gamer, or content creator, we have the perfect
                  accessories to complement your tech ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-background">✓</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quality First</h3>
                  <p className="text-muted-foreground">
                    Every product is carefully selected and tested to meet our high standards
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-background">★</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
                  <p className="text-muted-foreground">
                    Your satisfaction and experience are at the heart of everything we do
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-background">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We stay ahead of trends to bring you the latest tech accessories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Visit Us</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-background" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Location</h3>
                      <p className="text-muted-foreground">
                        55 Richards Drive
                        <br />
                        Halfway House
                        <br />
                        Midrand, 1685
                        <br />
                        South Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-background" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-background" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Phone</h3>
                      <p className="text-muted-foreground">+27 (0) 11 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-background" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@snappify.co.za
                        <br />
                        support@snappify.co.za
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
