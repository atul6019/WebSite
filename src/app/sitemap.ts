import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { navigation, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = navigation.map((item) => ({ url: `${site.url}${item.href}`, lastModified: now, changeFrequency: "weekly" as const, priority: item.href === "/" ? 1 : 0.8 }));
  const productRoutes = products.map((p) => ({ url: `${site.url}/products/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 }));
  const serviceRoutes = services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 }));
  return [...staticRoutes, ...productRoutes, ...serviceRoutes];
}
