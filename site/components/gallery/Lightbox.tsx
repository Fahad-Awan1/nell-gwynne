"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Icon from "@/components/ui/Icon";
import s from "./Lightbox.module.css";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  title: string;
  caption?: string;
  w: number;
  h: number;
};

/**
 * Full-screen viewer for gallery photos, posters and reels (native <dialog>).
 * Photos are shown whole (never cropped); reels play with sound and controls.
 */
export default function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: MediaItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const item = index !== null ? items[index] : null;
  const n = items.length;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) {
      d.showModal();
      document.documentElement.style.overflow = "hidden";
    }
    if (!item && d.open) d.close();
  }, [item]);

  useEffect(() => () => void (document.documentElement.style.overflow = ""), []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onIndex((index - 1 + n) % n);
      if (e.key === "ArrowRight") onIndex((index + 1) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, n, onIndex]);

  return (
    <dialog
      ref={ref}
      className={s.dialog}
      aria-label={item?.title ?? "Gallery viewer"}
      onClose={() => {
        document.documentElement.style.overflow = "";
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      {item && index !== null && (
        <div className={s.frame} key={item.src}>
          <button className={s.close} onClick={() => ref.current?.close()} aria-label="Close viewer">
            <Icon name="close" />
          </button>
          <div className={`${s.media} ${item.h > item.w ? s.tall : ""}`}>
            {item.type === "video" ? (
              <video src={item.src} poster={item.poster} controls autoPlay playsInline className={s.video} aria-label={item.title} />
            ) : (
              <Image src={item.src} alt={item.alt} width={item.w} height={item.h} sizes="(max-width: 760px) 96vw, 80vw" className={s.img} preload />
            )}
          </div>
          <div className={s.bar}>
            <div className={s.text}>
              <strong>{item.title}</strong>
              {item.caption && <span>{item.caption}</span>}
            </div>
            {n > 1 && (
              <nav className={s.pager} aria-label="Browse gallery">
                <button onClick={() => onIndex((index - 1 + n) % n)} aria-label="Previous">
                  <Icon name="arrowLeft" />
                </button>
                <span aria-live="polite">
                  {index + 1} / {n}
                </span>
                <button onClick={() => onIndex((index + 1) % n)} aria-label="Next">
                  <Icon name="arrow" />
                </button>
              </nav>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
