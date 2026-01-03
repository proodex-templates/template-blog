import * as React from "react";

export function AboutHeroSection() {
  return (
    <section className="container py-16 bg-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Our Simple Blog</h1>
        <p className="text-lg text-muted-foreground mb-4">
          We are a team of developers passionate about sharing knowledge and insights
          on the latest trends in **web development**, focusing on React, Next.js, and
          modern design principles like Tailwind CSS and shadcn/ui.
        </p>
      </div>
    </section>
  );
};