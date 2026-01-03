import * as React from "react";
import { Separator } from "@/components/ui/separator";

export function MissionSection() {
  return (
    <section className="container py-12">
      <div className="max-w-4xl mx-auto">
        <Separator className="mb-8" />
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Educate</h3>
            <p className="text-muted-foreground text-sm">Provide high-quality, actionable content for developers of all levels.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Inspire</h3>
            <p className="text-muted-foreground text-sm">Showcase modern best practices and innovative project structures.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Connect</h3>
            <p className="text-muted-foreground text-sm">Build a community around modern Next.js and Tailwind development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};