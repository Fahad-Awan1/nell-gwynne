# Nell Gwynne: sitemap and audit (input for the redesign)

## Current sitemap
```
nellgwynne.com
├── /                (Home: one long page; WordPress + Astra + Elementor Pro)
│   ├── #about
│   ├── #special     (weekly offers)
│   └── #menu        (anchor only; the real menu is at /nell/)
├── /nell/           (Digital Menu: separate static JS app, 71 items + 8 PDFs)
└── /privacy-policy/ (404)
External: SevenRooms + TableCheck (booking), WhatsApp, Instagram, TikTok, Facebook, Google Maps
```
There are really **2 pages**. Everything else (offers, events, fixtures, contact, about) is a section on the home page.

## What each section does today
| Section | Job | Problem |
|---|---|---|
| Hero | Value proposition + booking | Generic copy; two different booking systems |
| About | Tells guests the pub is relaxed, sporty and British | Weak about content: no story, no history of the name |
| Fixtures table | Shows which games are live | Updated by hand, out of date, mislabelled "Weekly Offers & Events", typos |
| Counters | Social proof | Numbers are small and unconvincing ("4+ Pro Bartender") |
| Offer cards ×6 | Weekly deals | No day, time or price; the posters carry the info; a 6000px image is 6 MB |
| Instagram feed | Shows the pub is active | Plugin-heavy; CDN images expire |
| Testimonials | Trust | Read as written by the business; not linked to Google reviews |
| Newsletter | Leads | Typo; unclear what subscribers get |
| Footer | Contact / hours | 5 dead links; 2025 copyright |
| Popup | Seasonal promo | Opens instantly and blocks scrolling, which hurts the user experience |

## Problems found
**Broken or inconsistent**
- `www.nellgwynne.com` returns a 404; only the bare domain works.
- `/privacy-policy/` returns a 404, yet the cookie banner links to it. Terms, Disclaimer, Support and FAQ go nowhere.
- Two booking platforms: SevenRooms (button) and TableCheck (nav link).
- "Menu" in the nav points to #menu on the home page, but the real menu is at /nell/.
- Wings Night is listed as "Midweek" (home), "Tuesday" (menu, AED 49) and "Saturday buy 1 get 1" (menu, AED 99).
- Ladies Night and Quiz Night have no day or time on the site. Instagram says Quiz Night is Monday at 7pm.

**Content errors**
- "Spuras", "Westham", "Cordon Blue", "Thanksgiven", "NEWLETTER", "Years Of Experiences", "Happy Customer", "DIAQUIRI".
- The wings description reads "Lemon caper butter, charred asparagus, and herb pilaf" (copied from a salmon dish).
- `id:7` is reused 60+ times in the menu data, and Saturday Roast Brunch appears twice (AED 199 / 169) with no label to tell them apart.
- Allergen codes appear only on the newest items.

**SEO**
- Title "Pubs Near Me…" and a generic meta description, with no brand name or location.
- No LocalBusiness / BarOrPub schema, no sitemap.xml (it 404s), and alt text is missing on most images.

**Performance**
- Offer posters are 2560–6000px (29 MB of site images in total).
- About 10 plugins are loaded (Facebook, Twitter and YouTube feeds are unused).

## Content inventory for the new site
| Asset | Count | Location |
|---|---|---|
| Site images (logo, favicon, hero, about, 6 offer posters, 3 popups, IG avatar) | 16 | `images/site/` |
| Dish and drink photos | 71 | `images/menu/` |
| PDF menus | 8 | `pdfs/` |
| Menu data | 71 items | `menu.json` |
| Instagram posts (captions + links) | 20 | `instagram.json` |
| Copy for every section | – | `content.md` |
| Raw source (HTML/JS/CSS) | 4 files | `raw/` |

## Suggested page structure for the redesign (to confirm with the user)
1. **Home:** hero, what's on this week, live sports, featured food, offers, reviews, visit and book
2. **Menu:** food and drinks with filters and allergens (from `menu.json`), plus PDF menus
3. **What's On / Offers:** a 7-day schedule (one source of truth)
4. **Live Sports:** a fixtures list that is easy to update
5. **Events and Private Hire:** seasonal events (Christmas, Thanksgiving), group bookings
6. **About:** story, the Nell Gwynne name, gallery
7. **Contact / Book:** one booking platform, WhatsApp, map, hours, temporary entrance note
8. **Legal:** Privacy, Terms
