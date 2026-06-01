import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata(title: string, description = site.description, path = ""): Metadata {
  const url = `${site.url}${path}`;
  return {
    title: `${title} | ${site.name}`,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | ${site.name}`, description, url, siteName: site.name, type: "website", images: [{ url: "/images/hero/industrial-hero.svg", width: 1200, height: 800 }] },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: ["/images/hero/industrial-hero.svg"] }
  };
}
