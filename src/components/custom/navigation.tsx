"use client";

import * as React from "react";
import { LinkWrapper } from "@/components/ui/link-wrapper";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/config/variables";

// Define the links for the navigation
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * Navigation component used in the header.
 * This is a global component defined in components/custom.
 */
export function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <p>Testing this one</p>
      <ul className="flex space-x-4 md:space-x-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <LinkWrapper
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground"
              )}
            >
              <p>{link.label}</p>
            </LinkWrapper>
          </li>
        ))}
      </ul>
    </nav>
  );
}