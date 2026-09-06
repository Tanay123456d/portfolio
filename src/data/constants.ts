import { NavLink, SocialLink, Experience, Tool } from "@/types";

export const SITE_CONFIG = {
  name: "Ujjwal Tamrakar",
  shortName: "UJ",
  title: "Ujjwal Tamrakar — Graphic Designer",
  description:
    "Graphic designer focused on visual identity, branding, digital experiences, and art direction.",
  url: "https://ujjawaltamrakar.com",
  email: "hello@ujjawaltamrakar.com",
  phone: "",
  location: "India",
  education: "NIFT Bhopal",
  year: "2026",
  availability: "Available for select projects",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", url: "https://instagram.com/ujjawaltamrakar" },
  { label: "LinkedIn", url: "https://linkedin.com/in/ujjawaltamrakar" },
  { label: "Behance", url: "https://behance.net/ujjawaltamrakar" },
  { label: "Dribbble", url: "https://dribbble.com/ujjawaltamrakar" },
];

export const EXPERIENCE: Experience[] = [
  {
    period: "2022 — 2026",
    institution: "National Institute of Fashion Technology",
    title: "B.Des in Graphic Design",
    description:
      "Comprehensive study of visual communication, typography, branding, editorial design, and digital media. Engaged in extensive projects involving identity systems, poster design, packaging, and art direction.",
  },
  {
    period: "2025",
    institution: "Design Studio",
    title: "Graphic Design Intern",
    description:
      "Contributed to brand identity projects, social media campaigns, and editorial layouts. Collaborated with senior designers on client deliverables across multiple industries.",
  },
  {
    period: "2024",
    institution: "Freelance",
    title: "Visual Designer",
    description:
      "Independent design work for startups and cultural organizations. Focused on brand identity, poster design, and digital content creation.",
  },
];

export const TOOLS: Tool[] = [
  { name: "Adobe Photoshop", category: "Design" },
  { name: "Adobe Illustrator", category: "Design" },
  { name: "Adobe InDesign", category: "Layout" },
  { name: "Adobe After Effects", category: "Motion" },
  { name: "Adobe Premiere Pro", category: "Video" },
  { name: "Figma", category: "Design" },
  { name: "Canva", category: "Design" },
  { name: "Blender", category: "3D" },
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
