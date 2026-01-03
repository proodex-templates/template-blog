import * as React from "react";
import { SITE_CONFIG } from "@/config/variables";

export function HeroSection() {
  return (
    <section className="container py-16 bg-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Our Blog Posts
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Dive into our collection of articles about React, Next.js, and modern web development.
        </p>
      </div>
    </section>
  );
}