"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { LogoLink } from "@/components/logo-link";
import { ModeToggle } from "@/components/mode-toggle";

export const MainNav = () => {
  const pathname = usePathname();
  return (
    <div className="hidden container md:flex h-14 max-w-screen-2xl items-center justify-between">
      <div className="mr-4 flex">
        <LogoLink />
        <nav className="flex items-center gap-6 text-sm font-light">
          <Link
            href="/#about"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/#about" ? "text-foreground" : "text-foreground/60"
            )}
          >
            About
          </Link>
          <Link
            href="/#experience"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/#experience" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Experience
          </Link>
          <Link
            href="/#projects"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/#projects" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/#skills" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Skills
          </Link>
          <Link
            href="/blogs"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname.startsWith("/blogs")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Blogs
          </Link>
          <Link
            href="/#connect"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/#connect" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Connect
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};
