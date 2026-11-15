// Gallery content from the client's "NG SCREEN (VERTICAL).mp4" (the pub's in-venue screen loop),
// plus the brand-asset photography. Reels are 9:16 clips cut from the loop; posters are its
// still slides; "pub" photos are frames from its venue montage and the brand PDF.

export type Reel = { slug: string; title: string; caption: string; src: string; poster: string; duration: number; sound: boolean };

export const REELS: Reel[] = [
  {
    slug: "dubai-guide-review",
    title: "Inside Dubai Guide visits Nell’s",
    caption: "A Sunday roast, a cold pint and an honest verdict from Inside Dubai Guide.",
    src: "/video/reels/dubai-guide-review.mp4",
    poster: "/video/reels/dubai-guide-review.jpg",
    duration: 52,
    sound: true,
  },
  {
    slug: "quiz-launch",
    title: "Monday Night Live is here",
    caption: "Speed quizzing, music bingo, live games and prizes. Every Monday at 8pm.",
    src: "/video/reels/quiz-launch.mp4",
    poster: "/video/reels/quiz-launch.jpg",
    duration: 45,
    sound: true,
  },
  {
    slug: "inside-the-pub",
    title: "A look around the pub",
    caption: "Booths, darts, pool, big screens and a bar that knows your order.",
    src: "/video/reels/inside-the-pub.mp4",
    poster: "/video/reels/inside-the-pub.jpg",
    duration: 8,
    sound: true,
  },
  {
    slug: "speed-wagon",
    title: "Speed Wagon live",
    caption: "Speed Wagon, live at Nell Gwynne every Wednesday from 9pm.",
    src: "/video/reels/speed-wagon.mp4",
    poster: "/video/reels/speed-wagon.jpg",
    duration: 10,
    sound: true,
  },
  {
    slug: "thursday-live",
    title: "Thursday nights",
    caption: "Live music every Thursday from 9:30pm.",
    src: "/video/reels/thursday-live.mp4",
    poster: "/video/reels/thursday-live.jpg",
    duration: 9,
    sound: true,
  },
  {
    slug: "f1-heineken",
    title: "F1 × Heineken",
    caption: "Buy 2+ Heineken pints and qualify to win VIP tickets to the F1® season finale.",
    src: "/video/reels/f1-heineken.mp4",
    poster: "/video/reels/f1-heineken.jpg",
    duration: 5,
    sound: true,
  },
];

export type PosterCat = "weekly" | "music" | "seasonal" | "more";
export const POSTER_CATS: { id: PosterCat | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "weekly", label: "Weekly Offers" },
  { id: "music", label: "Live Music & DJs" },
  { id: "seasonal", label: "Seasonal" },
  { id: "more", label: "More" },
];

export type Poster = { slug: string; title: string; cat: PosterCat; alt: string };
const p = (slug: string, title: string, cat: PosterCat, alt: string): Poster => ({ slug, title, cat, alt });

export const POSTERS: Poster[] = [
  p("happy-hour", "It’s Always Happy Hour", "weekly", "Happy Hour poster: 12pm to 8pm"),
  p("taco-night", "Monday Taco Night", "weekly", "Monday Taco Night poster: tacos AED 9"),
  p("wings-night", "Tuesday Wings Night", "weekly", "Tuesday Wings Night poster: wings AED 3 only"),
  p("ladies-night", "Ladies Night", "weekly", "Ladies Night poster: Sunday to Wednesday, 8pm to midnight, 50% off selected food, selected drinks from AED 20"),
  p("lunch-deal", "Lunch Deal", "weekly", "Lunch Deal poster: 11am to 4:30pm, one menu item with a soft drink or house wine, AED 49"),
  p("everyday-breakfast", "Everyday Breakfast", "weekly", "Everyday Breakfast poster: from AED 49, Monday to Thursday from 11am, Friday to Sunday from 8am"),
  p("weekend-roast", "Weekend Roast", "weekly", "Weekend Roast poster: served 12pm to 6pm, beef, chicken or pork"),
  p("sunday-roast", "Sunday Roast", "weekly", "Sunday Roast poster: 11am to 2pm, Sunday roast AED 89, AED 1 pints for the first 50 pints"),
  p("25-before-5", "25 Before 5", "weekly", "25 Before 5 poster: selected standard drinks AED 25 Monday to Friday and AED 29 at weekends, 11am to 5pm"),
  p("wine-bottle-deal", "Wine Bottle Deal", "weekly", "Wine Bottle Deal poster: 12pm to 3am, selected bottle AED 129, buy one get one AED 229"),
  p("hospitality-50", "50% Off for Hospitality", "weekly", "Poster: 50% off food and beverage for hoteliers, airline crew and teachers, every Monday and Tuesday 7pm to 3am"),
  p("board-games", "Board Games Everyday", "weekly", "Board Games Everyday poster"),
  p("monday-quiz", "Monday Night Live Quiz", "music", "Monday Night Live quiz night poster: every Monday at 8pm"),
  p("dj-el-chabou", "DJ El Chabou", "music", "DJ El Chabou poster: every Tuesday and Sunday"),
  p("speed-wagon", "Speed Wagon", "music", "Speed Wagon poster: every Wednesday from 9pm"),
  p("cherry-bomb", "Cherry Bomb", "music", "Cherry Bomb poster: every Thursday at 9:30pm"),
  p("dj-val", "DJ Val", "music", "DJ Val poster: every Thursday and Saturday"),
  p("jack-the-hat", "Jack the Hat", "music", "Jack the Hat poster: live every Friday"),
  // "christmas-parties" is not shown: the poster in the source video is cut off on its right edge.
  // Add it back once the client sends the original file.
  p("christmas-day", "Christmas Day 2026", "seasonal", "Christmas Day brunch buffet and drinks packages poster"),
  p("boxing-day", "Boxing Day 2026", "seasonal", "Boxing Day packages poster"),
  p("new-years-eve", "New Year’s Eve 2027", "seasonal", "New Year’s Eve 2027 packages poster"),
  p("thanksgiving", "Thanksgiving Specials", "seasonal", "Thanksgiving specials poster: turkey and pint AED 129"),
  p("turkey-takeaway", "Whole Turkey Takeaway", "seasonal", "Whole turkey takeaway poster: AED 499"),
  p("nells-garden", "Nell’s Garden", "more", "Nell’s Garden poster: outdoor dining, pet friendly"),
  p("delivery", "Delivered to Your Door", "more", "Delivery poster: order on noon Food, talabat and Deliveroo"),
  p("whats-on-awards", "What’s On Awards 2027", "more", "Vote for Nell Gwynne for favourite pub grub at the What’s On Awards 2027"),
  p("follow-instagram", "Follow on Instagram", "more", "Follow @nellgwynnemarina on Instagram poster"),
  p("find-us-map", "Find Us", "more", "Map poster showing Nell Gwynne next to Marina Byblos Hotel on Al Hubob St, Dubai Marina"),
  p("carlsberg-uefa", "Carlsberg × UEFA Finals", "more", "Carlsberg UEFA finals poster: buy 2 pints, scratch and score"),
].map((x) => x);

export const posterSrc = (slug: string) => `/images/gallery/posters/${slug}.webp`;

export type PubPhoto = { src: string; alt: string; caption: string; w: number; h: number };

export const PUB_PHOTOS: PubPhoto[] = [
  { src: "/images/brand/bar-interior.webp", alt: "The wood-panelled bar at Nell Gwynne", caption: "The bar", w: 630, h: 350 },
  { src: "/images/gallery/pub/match-crowd-2.webp", alt: "Guests watching football at Nell Gwynne", caption: "Match night", w: 1080, h: 1920 },
  { src: "/images/brand/pint-and-burger.webp", alt: "A pint and a burger raised in cheers", caption: "Pints & burgers", w: 519, h: 519 },
  { src: "/images/gallery/pub/chalkboard.webp", alt: "Chalkboard: weekend forecast, expect heavy drinking", caption: "Weekend forecast", w: 1080, h: 1920 },
  { src: "/images/brand/match-crowd.webp", alt: "A packed crowd watching the match", caption: "Big game", w: 640, h: 427 },
  { src: "/images/gallery/pub/darts.webp", alt: "The dartboard on the stone wall", caption: "Darts", w: 1080, h: 1920 },
  { src: "/images/brand/full-english.webp", alt: "A Full English breakfast", caption: "The Full English", w: 640, h: 427 },
  { src: "/images/gallery/pub/booths.webp", alt: "Guests in the booths", caption: "The booths", w: 1080, h: 1920 },
  { src: "/images/brand/pool-and-food.webp", alt: "Pub food by the pool table", caption: "Pool & plates", w: 600, h: 400 },
  { src: "/images/gallery/pub/the-bar.webp", alt: "A busy evening in the main bar", caption: "Busy night", w: 1080, h: 1920 },
  { src: "/images/brand/bar-wide.webp", alt: "The bar and its stone pillar", caption: "Your local", w: 567, h: 378 },
  { src: "/images/gallery/pub/regulars.webp", alt: "Regulars chatting at a table", caption: "The regulars", w: 1080, h: 1920 },
  { src: "/images/gallery/pub/bar-stools.webp", alt: "Guests at the high tables", caption: "High tables", w: 1080, h: 1920 },
  { src: "/images/gallery/pub/jim-beam-bar.webp", alt: "The bar top", caption: "At the bar", w: 1080, h: 1920 },
  { src: "/images/site/pub-interior.webp", alt: "Flags and big screens over the bar", caption: "Flags up", w: 760, h: 1024 },
  { src: "/images/site/guinness-pour.webp", alt: "A pint of Guinness being poured", caption: "The perfect pour", w: 1131, h: 1600 },
];
