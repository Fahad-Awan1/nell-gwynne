"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import menu from "@/content/menu.json";
import { Btn, Eyebrow, Rule, Watermark, Note } from "@/components/ui/bits";
import Icon from "@/components/ui/Icon";
import TornEdge from "@/components/paper/TornEdge";
import s from "./MenuShowcase.module.css";

const FEATURED = [
  "full-english-breakfast",
  "traditional-cod-chips",
  "nell-s-beef-burger",
  "sirloin-steak",
  "steak-pie",
  "bbq-pork-baby-back-ribs",
  "nell-gwynne-bbq-chicken-6-wings",
  "shepherd-s-pie",
  "sticky-toffee-pudding",
  "espresso-martini",
];

const items = FEATURED.map((slug) => menu.items.find((i) => i.slug === slug)).filter(Boolean) as (typeof menu.items)[number][];

export default function MenuShowcase() {
  const track = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth > el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 32 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // drag to scroll (mouse)
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let down = false;
    let startX = 0;
    let startLeft = 0;
    let moved = false;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      down = true;
      moved = false;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      el.classList.add(s.dragging);
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      down = false;
      el.classList.remove(s.dragging);
    };
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    el.addEventListener("click", onClick, true);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    <section className={`section section--black textured ${s.menu}`} aria-labelledby="menu-title">
      <TornEdge position="top" color="var(--black)" seed={11} />
      <Watermark style={{ left: "-2%", bottom: "30%" }}>Grub</Watermark>
      <div className={`wrap ${s.top}`}>
        <div className={s.copy}>
          <Eyebrow>Our Menu</Eyebrow>
          <h2 id="menu-title" className="display display--md" data-reveal="up">
            <span className="line">Proper Pub Grub</span>
            <span className="sub">Fresh from the kitchen</span>
          </h2>
          <Rule />
          <p className="lede" data-reveal="up" data-delay="0.1">
            Full English breakfasts, Sunday roasts, steak pies and wings by the stack. Hearty British plates and a bar that
            knows its way around a cocktail.
          </p>
          <div className="btns" data-reveal="up" data-delay="0.2">
            <Btn href="/menu" icon="arrow">
              View Full Menu
            </Btn>
          </div>
          <Note className={s.note}>Pies, roasts &amp; a proper fry-up</Note>
        </div>

        <div className={s.collage}>
          <div className={s.clip} data-reveal="news" data-rot="-6">
            <span className={s.clipKicker}>Today at the pub</span>
            <span className={s.clipHead}>Roast, Pie &amp; a Pint</span>
            <span className={s.clipRule} />
            <span className={s.clipBody}>Kitchen open from 9am · Breakfast at weekends</span>
          </div>
          <figure className={`print print--deckle ${s.pA}`} data-reveal="print" data-rot="6">
            <Image src="/images/menu/grilled-pork-combo.webp" alt="Grilled pork combo sharing platter" width={600} height={600} sizes="(max-width: 760px) 60vw, 360px" />
            <figcaption className="print__cap">Grilled Pork Combo</figcaption>
          </figure>
          <figure className={`print ${s.pB}`} data-reveal="print" data-rot="-8" data-delay="0.15">
            <span className="tape" style={{ top: -12, left: 30, rotate: "-8deg" }} />
            <Image src="/images/menu/steak-pie.webp" alt="Steak pie" width={600} height={600} sizes="240px" />
            <figcaption className="print__cap">Steak Pie</figcaption>
          </figure>
        </div>
      </div>

      <div className={s.carousel}>
        <div ref={track} className={s.track} data-reveal="stagger">
          {items.map((it, i) => (
            <a key={it.slug} href={`/menu#${it.slug}`} className={s.card} data-card style={{ rotate: `${[-2, 1.5, -1, 2, -1.5][i % 5]}deg` }}>
              <div className={s.cardImg}>
                {it.image && <Image src={it.image} alt={it.name} width={600} height={600} sizes="300px" draggable={false} />}
              </div>
              <div className={s.cardCap}>
                <span className={s.idx}>{String(i + 1).padStart(2, "0")}</span>
                <span className={s.name}>{it.name}</span>
                <span className={s.price}>AED {it.price}</span>
              </div>
            </a>
          ))}
        </div>
        <div className={`wrap ${s.ctrls}`}>
          <button className={s.nav} onClick={() => go(-1)} disabled={atStart} aria-label="Previous dishes">
            <Icon name="arrowLeft" />
          </button>
          <span className={s.hint}>Drag or use the arrows</span>
          <button className={s.nav} onClick={() => go(1)} disabled={atEnd} aria-label="Next dishes">
            <Icon name="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
