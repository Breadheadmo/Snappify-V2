"use client"

import { useState, useRef, type MouseEvent } from "react"

interface ProductMagnifierProps {
  src: string
  alt: string
  inStock?: boolean
}

export function ProductMagnifier({ src, alt, inStock }: ProductMagnifierProps) {
  const [showMagnifier, setShowMagnifier] = useState(false)
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const imgRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return

    const rect = imgRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate magnifier position (centered on cursor)
    setMagnifierPosition({
      x: x - 100, // Half of magnifier width
      y: y - 100, // Half of magnifier height
    })

    // Calculate the position for the zoomed image
    const xPercent = (x / rect.width) * 100
    const yPercent = (y / rect.height) * 100

    setCursorPosition({
      x: xPercent,
      y: yPercent,
    })
  }

  return (
    <div className="relative">
      <div
        ref={imgRef}
        className="relative overflow-hidden rounded-2xl border-2 border-border bg-secondary/30 cursor-crosshair"
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={handleMouseMove}
      >
        <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-[600px] object-cover" />
        {inStock && (
          <div className="absolute top-6 right-6 bg-foreground text-background px-4 py-2 rounded-full text-sm font-semibold">
            In Stock
          </div>
        )}

        {/* Magnifier Glass */}
        {showMagnifier && (
          <div
            className="absolute pointer-events-none border-4 border-foreground rounded-full overflow-hidden shadow-2xl z-50"
            style={{
              width: "200px",
              height: "200px",
              left: `${magnifierPosition.x}px`,
              top: `${magnifierPosition.y}px`,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${src || "/placeholder.svg"})`,
                backgroundSize: "300%",
                backgroundPosition: `${cursorPosition.x}% ${cursorPosition.y}%`,
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        )}
      </div>

      {/* Magnifier Instructions */}
      <p className="text-sm text-muted-foreground text-center mt-4">Hover over the image to zoom in</p>
    </div>
  )
}
