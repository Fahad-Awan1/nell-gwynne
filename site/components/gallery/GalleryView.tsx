"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { POSTERS, POSTER_CATS, PUB_PHOTOS, REELS, posterSrc, type PosterCat } from "@/content/gallery";
import { SITE } from "@/content/site";
import { Btn, Eyebrow, Rule, Watermark } from "@/components/ui/bits";
import Icon from "@/components/ui/Icon";
import TornEdge from "@/components/paper/TornEdge";
import Lightbox, { type MediaItem } from "./Lightbox";
import s from "./GalleryView.module.css";

const TILTS = [-2.2, 1.6, -1.1, 2, -1.6, 1.2, -0.8, 1.8];

export default function GalleryView() {
  const [cat, setCat] = useState<PosterCat | "all">("all");
  const [box, setBox] = useState<{ items: MediaItem[]; index: number } | null>(null);

  const reelItems: MediaItem[] = useMemo(
    () => REELS.map((r) => ({ type: "video", src: r.src, poster: r.poster, alt: r.title, title: r.title, caption: r.caption, w: 720, h: 1280 })),
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
          <div className={s.masonry}>
            {PUB_PHOTOS.map((ph, i) => (
              <button
                key={ph.src}
                className={`print ${s.photo}`}
                style={{ rotate: `${TILTS[i % TILTS.length]}deg` }}
                onClick={() => setBox({ items: photoItems, index: i })}
                aria-label={`View photo: ${ph.caption}`}
              >
                <Image src={ph.src} alt={ph.alt} width={ph.w} height={ph.h} sizes="(max-width: 620px) 46vw, (max-width: 1080px) 31vw, 280px" />
                <span className="print__cap">{ph.caption}</span>
              </button>
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
