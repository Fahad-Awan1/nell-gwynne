"use client";

import Image from "@/components/ui/Img";
import { useEffect, useMemo, useState } from "react";
import { POSTERS, POSTER_CATS, PUB_PHOTOS, REELS, posterSrc, type PosterCat } from "@/content/gallery";
import { SITE } from "@/content/site";
import { Btn, Eyebrow, Rule, Watermark } from "@/components/ui/bits";
import Icon from "@/components/ui/Icon";
import TornEdge from "@/components/paper/TornEdge";
import Lightbox, { type MediaItem } from "./Lightbox";
import s from "./GalleryView.module.css";

const TILTS = [-2.2, 1.6, -1.1, 2, -1.6, 1.2, -0.8, 1.8];

/** Number of photo columns for the current screen (matches the CSS breakpoints). */
function useColumns() {
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const qs = [window.matchMedia("(max-width: 760px)"), window.matchMedia("(max-width: 1080px)")];
    const set = () => setCols(qs[0].matches ? 2 : qs[1].matches ? 3 : 4);
    set();
    qs.forEach((q) => q.addEventListener("change", set));
    return () => qs.forEach((q) => q.removeEventListener("change", set));
  }, []);
  return cols;
}

/**
 * Deal photos into columns so the columns end level (no empty gaps): first onto the
 * shortest column, then swap photos between columns while that evens the heights out.
 * Every photo keeps its natural shape (nothing is cropped).
 */
function balance<T extends { w: number; h: number }>(items: T[], cols: number) {
  const size = (it: T) => it.h / it.w + 0.34; // photo + caption strip + gap, relative to column width
  const groups: number[][] = Array.from({ length: cols }, () => []);
  const height = new Array(cols).fill(0);
  items.forEach((it, i) => {
    const c = height.indexOf(Math.min(...height));
    groups[c].push(i);
    height[c] += size(items[i]);
  });
  const spread = () => Math.max(...height) - Math.min(...height);
  for (let pass = 0; pass < 40; pass++) {
    const pick: { best: [number, number, number, number, number] | null } = { best: null }; // gain, colA, idxA, colB, idxB
    for (let a = 0; a < cols; a++)
      for (let b = 0; b < cols; b++) {
        if (a === b) continue;
        groups[a].forEach((ia, ka) =>
          groups[b].forEach((ib, kb) => {
            const d = size(items[ia]) - size(items[ib]);
            if (d <= 0) return;
            const before = spread();
            height[a] -= d;
            height[b] += d;
            const gain = before - spread();
            height[a] += d;
            height[b] -= d;
            if (gain > 1e-6 && (!pick.best || gain > pick.best[0])) pick.best = [gain, a, ka, b, kb];
          }),
        );
      }
    if (!pick.best) break;
    const [, a, ka, b, kb] = pick.best;
    const d = size(items[groups[a][ka]]) - size(items[groups[b][kb]]);
    [groups[a][ka], groups[b][kb]] = [groups[b][kb], groups[a][ka]];
    height[a] -= d;
    height[b] += d;
  }
  return groups.map((g) => g.sort((x, y) => x - y).map((i) => ({ item: items[i], i })));
}

export default function GalleryView() {
  const [cat, setCat] = useState<PosterCat | "all">("all");
  const [box, setBox] = useState<{ items: MediaItem[]; index: number } | null>(null);
  const cols = useColumns();
  const photoCols = useMemo(() => balance(PUB_PHOTOS, cols), [cols]);

  const reelItems: MediaItem[] = useMemo(
    () => REELS.map((r) => ({ type: "video", src: r.src, poster: r.poster.replace(".jpg", "-sm.webp"), alt: r.title, title: r.title, caption: r.caption, w: 720, h: 1280 })),
    [],
  );
  const photoItems: MediaItem[] = useMemo(
    () => PUB_PHOTOS.map((p) => ({ type: "image", src: p.src, alt: p.alt, title: p.caption, w: p.w, h: p.h })),
    [],
  );
  const posters = useMemo(() => POSTERS.filter((p) => cat === "all" || p.cat === cat), [cat]);
  const posterItems: MediaItem[] = useMemo(
    () => posters.map((p) => ({ type: "image", src: posterSrc(p.slug), alt: p.alt, title: p.title, w: 1080, h: 1920 })),
    [posters],
  );

  return (
    <>
      {/* ---------- Reels ---------- */}
      <section className={`section section--black textured ${s.reelsSec}`} aria-labelledby="reels-title">
        <TornEdge position="top" color="var(--black)" seed={131} />
        <Watermark style={{ right: "-3%", top: "6%" }}>Reels</Watermark>
        <div className="wrap">
          <div className={s.head}>
            <div>
              <Eyebrow>Reels</Eyebrow>
              <h2 id="reels-title" className="display display--md" data-reveal="up">
                <span className="line">Press Play</span>
                <span className="sub">Straight from our screens</span>
              </h2>
              <Rule />
            </div>
            <p className="lede" data-reveal="up" data-delay="0.1">
              A food review, quiz night, the bands and a look around the bar. Tap a reel to watch it with sound.
            </p>
          </div>
          <div className={s.reels}>
            {REELS.map((r, i) => (
              <button
                key={r.slug}
                className={s.reel}
                style={{ rotate: `${TILTS[i % TILTS.length] / 2}deg` }}
                onClick={() => setBox({ items: reelItems, index: i })}
                aria-label={`Play reel: ${r.title}`}
              >
                <span className={s.phone}>
                  <span className={s.notch} aria-hidden="true" />
                  <Image src={r.poster} alt="" width={720} height={1280} sizes="(max-width: 760px) 60vw, 260px" />
                  <span className={s.play} aria-hidden="true">
                    <Icon name="play" />
                  </span>
                  <span className={s.dur}>{r.duration}s</span>
                </span>
                <span className={s.reelTitle}>{r.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Inside the pub ---------- */}
      <section className={`section section--paper textured ${s.pubSec}`} aria-labelledby="pub-title">
        <TornEdge position="top" color="var(--parchment)" seed={137} />
        <Watermark style={{ left: "-2%", top: "4%" }}>Inside</Watermark>
        <div className="wrap">
          <div className={s.head}>
            <div>
              <Eyebrow>Inside the Pub</Eyebrow>
              <h2 id="pub-title" className="display display--md" data-reveal="up">
                <span className="line">Pull Up a Stool</span>
                <span className="sub">Booths, darts, pool &amp; pints</span>
              </h2>
              <Rule />
            </div>
            <p className="lede" data-reveal="up" data-delay="0.1">
              Stone walls, big screens and the best seat for the match. Tap any photo to see it larger.
            </p>
          </div>
          <div className={s.masonry} style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
            {photoCols.map((col, c) => (
              <div key={c} className={s.col}>
                {col.map(({ item: ph, i }) => (
                  <button
                    key={ph.src}
                    className={`print ${s.photo}`}
                    style={{ rotate: `${TILTS[i % TILTS.length]}deg` }}
                    onClick={() => setBox({ items: photoItems, index: i })}
                    aria-label={`View photo: ${ph.caption}`}
                  >
                    <Image src={ph.src} alt={ph.alt} width={ph.w} height={ph.h} sizes="(max-width: 760px) 46vw, (max-width: 1080px) 31vw, 280px" />
                    <span className="print__cap">{ph.caption}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- What's on wall ---------- */}
      <section className={`section section--mahogany textured ${s.wallSec}`} aria-labelledby="wall-title">
        <TornEdge position="top" color="var(--mahogany)" seed={139} />
        <Watermark style={{ right: "-2%", top: "3%" }}>On Tap</Watermark>
        <div className="wrap">
          <div className={s.head}>
            <div>
              <Eyebrow>What’s On</Eyebrow>
              <h2 id="wall-title" className="display display--md" data-reveal="up">
                <span className="line">The Pub Wall</span>
                <span className="sub">Offers, bands &amp; big nights</span>
              </h2>
              <Rule />
            </div>
            <p className="lede" data-reveal="up" data-delay="0.1">
              Every poster from our screens, pinned in one place. Tap one to read it in full.
            </p>
          </div>
          <div className={s.chips} role="tablist" aria-label="Filter posters">
            {POSTER_CATS.map((c) => (
              <button key={c.id} role="tab" aria-selected={cat === c.id} className={`${s.chip} ${cat === c.id ? s.on : ""}`} onClick={() => setCat(c.id)}>
                {c.label}
                <span>{c.id === "all" ? POSTERS.length : POSTERS.filter((p) => p.cat === c.id).length}</span>
              </button>
            ))}
          </div>
          <div className={s.wall} key={cat}>
            {posters.map((po, i) => (
              <button
                key={po.slug}
                className={s.poster}
                style={{ rotate: `${TILTS[i % TILTS.length]}deg` }}
                onClick={() => setBox({ items: posterItems, index: i })}
                aria-label={`View poster: ${po.title}`}
              >
                <span className={s.pin} aria-hidden="true" />
                <Image src={posterSrc(po.slug)} alt={po.alt} width={1080} height={1920} sizes="(max-width: 620px) 46vw, (max-width: 1080px) 31vw, 270px" />
              </button>
            ))}
          </div>
          <div className={s.follow}>
            <Btn href={SITE.social.instagram} iconLeft="instagram">
              More on Instagram
            </Btn>
          </div>
        </div>
      </section>

      <Lightbox items={box?.items ?? []} index={box ? box.index : null} onClose={() => setBox(null)} onIndex={(i) => setBox((b) => (b ? { ...b, index: i } : b))} />
    </>
  );
}
