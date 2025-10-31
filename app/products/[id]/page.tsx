import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getProductById, getRelatedProducts, allProducts } from "@/lib/products"
import { notFound } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"
import { ProductMagnifier } from "@/components/product-magnifier"

// Add this function to generate static paths for all products
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.id, product.category)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#products" className="hover:text-foreground transition-colors">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-24">
                <ProductMagnifier
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  inStock={product.inStock}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-4">
                  {product.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{product.name}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-background" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                <div className="border-2 border-border rounded-lg overflow-hidden">
                  {product.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-2 gap-4 p-4 ${index % 2 === 0 ? "bg-secondary/30" : ""}`}
                    >
                      <span className="font-semibold">{spec.label}</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

{/* Contact CTA */}
<div className="bg-secondary/30 border-2 border-border rounded-lg p-6">
  <h3 className="text-xl font-bold mb-2">Interested in this product?</h3>
  <p className="text-muted-foreground mb-4">Contact us for availability and pricing information</p>

  <div className="flex flex-col sm:flex-row gap-3">
    {/* Call button */}
    <a
      href="tel:+27111234567" // keep your tel:+... number
      className="flex-1 bg-foreground text-background text-center py-3 px-6 rounded-lg font-semibold hover:bg-foreground/90 transition-colors"
      aria-label="Call us"
    >
      Call Us
    </a>

{/* WhatsApp button */}
<a
  href={`https://wa.me/27665818875?text=${encodeURIComponent(`Hello, I'm interested in ${product.name}`)}`} // use digits only (country code + number)
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 flex items-center justify-center gap-3 py-3 px-6 rounded-lg font-semibold"
  style={{ background: "#25D366", color: "#fff" }}
  aria-label="Message us on WhatsApp"
>
  {/* WhatsApp SVG icon */}
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
    <path fill="#ffffff" d="M20.52 3.48A11.94 11.94 0 0 0 12 .5 11.9 11.9 0 0 0 .5 12c0 2.12.56 4.18 1.62 6.01L.5 23.5l5.65-1.47A11.9 11.9 0 0 0 12 23.5c6.62 0 12-5.38 12-11.99 0-3.21-1.25-6.22-3.48-8.03z"/>
    <path fill="#ffffff" d="M15.06 14.83c-.24-.12-1.42-.7-1.64-.78-.22-.07-.38.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.19-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.43.12-.15.16-.26.24-.43.08-.17.04-.32-.02-.45-.07-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42l-.46-.01c-.17 0-.45.06-.69.32-.24.26-.92.9-.92 2.2s.94 2.55 1.07 2.72c.12.17 1.86 2.94 4.51 4.12 3.15 1.37 3.15.91 3.72.86.57-.06 1.85-.75 2.11-1.47.26-.72.26-1.33.18-1.46-.07-.12-.25-.18-.49-.3z"/>
  </svg>

  <span className="font-semibold">WhatsApp</span>
</a>

    {/* Email button */}
    <a
      href="mailto:support@snappify.co.za"
      className="flex-1 border-2 border-foreground text-center py-3 px-6 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-colors"
      aria-label="Email us"
    >
      Email Us
        </a>
          </div>
        </div>
      </div>
      </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                    <Card className="group overflow-hidden border-2 hover:border-foreground transition-all duration-300 hover:shadow-xl h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-foreground text-background px-3 py-1 rounded-full text-xs font-semibold">
                          {relatedProduct.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-foreground/80 transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{relatedProduct.description}</p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
