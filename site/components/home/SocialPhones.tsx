"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SITE, SOCIAL_POSTS } from "@/content/site";
import { Btn, Eyebrow, Rule, Watermark } from "@/components/ui/bits";
import Icon from "@/components/ui/Icon";
import { Monogram } from "@/components/ui/Logo";
import TornEdge from "@/components/paper/TornEdge";
import s from "./SocialPhones.module.css";

export default function SocialPhones() {
  const n = SOCIAL_POSTS.length;
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  // only auto-rotate while the phones are actually visible
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !onScreen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % n), 3000);
    return () => window.clearInterval(t);
  }, [paused, onScreen, n]);

  // position of each phone relative to the active one: -2..2
  const offset = (i: number) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <section className={`section section--paper textured ${s.soc}`} aria-labelledby="soc-title">
      <TornEdge position="top" color="var(--parchment)" seed={53} />
      <Watermark style={{ left: "30%", top: "10%" }}>{SITE.social.handle}</Watermark>
      <div className={`wrap ${s.grid}`}>
        <div>
          <Eyebrow>Social Media</Eyebrow>
          <h2 id="soc-title" className="display display--md" data-reveal="up">
            <span className="line">Fresh from the Bar</span>
            <span className="sub">to your feed</span>
          </h2>
          <Rule />
          <p className="lede" data-reveal="up" data-delay="0.1">
            Match nights, quiz champions, festive packages and the new Gentle Pour. Follow {SITE.social.handle} so you never miss
            what’s on.
          </p>
          <div className="btns" data-reveal="up" data-delay="0.2">
            <Btn href={SITE.social.instagram} variant="dark" iconLeft="instagram">
              Follow on Instagram
            </Btn>
            <Btn href={SITE.social.tiktok} variant="dark" iconLeft="tiktok">
              Follow on TikTok
            </Btn>
          </div>
        </div>

        <div
          ref={stageRef}
          className={s.stage}
          data-reveal="fade"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className={s.phones}>
            {SOCIAL_POSTS.map((p, i) => {
              const d = offset(i);
              const hidden = Math.abs(d) > 1;
              return (
                <a
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${s.phone} ${d === 0 ? s.front : ""}`}
                  style={{
                    transform: `translateX(${d * 62}%) translateZ(${d === 0 ? 0 : -160}px) rotateY(${d * -24}deg) scale(${d === 0 ? 1 : 0.84})`,
                    opacity: hidden ? 0 : d === 0 ? 1 : 0.78,
                    zIndex: 10 - Math.abs(d),
                    pointerEvents: hidden ? "none" : "auto",
                  }}
                  tabIndex={hidden ? -1 : 0}
                  aria-label={`Instagram post: ${p.caption}`}
                  onClick={(e) => {
                    if (d !== 0) {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                >
                  <span className={s.notch} />
                  <span className={s.bar}>
                    <Monogram ring className={s.mono} />
                    <span>{SITE.social.handle.replace("@", "")}</span>
                    <Icon name="instagram" />
                  </span>
                  <span className={s.screen}>
                    <Image src={p.image} alt="" width={600} height={800} sizes="260px" />
                  </span>
                  <span className={s.caption}>{p.caption}</span>
                </a>
              );
            })}
          </div>
          <div className={s.dots} role="tablist" aria-label="Choose post">
            {SOCIAL_POSTS.map((p, i) => (
              <button key={p.url} role="tab" aria-selected={i === active} aria-label={`Post ${i + 1}`} className={i === active ? s.dotOn : ""} onClick={() => setActive(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
