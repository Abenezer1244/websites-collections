export const SITE = {
  name: "Skagit River",
  legalName: "Skagit River Adult Family Home LLC",
  tagline: "Where your loved ones feel at home",
  description:
    "Skagit River Adult Family Home in Mount Vernon, WA provides compassionate, residential senior care with 24/7 support, high staff ratios, and a warm, home-like environment.",
  url: "https://3hebroncareafh.site",
  phone: "(360) 723-2907",
  phoneHref: "tel:+13607232907",
  homePhone: "(360) 982-2076",
  fax: "(360) 755-6066",
  email: "skagitriverafhllc2025@gmail.com",
  address: {
    street: "2120 Forest Dr",
    city: "Mount Vernon",
    state: "WA",
    zip: "98273",
    full: "2120 Forest Dr, Mount Vernon, WA 98273",
  },
  license: "758550",
  mapsUrl:
    "https://www.google.com/maps/dir//2120+Forest+Dr,+Mount+Vernon,+WA+98273",
  mapsEmbed:
    "https://www.google.com/maps?q=2120+Forest+Dr,+Mount+Vernon,+WA+98273&output=embed",
  logo: "/images/logo.svg",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;
