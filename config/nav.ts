import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface ComponentConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const navConfig: ComponentConfig = {
  mainNav: [
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Experience",
      href: "/#experience",
    },
    {
      title: "Projects",
      href: "/#projects",
    },
    {
      title: "Skills",
      href: "/#skills",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "Connect",
      href: "/#connect",
    },
  ],
  sidebarNav: [
    {
      title: "Components",
      href: "/components",
      items: [],
    },
    {
      title: "Shadcn",
      href: "/components/shadcn",
      items: [],
    },
    {
      title: "Tailwindcss",
      href: "/components/tailwindcss",
      items: [],
    },
  ],
};
