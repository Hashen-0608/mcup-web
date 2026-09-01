import type { MetadataRoute } from "next";
import { site } from "@/content/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/rules", "/news", "/history"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
