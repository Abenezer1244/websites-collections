"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion";

const FAQ_ITEMS = [
  {
    q: "What levels of care do you provide?",
    a: "We provide comprehensive care ranging from minimal assistance with daily activities to more intensive support for mobility issues and age-related conditions. We conduct a thorough assessment before admission to ensure we can fully meet your loved one's needs.",
  },
  {
    q: "How many residents do you care for?",
    a: "As a licensed adult family home in Washington State, we care for a small number of residents. This allows us to maintain the high staff-to-resident ratio and personalized attention that sets us apart from larger facilities.",
  },
  {
    q: "Can we visit anytime?",
    a: "Family visits are always welcome during our visiting hours. We encourage regular visits as they are vital to our residents' well-being. We ask that you schedule tours in advance so we can give you our full attention.",
  },
  {
    q: "Do you accept long-term care insurance?",
    a: "Yes. We accept private pay (check, ACH, or other arrangements) and work with families who use long-term care insurance. We can provide documentation and assist with forms required by your LTC insurance provider.",
  },
  {
    q: "What happens if my loved one's needs change?",
    a: "Care plans are living documents. We review and update them regularly and whenever needs change, in partnership with families and physicians. If a higher level of care is needed, we coordinate closely with healthcare providers to adjust support.",
  },
  {
    q: "Is there always someone awake at the home?",
    a: "Yes. We maintain 24/7 awake staff coverage. There is always an alert, responsive caregiver available day and night for any need that arises.",
  },
];

export function HomeFAQ() {
  return (
    <FadeIn>
      <Accordion className="space-y-3">
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-warm-white rounded-xl px-6 border border-rock/5 data-[state=open]:ring-1 data-[state=open]:ring-rock/5"
          >
            <AccordionTrigger className="text-left font-normal text-lg tracking-tight py-5 hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-rock/70 font-light text-sm leading-relaxed pb-5 border-t border-rock/5 pt-4">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </FadeIn>
  );
}
