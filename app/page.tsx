import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { ProductGallery } from "@/components/product-gallery"
import { ProductGrid } from "@/components/product-grid"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <ProductGallery />
      <ProductGrid />
      <Features />
      <Footer />
    </main>
  )
}
