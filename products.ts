import { ProductCategory, Product } from "@/types";

export const productCategories: ProductCategory[] = [
  {
    id: "addressable-control-panels",
    name: "Addressable Control Panels",
    slug: "addressable-control-panels",
    description: "Advanced addressable fire alarm control panels from Honeywell Gent with intelligent detection and monitoring capabilities",
    products: [
      // Panels
      {
        id: "s-24",
        name: "Nano single Panel",
        description: "Nano single loop addressable control panel for small installations",
        category: "addressable-single-control-panels",
        subcategory: "Panels",
        image: "/images/products/addressable/s-24 nano.jpg",
        features: [
          "Nano Form Factor",
          "Model: nano-24",
          "Ideal for Small Sites",
          "Easy Installation",
          "Cost-Effective",
          "Honeywell Gent Quality"
        ]
      },
      {
        id: "compact-plus-loop panel",
        name: "Compact Plus 2 loop Control Panel",
        description: "Compact Plus addressable fire alarm control panel for small to medium installations",
        category: "addressable-control-panels",
        subcategory: "Panels",
        image: "/images/products/addressable/compact-plus.jpg",
        features: [
          "Addressable Technology",
          "Model: Compact Plus",
          "Scalable System",
          "Cost-Effective Solution",
          "Honeywell Gent Quality"
        ]
      },
      {
        id: "vigilon-plus-24",
        name: "Vigilon Plus 4 Loop Control Panel",
        description: "High-capacity addressable fire alarm control panel with 4 loop  by Honeywell Gent",
        category: "addressable-control-panels",
        subcategory: "Panels",
        image: "/images/products/addressable/vigplus-24.jpg",
        features: [
          "4 Loop Addressable System",
          "Model: vigplus-24",
          "Maximum Coverage Capability",
          "Highly Scalable Architecture",
          "Network Ready",
          "Honeywell Gent Premium Solution"
        ]
      },
      {
        id: "vigilon-plus-72",
        name: "Vigilon Plus 6 Loop Control Panel",
        description: "6 loop capacity fire alarm panel by Honeywell Gent",
        category: "addressable-control-panels",
        subcategory: "Panels",
        image: "/images/products/addressable/vigplus-72.jpg",
        features: [
          "6 Loop Addressable System",
          "Model: vigplus-72",
          "Enterprise-Level Coverage",
          "Maximum Scalability",
          "Network Ready",
          "Honeywell Gent Premium Solution"
        ]
      },

      // Smoke Detector
      {
        id: "gent-s4-715",
        name: "Smoke Detector",
        description: "Addressable smoke detector with advanced features",
        category: "addressable-control-panels",
        subcategory: "Smoke Detector",
        image: "/images/products/addressable/Gent-S4-715.jpg",
        features: [
          "Addressable System",
          "Model: S4-715",
          "Advanced Detection",
          "Reliable Performance",
          "Easy Maintenance",
          "Honeywell Gent Innovation"
        ]
      },

      // Heat Detector
      {
        id: "s4-720-heat-detector",
        name: "Heat Detector",
        description: "Addressable heat detector for high-temperature environments",
        category: "addressable-control-panels",
        subcategory: "Heat Detector",
        image: "/images/products/addressable/S4-720 heat addressable.jpg",
        features: [
          "Heat Detection Technology",
          "Model: S4-720",
          "High Temperature Rating",
          "Reliable Performance",
          "Easy Installation",
          "Honeywell Gent Design"
        ]
      },

      // Multi Detector
      {
        id: "s4-710-multi-detector",
        name: "Multi Detector",
        description: "Addressable multi (Smoke and Heat) detector with advanced detection algorithms",
        category: "addressable-control-panels",
        subcategory: "Multi Detector",
        image: "/images/products/addressable/S4-710 multi detector.jpg",
        features: [
          "Multi-Sensor Technology",
          "Model: S4-710",
          "Advanced Algorithms",
          "False Alarm Reduction",
          "Easy Installation",
          "Honeywell Gent Quality"
        ]
      },

      // Resettable Manual Call Point
      {
        id: "s4-34805-addressable",
        name: "Resettable Manual Call Point",
        description: "Addressable resettable manual call point for fire alarm activation",
        category: "addressable-control-panels",
        subcategory: "Resettable Manual Call Point",
        image: "/images/products/addressable/S4-34805 (addressable).jpg",
        features: [
          "Resettable Design",
          "Model: S4-34805",
          "Addressable System",
          "Easy Configuration",
          "Reliable Operation",
          "Honeywell Gent Solution"
        ]
      },

      // Sounder
      {
        id: "s3-s-sounder-addressable",
        name: "Addressable Sounder",
        description: "Addressable sounder for fire alarm",
        category: "addressable-control-panels",
        subcategory: "Sounder",
        image: "/images/products/addressable/S3-S- Sounder addressable.jpg",
        features: [
          "Addressable Sounder",
          "Model: S3-SR",
          "Easy Installation",
          "System Integration",
          "Honeywell Gent Quality"
        ]
      },

      // Sounder Flasher
      {
        id: "sounder-flasher-addressable",
        name: "Sounder Flasher",
        description: "Addressable sounder with visual flasher for fire alarm notification",
        category: "addressable-control-panels",
        subcategory: "Sounder Flasher",
        image: "/images/products/addressable/Sounder flasher.jpg",
        features: [
          "Addressable System",
          "Model: S3-S-VAD-HPR-R ",
          "Sounder & Flasher Combined",
          "Easy Installation",
          "Honeywell Gent Design"
        ]
      },

      // Base
      {
        id: "s4-700-base",
        name: "Detector Base",
        description: "Detector base for smoke and heat detectors",
        category: "addressable-control-panels",
        subcategory: "Base",
        image: "/images/products/addressable/S4-700-base.jpg",
        features: [
          "Universal Compatibility",
          "MOdel: S4-700",
          "Twist-Lock Mechanism",
          "Quick Installation",
          "Secure Mounting",
          "Honeywell Gent Standard"
        ]
      },
     
      // Module
      
      {
        id: "s4-34410",
        name: "Interface module",
        description: "Addressable input interface module single channel",
        category: "addressable-control-panels",
        subcategory: "Module",
        image: "/images/products/addressable/S4-34410.jpg",
        features: [
          "Single Channel",
          "MOdel: S4-34410",
          "Easy Installation",
          "Honeywell Gent"
        ]
      },
      {
        id: "s4-34420",
        name: "Interface module",
        description: "Addressable input or output interface module ",
        category: "addressable-control-panels",
        subcategory: "Module",
        image: "/images/products/addressable/S4-34420.jpg",
        features: [
          "Input or Output interface module",
          "MOdel: s4-34420",
          "High Performance",
          "Honeywell Gent"
        ]
      },
      {
        id: "s4-34450",
        name: "Interface module",
        description: "Addressable 4-channel interface module",
        category: "addressable-control-panels",
        subcategory: "Module",
        image: "/images/products/addressable/S4-34450.jpg",
        features: [
          "4-channel interface module",
          "Model: s4-34450",
          "Reliable Performance",
          "Easy Installation",
          "Honeywell Gent"
        ]
      },


      // Beam Detector
      {
        id: "gent-dual-beam-detector",
        name: "Beam Sensor",
        description: "beam Sensor detector for large area coverage and high ceilings",
        category: "addressable-control-panels",
        subcategory: "Beam Detector",
        image: "/images/products/addressable/Gent-Dual-Beam-Detectors.jpg",
        features: [
          "model: s4-34440",
          "Beam Transmitter and receiver",
          "Loop Powered (16 per loop)",
          "Led array to assist alignment",
          "Loop Powered (16 per loop)",
          "100m beam transmission"
        ]
      },

      // Cards
      {
        id: "compact-lcp-en",
        name: "Compact loop card",
        description: "Compact loop card addressable control card with enhanced loop capabilities",
        category: "addressable-control-panels",
        subcategory: "Cards",
        image: "/images/products/addressable/Compact-LCP-EN.jpg",
        features: [
          "Model: Compact-lpc-en",
          "Addressable System",
          "Easy Configuration",
          "Honeywell Gent"
        ]
      },
      {
        id: "compact-nc",
        name: "Compact loop card",
        description: "Compact-nC network card for addressable fire alarm systems",
        category: "addressable-control-panels",
        subcategory: "Cards",
        image: "/images/products/addressable/Compact-Nc.jpg",
        features: [
          "Network Card",
          "Model: Compact-nC",
          "Easy Integration",
          "Honeywell Gent"
        ]
      },
      {
        id: "vigilon-lpc-en",
        name: "Vigilon loop card",
        description: "Vigilon loop card",
        category: "addressable-control-panels",
        subcategory: "Cards",
        image: "/images/products/addressable/VIG-LPC-EN.jpg",
        features: [
          "Enhanced Networking",
          "Model: vig-LPC-EN",
          "Addressable System",
          "Honeywell Gent"
        ]
      },
      {
        id: "vigilon-nc",
        name: "Vigilon loop card",
        description: "Vigilon Network card comapatible with addressable fire alarm system",
        category: "addressable-control-panels",
        subcategory: "Cards",
        image: "/images/products/addressable/VIG-NC.jpg",
        features: [
          "Network Card",
          "Model: vig-nc",
          "Advanced Management",
          "Honeywell Gent"
        ]
      }
    ]
  },
  {
    id: "conventional-control-panels",
    name: "Conventional Control Panels",
    slug: "conventional-control-panels",
    description: "Reliable conventional fire alarm control panels and devices from Honeywell Gent for cost-effective fire safety solutions",
    products: [
      // Panels
      {
        id: "2-loop-panel",
        name: "2 Zone Conventional Panel",
        description: "2 zone conventional fire alarm control panel by Honeywell Gent for small installations",
        category: "conventional-control-panels",
        subcategory: "Panels",
        image: "/images/products/Conventional/2-loop-panel.jpeg",
        features: [
          "2 zone Configuration",
          "Model: 13270/02lb",
          "Easy Installation",
          "Reliable Performance",
          "Honeywell Gent"
        ]
      },
      {
        id: "4-loop-panel",
        name: "4 Zone Conventional Panel",
        description: "4 zone conventional fire alarm control panel by Honeywell Gent for medium installations",
        category: "conventional-control-panels",
        subcategory: "Panels",
        image: "/images/products/Conventional/4-loop-panel.jpeg",
        features: [
          "4 zone panel",
          "Model: 13270/04lb",
          "Reliable Operation",
          "Honeywell Gent Technology"
        ]
      },
      {
        id: "8-zone-conventional-panel",
        name: "8 Zone Conventional Panel",
        description: "8 Zone conventional fire alarm control panel by Honeywell Gent",
        category: "conventional-control-panels",
        subcategory: "Panels",
        image: "/images/products/Conventional/8-Zone-conventional-panel.jpg",
        features: [
          "8 Zone panel",
          "Model: 13270/08lb",
          "Conventional System",
          "Zone Status Indicators",
          "Easy Monitoring",
          "Honeywell Gent Quality"
        ]
      },
      {
        id: "8-zone-repeater-panel",
        name: "8 Zone Conventional Repeater Panel",
        description: "8 Zone conventional repeater panel for remote monitoring and control",
        category: "conventional-control-panels",
        subcategory: "Panels",
        image: "/images/products/Conventional/8-Zone-conventional-repter-panel.jpg",
        features: [
          "8 Zone Repeater panel",
          "Model: 13271/08lb",
          "Conventional System",
          "Status Display",
          "Easy Installation",
          "Honeywell Gent Solution"
        ]
      },

      // Smoke Detector
      {
        id: "smoke-detector-800371",
        name: "Es Smoke Detector",
        description: "conventional smoke detector for reliable smoke detection",
        category: "conventional-control-panels",
        subcategory: "Smoke Detector",
        image: "/images/products/Conventional/smoke-800371.jpg",
        features: [
          "Smoke Detection",
          "Model 800371",
          "Conventional System",
          "High Sensitivity",
          "Easy Installation",
          "Honeywell Gent Technology"
        ]
      },

      // Heat Detector
      {
        id: "heat-detector-800271",
        name: "Es Heat Detector",
        description: "conventional heat detector for high-temperature fire detection",
        category: "conventional-control-panels",
        subcategory: "Heat Detector",
        image: "/images/products/Conventional/heat-800271.jpg",
        features: [
          "Heat Detection",
          "Model 800271",
          "Conventional System",
          "High Temperature Rating",
          "Reliable Performance",
          "Honeywell Gent Quality"
        ]
      },

      // Resettable Manual Call Point
      {
        id: "xens-805-manual-call-point",
        name: "Resettable Manual Call Point",
        description: "Resettable manual call point for manual fire alarm activation",
        category: "conventional-control-panels",
        subcategory: "Resettable Manual Call Point",
        image: "/images/products/Conventional/Xens805Resettable-Manual-Call-Point.jpg",
        features: [
          "Resettable Design",
          "Model: xens-805",
          "Break Glass Type",
          "Easy Reset",
          "Durable Construction",
          "Honeywell Gent Quality"
        ]
      },

      // Sounder
      {
        id: "cwso-rr-s1-sounder",
        name: "Sounder",
        description: "Conventional wall sounder by Honeywell Gent",
        category: "conventional-control-panels",
        subcategory: "Sounder",
        image: "/images/products/Conventional/CWSO-RR-S1-sounder.jpg",
        features: [
          "Conventional Sounder",
          "Model: CWSO-RR-S1",
          "High Volume Output",
          "Wall Mounted",
          "Durable Construction",
          "Honeywell Gent Quality"
        ]
      },

      // Sounder Flasher
      {
        id: "cwss-rb-s7-sounder-flasher",
        name: "Sounder Flasher",
        description: "conventional sounder with flasher for audio-visual alarm",
        category: "conventional-control-panels",
        subcategory: "Sounder Flasher",
        image: "/images/products/Conventional/CWSS-RB-S7-sound-flashert.jpg",
        features: [
          "Sounder with Flasher",
          "Model CWSS-RB-S7",
          "Audio & Visual Alarm",
          "Conventional System",
          "High Intensity LED",
          "Honeywell Gent Design"
        ]
      },

      // Base
      
      {
        id: "s4-700-base-conventional",
        name: "Detector Base",
        description: "Detector base for smoke and heat detectors",
        category: "conventional-control-panels",
        subcategory: "Base",
        image: "/images/products/Conventional/S4-700-base.jpg",
        features: [
          "Universal Compatibility",
          "Model: s4-700",
          "Quick Installation",
          "Secure Mounting",
          "Easy Maintenance",
          "Honeywell Gent",
        ]
      },
      {
        id: "conventional-805590",
        name: "Smoke detector base",
        description: "Smoke Detector Base for fire alarm system",
        category: "conventional-control-panels",
        subcategory: "Base",
        image: "/images/products/Conventional/805590.jpg",
        features: [
          "Smoke detector base",
          "Model: 805590",
          "Easy Installation",
          "Reliable Performance",
          "Flexible Configuration",
          "Honeywell Gent",
        ]
      },
    ]
  }
]
export function getProductCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find(cat => cat.slug === slug);
}

export function getAllProductCategories(): ProductCategory[] {
  return productCategories;
}

export function getProductById(categorySlug: string, productId: string): Product | undefined {
  const category = getProductCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return category.products.find(p => p.id === productId);
}
