import * as React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/variables";
import { Navigation } from "@/components/custom/navigation"; // Reusing the global navigation component

export function Footer() {
  return (
    <footer className="border-t bg-muted/20 py-8 mt-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
              reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with Next.js, Tailwind CSS, and shadcn/ui.
            </p>
          </div>
          <div className="flex space-x-6 items-center">
            <Navigation />
          </div>
        </div>
      </div>
    </footer>
  );
}