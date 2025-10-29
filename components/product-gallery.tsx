"use client"

import { ReactLenis } from "lenis/react"
import { allProducts } from "@/lib/products"
import Link from "next/link"

export function ProductGallery() {
  const column1 = allProducts.slice(0, 5)
  const column2 = allProducts.slice(5, 8)
  const column3 = allProducts.slice(8, 12)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scroll through our carefully curated selection
          </p>
        </div>
      </div>

      <ReactLenis root>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4">
          {/* Column 1 - Scrolling */}
          <div className="md:col-span-4 grid gap-4">
            {column1.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-foreground transition-all duration-300 shimmer cursor-pointer">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm font-medium mb-1">{product.category}</p>
                      <h3 className="text-xl font-bold">{product.name}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Column 2 - Sticky */}
          <div className="md:col-span-4 sticky top-0 h-screen grid grid-rows-3 gap-4">
            {column2.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-foreground transition-all duration-300 cursor-pointer h-full">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm font-medium mb-1">{product.category}</p>
                      <h3 className="text-xl font-bold">{product.name}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Column 3 - Scrolling */}
          <div className="md:col-span-4 grid gap-4">
            {column3.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-foreground transition-all duration-300 shimmer cursor-pointer">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm font-medium mb-1">{product.category}</p>
                      <h3 className="text-xl font-bold">{product.name}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ReactLenis>
    </section>
  )
}
