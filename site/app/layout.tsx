import type { Metadata, Viewport } from "next";
import { Cinzel } from "next/font/google";
import localFont from "next/font/local";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { SITE } from "@/content/site";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const sauce = localFont({
  variable: "--font-sauce",
  src: [
    { path: "./fonts/open-sauce-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/open-sauce-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/open-sauce-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  // Turbopack can't parse these woff2 metrics ("unexpected data version"), so skip the auto fallback.
  adjustFontFallback: false,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Nell Gwynne | English Sports Pub in Dubai Marina",
    template: "%s | Nell Gwynne Dubai Marina",
  },
  description:
    "Nell Gwynne is Dubai Marina’s authentic English sports pub since 2011. Live Premier League, rugby and F1, proper pints, hearty British food and offers every night. Open daily 9am–3am.",
  openGraph: {
    type: "website",
    siteName: SITE.fullName,
    locale: "en_GB",
    images: ["/images/site/pub-interior.webp"],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#060101",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: SITE.fullName,
  url: SITE.url,
  telephone: SITE.phone,
  image: `${SITE.url}/images/site/pub-interior.webp`,
  servesCuisine: "British",
  priceRange: "AED 30–200",
  acceptsReservations: SITE.booking,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Marina Byblos Hotel, Al Hubob St",
    addressLocality: "Dubai Marina, Dubai",
    addressCountry: "AE",
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "03:00",
    },
  ],
  sameAs: [SITE.social.instagram, SITE.social.tiktok, SITE.social.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" id="top" className={`${cinzel.variable} ${sauce.variable}`} suppressHydrationWarning>
      <head>
        {/* Hide reveal targets before first paint (only when motion is allowed). */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-motion')",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
