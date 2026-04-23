import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Schedule a Tour",
  description:
    "Schedule a tour of Hebron Care Adult Family Home. Call (425) 374-7954 or fill out our contact form. Located at 2421 81st Pl SE, Everett, WA 98203.",
  alternates: {
    canonical: "https://hebroncareafh2.com/contact",
  },
  openGraph: {
    title: "Contact Us | Hebron Care Adult Family Home",
    description:
      "Schedule a tour of Hebron Care Adult Family Home in Everett, WA. Call (425) 374-7954 or send us a message.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
