import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Work from "@/components/sections/Work";

export const metadata: Metadata = {
  title: "Work — Ujjwal Tamrakar",
  description:
    "Selected projects — branding, packaging, editorial design, illustration, and digital experiences by visual communication designer Ujjwal Tamrakar.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main>
        <Work />
      </main>
      <Footer />
    </>
  );
}
