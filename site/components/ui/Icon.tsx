// Thin-line icon set in the brand style (Copper outline, 1.5 stroke).
type Name =
  | "beer" | "music" | "food" | "football" | "sports" | "arrow" | "arrowLeft" | "pin" | "phone"
  | "whatsapp" | "instagram" | "tiktok" | "facebook" | "clock" | "calendar" | "search"
  | "plus" | "sound" | "mute" | "play" | "menu" | "close" | "download" | "mail" | "star" | "cue";

const P: Record<Name, React.ReactNode> = {
  beer: (<><path d="M6 8h10v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z" /><path d="M16 10h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" /><path d="M6 8c0-2 1.5-3.5 3.5-3 .8-1.4 3.5-1.6 4.4.2C15.8 5 16.5 6.5 16 8" /><path d="M9.5 12v6M12.5 12v6" /></>),
  music: (<><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7" /></>),
  food: (<><path d="M4 11h16a8 8 0 0 0-16 0Z" /><path d="M3.5 14h17M5 17h14a2 2 0 0 1-2 3H7a2 2 0 0 1-2-3Z" /><path d="M9 8h.01M12 7h.01M15 8h.01" /></>),
  football: (<><circle cx="12" cy="12" r="9" /><path d="m12 7 4 3-1.5 4.5h-5L8 10l4-3Z" /><path d="M12 7V3.5M16 10l3.4-1.2M14.5 14.5l2.2 3M9.5 14.5l-2.2 3M8 10 4.6 8.8" /></>),
  sports: (<><rect x="3" y="6" width="18" height="12" rx="2" /><path d="m9 3 3 3 3-3M8 21h8" /><path d="m10.5 9.5 4 2.5-4 2.5v-5Z" /></>),
  cue: (<><circle cx="7" cy="17" r="3.2" /><circle cx="14.5" cy="17.5" r="2.4" /><path d="m20.5 3.5-9 9" /><path d="m9.8 14.2 1.6-1.6" /></>),
  arrow: (<path d="M4 12h15m-5-5 5 5-5 5" />),
  arrowLeft: (<path d="M20 12H5m5-5-5 5 5 5" />),
  pin: (<><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>),
  phone: (<path d="M5 4h3.5l1.5 4.5-2 1.3a11 11 0 0 0 6.2 6.2l1.3-2L20 15.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />),
  whatsapp: (<><path d="M4 20.5 5.3 16A8.5 8.5 0 1 1 8.4 19L4 20.5Z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a5 5 0 0 1-2.7-2.7l.8-1-1-2L9 8.5Z" /></>),
  instagram: (<><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17 7h.01" /></>),
  tiktok: (<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2.2 4.4 5 4.6" />),
  facebook: (<path d="M14.5 21v-7.5H17l.5-3h-3V8.6c0-.9.4-1.6 1.7-1.6h1.5V4.3A17 17 0 0 0 15.4 4C13 4 11.5 5.5 11.5 8v2.5H9v3h2.5V21" />),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>),
  calendar: (<><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>),
  search: (<><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></>),
  plus: (<path d="M12 5v14M5 12h14" />),
  sound: (<><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4v-5Z" /><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" /></>),
  mute: (<><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4v-5Z" /><path d="m16 9.5 5 5m0-5-5 5" /></>),
  play: (<path d="M8 5.5v13l10.5-6.5L8 5.5Z" />),
  menu: (<path d="M4 7h16M4 12h16M4 17h10" />),
  close: (<path d="m6 6 12 12M18 6 6 18" />),
  download: (<path d="M12 4v11m-4.5-4.5L12 15l4.5-4.5M5 20h14" />),
  mail: (<><rect x="3.5" y="5.5" width="17" height="13" rx="1.5" /><path d="m4 7 8 6 8-6" /></>),
  star: (<path d="m12 3.8 2.5 5.3 5.7.7-4.2 3.9 1.1 5.7L12 16.6l-5.1 2.8L8 13.7 3.8 9.8l5.7-.7L12 3.8Z" />),
};

export type IconName = Name;

export default function Icon({ name, className, size }: { name: Name; className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
    >
      {P[name]}
    </svg>
  );
}
