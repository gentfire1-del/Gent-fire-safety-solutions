import { Service } from "@/types";

export const services: Service[] = [
  // {
  //   id: "design",
  //   title: "Design & Engineering",
  //   description: "Professional fire safety system design and engineering services tailored to your specific requirements",
  //   features: [
  //     "Fire safety system design",
  //     "Load calculations and simulations",
  //     "Compliance with local and international codes",
  //     "3D modeling and drawings",
  //     "Risk assessment and analysis"
  //   ]
  // },
  {
    id: "supply",
    title: "Supply & Procurement",
    description: "Reliable supply of high-quality fire safety equipment from Honeywell",
    features: [
      "Authorized distributor of Honeywell",
      "Genuine products with certifications",
      "Competitive pricing",
      "Timely delivery",
      "Bulk orders and custom solutions"
    ]
  },
  {
    id: "installation",
    title: "Installation & Commissioning",
    description: "Expert installation and commissioning services by certified professionals",
    features: [
      "Professional installation teams",
      "Quality workmanship guaranteed",
      "System testing and commissioning",
      "Compliance certification",
      "Minimal disruption to operations"
    ]
  },
  // {
  //   id: "turnkey",
  //   title: "Turnkey Projects",
  //   description: "Complete end-to-end fire safety solutions from concept to completion",
  //   features: [
  //     "Single point of contact",
  //     "Design, supply, and installation",
  //     "Project management",
  //     "Quality assurance",
  //     "On-time delivery"
  //   ]
  // },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description: "Comprehensive after-sale support and maintenance services to ensure system reliability",
    features: [
      "Preventive maintenance programs",
      "24/7 emergency support",
      "System upgrades and retrofits",
      "Spare parts availability",
      "Annual maintenance contracts"
    ]
  }
];

export function getAllServices(): Service[] {
  return services;
}

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}
