import * as React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/variables";
import { Navigation } from "@/components/custom/navigation";
import { ThemeToggle } from "@/components/custom/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 max-w-7xl mx-auto px-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-lg">
              {SITE_CONFIG.name}
            </span>
          </Link>
        </div>
        <div className="flex-1" /> {/* Spacer */}
        <div className="flex items-center space-x-4">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}