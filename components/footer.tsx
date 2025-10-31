import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-8 w-8 rounded-lg bg-foreground flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-foreground to-foreground/80" />
                <span className="relative text-background font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Snappify</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Premium tech accessories for modern living</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  55 Richards Drive
                  <br />
                  Halfway House
                  <br />
                  Midrand, 1685
                  <br />
                  South Africa
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+27 665818875</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <span>support@snappify.co.za</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-foreground/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-foreground/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-foreground/80 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Browse</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Audio Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Chargers & Power
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Protection & Cases
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Product Enquiries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Visit Our Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Snappify. All rights reserved. Proudly South African.</p>
        </div>
      </div>
    </footer>
  )
}
