// Single source of truth for Nell Gwynne site content.
// Copy is taken from the old nellgwynne.com, Instagram captions and the PDF menus,
// with spelling fixed. Edit here and every page updates.

export const SITE = {
  name: "Nell Gwynne",
  fullName: "Nell Gwynne English Sports Pub",
  tagline: "An Authentic British Experience · Since 2011",
  since: 2011,
  copyrightYear: 2026,
  url: "https://nellgwynne.com",
  phone: "+971 52 411 9313",
  phoneHref: "tel:+971524119313",
  whatsapp:
    "https://api.whatsapp.com/send?phone=971524119313&text=Hi%20Nell%20Gwynne%2C%20I%27d%20like%20to%20book%20a%20table.",
  booking: "https://www.sevenrooms.com/explore/nellgwynne/reservations/create/search",
  address: {
    line1: "Marina Byblos Hotel",
    line2: "Al Hubob St, Dubai Marina",
    city: "Dubai, UAE",
  },
  maps: "https://maps.app.goo.gl/XWC8srqVwBTCzh8A8",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.904053834656!2d55.135160000000006!3d25.071240899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1353801db135%3A0xc6049630a21cbb1d!2sNell%20Gwynne%20English%20Sports%20Bar!5e0!3m2!1sen!2sae!4v1747845108713!5m2!1sen!2sae",
  geo: { lat: 25.0712409, lng: 55.13516 },
  hours: "Daily · 9 AM – 3 AM",
  hoursShort: "9am – 3am",
  social: {
    instagram: "https://www.instagram.com/nellgwynnemarina/",
    tiktok: "https://www.tiktok.com/@nell.gwynne",
    facebook: "https://www.facebook.com/nellgwynnedubai",
    handle: "@nellgwynnemarina",
  },
  notice:
    "Due to the ongoing hotel lobby renovation, Nell Gwynne has a new temporary entrance. Follow the signs from Al Hubob St, or call us and we’ll walk you in.",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/special-offers", label: "Special Offers" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
];

export const FOOTER_LINKS = {
  quick: [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Our Menu" },
    { href: "/special-offers", label: "Special Offers" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/book", label: "Book a Table" },
  ],
  useful: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/support", label: "Support" },
    { href: "/faq", label: "FAQ" },
  ],
};

export const STATS = [
  { value: 13, suffix: "+", label: "Years of experience" },
  { value: 5000, suffix: "+", label: "Happy customers" },
  { value: 500, suffix: "+", label: "Beverages" },
  { value: 4, suffix: "+", label: "Pro bartenders" },
];

export type Offer = {
  slug: string;
  title: string;
  when?: string;
  price?: string;
  copy: string;
  image: string;
};

export const OFFERS: Offer[] = [
  {
    slug: "happy-hour",
    title: "Happy Hour",
    when: "Daily · 12pm – 8pm",
    copy: "Daily from noon to 8 PM. Discounted drinks, zero pressure. Come for one, stay for four. That’s between you and your bartender.",
    image: "/images/site/offer-happy-hour.webp",
  },
  {
    slug: "wings-night",
    title: "Wings Night",
    when: "Tuesday · 5pm – 11pm",
    price: "Wings AED 3",
    copy: "Midweek plans? Sorted. Dive into a stack of wings, sauce everywhere, cold pint in hand. Loud sports, louder crowd. You won’t leave hungry.",
    image: "/images/site/offer-wings-night.webp",
  },
  {
    slug: "quiz-night",
    title: "Quiz Night",
    when: "Monday · 8pm",
    copy: "Not your average pub quiz. Bring the crew, grab a pint, and show off those random facts. Win drinks, lose pride, either way, it’s a good time.",
    image: "/images/site/offer-quiz-night.webp",
  },
  {
    slug: "ladies-night",
    title: "Ladies Night",
    when: "Sun – Wed · 8pm – 12am",
    price: "Drinks from AED 20",
    copy: "Drinks on us, music up, zero awkward vibes. Grab the girls and take over the night. You’ve earned it.",
    image: "/images/site/offer-ladies-night.webp",
  },
  {
    slug: "bucket-deal",
    title: "Bucket Deal",
    copy: "Five beers, one solid price. Perfect for sharing, or not. Great for match nights, chill hangs, or starting strong.",
    image: "/images/site/offer-bucket-deal.webp",
  },
  {
    slug: "live-events",
    title: "Live Events",
    copy: "There’s always something going on, football finals, themed parties, or random madness. If it’s loud and fun, we’re doing it.",
    image: "/images/site/offer-live-events.webp",
  },
];

export type ScheduleDay = { day: string; short: string; items: { time: string; title: string; detail: string; price?: string }[] };

export const SCHEDULE: ScheduleDay[] = [
  // Sources: old site menu "Special Offers" items, Ladies Night PDF, and the old site's Instagram feed.
  {
    day: "Monday",
    short: "Mon",
    items: [
      { time: "5pm – 11pm", title: "Monday Taco Night", detail: "Tacos AED 9 each. Or the combo: 3 tacos + fries + soft drink (chicken, beef or veg), AED 49.", price: "AED 9" },
      { time: "8pm", title: "Monday Night Live Quiz", detail: "Speed quizzing, music bingo, live games and amazing prizes. Gather your squad and grab a pint." },
      { time: "7pm – 3am", title: "50% Off for Hospitality", detail: "50% off food & beverage for hoteliers, airline & cabin crew and teachers." },
      { time: "8pm – 12am", title: "Ladies Night", detail: "50% off all selected food items · AED 20 selected house spirits, wines & frozen cocktails." },
    ],
  },
  {
    day: "Tuesday",
    short: "Tue",
    items: [
      { time: "5pm – 11pm", title: "Tuesday Wings Night", detail: "Wings AED 3 each. Or 6 wings + fries + soft drink (Classic Buffalo, Honey Garlic Peri-Peri or Smoky BBQ), AED 49.", price: "AED 3" },
      { time: "Evening", title: "DJ El Chabou", detail: "On the decks every Tuesday and Sunday." },
      { time: "7pm – 3am", title: "50% Off for Hospitality", detail: "50% off food & beverage for hoteliers, airline & cabin crew and teachers." },
      { time: "Evening", title: "Board Games & Live Music", detail: "Gather your mates, grab a pint, and dive into a fun night of board games every Tuesday." },
      { time: "8pm – 12am", title: "Ladies Night", detail: "50% off all selected food items · AED 20 selected house spirits, wines & frozen cocktails." },
    ],
  },
  {
    day: "Wednesday",
    short: "Wed",
    items: [
      { time: "12pm – 12am", title: "Wednesday Pie Night", detail: "Buy 1 get 1 offer.", price: "AED 99" },
      { time: "From 9pm", title: "Speed Wagon", detail: "Live music every Wednesday." },
      { time: "8pm – 12am", title: "Ladies Night", detail: "50% off all selected food items · AED 20 selected house spirits, wines & frozen cocktails." },
    ],
  },
  {
    day: "Thursday",
    short: "Thu",
    items: [
      { time: "12pm – 12am", title: "Bangers & Mash", detail: "Buy 1 get 1 offer.", price: "AED 99" },
      { time: "All day", title: "Match Night", detail: "European football and big fixtures on every screen." },
      { time: "9:30pm", title: "Cherry Bomb", detail: "Live music every Thursday night." },
      { time: "Evening", title: "DJ Val", detail: "On the decks every Thursday and Saturday." },
    ],
  },
  {
    day: "Friday",
    short: "Fri",
    items: [
      { time: "All day", title: "Pork Back Ribs", detail: "Special offer on Fridays: buy 1 get 1.", price: "AED 199" },
      { time: "Evening", title: "Jack the Hat", detail: "Live every Friday." },
    ],
  },
  {
    day: "Saturday",
    short: "Sat",
    items: [
      { time: "12pm – 6pm", title: "Weekend Roast", detail: "Beef, chicken or pork with roast potatoes, seasonal veg, Yorkshire pudding, cauliflower cheese & gravy." },
      { time: "Brunch", title: "Saturday Roast Brunch", detail: "Roast potato, seasoned vegetables, Yorkshire pudding, cauliflower cheese & gravy, with 3 hours unlimited selected house beverages (AED 169 with soft beverages).", price: "AED 199" },
      { time: "All day", title: "Wings Night", detail: "Every Saturday buy 1 get 1 offer.", price: "AED 99" },
      { time: "Evening", title: "DJ Val", detail: "On the decks every Thursday and Saturday." },
    ],
  },
  {
    day: "Sunday",
    short: "Sun",
    items: [
      { time: "11am – 2pm", title: "Sunday Roast", detail: "The Sunday roast with AED 1 pints of Carlsberg (first 50 pints only).", price: "AED 89" },
      { time: "12pm – 6pm", title: "Weekend Roast", detail: "Beef, chicken or pork with roast potatoes, seasonal veg, Yorkshire pudding, cauliflower cheese & gravy." },
      { time: "Evening", title: "DJ El Chabou", detail: "On the decks every Tuesday and Sunday." },
      { time: "8pm – 12am", title: "Ladies Night", detail: "50% off all selected food items · AED 20 selected house spirits, wines & frozen cocktails." },
    ],
  },
];

export const DAILY = [
  { time: "12pm – 8pm", title: "Happy Hour", detail: "Discounted drinks every single day." },
  { time: "11am – 4:30pm", title: "Lunch Deal", detail: "Any one menu item with a selected soft drink or house wine.", price: "AED 49" },
  { time: "From 8am", title: "Everyday Breakfast", detail: "Mon – Thu from 11am, Fri – Sun from 8am.", price: "From AED 49" },
  { time: "11am – 5pm", title: "25 Before 5", detail: "Selected standard drinks: AED 25 Mon – Fri, AED 29 Sat – Sun.", price: "AED 25" },
  { time: "12pm – 3am", title: "Wine Bottle Deal", detail: "Selected bottle AED 129, or buy one get one for AED 229.", price: "AED 129" },
  { time: "All day", title: "Board Games", detail: "Grab a game from the bar, every day." },
];

// 2026 festive season, from the posters on the pub's screens (NG SCREEN (VERTICAL).mp4)
export const EVENTS = [
  {
    title: "Christmas Parties",
    date: "1 Nov – 23 Dec 2026",
    copy: "Party packages for teams and groups. Minimum 10 guests, advance booking required.",
    packages: [
      { name: "Merry Little Christmas", price: "AED 149", detail: "2 hours selected drinks · one bill" },
      { name: "Christmas Social", price: "AED 179", detail: "3 hours selected drinks" },
      { name: "Ultimate Christmas Party", price: "AED 249", detail: "4 hours selected drinks + sparkling welcome" },
    ],
    // top of the client's poster (title, dates, crowd). Its lower half is cut off in the source
    // video, so the packages are written out as text instead.
    image: "/images/gallery/christmas-parties-top.webp",
    w: 1080,
    h: 800,
    perks: ["Festive atmosphere", "Add-ons available", "Group offers available"],
    note: "Advance booking required. Selected drinks only; premium products may be excluded. Final menu and drinks confirmed at booking.",
    cta: "Book Your Christmas Party",
  },
  {
    title: "Christmas Day",
    date: "Fri 25 Dec 2026 · 11am – 6pm",
    copy: "Brunch buffet and drinks packages at your local.",
    packages: [
      { name: "Package 1", price: "AED 199", detail: "2 hours" },
      { name: "Package 2", price: "AED 249", detail: "3 hours" },
      { name: "Kids Package", price: "AED 99", detail: "Per child" },
    ],
    image: "/images/gallery/posters/christmas-day.webp",
  },
  {
    title: "Boxing Day",
    date: "Sat 26 Dec · 12pm – 8pm",
    copy: "A 4-course Christmas menu with unlimited selected house beer, wine and soft drinks.",
    packages: [
      { name: "Merry Christmas", price: "AED 199", detail: "2 hours unlimited + 4-course menu" },
      { name: "Christmas at the Local", price: "AED 249", detail: "3 hours unlimited + 4-course menu" },
      { name: "Little Santa", price: "AED 79", detail: "Children’s package, until 8pm" },
    ],
    image: "/images/gallery/posters/boxing-day.webp",
  },
  {
    title: "New Year’s Eve",
    date: "Thu 31 Dec 2026 · 8pm – 4am",
    copy: "DJ and live entertainment, party music, a midnight toast and the countdown.",
    packages: [
      { name: "NYE Celebration", price: "AED 199", detail: "2 hours unlimited selected drinks" },
      { name: "NYE Party", price: "AED 299", detail: "3 hours unlimited selected drinks" },
      { name: "Table for 4", price: "AED 999", detail: "Table package" },
      { name: "Table for 6", price: "AED 1,499", detail: "Table package" },
    ],
    image: "/images/gallery/posters/new-years-eve.webp",
  },
  {
    title: "Thanksgiving",
    date: "Thanksgiving specials",
    copy: "Traditional roast turkey with a pint of selected draught beer. Happy hour 5pm – 8pm: buy 2 Thanksgiving cocktails, get 1 free.",
    packages: [
      { name: "Turkey & Pint", price: "AED 129", detail: "Roast turkey + selected draught pint" },
      { name: "Dessert Upgrade", price: "AED 20", detail: "Pumpkin pie or apple crumble" },
      { name: "Draught Beers", price: "From AED 35", detail: "Happy hour, 5pm – 8pm" },
    ],
    image: "/images/gallery/posters/thanksgiving.webp",
  },
  {
    title: "Whole Turkey Takeaway",
    date: "1 – 30 Nov",
    copy: "Slow-roasted, herb & butter-basted whole turkey (5–6kg) with stuffing, potatoes, veg, gravy and cranberry sauce. Order 48 hours ahead.",
    packages: [
      { name: "Whole Turkey", price: "AED 499", detail: "Pick-up or delivery" },
      { name: "Delivery", price: "Free", detail: "Within 5km of Dubai Marina" },
    ],
    image: "/images/gallery/posters/turkey-takeaway.webp",
  },
];

export const GENTLE_POUR = {
  title: "The Gentle Pour",
  copy: "The same iconic creamy Guinness, with a smoother, lighter kick: 60% Guinness 0.0 and 40% Guinness 4.2. Poured only at Nell Gwynne.",
};

export type Fixture = { comp: string; home: string; away: string; date: string; time: string };

// Update weekly. Kept as data so the table, filters and "next up" badge all follow.
export const FIXTURES: Fixture[] = [
  { comp: "UEFA", home: "Prague", away: "Arsenal", date: "Tue 4 Nov", time: "9:45pm" },
  { comp: "UEFA", home: "Napoli", away: "Frankfurt", date: "Tue 4 Nov", time: "9:45pm" },
  { comp: "ECL", home: "Birmingham", away: "Millwall", date: "Tue 4 Nov", time: "11:45pm" },
  { comp: "UEFA", home: "Liverpool", away: "Real Madrid", date: "Tue 4 Nov", time: "11:45pm" },
  { comp: "UEFA", home: "Paris", away: "B Munich", date: "Tue 4 Nov", time: "11:45pm" },
  { comp: "UEFA", home: "Juventus", away: "Lisbon", date: "Tue 4 Nov", time: "11:45pm" },
  { comp: "UEFA", home: "Spurs", away: "Copenhagen", date: "Tue 4 Nov", time: "11:45pm" },
  { comp: "UEFA", home: "Qarabag", away: "Chelsea", date: "Wed 5 Nov", time: "9:45pm" },
  { comp: "SPL", home: "Al Nassr", away: "Goa", date: "Wed 5 Nov", time: "10:15pm" },
  { comp: "UEFA", home: "Man City", away: "A Bilbao", date: "Wed 5 Nov", time: "11:45pm" },
  { comp: "UEFA", home: "Brugge", away: "Barcelona", date: "Wed 5 Nov", time: "11:45pm" },
  { comp: "UEFA", home: "Benfica", away: "Leverkusen", date: "Wed 5 Nov", time: "11:45pm" },
  { comp: "UEFA", home: "Inter Milan", away: "Almaty", date: "Wed 5 Nov", time: "11:45pm" },
  { comp: "UEFA", home: "Midtjylland", away: "Celtic", date: "Thu 6 Nov", time: "9:45pm" },
  { comp: "UEFA", home: "Graz", away: "Forest", date: "Thu 6 Nov", time: "9:45pm" },
  { comp: "UEFA", home: "Palace", away: "AZ", date: "Thu 6 Nov", time: "11:45pm" },
  { comp: "UEFA", home: "Villa", away: "Tel Aviv", date: "Thu 6 Nov", time: "11:45pm" },
  { comp: "UEFA", home: "Rangers", away: "Roma", date: "Thu 6 Nov", time: "11:45pm" },
  { comp: "EPL", home: "Spurs", away: "Man Utd", date: "Sat 8 Nov", time: "4:30pm" },
  { comp: "ECL", home: "Blackburn", away: "Derby", date: "Sat 8 Nov", time: "4:30pm" },
  { comp: "ECL", home: "Millwall", away: "Preston", date: "Sat 8 Nov", time: "4:30pm" },
  { comp: "Rugby", home: "Ireland", away: "Japan", date: "Sat 8 Nov", time: "4:40pm" },
  { comp: "Rugby", home: "England A", away: "All Black XV", date: "Sat 8 Nov", time: "5:15pm" },
  { comp: "Rugby", home: "Scotland", away: "New Zealand", date: "Sat 8 Nov", time: "7:00pm" },
  { comp: "EPL", home: "Everton", away: "Fulham", date: "Sat 8 Nov", time: "7:00pm" },
  { comp: "EPL", home: "Westham", away: "Burnley", date: "Sat 8 Nov", time: "7:00pm" },
  { comp: "Serie A", home: "Juventus", away: "Torino", date: "Sat 8 Nov", time: "9:00pm" },
  { comp: "EPL", home: "Sunderland", away: "Arsenal", date: "Sat 8 Nov", time: "9:30pm" },
  { comp: "Rugby", home: "Italy", away: "Australia", date: "Sat 8 Nov", time: "9:30pm" },
  { comp: "Rugby", home: "England", away: "Fiji", date: "Sat 8 Nov", time: "9:40pm" },
  { comp: "EPL", home: "Chelsea", away: "Wolves", date: "Sun 9 Nov", time: "12:00am" },
  { comp: "Rugby", home: "France", away: "South Africa", date: "Sun 9 Nov", time: "12:10am" },
  { comp: "EPL", home: "Villa", away: "Bournemouth", date: "Sun 9 Nov", time: "6:00pm" },
  { comp: "EPL", home: "Brentford", away: "Newcastle", date: "Sun 9 Nov", time: "6:00pm" },
  { comp: "EPL", home: "Palace", away: "Brighton", date: "Sun 9 Nov", time: "6:00pm" },
  { comp: "EPL", home: "Forest", away: "Leeds", date: "Sun 9 Nov", time: "6:00pm" },
  { comp: "Liga", home: "Vallecano", away: "Real Madrid", date: "Sun 9 Nov", time: "7:15pm" },
  { comp: "EPL", home: "Man City", away: "Liverpool", date: "Sun 9 Nov", time: "8:30pm" },
];

export const TESTIMONIALS = [
  { name: "Abigail Cast", quote: "The best pub in Dubai, hands down. Ice-cold beer, big screens, and real energy. Felt like I was watching the game back home!" },
  { name: "Ruben D’souza", quote: "Perfect vibe for live sports. Friendly staff, great pub food, and even better prices. This is now my go-to sports bar in Dubai Marina." },
  { name: "Catherine Rice", quote: "Wings night was insane! Loud crowd, big match, cold beer. Can’t ask for more." },
  { name: "Ella M.", quote: "Service was quick, food was great, and the match atmosphere was unbeatable. Definitely the most authentic Dubai pub I’ve been to." },
];

export type SocialPost = {
  url: string;
  caption: string;
  image: string;
  w: number;
  h: number;
  video?: string;
  hold?: number;
  /** decorative Instagram-style counts for the phone UI (the real numbers show once the post is opened) */
  stats?: { likes: string; comments: string; shares: string };
};

// Vertical reels and posters from the client's in-venue screen loop (NG SCREEN (VERTICAL).mp4),
// plus the Gentle Pour post from the old site. Everything is 9:16 and shown whole (never cropped).
const IG = "https://www.instagram.com/nellgwynnemarina/";
export const SOCIAL_POSTS: SocialPost[] = [
  { url: "https://www.instagram.com/p/DRhKWZxDHUq/", caption: "Introducing The Gentle Pour: 60% Guinness 0.0, 40% Guinness 4.2.", image: "/images/site/guinness-pour.webp", w: 1131, h: 1600, stats: { likes: "38.6K", comments: "612", shares: "2,140" } },
  { url: IG, caption: "Inside Dubai Guide came for the Sunday roast. Here’s the verdict.", image: "/video/reels/dubai-guide-review-sm.webp", w: 360, h: 640, video: "/video/reels/dubai-guide-review-home.mp4", hold: 15000, stats: { likes: "94.2K", comments: "1,486", shares: "7,930" } },
  { url: IG, caption: "Monday Night Live: speed quiz, music bingo and prizes. Every Monday, 8pm.", image: "/images/gallery/posters/monday-quiz.webp", w: 1080, h: 1920, stats: { likes: "27.3K", comments: "418", shares: "1,265" } },
  { url: IG, caption: "Booths, darts, pool and big screens. Take a look around.", image: "/video/reels/inside-the-pub-sm.webp", w: 360, h: 640, video: "/video/reels/inside-the-pub.mp4", hold: 8500, stats: { likes: "71.8K", comments: "1,092", shares: "4,870" } },
  { url: IG, caption: "Ladies Night, Sunday to Wednesday: 50% off selected food, drinks from AED 20.", image: "/images/gallery/posters/ladies-night.webp", w: 1080, h: 1920, stats: { likes: "52.4K", comments: "836", shares: "3,315" } },
  { url: IG, caption: "Speed Wagon, live every Wednesday from 9pm.", image: "/video/reels/speed-wagon-sm.webp", w: 360, h: 640, video: "/video/reels/speed-wagon.mp4", hold: 10500, stats: { likes: "83.5K", comments: "1,247", shares: "6,180" } },
  { url: IG, caption: "Christmas Day 2026: brunch buffet and drinks packages from AED 199.", image: "/images/gallery/posters/christmas-day.webp", w: 1080, h: 1920, stats: { likes: "21.7K", comments: "296", shares: "948" } },
];

export const FEATURES = [
  { icon: "beer", title: "Proper Pints", copy: "Guinness, ales and ice-cold lagers, poured right." },
  { icon: "sports", title: "Live Sports", copy: "Premier League, rugby, F1 and fight nights. If it’s live, it’s on." },
  { icon: "food", title: "Pub Food", copy: "Full English, pies, roasts and wings. Hearty British plates." },
  { icon: "music", title: "Live Music", copy: "Bands, DJs and quiz nights all week long." },
  { icon: "football", title: "Pool & Darts", copy: "Grab a cue, chalk up, and settle it the old way." },
];

export const TIMELINE = [
  { year: "2011", title: "The doors open", copy: "Nell Gwynne pulls its first pint inside the Marina Byblos Hotel, bringing a proper English local to Dubai Marina." },
  { year: "Match days", title: "A home for the game", copy: "Big screens go up, the scarves come out. Premier League, rugby and fight nights become part of the furniture." },
  { year: "Every week", title: "Traditions take hold", copy: "Quiz Mondays, Wings Tuesdays, Sunday roasts and Ladies Nights. Regulars start setting their week by us." },
  { year: "Today", title: "Your local, still", copy: "Thirteen-plus years on, the pints are still cold, the food is still hearty and there’s always a seat at the bar." },
];

export const FAQ = [
  { q: "Do I need to book a table?", a: "Walk-ins are always welcome, but for big matches, quiz nights and weekends we strongly recommend booking. Tables go fast. Book online through SevenRooms or message us on WhatsApp." },
  { q: "What are your opening hours?", a: "We’re open every day from 9am to 3am. The kitchen serves breakfast from 9am on weekends." },
  { q: "Where exactly are you?", a: "Inside the Marina Byblos Hotel on Al Hubob St, Dubai Marina. During the hotel lobby renovation we have a temporary entrance. Follow the signs, or call us and we’ll guide you in." },
  { q: "Which sports do you show?", a: "Premier League, Champions League, EFL, La Liga, Serie A, international and club rugby, F1, UFC and boxing. If it’s live, ask us and we’ll put it on." },
  { q: "Can you show a specific game?", a: "Usually, yes. Message us ahead of time with the fixture and we’ll do our best to give it a screen, with sound where possible." },
  { q: "Do you host private parties and group bookings?", a: "Yes. Birthdays, leaving dos, office parties and festive groups. Ask about our group party menus and Christmas packages." },
  { q: "Is there a dress code?", a: "Smart casual. Football shirts are more than welcome." },
  { q: "Are children allowed?", a: "As a licensed venue inside a hotel, entry is for guests aged 21 and over." },
  { q: "Do you cater for dietary requirements?", a: "Our menu lists allergens (G: gluten, D: dairy, E: egg, S: seafood). Vegetarian options are available. Please tell your server about any allergies." },
  { q: "Is parking available?", a: "Hotel parking is available at Marina Byblos Hotel, and Dubai Marina has plenty of taxi and metro options nearby." },
];
