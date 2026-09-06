import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ujjwal Tamrakar — Visual Communication Designer",
    short_name: "UJ",
    description:
      "Visual communication designer focused on branding, packaging, editorial design, illustration, and digital experiences.",
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