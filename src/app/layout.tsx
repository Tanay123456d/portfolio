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
  title: "Ujjwal Tamrakar — Visual Communication Designer",
  description:
    "Visual communication designer focused on branding, packaging, editorial design, illustration, and digital experiences. Based in India.",
  keywords: [
    "graphic designer",
    "visual communication designer",
    "visual identity",
    "branding",
    "packaging",
    "editorial design",
    "Ujjwal Tamrakar",
    "portfolio",
  ],
  authors: [{ name: "Ujjwal Tamrakar" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Ujjwal Tamrakar",
    title: "Ujjwal Tamrakar — Visual Communication Designer",
    description:
      "Visual communication designer focused on branding, packaging, editorial design, illustration, and digital experiences.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ujjwal Tamrakar — Visual Communication Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujjwal Tamrakar — Visual Communication Designer",
    description:
      "Visual communication designer focused on branding, packaging, editorial design, illustration, and digital experiences.",
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
    jobTitle: "Visual Communication Designer",
    description:
      "Visual communication designer focused on branding, packaging, editorial design, illustration, and digital experiences.",
    url: "https://ujjawaltamrakar.com",
    email: "mailto:hello@ujjawaltamrakar.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Brand Identity",
      "Packaging Design",
      "Visual Communication",
      "Editorial Design",
      "Illustration",
      "Typography",
      "Art Direction",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National Institute of Fashion Technology",
    },
    sameAs: [
      "https://www.instagram.com/ujjwal__tamrakar/",
      "https://www.behance.net/ujjawaltamrakar",
      "https://www.linkedin.com/in/ujjwal-tamrakar-158213250",
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