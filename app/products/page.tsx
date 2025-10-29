import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { allProducts } from "@/lib/products"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-6">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts.map((product) => (
            <article
              key={product.id}
              className="border rounded-lg overflow-hidden bg-card text-card-foreground shadow-sm"
            >
              <Link href={`/products/${product.id}`} className="group block">
                <div className="relative w-full h-56 bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-4">
                  <h2 className="text-lg font-medium">{product.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{product.description}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className={`text-sm ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                      {product.inStock ? "In stock" : "Out of stock"}
                    </span>
                    <span className="text-sm text-primary-foreground underline">View</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}