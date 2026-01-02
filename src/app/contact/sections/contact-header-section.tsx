import * as React from "react";

export function ContactHeaderSection() {
  return (
    <section className="container py-16 bg-muted/20 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-muted-foreground">
          Have a question, feedback, or want to discuss a collaboration? Use the form below or reach out to us directly.
        </p>
      </div>
    </section>
  );
}