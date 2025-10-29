"use client"

import { Card } from "@/components/ui/card"
import { allProducts } from "@/lib/products"
import Link from "next/link"

export function ProductGrid() {
  return (
    <section id="products" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Complete Catalogue</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our full collection of premium tech accessories available in stock
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="group overflow-hidden border-2 hover:border-foreground transition-all duration-300 hover:shadow-xl h-full cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-foreground text-background px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-foreground/80 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
