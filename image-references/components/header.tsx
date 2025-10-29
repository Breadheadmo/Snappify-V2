"use client"

import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-lg bg-foreground flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground to-foreground/80" />
              <span className="relative text-background font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">Snappify</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-sm font-medium hover:text-foreground/80 transition-colors">
              Products
            </Link>
            <Link href="/#categories" className="text-sm font-medium hover:text-foreground/80 transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-foreground/80 transition-colors">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <Link href="/products" className="text-sm font-medium">
              Products
            </Link>
            <Link href="/#categories" className="text-sm font-medium">
              Categories
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
