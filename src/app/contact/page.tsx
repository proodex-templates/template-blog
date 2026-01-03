import * as React from "react";
import { ContactHeaderSection } from "./sections/contact-header-section";
import { ContactFormSection } from "./sections/contact-form-section";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHeaderSection />
      <ContactFormSection />
    </div>
  );
}