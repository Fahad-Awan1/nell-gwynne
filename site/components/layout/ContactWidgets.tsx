import { SITE } from "@/content/site";
import s from "./ContactWidgets.module.css";

/**
 * Floating "Call" and "WhatsApp" buttons (the old site had both).
 * Call follows the Nell Gwynne brand; WhatsApp keeps WhatsApp's own green and logo.
 */
export default function ContactWidgets() {
  return (
    <div className={s.dock}>
      <a className={`${s.fab} ${s.call}`} href={SITE.phoneHref} aria-label={`Call Nell Gwynne on ${SITE.phone}`}>
        <span className={s.ring} aria-hidden="true" />
        <svg viewBox="0 0 24 24" aria-hidden="true" className={s.phoneIcon}>
          <path d="M5 4h3.5l1.5 4.5-2 1.3a11 11 0 0 0 6.2 6.2l1.3-2L20 15.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
        </svg>
        <span className={s.tip}>Call us</span>
      </a>
      <a className={`${s.fab} ${s.wa}`} href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Nell Gwynne on WhatsApp">
        <span className={s.ring} aria-hidden="true" />
        <svg viewBox="0 0 32 32" aria-hidden="true" className={s.waIcon}>
          <path
            fill="#fff"
            d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 6.9L3 29l6.5-1.9c1.9 1 4.1 1.6 6.5 1.6 7.2 0 13-5.7 13-12.8S23.2 3 16 3Zm0 23.4c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-3.9 1.1 1.1-3.7-.3-.4a10.4 10.4 0 0 1-1.7-5.8C5 10 9.9 5.2 16 5.2s11 4.8 11 10.6-4.9 10.6-11 10.6Z"
          />
          <path
            fill="#fff"
            d="M22.1 18.4c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.6-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5 .8.4 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 2-.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.2-.3-.3-.6-.4Z"
          />
        </svg>
        <span className={s.tip}>WhatsApp</span>
      </a>
    </div>
  );
}
