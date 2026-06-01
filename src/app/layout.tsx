import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";


export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: ["Industrial IoT", "Embedded Systems", "Robotics", "Automation", "AI Vision", "PCB Design", "Product Development"],
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name, type: "website" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, slogan: site.tagline, description: site.description, sameAs: [] };
  return <html lang="en"><body><Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Header />{children}<Footer /></body></html>;
}
