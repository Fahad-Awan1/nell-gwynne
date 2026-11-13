"use client";

import Image from "next/image";
import { useDeferredValue, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { keepTilt } from "@/components/motion/keepTilt";
import menu from "@/content/menu.json";
import Icon from "@/components/ui/Icon";
import s from "./MenuGrid.module.css";

type Item = (typeof menu.items)[number];
const ALLERGEN_CODE: Record<string, string> = { Gluten: "G", Dairy: "D", Egg: "E", "Seafood/Shellfish": "S" };

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export default function MenuGrid() {
  const [cat, setCat] = useState<string>("all");
  const [query, setQuery] = useState("");
  const q = useDeferredValue(query.trim().toLowerCase());
  const grid = useRef<HTMLDivElement>(null);
  const prevKey = useRef("all|");

  const filtered = useMemo(
    () =>
      menu.items.filter(
        (i) => (cat === "all" || i.category === cat) && (!q || `${i.name} ${i.description}`.toLowerCase().includes(q)),
      ),
    [cat, q],
  );

  const groups = useMemo(() => {
    if (cat !== "all" || q) return [{ id: cat, label: menu.categories.find((c) => c.id === cat)?.label ?? "Results", items: filtered }];
    return menu.categories.map((c) => ({ ...c, items: filtered.filter((i) => i.category === c.id) })).filter((g) => g.items.length);
  }, [cat, q, filtered]);

  // The grid owns its reveal (not MotionRoot): every filter change renders new cards, and each
  // batch fades up as it scrolls into view. Cards are never left hidden.
  useLayoutEffect(() => {
    const el = grid.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const changed = prevKey.current !== `${cat}|${q}`;
    prevKey.current = `${cat}|${q}`;

    // after a filter change, bring the top of the list back under the sticky bar
    if (changed) {
      const top = el.getBoundingClientRect().top + window.scrollY - 150;
      if (window.scrollY > top) window.scrollTo({ top, behavior: "smooth" });
    }

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]", el);
      const restore = keepTilt(cards);
      gsap.set(cards, { opacity: 0, y: 30 });
      ScrollTrigger.batch(cards, {
        start: "top 94%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
            stagger: 0.06,
            overwrite: true,
            clearProps: "transform",
            onComplete: restore,
          }),
      });
      ScrollTrigger.refresh();
    }, el);
    return () => ctx.revert();
  }, [cat, q]);

  const count = (id: string) => (id === "all" ? menu.items.length : menu.items.filter((i) => i.category === id).length);

  return (
    <div className={s.root}>
      <div className={s.bar}>
        <div className={`wrap ${s.barInner}`}>
          <div className={s.chips} role="tablist" aria-label="Menu categories">
            {[{ id: "all", label: "All" }, ...menu.categories].map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={cat === c.id}
                className={`${s.chip} ${cat === c.id ? s.on : ""}`}
                onClick={() => setCat(c.id)}
              >
                {c.label}
                <span>{count(c.id)}</span>
              </button>
            ))}
          </div>
          <label className={s.search}>
            <Icon name="search" />
            <span className="sr-only">Search the menu</span>
            <input type="search" placeholder="Search dishes & drinks…" value={query} onChange={(e) => setQuery(e.target.value)} />
          </label>
        </div>
      </div>

      <div className="wrap" ref={grid}>
        <p className={s.meta} aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "item" : "items"}
          {q && <> matching “{query.trim()}”</>}
        </p>

        {filtered.length === 0 && (
          <div className={s.empty}>
            <p className="h3">Nothing on tap for that one.</p>
            <p>Try another word, or ask the bar. We might just make it for you.</p>
            <button className="btn btn--dark btn--sm" onClick={() => { setQuery(""); setCat("all"); }}>
              <span>Show everything</span>
            </button>
          </div>
        )}

        {groups.map((g) => (
          <section key={g.id} className={s.group} aria-labelledby={`g-${g.id}`}>
            {groups.length > 1 && (
              <div className={s.groupHead}>
                <h2 id={`g-${g.id}`} className="display display--sm">
                  {g.label}
                </h2>
                <span className={s.groupRule} />
                <span className={s.groupCount}>{g.items.length}</span>
              </div>
            )}
            <div className={s.grid}>
              {g.items.map((it, i) => (
                <Card key={it.slug} it={it} i={i} />
              ))}
            </div>
          </section>
        ))}

        <p className={s.legend}>
          <strong>Allergens:</strong> G Gluten · D Dairy · E Egg · S Seafood. Not every dish is labelled yet, so please tell your
          server about any allergies. All prices in AED.
        </p>
      </div>
    </div>
  );
}

function Card({ it, i }: { it: Item; i: number }) {
  const offer = it.category === "offers";
  return (
    <article id={it.slug} className={`${s.card} ${offer ? s.offer : ""}`} data-card style={{ rotate: `${[-1.2, 0.8, -0.5, 1.1, -0.9][i % 5]}deg` }}>
      <div className={s.img}>
        {it.image && <Image src={it.image} alt={it.name} width={600} height={600} sizes="(max-width: 520px) 46vw, (max-width: 1080px) 45vw, 300px" />}
        <span className={s.price}>AED {it.price}</span>
        {offer && <span className={s.flag}>Special Offer</span>}
      </div>
      <div className={s.body}>
        <h3 className={s.name}>{it.name}</h3>
        <p className={s.desc}>{it.description}</p>
        {(it.allergens.length > 0 || it.tags.length > 0) && (
          <div className={s.tags}>
            {it.tags.map((t) => (
              <span key={t} className={s.tag}>
                {t}
              </span>
            ))}
            {it.allergens.map((a) => (
              <span key={a} className={s.allergen} title={a}>
                {ALLERGEN_CODE[a] ?? a[0]}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
