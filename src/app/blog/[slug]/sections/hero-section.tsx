import * as React from "react";
import { Post } from "@/lib/utils";

interface HeroSectionProps {
  post: Post;
}

// In a simple blog, this might just be a banner, 
// but it's often more integrated into the ContentSection.
// I'll keep it minimal as requested, but ContentSection holds the primary data.
export function HeroSection({ post }: HeroSectionProps) {
  return (
    <section className="hidden">
      {/* Intentionally left hidden/minimal, as the main content is in ContentSection */}
    </section>
  );
}