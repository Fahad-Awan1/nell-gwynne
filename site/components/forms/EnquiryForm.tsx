"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import s from "./EnquiryForm.module.css";

const WA = "971524119313";

type Mode = "booking" | "support";

/** Sends a pre-filled WhatsApp message. No backend needed and nothing is stored. */
export default function EnquiryForm({ mode = "booking" }: { mode?: Mode }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // honeypot
    const name = String(f.get("name") || "").trim();
    if (!name) {
      setError("Please tell us your name.");
      return;
    }
    setError("");
    const lines =
      mode === "booking"
        ? [
            `Hi Nell Gwynne, I'd like to book a table.`,
            `Name: ${name}`,
            `Guests: ${f.get("guests") || "-"}`,
            `Date: ${f.get("date") || "-"}`,
            `Time: ${f.get("time") || "-"}`,
            f.get("occasion") ? `Occasion / match: ${f.get("occasion")}` : "",
            f.get("message") ? `Notes: ${f.get("message")}` : "",
          ]
        : [`Hi Nell Gwynne, ${f.get("topic") || "a question"}:`, `Name: ${name}`, f.get("email") ? `Email: ${f.get("email")}` : "", `${f.get("message") || ""}`];
    const text = encodeURIComponent(lines.filter(Boolean).join("\n"));
    window.open(`https://wa.me/${WA}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form className={s.form} onSubmit={submit} noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className={s.hp} aria-hidden="true" />
      <div className={s.row}>
        <label className={s.field}>
          <span>Your name *</span>
          <input name="name" required autoComplete="name" placeholder="e.g. Sam Taylor" />
        </label>
        {mode === "booking" ? (
          <label className={s.field}>
            <span>Guests</span>
            <select name="guests" defaultValue="2">
              {["1", "2", "3", "4", "5", "6", "7", "8", "10+", "Group / party"].map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </label>
        ) : (
          <label className={s.field}>
            <span>Email (optional)</span>
            <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </label>
        )}
      </div>

      {mode === "booking" ? (
        <>
          <div className={s.row}>
            <label className={s.field}>
              <span>Date</span>
              <input name="date" type="date" />
            </label>
            <label className={s.field}>
              <span>Time</span>
              <input name="time" type="time" defaultValue="19:00" />
            </label>
          </div>
          <label className={s.field}>
            <span>Occasion or match (optional)</span>
            <input name="occasion" placeholder="e.g. Man City vs Liverpool, birthday, quiz night" />
          </label>
        </>
      ) : (
        <label className={s.field}>
          <span>Topic</span>
          <select name="topic" defaultValue="a general question">
            <option value="a general question">General question</option>
            <option value="a group or party booking">Group or party booking</option>
            <option value="feedback about my visit">Feedback about my visit</option>
            <option value="lost property">Lost property</option>
            <option value="a website issue">Website issue</option>
          </select>
        </label>
      )}

      <label className={s.field}>
        <span>{mode === "booking" ? "Anything else?" : "Your message"}</span>
        <textarea name="message" rows={4} placeholder={mode === "booking" ? "Screen preference, high chair, dietary needs…" : "How can we help?"} />
      </label>

      {error && (
        <p className={s.error} role="alert">
          {error}
        </p>
      )}
      <div className={s.actions}>
        <button type="submit" className="btn btn--dark">
          <Icon name="whatsapp" />
          <span>{mode === "booking" ? "Send via WhatsApp" : "Send message"}</span>
        </button>
        <p className={s.small}>
          {sent ? "WhatsApp opened in a new tab. Just hit send." : "Opens WhatsApp with your details filled in. Nothing is stored on this site."}
        </p>
      </div>
    </form>
  );
}
