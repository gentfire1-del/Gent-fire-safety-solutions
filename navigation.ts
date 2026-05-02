import { NavItem } from "@/types";
import { productCategories } from "./products";

export const mainNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About Us",
    href: "/about"
  },
  {
    label: "Products",
    href: "#",
    children: productCategories.map(cat => ({
      label: cat.name,
      href: `/products/${cat.slug}`
    }))
  },
  {
    label: "Services",
    href: "/services"
  },
  {
    label: "Contact Us",
    href: "/contact"
  }
];

export function getMainNavigation(): NavItem[] {
  return mainNavigation;
}
