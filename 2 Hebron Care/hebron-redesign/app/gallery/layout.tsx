import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a visual tour of Hebron Care Adult Family Home. See our living spaces, dining areas, gardens, and community spaces in Everett, WA.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
