# Nell Gwynne: website redesign

This is a full redesign of [nellgwynne.com](https://nellgwynne.com), an English sports pub in Dubai Marina. It is built with **Next.js 16** and **GSAP**, and uses the pub's brand system:

- **Palette:** Pub Black `#060101`, Mahogany `#351206`, Copper Ale `#895936`, Parchment `#F3E9DC`.
- **Fonts:** Cinzel and Open Sauce.

The design uses a "printed paper" style: torn-paper section edges, polaroid photo prints, stamps, printed buttons and scroll-driven reveals.

## What's in this repo

| Folder | What it is |
|---|---|
| `site/` | The Next.js website (deploy this folder) |
| `extracted/` | Everything pulled from the old site: copy (`content.md`), menu data (`menu.json`), Instagram captions, images, PDF menus, raw HTML, and an audit (`sitemap-and-audit.md`) |
| `previews/` | Screenshots and videos of design options |

## Pages

Home · Menu · Special Offers · About Us · Book a Table · FAQ · Support · Privacy Policy · Terms & Conditions · Disclaimer

## Run locally

```bash
cd site
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all pages are static)
```

## Editing content

All copy lives in two files. Change them and every page updates.

- `site/content/site.ts`: contact details, hours, offers, weekly schedule, events, fixtures, testimonials, FAQ.
- `site/content/menu.json`: all 71 menu items, categories and PDF menus.

**Live sports fixtures** should be updated every week in the `FIXTURES` list in `site/content/site.ts`.

## How the motion works

- `site/components/motion/MotionRoot.tsx` is one GSAP engine. Server components opt in with attributes such as `data-reveal="up | print | stamp | news | fade | stagger"`, `data-drift` (parallax) and `data-count` (count-up).
- If the visitor has asked their device for reduced motion, the animations are switched off.
- `site/components/paper/TornEdge.tsx` draws the torn-paper edges between sections as an SVG.

## Deploy

The site is hosted on Vercel at https://nell-gwynne.vercel.app. The Vercel project's **Root Directory** is set to `site`.

**Auto-deploy:** every push to `main` builds and publishes the site automatically. Pushes to other branches get their own preview URL.
