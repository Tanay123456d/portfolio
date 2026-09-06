import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ujjwal Tamrakar — Graphic Designer",
    short_name: "UJ",
    description:
      "Graphic designer focused on visual identity, branding, digital experiences, and art direction.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F0EB",
    theme_color: "#0A0A0A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}