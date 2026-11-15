"use client";

import Image from "@/components/ui/Img";
import { useEffect, useRef } from "react";
import menu from "@/content/menu.json";
import { SITE } from "@/content/site";
import Icon from "@/components/ui/Icon";
import s from "./DishModal.module.css";

type Item = (typeof menu.items)[number];

const CAT_LABEL: Record<string, string> = Object.fromEntries(menu.categories.map((c) => [c.id, c.label]));
const ALLERGEN_LABEL: Record<string, string> = { "Seafood/Shellfish": "Seafood" };

/**
 * Dish detail popup: large uncropped photo, full description, allergens and price.
 * Uses the native <dialog> (focus trap, Esc to close, top layer) and lets the visitor step
 * through the dishes currently shown with the arrows or the ← → keys.
 */
export default function DishModal({
  item,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  item: Item | null;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  // open / close the native dialog with the item, and lock page scroll while open
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) {
      d.showModal();
      document.documentElement.style.overflow = "hidden";
    }
    if (!item && d.open) d.close();
    return () => {
      if (!item) document.documentElement.style.overflow = "";
    };
  }, [item]);

  useEffect(() => () => void (document.documentElement.style.overflow = ""), []);

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onPrev, onNext]);

  const wide = item?.category === "offers";

  return (
    <dialog
      ref={ref}
      className={s.dialog}
      aria-labelledby="dish-title"
      onClose={() => {
        document.documentElement.style.overflow = "";
        onClose();
      }}
      onClick={(e) => {
        // a click on the backdrop (the dialog element itself, outside the card) closes it
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      {item && (
        <article className={`${s.card} ${wide ? s.wide : ""}`} key={item.slug}>
          <button className={s.close} onClick={() => ref.current?.close()} aria-label="Close dish details">
            <Icon name="close" />
          </button>

          <div className={s.photo}>
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                width={wide ? 1200 : 900}
                height={wide ? 675 : 900}
                sizes="(max-width: 760px) 94vw, 620px"
                preload
              />
            ) : (
              <span className={s.noPhoto}>{item.name}</span>
            )}
            <span className={s.price}>AED {item.price}</span>
          </div>

          <div className={s.body}>
            <span className={s.cat}>{CAT_LABEL[item.category] ?? item.category}</span>
            <h2 id="dish-title" className={s.name}>
              {item.name}
            </h2>
            <p className={s.desc}>{item.description}</p>

            {(item.tags.length > 0 || item.allergens.length > 0) && (
              <dl className={s.facts}>
                {item.tags.length > 0 && (
                  <div>
                    <dt>Good for</dt>
                    <dd>{item.tags.join(", ")}</dd>
                  </div>
                )}
                {item.allergens.length > 0 && (
                  <div>
                    <dt>Contains</dt>
                    <dd>{item.allergens.map((a) => ALLERGEN_LABEL[a] ?? a).join(", ")}</dd>
                  </div>
                )}
              </dl>
            )}
            <p className={s.note}>Please tell your server about any allergies.</p>

            <div className={s.actions}>
              <a className="btn btn--sm" href={SITE.booking} target="_blank" rel="noopener noreferrer">
                <Icon name="calendar" />
                <span>Book a Table</span>
              </a>
            </div>

            {total > 1 && (
              <nav className={s.pager} aria-label="Browse dishes">
                <button onClick={onPrev} aria-label="Previous dish">
                  <Icon name="arrowLeft" />
                </button>
                <span aria-live="polite">
                  {index + 1} / {total}
                </span>
                <button onClick={onNext} aria-label="Next dish">
                  <Icon name="arrow" />
                </button>
              </nav>
            )}
          </div>
        </article>
      )}
    </dialog>
  );
}
