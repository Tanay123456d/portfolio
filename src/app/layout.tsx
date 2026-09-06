import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { CursorProvider } from "@/components/ui/Cursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ujjawaltamrakar.com"),
  title: "Ujjwal Tamrakar — Graphic Designer",
  description:
    "Graphic designer focused on visual identity, branding, digital experiences, and art direction. Based in India. NIFT Bhopal.",
  keywords: [
    "graphic designer",
    "visual identity",
    "branding",
    "art direction",
    "editorial design",
    "Ujjwal Tamrakar",
    "portfolio",
    "NIFT Bhopal",
  ],
  authors: [{ name: "Ujjwal Tamrakar" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Ujjwal Tamrakar",
    title: "Ujjwal Tamrakar — Graphic Designer",
    description:
      "Graphic designer focused on visual identity, branding, digital experiences, and art direction.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ujjwal Tamrakar — Graphic Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujjwal Tamrakar — Graphic Designer",
    description:
      "Graphic designer focused on visual identity, branding, digital experiences, and art direction.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ujjwal Tamrakar",
    jobTitle: "Graphic Designer",
    description:
      "Graphic designer focused on visual identity, branding, digital experiences, and art direction.",
    url: "https://ujjawaltamrakar.com",
    email: "mailto:hello@ujjawaltamrakar.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Graphic Design",
      "Visual Identity",
      "Art Direction",
      "Branding",
      "Digital Design",
      "Typography",
      "Campaign Design",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National Institute of Fashion Technology",
    },
    sameAs: [
      "https://instagram.com/ujjawaltamrakar",
      "https://linkedin.com/in/ujjawaltamrakar",
      "https://behance.net/ujjawaltamrakar",
      "https://dribbble.com/ujjawaltamrakar",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <CursorProvider>{children}</CursorProvider>
      </body>
    </html>
  );
}