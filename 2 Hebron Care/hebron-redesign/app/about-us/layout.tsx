import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the family behind Hebron Care. Learn why we opened our home to provide personalized elder care, memory support, and daily living assistance in Everett, WA.",
  alternates: {
    canonical: "https://hebroncareafh2.com/about-us",
  },
  openGraph: {
    title: "About Us | Hebron Care Adult Family Home",
    description:
      "Meet the family behind Hebron Care. Learn why we opened our home to provide personalized elder care in Everett, WA.",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
