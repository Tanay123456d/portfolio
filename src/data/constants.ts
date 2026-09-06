import { NavLink, SocialLink, Experience, Tool } from "@/types";

export const SITE_CONFIG = {
  name: "Ujjwal Tamrakar",
  shortName: "UJ",
  title: "Ujjwal Tamrakar — Visual Communication Designer",
  description:
    "Visual communication designer focused on branding, packaging, editorial design, illustration, and digital experiences.",
  url: "https://ujjawaltamrakar.com",
  email: "hello@ujjawaltamrakar.com",
  phone: "",
  location: "India",
  education: "NIFT Bhopal",
  year: "2026",
  availability: "Available for Freelance & Fulltime",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", url: "https://www.instagram.com/ujjwal__tamrakar/" },
  { label: "Behance", url: "https://www.behance.net/ujjawaltamrakar" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/ujjwal-tamrakar-158213250" },
];

export const EXPERIENCE: Experience[] = [
  {
    period: "2024 — Present",
    institution: "somersault — Gurgaon, India",
    title: "Junior Graphic Designer",
    description:
      "Working across brand identity, packaging, and campaign graphics for client deliverables — refining the full design process from concept to final production artwork.",
  },
  {
    period: "2022 — 2023",
    institution: "The Gourmet By Renukka — India",
    title: "Graphic Designer & Social Media Content Creator",
    description:
      "Owned brand graphics and social content across the brand's channels — turning the brand's identity into scroll-stopping visual storytelling.",
  },
  {
    period: "2021 — 2022",
    institution: "04 Clothing — Indore, India",
    title: "Illustration Designer",
    description:
      "Created apparel graphics and illustrations for the clothing brand, translating trends into wearable, production-ready artwork.",
  },
];

export const TOOLS: Tool[] = [
  { name: "Adobe Photoshop", category: "Design" },
  { name: "Adobe Illustrator", category: "Design" },
  { name: "Adobe InDesign", category: "Layout" },
  { name: "Figma", category: "Design" },
  { name: "Canva", category: "Design" },
];

export const CAPABILITIES = [
  { number: "01", title: "Brand Identity", description: "Creating distinctive visual identities that communicate brand essence and build lasting recognition." },
  { number: "02", title: "Art Direction", description: "Guiding the visual narrative of projects from concept to execution across all media." },
  { number: "03", title: "Visual Communication", description: "Translating complex ideas into clear, compelling visual languages." },
  { number: "04", title: "Editorial Design", description: "Crafting typographic layouts for print and digital publications." },
  { number: "05", title: "Digital Design", description: "Designing interfaces and digital experiences with purpose and clarity." },
  { number: "06", title: "Social Media Design", description: "Creating scroll-stopping content systems for social platforms." },
  { number: "07", title: "Packaging", description: "Designing tactile experiences that stand out on shelf and screen." },
  { number: "08", title: "Creative Direction", description: "Overseeing the visual and creative strategy for campaigns and projects." },
];
