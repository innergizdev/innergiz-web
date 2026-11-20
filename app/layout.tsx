import type { Metadata } from "next";
import { Anton, Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
import "./globals.css";

// The four voices of the design system. Each exposes a CSS
// variable that globals.css maps to a font-* utility — swapping a font means
// changing it here and nowhere else.
const anton = Anton({
  weight: "400", // Anton ships a single display weight
  subsets: ["latin"],
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"], // used only for pull quotes — the one serif moment per page
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.brandName} — ${SITE.tagline}`,
    template: `%s — ${SITE.brandName}`,
  },
  description: `${SITE.subTagline}. Executive coaching, corporate excellence programs, and ICF-accredited coach education from ${SITE.brandName}, New Delhi.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} ${plexMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        {/* Header is fixed; main content manages its own top offset per page */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
