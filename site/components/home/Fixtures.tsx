"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { FIXTURES, SITE } from "@/content/site";
import { Btn, Eyebrow, Rule, Watermark } from "@/components/ui/bits";
import Icon from "@/components/ui/Icon";
import TornEdge from "@/components/paper/TornEdge";
import s from "./Fixtures.module.css";

const LIMIT = 8;

export default function Fixtures() {
  const comps = useMemo(() => ["All", ...Array.from(new Set(FIXTURES.map((f) => f.comp)))], []);
  const [comp, setComp] = useState("All");
  const [all, setAll] = useState(false);
  const list = useRef<HTMLOListElement>(null);
  const prevKey = useRef("All|false");

  const filtered = FIXTURES.filter((f) => comp === "All" || f.comp === comp);
  const shown = all ? filtered : filtered.slice(0, LIMIT);

  // re-stagger rows when the filter changes (initial reveal is handled by MotionRoot)
  useLayoutEffect(() => {
    const key = `${comp}|${all}`;
    if (prevKey.current === key) return;
    prevKey.current = key;
    if (!list.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(list.current.children, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.04, ease: "power2.out", clearProps: "transform" });
  }, [comp, all]);

  return (
    <section className={`section section--mahogany textured ${s.fx}`} aria-labelledby="fx-title">
      <TornEdge position="top" color="var(--mahogany)" seed={17} />
      <Watermark style={{ right: "-3%", top: "6%" }}>Live</Watermark>
      <div className={`wrap ${s.grid}`}>
        <div className={s.copy}>
          <Eyebrow>Live Sports</Eyebrow>
          <h2 id="fx-title" className="display display--md" data-reveal="up">
            <span className="line">Pick Your Game</span>
            <span className="sub">If it’s live, it’s on</span>
          </h2>
          <Rule />
          <p className="lede" data-reveal="up" data-delay="0.1">
            Premier League, Champions League, rugby, F1 or a late-night fight card. Big screens, cold pints, full volume. You
            call the sport, we’ll put it up.
          </p>
          <div className={s.icons} data-reveal="stagger">
            {(
              [
                ["football", "Football"],
                ["sports", "Big screens"],
                ["beer", "Match-day pints"],
              ] as const
            ).map(([icon, label]) => (
              <span key={label} className={s.iconItem}>
                <span className="icon-circle">
                  <Icon name={icon} />
                </span>
                {label}
              </span>
            ))}
          </div>
          <div className="btns" data-reveal="up" data-delay="0.2">
            <Btn href={SITE.booking} iconLeft="calendar">
              Book for the Match
            </Btn>
          </div>
        </div>

        <div className={s.board} data-reveal="print" data-rot="2">
          <div className={s.boardHead}>
            <span>This week on the screens</span>
            <span className={s.live}>
              <i /> Live
            </span>
          </div>
          <div className={s.chips} role="tablist" aria-label="Filter by competition">
            {comps.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={comp === c}
                className={`${s.chip} ${comp === c ? s.on : ""}`}
                onClick={() => {
                  setComp(c);
                  setAll(false);
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <ol ref={list} className={`${s.rows} ${all ? "" : s.limited}`}>
            {shown.map((f, i) => (
              <li key={`${f.home}-${f.away}-${i}`} className={s.row}>
                <span className={s.comp}>{f.comp}</span>
                <span className={s.teams}>
                  {f.home} <em>vs</em> {f.away}
                </span>
                <span className={s.when}>
                  <span>{f.date}</span>
                  <strong>{f.time}</strong>
                </span>
              </li>
            ))}
          </ol>
          {filtered.length > LIMIT && (
            <button className={s.more} onClick={() => setAll((a) => !a)}>
              {all ? "Show fewer" : `Show all ${filtered.length} fixtures`}
              <Icon name="plus" className={all ? s.minus : undefined} />
            </button>
          )}
          <p className={s.small}>Kick-off times in Dubai time (GST). Ask us to show any game.</p>
        </div>
      </div>
    </section>
  );
}
