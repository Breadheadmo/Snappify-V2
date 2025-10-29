"use client"

import { Headphones, Zap, Smartphone, Camera, Laptop, Speaker } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

const categories = [
  {
    slug: "bluetooth-speakers",
    icon: Speaker,
    name: "Bluetooth Speakers",
    count: "4 Products",
  },
  {
    slug: "chargers",
    icon: Zap,
    name: "Chargers",
    count: "4 Products",
  },
  {
    slug: "phone-accessories",
    icon: Smartphone,
    name: "Phone Accessories",
    count: "6 Products",
  },
  {
    slug: "audio",
    icon: Headphones,
    name: "Audio",
    count: "4 Products",
  },
  {
    slug: "laptop-accessories",
    icon: Laptop,
    name: "Laptop Accessories",
    count: "7 Products",
  },
  {
    slug: "ring-lights",
    icon: Camera,
    name: "Ring Lights",
    count: "2 Products",
  },
]

export function Categories() {
  return (
    <section id="categories" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our wide range of premium tech accessories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={index} href={`/categories/${category.slug}`}>
                <Card className="group p-8 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-foreground">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-lg bg-foreground text-background group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
