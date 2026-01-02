"use client";

import * as React from "react";
import { Input } from "@/components/ui/input"; // Assuming shadcn Input is available
import { Textarea } from "@/components/ui/textarea"; // Assuming shadcn Textarea is available
import { Button } from "@/components/ui/button"; // Assuming shadcn Button is available
import { Label } from "@/components/ui/label"; // Assuming shadcn Label is available
// Assuming useToast is configured
// import { useToast } from "@/hooks/use-toast"; 

export function ContactFormSection() {
  // const { toast } = useToast();

  // Simple form submit handler placeholder
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission logic
    console.log("Contact form submitted!");
    // toast({
    //   title: "Success!",
    //   description: "Your message has been sent.",
    // });
    alert("Form submitted! (Placeholder)");
  };

  return (
    <section className="container py-12">
      <div className="max-w-lg mx-auto p-8 border rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message..." rows={5} required />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};