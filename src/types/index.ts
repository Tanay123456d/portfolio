export interface Project {
  title: string;
  slug: string;
  year: string;
  category: ProjectCategory;
  role: string;
  client: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  heroImage: string;
  gallery: GalleryImage[];
  services: string[];
  behanceUrl?: string;
  overview: string;
  concept: string;
  process: ProcessStep[];
  result: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  aspectRatio: "4:5" | "3:2" | "16:9" | "1:1" | "9:16";
  fullWidth?: boolean;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export type ProjectCategory =
  | "All"
  | "Branding"
  | "Visual Identity"
  | "Poster"
  | "Digital"
  | "Social Media"
  | "Packaging"
  | "Art Direction"
  | "Experimental";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

export interface Experience {
  period: string;
  institution: string;
  title: string;
  description: string;
}

export interface Tool {
  name: string;
  category: string;
}
