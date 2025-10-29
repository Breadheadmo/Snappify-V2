export interface Product {
  id: string
  name: string
  category: string
  image: string
  description: string
  features: string[]
  specifications: {
    label: string
    value: string
  }[]
  inStock: boolean
}

export const allProducts: Product[] = [
  {
    id: "Ultra-Pods-Max",
    name: "Ultra Pods Max Wireless 5.3",
    category: "Audio",
    image: "/wireless-earbuds-premium.jpg",
    description:
      "Premium sound quality with active noise cancellation. Experience crystal-clear audio with our advanced acoustic technology and comfortable ergonomic design for all-day wear.",
    features: [
      "Active Noise Cancellation (ANC)",
      "30-hour battery life with charging case",
      "IPX5 water resistance",
      "Touch controls",
      "Bluetooth 5.3 connectivity",
      "Premium sound drivers",
    ],
    specifications: [
      { label: "Battery Life", value: "6 hours (30 hours with case)" },
      { label: "Charging", value: "USB-C fast charging" },
      { label: "Bluetooth", value: "5.3" },
      { label: "Water Resistance", value: "IPX5" },
      { label: "Weight", value: "4.5g per earbud" },
    ],
    inStock: true,
  },
  {
    id: "USB-C-Power-Adapter-with-Type-C-to-Type-C-Cable",
    name: "USB-C Power Adapter",
    category: "Chargers",
    image: "/bluetooth-speaker-portable.jpg",
    description:
      "Stay powered anywhere with the PowerLink USB-C Adapter and Type-C Cable — fast, safe, and portable charging for all your devices.",
    features: [
      "25W Fast Charging support",
      "Type-C to Type-C connection",
      "Compact and travel friendly design",
      "Overcharge and short-circuit protection",
      "Compatible with smartphones, tablets, and laptops",
      "Durable cable with reinforced connectors",
    ],
    specifications: [
      { label: "Power Output", value: "25W max" },
      { label: "Cable Length", value: "1 Meter" },
      { label: "Input Voltage", value: "100–240V" },
      { label: "Output Voltage", value: "5V/3A, 9V/2.77A" },
      { label: "Connector Type", value: "Type-C to Type-C" },
    ],
    inStock: true,
  },
  {
    id: "premium-phone-case",
    name: "Premium Phone Case",
    category: "Protection",
    image: "/premium-phone-case.jpg",
    description:
      "Military-grade drop protection with sleek design. Engineered with advanced shock-absorbing materials to protect your device from drops up to 3 meters.",
    features: [
      "Military-grade drop protection",
      "Raised edges for screen protection",
      "Wireless charging compatible",
      "Anti-slip grip texture",
      "Precise cutouts",
      "Slim profile design",
    ],
    specifications: [
      { label: "Drop Protection", value: "Up to 3 meters" },
      { label: "Material", value: "TPU + Polycarbonate" },
      { label: "Compatibility", value: "Multiple phone models" },
      { label: "Thickness", value: "2mm" },
      { label: "Weight", value: "35g" },
    ],
    inStock: true,
  },
  {
    id: "Volcano-bluetooth-speaker",
    name: "Volcano bluetooth-speaker",
    category: "Audio",
    image: "/volcano.jpg",
    description:
      "Portable speaker with 360° sound and waterproof design. Perfect for outdoor adventures with powerful bass and crystal-clear highs.",
    features: [
      "360° surround sound",
      "IPX7 waterproof rating",
      "12-hour battery life",
      "Built-in microphone",
      "TWS pairing capability",
      "Compact portable design",
    ],
    specifications: [
      { label: "Battery Life", value: "12 hours" },
      { label: "Water Resistance", value: "IPX7" },
      { label: "Bluetooth", value: "5.0" },
      { label: "Speaker Power", value: "10W" },
      { label: "Charging Time", value: "3 hours" },
    ],
    inStock: true,
  },
  {
    id: "tempered-glass-screen",
    name: "Tempered Glass Screen",
    category: "Protection",
    image: "/tempered-glass-screen.jpg",
    description:
      "9H hardness screen protector with oleophobic coating. Ultra-clear protection that maintains touch sensitivity and display clarity.",
    features: [
      "9H hardness rating",
      "Oleophobic coating",
      "Case-friendly design",
      "Bubble-free installation",
      "Ultra-clear transparency",
      "Scratch resistant",
    ],
    specifications: [
      { label: "Hardness", value: "9H" },
      { label: "Thickness", value: "0.33mm" },
      { label: "Transparency", value: "99.9%" },
      { label: "Touch Sensitivity", value: "100%" },
      { label: "Installation", value: "Bubble-free adhesive" },
    ],
    inStock: true,
  },
  {
    id: "I16-Max-V5.3-Wireless-Ear-Pods",
    name: "I16 Max V5.3 Wireless Ear Pods",
    category: "Audio",
    image: "/usbc-laptop-charger.jpg",
    description:
      "Enjoy crisp sound and deep bass with I16 Max V5.3 Wireless Ear Pods — stylish, durable, and perfect for music, calls, and workouts.",
    features: [
      "Bluetooth 5.3 for fast and stable connection",
      "Intelligent noise cancellation",
      "Up to 6 hours of playback on a single charge",
      "Sweat and water resistant",
      "Auto-pairing with last connected device",
    ],
    specifications: [
      { label: "Bluetooth Version", value: "100W max" },
      { label: "Battery Life", value: "6 hours (single charge), 25 hours with case" },
      { label: "Charging Time", value: "1.5 hours" },
      { label: "Range", value: "10 meters" },
      { label: "Case Battery", value: "520mAh" },
    ],
    inStock: true,
  },
  {
    id: "led-ring-light-18",
    name: 'LED Ring Light 18"',
    category: "Lighting",
    image: "/led-ring-light-professional.jpg",
    description:
      "Professional lighting for content creators. Adjustable color temperature and brightness for perfect lighting in any situation.",
    features: [
      "18-inch diameter",
      "Dimmable brightness (1-100%)",
      "Color temperature control (3000K-6500K)",
      "Phone holder included",
      "Adjustable tripod stand",
      "Remote control included",
    ],
    specifications: [
      { label: "Diameter", value: "18 inches (45cm)" },
      { label: "Power", value: "45W" },
      { label: "Color Temperature", value: "3000K-6500K" },
      { label: "Brightness", value: "1-100% dimmable" },
      { label: "Stand Height", value: "50-200cm adjustable" },
    ],
    inStock: true,
  },
  {
    id: "screen-protectors",
    name: "Screen Protectors",
    category: "Mobile Accessories",
    image: "/gaming-headset-black.jpg",
    description:
      "Protect your phone with SafeShield Screen Protectors — ultra-thin, durable, and crystal clear for smooth, scratch free use.",
    features: [
      "9H hardness for superior scratch resistance",
      "Anti-fingerprint and smudge-resistant coating",
      "High-definition transparency for clear viewing",
      "Easy bubble-free installationMemory foam ear cushions",
      "Edge-to-edge protection (depending on model)",
      "Compatible with most phone cases",
    ],
    specifications: [
      { label: "Material", value: "Tempered Glass" },
      { label: "Thickness", value: "0.33mm" },
      { label: "Surface Hardness", value: "9H" },
      { label: "Coating", value: "Oleophobic & hydrophobic" },
      { label: "Compatibility", value: "Available for most Android and iPhone models" },
    ],
    inStock: true,
  },
  {
    id: "Ibest-Ibee007-Wired-Headsets",
    name: "Ibest Ibee007 Wired Headsets",
    category: "Audio",
    image: "/wireless-charging-pad-minimal.jpg",
    description:
      "Enjoy rich, balanced sound with Ibest Ibee007 Wired Headsets — durable, comfortable, and perfect for music, calls, and media",
    features: [
      "High-quality stereo sound",
      "Built-in microphone for hands-free calls",
      "3.5mm universal audio jack",
      "Lightweight and tangle-free cable",
      "Comfortable in-ear design",
      "Plug and play — no setup required",
    ],
    specifications: [
      { label: "Connection Type", value: "15W" },
      { label: "Cable Length", value: "USB-C" },
      { label: "Driver Size", value: "Qi-enabled devices" },
      { label: "Frequency Response", value: "Up to 5mm" },
      { label: "Microphone", value: "10cm diameter" },
      { label: "Compatibility", value: "Smartphones, tablets, laptops, and PCs" },
    ],
    inStock: true,
  },
  {
    id: "phone-pouch-leather",
    name: "Phone Pouch Leather",
    category: "Accessories",
    image: "/leather-phone-pouch-black.jpg",
    description:
      "Premium leather pouch with card slots. Handcrafted from genuine leather with RFID protection for your cards.",
    features: [
      "Genuine leather construction",
      "RFID protection",
      "Multiple card slots",
      "Magnetic closure",
      "Belt loop attachment",
      "Soft microfiber lining",
    ],
    specifications: [
      { label: "Material", value: "Genuine Leather" },
      { label: "Card Slots", value: "3 slots" },
      { label: "RFID Protection", value: "Yes" },
      { label: "Closure", value: "Magnetic" },
      { label: "Dimensions", value: "17 x 9 x 2cm" },
    ],
    inStock: true,
  },
  {
    id: "usbc-hub-7in1",
    name: "USB-C Hub 7-in-1",
    category: "Connectivity",
    image: "/usb-hub-modern-aluminum.jpg",
    description:
      "Expand your connectivity with multiple ports. Aluminum construction with 4K HDMI output and fast data transfer speeds.",
    features: [
      "7 ports in one hub",
      "4K HDMI output @ 60Hz",
      "USB 3.0 high-speed ports",
      "SD/TF card readers",
      "100W Power Delivery pass-through",
      "Aluminum alloy construction",
    ],
    specifications: [
      { label: "Ports", value: "3x USB 3.0, 1x HDMI, 1x USB-C PD, 2x Card Reader" },
      { label: "HDMI Output", value: "4K @ 60Hz" },
      { label: "Data Transfer", value: "Up to 5Gbps" },
      { label: "Power Delivery", value: "100W pass-through" },
      { label: "Material", value: "Aluminum Alloy" },
    ],
    inStock: true,
  },
  {
    id: "cable-organizer-set",
    name: "Cable Organizer Set",
    category: "Accessories",
    image: "/cable-organizer-minimal.jpg",
    description:
      "Keep your cables neat and tangle-free. Premium silicone cable management solution for desk and travel.",
    features: [
      "10-piece organizer set",
      "Premium silicone material",
      "Multiple size options",
      "Adhesive backing included",
      "Reusable and washable",
      "Cable clips and wraps",
    ],
    specifications: [
      { label: "Pieces", value: "10-piece set" },
      { label: "Material", value: "Premium Silicone" },
      { label: "Sizes", value: "Small, Medium, Large" },
      { label: "Adhesive", value: "3M adhesive backing" },
      { label: "Colors", value: "Black" },
    ],
    inStock: true,
  },
  {
    id: "power-bank-20000mah",
    name: "Power Bank 20000mAh",
    category: "Chargers",
    image: "/power-bank-sleek-black.jpg",
    description:
      "High-capacity portable charger with fast charging. Charge multiple devices simultaneously with intelligent power distribution.",
    features: [
      "20000mAh capacity",
      "Dual USB output ports",
      "USB-C input/output",
      "LED battery indicator",
      "Fast charging support",
      "Multiple safety protections",
    ],
    specifications: [
      { label: "Capacity", value: "20000mAh" },
      { label: "Input", value: "USB-C 18W" },
      { label: "Output", value: "2x USB-A + 1x USB-C" },
      { label: "Max Output", value: "22.5W" },
      { label: "Recharge Time", value: "6-7 hours" },
    ],
    inStock: true,
  },
  {
    id: "laptop-stand-aluminum",
    name: "Laptop Stand Aluminum",
    category: "Accessories",
    image: "/laptop-stand-aluminum-minimal.jpg",
    description:
      "Ergonomic stand with adjustable height. Improve posture and cooling with this premium aluminum laptop stand.",
    features: [
      "Adjustable height (6 levels)",
      "Aluminum alloy construction",
      "Improved airflow cooling",
      "Non-slip silicone pads",
      "Cable management hole",
      "Supports up to 10kg",
    ],
    specifications: [
      { label: "Material", value: "Aluminum Alloy" },
      { label: "Height Adjustment", value: "6 levels (7-16cm)" },
      { label: "Weight Capacity", value: "Up to 10kg" },
      { label: "Compatibility", value: "10-17 inch laptops" },
      { label: "Dimensions", value: "26 x 23cm" },
    ],
    inStock: true,
  },
  {
    id: "N-P9 Max Wireless Earphones",
    name: "N-P9 Max Wireless Earphones",
    category: "Audio",
    image: "/4k-webcam-professional.jpg",
    description:
      "Enjoy crystal-clear sound with N-P9 Max Wireless Earphones — durable, comfortable, and built for music, workouts, and calls.",
    features: [
      "Bluetooth 5.0 for fast & stable connection",
      "Up to 6 hours of playtime per charge",
      "Comfortable in ear design",
      "Built-in microphone for clear calls",
    ],
    specifications: [
      { label: "Bluetooth Version", value: "5.0" },
      { label: "Battery Life", value: "6 hours (single charge)" },
      { label: "Charging Time", value: "1.5 hours" },
      { label: "Range", value: "10 m" },
      { label: "Driver Size", value: "10mm dynamic drivers" },
    ],
    inStock: true,
  },
  {
    id: "mechanical-keyboard",
    name: "Mechanical Keyboard",
    category: "Accessories",
    image: "/mechanical-keyboard-minimal-white.jpg",
    description:
      "Premium typing experience with tactile switches. Minimalist design with customizable RGB backlighting and durable construction.",
    features: [
      "Mechanical tactile switches",
      "RGB backlighting",
      "Aluminum frame",
      "Hot-swappable switches",
      "N-key rollover",
      "Detachable USB-C cable",
    ],
    specifications: [
      { label: "Switch Type", value: "Mechanical Tactile" },
      { label: "Layout", value: "Full-size (104 keys)" },
      { label: "Backlighting", value: "RGB customizable" },
      { label: "Connection", value: "USB-C (detachable)" },
      { label: "Material", value: "Aluminum + ABS" },
    ],
    inStock: true,
  },
]

// ...existing code...

export function slugify(str: string) {
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/["'“”‘’]/g, "") // remove quotes
    .replace(/\s+/g, "-") // spaces -> dashes
    .replace(/[^a-z0-9\-]/g, "-") // keep alphanum + dash
    .replace(/\-+/g, "-") // collapse multiple dashes
    .replace(/^\-+|\-+$/g, "") // trim leading/trailing dashes
}

function matchesProductId(product: Product, id: string) {
  const candidates = new Set<string>([
    product.id,
    product.name,
    slugify(product.id),
    slugify(product.name),
    encodeURIComponent(product.id),
    encodeURIComponent(product.name),
  ])
  return candidates.has(id)
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((product) => matchesProductId(product, id))
}

export function getRelatedProducts(currentProductId: string, category: string, limit = 4): Product[] {
  return allProducts
    .filter((product) => {
      // exclude current product by matching id/slug/name
      if (matchesProductId(product, currentProductId)) return false
      return product.category === category
    })
    .slice(0, limit)
}

// ...existing code...

export function getProductsByCategory(categorySlug: string): Product[] {
  // Map category slugs to product categories
  const categoryMap: Record<string, string[]> = {
    "bluetooth-speakers": ["Audio"],
    chargers: ["Chargers"],
    "phone-accessories": ["Protection", "Accessories"],
    audio: ["Audio"],
    "laptop-accessories": ["Accessories", "Connectivity"],
    "ring-lights": ["Lighting", "Video"],
  }

  const productCategories = categoryMap[categorySlug] || []

  return allProducts.filter((product) => productCategories.includes(product.category))
}

export function getAllProductCategories(): string[] {
  const categories = new Set(allProducts.map((product) => product.category))
  return Array.from(categories)
}
