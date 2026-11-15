import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

const ROUTES = ["", "/menu", "/special-offers", "/about", "/gallery", "/book", "/faq", "/support", "/privacy-policy", "/terms", "/disclaimer"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${SITE.url}${r}`,
    changeFrequency: r === "" || r === "/special-offers" ? "weekly" : "monthly",
    priority: r === "" ? 1 : ["/menu", "/special-offers", "/book"].includes(r) ? 0.9 : 0.5,
  }));
}
