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
];

export const FOOTER_LINKS = {
  quick: [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Our Menu" },
    { href: "/special-offers", label: "Special Offers" },
    { href: "/about", label: "About Us" },
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
    price: "AED 49",
    copy: "Midweek plans? Sorted. Dive into a stack of wings, sauce everywhere, cold pint in hand. Loud sports, louder crowd. You won’t leave hungry.",
    image: "/images/site/offer-wings-night.webp",
  },
  {
    slug: "quiz-night",
    title: "Quiz Night",
    when: "Monday · from 7pm",
    copy: "Not your average pub quiz. Bring the crew, grab a pint, and show off those random facts. Win drinks, lose pride, either way, it’s a good time.",
    image: "/images/site/offer-quiz-night.webp",
  },
  {
    slug: "ladies-night",
    title: "Ladies Night",
    when: "Sun – Wed · 8pm – 12am",
    price: "AED 20 drinks",
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
      { time: "5pm – 11pm", title: "Monday Taco Night", detail: "3 tacos + fries + soft drink. Chicken, beef or veg. Extra tacos AED 9 each (min. 2).", price: "AED 49" },
      { time: "From 7pm", title: "Quiz Night", detail: "Gather your squad, grab a pint, and put your knowledge to the test." },
      { time: "8pm – 12am", title: "Ladies Night", detail: "50% off all selected food items · AED 20 selected house spirits, wines & frozen cocktails." },
    ],
  },
  {
    day: "Tuesday",
    short: "Tue",
    items: [
      { time: "5pm – 11pm", title: "Tuesday Wings Night", detail: "6 wings + fries + soft drink. Classic Buffalo, Honey Garlic Peri-Peri or Smoky BBQ. Extra wings AED 3 each.", price: "AED 49" },
      { time: "Evening", title: "Board Games & Live Music", detail: "Gather your mates, grab a pint, and dive into a fun night of board games every Tuesday." },
      { time: "8pm – 12am", title: "Ladies Night", detail: "50% off all selected food items · AED 20 selected house spirits, wines & frozen cocktails." },
    ],
  },
  {
    day: "Wednesday",
    short: "Wed",
    items: [
      { time: "12pm – 12am", title: "Wednesday Pie Night", detail: "Buy 1 get 1 offer.", price: "AED 99" },
      { time: "8pm – 12am", title: "Ladies Night", detail: "50% off all selected food items · AED 20 selected house spirits, wines & frozen cocktails." },
    ],
  },
  {
    day: "Thursday",
    short: "Thu",
    items: [
      { time: "12pm – 12am", title: "Bangers & Mash", detail: "Buy 1 get 1 offer.", price: "AED 99" },
      { time: "All day", title: "Match Night", detail: "European football and big fixtures on every screen." },
    ],
  },
  {
    day: "Friday",
    short: "Fri",
    items: [{ time: "All day", title: "Pork Back Ribs", detail: "Special offer on Fridays: buy 1 get 1.", price: "AED 199" }],
  },
  {
    day: "Saturday",
    short: "Sat",
    items: [
      { time: "9am – 3pm", title: "Weekend Breakfast", detail: "Saturday and Sunday from 9am to 3pm.", price: "AED 45" },
      { time: "Brunch", title: "Saturday Roast Brunch", detail: "Roast potato, seasoned vegetables, Yorkshire pudding, cauliflower cheese & gravy, with 3 hours unlimited selected house beverages (AED 169 with soft beverages).", price: "AED 199" },
      { time: "All day", title: "Wings Night", detail: "Every Saturday buy 1 get 1 offer.", price: "AED 99" },
    ],
  },
  {
    day: "Sunday",
    short: "Sun",
    items: [
      { time: "9am – 3pm", title: "Weekend Breakfast", detail: "Saturday and Sunday from 9am to 3pm.", price: "AED 45" },
      { time: "All day", title: "Sunday Roast", detail: "Every Sunday buy 1 get 1 offer.", price: "AED 129" },
      { time: "8pm – 12am", title: "Ladies Night", detail: "50% off all selected food items · AED 20 selected house spirits, wines & frozen cocktails." },
    ],
  },
];

export const DAILY = [
  { time: "12pm – 8pm", title: "Happy Hour", detail: "Discounted drinks every single day." },
  { time: "12pm – 4:30pm", title: "Lunch Time", detail: "Lunch with a glass of wine or soft beverage.", price: "AED 45" },
];

export const EVENTS = [
  {
    title: "Christmas Day",
    date: "25 December · 12pm – 6pm",
    copy: "Carving station, live music by Cherry Bomb and a live DJ till close.",
    packages: [
      { name: "Silver", price: "AED 169", detail: "2 house beverages + carving station" },
      { name: "Gold", price: "AED 229", detail: "4 house beverages + carving station" },
      { name: "Platinum", price: "AED 349", detail: "Unlimited house beverages for 2 hours + carving station" },
    ],
    image: "/images/site/event-christmas.webp",
  },
  {
    title: "Boxing Day",
    date: "26 December",
    copy: "Recover in style with a proper British spread and the football on.",
    packages: [
      { name: "3-Course Menu", price: "AED 145", detail: "Starter, main & pudding" },
      { name: "2 Hours Drinks", price: "AED 249", detail: "Selected house beverages" },
    ],
    image: "/images/site/event-boxing-day.webp",
  },
  {
    title: "Festive Roast Turkey",
    date: "All December",
    copy: "Slow-roasted with all the trimmings. Dine in or take away.",
    packages: [
      { name: "Single Portion", price: "AED 99", detail: "Served at the venue" },
      { name: "Whole Turkey", price: "AED 550", detail: "Pre-order 24 hours ahead" },
    ],
    image: "/images/menu/sunday-roast-wide.webp",
  },
  {
    title: "New Year’s Eve",
    date: "31 December · Live DJ 12pm – 8pm",
    copy: "Ring in the New Year at your local with a live DJ, bubbles and a packed bar.",
    packages: [{ name: "Walk-ins welcome", price: "Book ahead", detail: "Tables fill fast on the 31st" }],
    image: "/images/site/event-new-year.webp",
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

export type SocialPost = { url: string; caption: string; image: string; video?: string };

export const SOCIAL_POSTS: SocialPost[] = [
  { url: "https://www.instagram.com/p/DRhKWZxDHUq/", caption: "Introducing The Gentle Pour: 60% Guinness 0.0, 40% Guinness 4.2.", image: "/images/site/guinness-pour.webp" },
  // venue reel supplied by the client (NELL VIDEO.mp4), reframed to 9:16 without cropping
  { url: "https://www.instagram.com/nellgwynnemarina/", caption: "Live music, cocktails and match nights at Nell Gwynne.", image: "/video/nell-reel-poster.jpg", video: "/video/nell-reel.mp4" },
  { url: "https://www.instagram.com/p/DSInxawCcMZ/", caption: "Christmas Day just got better. Silver, Gold & Platinum packages.", image: "/images/site/event-christmas.webp" },
  { url: "https://www.instagram.com/p/DROUDkkkz6L/", caption: "Monday Quiz Night champions! Every Monday from 7pm.", image: "/images/site/offer-quiz-night.webp" },
  { url: "https://www.instagram.com/p/DSKZJoFjLS_/", caption: "True British vibes, great food, cold drinks and every match live.", image: "/images/site/pub-interior.webp" },
  { url: "https://www.instagram.com/p/DRBbkvzE49_/", caption: "Fight Night returns, live on our big screens.", image: "/images/site/offer-live-events.webp" },
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
