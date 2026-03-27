"use client";

import { Suspense } from "react";
import ContactPageContent from "./Contactpage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading contact form...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
