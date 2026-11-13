"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TIMELINE } from "@/content/site";
import s from "./Timeline.module.css";

gsap.registerPlugin(ScrollTrigger);

/** Vertical timeline: the copper spine draws with scroll, entries alternate sides (MH "A legacy that started"). */
export default function Timeline() {
  const root = useRef<HTMLOListElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-spine]",
        { scaleY: 0 },
        { scaleY: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 60%", scrub: 0.6 } },
      );
      gsap.utils.toArray<HTMLElement>("[data-entry]").forEach((el, i) => {
        gsap.from(el, {
          x: i % 2 ? 40 : -40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });
        const dot = el.querySelector("[data-dot]");
        if (dot)
          gsap.from(dot, { scale: 0, duration: 0.5, ease: "back.out(2)", scrollTrigger: { trigger: el, start: "top 75%", once: true } });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <ol ref={root} className={s.tl}>
      <span className={s.spine} data-spine aria-hidden="true" />
      {TIMELINE.map((t, i) => (
        <li key={t.title} className={`${s.entry} ${i % 2 ? s.right : s.left}`} data-entry>
          <span className={s.dot} data-dot aria-hidden="true" />
          <div className={s.card}>
            <span className={s.year}>{t.year}</span>
            <h3 className="h3">{t.title}</h3>
            <p>{t.copy}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
