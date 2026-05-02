import { Brand } from "@/types";

export const brands: Brand[] = [
  {
    id: "honeywell",
    name: "Honeywell",
    logo: "/images/brands/honeywell.png",
    website: "https://www.honeywell.com"
  }
];

export function getAllBrands(): Brand[] {
  return brands;
}

export function getBrandById(id: string): Brand | undefined {
  return brands.find(brand => brand.id === id);
}
