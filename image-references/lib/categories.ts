export interface Category {
  slug: string
  name: string
  description: string
  icon: string
}

export const categories: Category[] = [
  {
    slug: "bluetooth-speakers",
    name: "Bluetooth Speakers",
    description:
      "Portable and powerful speakers for music on the go. Experience premium sound quality with wireless convenience.",
  },
  {
    slug: "chargers",
    name: "Chargers",
    description:
      "Fast and reliable charging solutions for all your devices. From wall chargers to wireless pads and power banks.",
  },
  {
    slug: "phone-accessories",
    name: "Phone Accessories",
    description: "Essential accessories to protect and enhance your smartphone experience. Cases, pouches, and more.",
  },
  {
    slug: "audio",
    name: "Audio",
    description:
      "Premium audio equipment for music lovers and gamers. Earbuds, headphones, and headsets with superior sound.",
  },
  {
    slug: "laptop-accessories",
    name: "Laptop Accessories",
    description: "Enhance your productivity with laptop stands, hubs, keyboards, and charging solutions.",
  },
  {
    slug: "ring-lights",
    name: "Ring Lights",
    description: "Professional lighting solutions for content creators, photographers, and video calls.",
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug)
}
