// ---------- Data ----------
// You can edit the items below or pull from a JSON API later.
const MENU_ITEMS = [

  // Starters

  { id:1, name:"WELSH RAREBIT", description:"Melted cheddar cheese, Worcestershire Sauce,House Salad and Branston Pickle", price:55, currency:"AED", category:"starters", img:"https://nellgwynne.com/wp-content/uploads/2025/10/WELSH-RAREBIT.jpeg", chefSpecial:false, isOffer:false },
  { id:2, name:"CHICKEN QUESADILLA", description:"Served With Tomato Salsa, Sour Cream & Guacamole", price:65, currency:"AED", category:"starters", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Chicken_Quesad.jpg", chefSpecial:false, isOffer:false },

  // Main

  { id:3, name:"CHICKEN TENDERS", description:"Golden Fried Chicken Strips With Chilly Garlic Mayo", price:65, currency:"AED", category:"starters", img:"https://nellgwynne.com/wp-content/uploads/2025/10/NellGwynne_Chicken-Tenders-GD_Kailash-35.jpg", chefSpecial:false, isOffer:false },

  { id:4, name:"Nell Gwynne BBQ Chicken 6 Wings", description:"Lemon caper butter, charred asparagus, and herb pilaf", price:45, currency:"AED", category:"starters", img:"https://nellgwynne.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-20.20.34.jpeg", chefSpecial:false, isOffer:false },

  { id:5, name:"Apple Crumble & Custard", description:"Warm spiced apple filling topped with a golden, buttery crumble. Served with vanilla ice cream and a side of custard.", price:50, currency:"AED", category:"desserts", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Apple-Crumble-Custard.jpeg", chefSpecial:false, isOffer:false },

  { id:6, name:"Grilled Pork Combo", description:"A hearty platter featuring BBQ pork ribs, grilled pork belly, juicy pork sausages, smoky grilled ham slices, and pulled pork sliders. Served with house-made slaw and dipping sauces perfect for sharing.", price:199, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Grilled-Pork-Combo-.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Homemade Pork Sausage Roll", description:"Flaky, golden puff pastry filled with seasoned pork sausage. Served with house salad and a side of tangy chutney.", price:79, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Homemade-Pork-Sausage-Roll-.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Chicken Cordon Blue", description:"Crispy breaded chicken breast stuffed with ham and cheese, served with baby potatoes, seasonal vegetables, and creamy mustard sauce.", price:95, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Chicken-Cordon-Blue-.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Full English Breakfast", description:"A traditional hearty breakfast with pork sausages, back bacon, black pudding, grilled tomato, baked beans, hash browns, sautéed mushrooms, and two fried eggs. Served with toasted bread and butter.", price:97, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Full-English-Breakfast-.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Pork Chops", description:"Grilled bone-in pork chops seasoned to perfection, served with creamy mashed potatoes, steamed seasonal vegetables, and rich peppercorn gravy.", price:79, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Pork-Chops-.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Sticky Pork Belly Bites", description:"Tender pork belly chunks glazed in a sweet and spicy sticky sauce, garnished with fresh herbs. Served with garlic bread, house salad, and a creamy dipping sauce.", price:67, currency:"AED", category:"starters", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Sticky-Pork-Belly-Bites-.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Nells Tex Mex Basket (Sharing Platters) ", description:"A loaded sharing platter of crispy onion rings, battered fish fingers, popcorn chicken, curly fries, and golden-fried onion petals. Comes with BBQ and tartar dipping sauces.", price:89, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Nells-Tex-Mex-Basket-Sharing-Platters-.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Snack Basket (Sharing Platters) ", description:"A delicious mix of crispy onion rings, vegetable pakoras, mozzarella sticks, jalapeño poppers, and golden fries. Served with green chutney and tartar sauce for dipping.", price:69, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Snack-Basket-Sharing-Platters-.jpeg", chefSpecial:false, isOffer:false },





  { id:7, name:"Beef Taco", description:"Three crunchy taco shells filled with seasoned minced beef, melted cheese, fresh lettuce, tomato, and red onion. Served with guacamole, sour cream, and salsa on the side.", price:59, currency:"AED", category:"starters", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Beef-Taco-.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Vegetables Taco", description:"Three crispy taco shells filled with sautéed mixed vegetables, melted cheese, lettuce, tomato, and red onion. Served with guacamole, sour cream, and salsa.", price:59, currency:"AED", category:"starters", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Vegetables-Taco.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Chicken Taco", description:"Three crunchy taco shells filled with spiced grilled chicken, melted cheese, lettuce, tomato, and red onion. Served with guacamole, sour cream, and fresh salsa.", price:59, currency:"AED", category:"starters", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Chicken-Taco.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Loaded Beef Nachos", description:"Crispy tortilla chips layered with seasoned minced beef, melted cheese, and hearty beans. Served with fresh guacamole, sour cream, and salsa on the side.", price:62, currency:"AED", category:"starters", img:"https://nellgwynne.com/wp-content/uploads/2025/10/loaded-beef-nacho.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Loaded Chicken Nachos", description:"Crunchy tortilla chips piled high with spiced grilled chicken, melted cheese, and sautéed peppers. Served with salsa, sour cream, and guacamole for dipping delight.", price:62, currency:"AED", category:"starters", img:"https://nellgwynne.com/wp-content/uploads/2025/10/loaded-beef-nacho.jpeg", chefSpecial:false, isOffer:false },



  { id:7, name:"Onion Rings Basket", description:"Crispy, golden, these freshly fried onion rings are served in basket, paired with creamy mayo and tangy BBQ dipping.", price:37, currency:"AED", category:"salads", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Onion-Rings-Basket-.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Cheesy Garlic Bread", description:"Toasted garlic bread topped with melted cheese, served with sides of mayonnaise and ketchup. Warm, cheesy", price:32, currency:"AED", category:"salads", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Cheesy-Garlic-Bread-.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Edamame", description:"Lightly sprinkle salted steamed edamame served in bowl simple, healthy and packed with flavor.", price:40, currency:"AED", category:"salads", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Edamame.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Curly Fries Basket", description:"Golden and crispy curly fries served fresh in a basket, accompanied by creamy mayo and rich BBQ sauce perfectly.", price:55, currency:"AED", category:"salads", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Curly-Fries-Basket-.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"French Fries Basket", description:"Classic golden French fries served in a basket with a side of creamy mayo and rich BBQ sauce.", price:55, currency:"AED", category:"salads", img:"https://nellgwynne.com/wp-content/uploads/2025/10/French-Fries-Basket-.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Sweet Potato", description:"Sweet potato fries served in a basket with a side of creamy mayo and rich bbq sauce.", price:55, currency:"AED", category:"salads", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Sweet-Potato.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Dark and Stormy", description:"FRESH GINGER, GINGER ALE, LIME JUICE TOPPED WITH DARK RUM", price:72, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Dark-and-Stormy.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Ginger Red Wine Spritzer", description:"RED WINE, GINGER ALE, CHERRY LIQUEUR", price:72, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Ginger-Red-Wine-Spritzer.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Espresso Martini", description:"VODKA, KAHLUA, COFFEE", price:83, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Espresso-Martini.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Marmalade Martini", description:"VODKA, LEMON JUICE, MARMALADE & COINTREAU", price:83, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Marmalade-Martini.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Porn Star Martini", description:"VODKA, VANILLA SYRUP, PASSION FRUIT PUREE, LIME JUICE", price:83, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Porn-Star-Martini.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Negroni Sgwynne", description:"APEROL OR CAMPARI, ROSSO VERMOUTH, LEMON JUICE,SPARKLING WINE TOPPED AND SODA WATER", price:83, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Negroni-Sgwynne.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"WOO WOO", description:"VODKA, LEMON JUICE, PEACH SCHNAPPS & CRANBERRY JUICE", price:69, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/WOO-WOO.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Mai Tai", description:"WHITE RUM, ORANGE JUICE, LEMON JUICE, PINEAPPLE JUICE", price:63, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Mai-Tai-.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"BLACK RUSSIAN", description:"VODKA, KAHLU", price:67, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/BLACK-RUSSIAN.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"STRAWBERRY DIAQUIRI", description:"WHITE RUM, STRAWBERRY SYRUP, LIME JUICE, SUGAR SYRUP, TOPPED WITH SODA WATER", price:63, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/STRAWBERRY-DIAQUIRI.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"MARGARITA", description:"TEQUILA, TRIPLE SEC, LIME JUICE, SUGAR SYRUP", price:63, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/MARGARITA.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"COSMOPOLITAN", description:"VODKA, LIME JUICE, SUGAR SYRUP, CRANBERRY JUICE", price:63, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/COSMOPOLITAN.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"MOSCOW MULE", description:"VODKA, LIME JUICE TOPPED WITH GINGER ALE", price:63, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/MOSCOW-MULE.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"TEQUILA SUNRISE", description:"TEQUILA, ORANGE JUICE WITH DASH OF GRENADINE", price:63, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/TEQUILA-SUNRISE.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Bullfrog", description:"VODKA, RUM, GIN, TEQUILA, RED BULL, BLUE CURACAO", price:63, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Bullfrog.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Long Island Iced Tea", description:"VODKA, GIN, RUM, TEQUILA, LEMON JUICE, TRIPE SEC, SUGAR, COLA", price:67, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Long-Island-Iced-Tea.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Mojito", description:"RUM, FRESH LIME, MINT, SUGAR SYRUP, SODA WATER", price:63, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Mojito.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Jim Beam Ginger Highball", description:"RUM, FRESH LIME, MINT, SUGAR SYRUP, SODA WATER", price:72, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Jim-Beam-Ginger-Highball.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Jim Beam Apple Highball", description:"JIM BEAM APPL, TONIC WATER, LIME", price:72, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Jim-Beam-Apple-Highball.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Jim Beam Honey Highball", description:"JIM BEAM HONEY, SODA WATER, ORANGE", price:72, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Jim-Beam-Honey-Highball.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Jim Beam Black Cherry Highball", description:"JIM BEAM RED STAG, COLA, GRAPEFRUIT", price:72, currency:"AED", category:"drinks", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Jim-Beam-Black-Cherry-Highball.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Lunch Time", description:"lunch with glass of wine or soft beverage 12:00 pm - 4:30 pm.", price:45, currency:"AED", category:"offers", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Lunch-Time.jpeg", chefSpecial:false, isOffer:false },


  { id:7, name:"Weekend Breakfast", description:"Saturday and Sunday from 9:00 am - 3:00 pm", price:45, currency:"AED", category:"offers", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Weekend-Breakfast.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Wings Night", description:"Every Saturday buy 1 get one offer.", price:99, currency:"AED", category:"offers", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Wings-Night.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Sunday Roast", description:"Every Sunday buy 1 get one offer.", price:129, currency:"AED", category:"offers", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Sunday-Roast.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Monday Taco Night", description:"3 Taco + Fries + Soft Drinks Taco Varities : Chicken, Beef,Veg and 9 AED per Taco Minimum 2 PCS. 5:00 pm - 11:00 pm", price:49, currency:"AED", category:"offers", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Monday-Taco-Night.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Tuesday Wings Night", description:"Combo Meal 6 Wings + Fries + Soft Drinks Flavours : Classic Buffalo | Honey Garlic Peri-Peri | Smoky BBQ and 3 AED per wings Minimum Order 6 Pcs From 5:00 pm - 11:00 pm", price:49, currency:"AED", category:"offers", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Tuesday-Wings-Night.jpeg", chefSpecial:false, isOffer:false },



  { id:7, name:"Wednesday Pie Night", description:"Buy 1 Get 1 Offer From 12:00 pm - 12:00 am", price:99, currency:"AED", category:"offers", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Wednesday-Pie-Night.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Bangers & Mash", description:"Buy 1 Get 1 Offer From 12:00 pm - 12:00 am", price:99, currency:"AED", category:"offers", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Bangers-Mash.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Pork Back Ribs", description:"Special Offer On Fridays Buy 1 Get 1", price:199, currency:"AED", category:"offers", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Pork-Back-Ribs.jpeg", chefSpecial:false, isOffer:false },

  { id:7, name:"Saturday Roast Brunch", description:"Served with roast potato, seasoned vegetables, Yorkshire pudding, cauliflower cheese and gravy 3 Hours Unlimited Selected House Beverage Unlimited Vegetables", price:199, currency:"AED", category:"offers", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Saturday-Roast-Brunch.jpeg", chefSpecial:false, isOffer:false },


  { id:7, name:"Saturday Roast Brunch", description:"Served with roast potato, seasoned vegetables, Yorkshire pudding, cauliflower cheese and gravy 3 Hours Unlimited Selected soft Beverage Unlimited Vegetables", price:169, currency:"AED", category:"offers", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Saturday-Roast-Brunch-1.jpeg", chefSpecial:false, isOffer:false },


  { id:7, name:"Lamb Shank (G)(D)", description:"Slow Cooked Lamb Shank Served With Mashed Peas & Homemade Grapes Sauce.", price:99, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Lamb-Shank-GD.jpeg", chefSpecial:false, isOffer:false },



 { id:7, name:"Grilled Chicken Breast (G)(E)(D)", description:"Served With Mashed Potatoes, Sauteed Vegetables & Peppercorn Sauce.", price:77, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/NellGwynne_Grilled_Chicke638869927467754814.jpg", chefSpecial:false, isOffer:false },


 { id:7, name:"Steak Pie (G)(D)(E)", description:"Diced Beef Cooked in Home Made Sauce Accompanied With Chips or Mashed Potatoes, Vegetables & Gravy.", price:79, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/NellGwynne_Steak-Pie-GDE_Kailash-115.jpg", chefSpecial:false, isOffer:false },





   { id:7, name:"Shepherd's Pie (G)(D)", description:"Shepherd’s pie served in a black bowl, topped with a golden baked mashed potato crust and garnished with herbs. Accompanied by a side of steamed mixed vegetables including broccoli, cauliflower, zucchini, and carrots. Served with a small black gravy jug garnished with a sprig of parsley", price:89, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/NellGwynne_Shepherds_Pie_638869927463684238.jpg", chefSpecial:false, isOffer:false },



   { id:7, name:"Nell's Beef Burger (G)(D)(E)", description:"Filled With a Home-Made Beef Patty, Crispy Lettuce & Home-Made Tomato Relish. Served With Fries & Onion Rings.", price:77, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/NellGwynne_Nells_Beef_Bur638869927458454124.jpg", chefSpecial:false, isOffer:false },


   { id:7, name:"Dynamite Chicken Bap (G)(D)(E)", description:"Filled With Fried Breaded Chicken, Tossed in Dynamite Sauce. Served With Fries & Coleslaw.", price:75, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/NellGwynne_Dynamite_Chick638869927458628841.jpg", chefSpecial:false, isOffer:false },



   { id:7, name:"ROASTED SALMON FILLET (S)(D)", description:"Crushed Herb New Potatoes, Seasoned Vegetables & Lemon Butter Sauce.", price:93, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/NellGwynne_ROASTED_SALMON638869927460621136.jpg", chefSpecial:false, isOffer:false },


   { id:7, name:"Chicken Caesar Salad  (S)(D)", description:"Crispy Lettuce, Shaved Parmesan, Tossed With Creamy Ceasar Dressing & Croutons", price:70, currency:"AED", category:"salads", img:"https://nellgwynne.com/wp-content/uploads/2025/10/NellGwynne_Caesar_Salad_S638869927465094059.jpg", chefSpecial:false, isOffer:false },


   { id:7, name:"Dynamite Shrimp (S)", description:"Crispy Shrimp Dipped in Spicy Mayo", price:73, currency:"AED", category:"starters", img:"https://nellgwynne.com/wp-content/uploads/2025/10/NellGwynne_Dynamite_Shrim638869927469868464-1.jpg", chefSpecial:false, isOffer:false },



    { id:7, name:"Crispy Calamari Rings (S)(D)", description:"Crispy Fried Calamari Rings With Tartar Sauce", price:65, currency:"AED", category:"starters", img:"https://nellgwynne.com/wp-content/uploads/2025/10/NellGwynne_Crispy_Calamar638869927445396148.jpg", chefSpecial:false, isOffer:false },


    { id:7, name:"Traditional Cod & Chips (G)(S)(E)", description:"Cod Fish Cooked in Batter. Served With Mushy Peas, Chips, Tartar Sauce & Lemon Wedge.", price:93, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/NellGwynne_Traditional_Co638869927472939806.jpg", chefSpecial:false, isOffer:false },


























  // Edar tak hoagaya ha ...


  // Desserts

  { id:8, name:"Sticky Toffee Pudding", description:"Rich, moist date sponge soaked in warm toffee sauce. Served with a scoop of vanilla ice cream.", price:45, currency:"AED", category:"desserts", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Sticky-Toffee-Pudding.jpeg", chefSpecial:false, isOffer:false },
  { id:9, name:"Sirloin Steak", description:"Grilled tender sirloin steak topped with herbed butter. Served with sunny-side-up eggs, sautéed mushrooms, seasonal vegetables, roasted tomato, golden fries, and a side of rich gravy.", price:129, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Sirloin-Steak.jpeg", chefSpecial:false, isOffer:false },
  // Salads
  { id:10, name:"Pork Bangers & Mash", description:"Juicy pork sausages served over creamy mashed potatoes, topped with rich onion gravy and garden peas.", price:85, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/Pork-Bangers-Mash.jpeg", chefSpecial:false, isOffer:false },
  { id:11, name:"BBQ Pork Baby Back Ribs", description:"Slow-cooked pork ribs glazed in smoky BBQ sauce, served with golden fries, crispy onion rings, creamy coleslaw, and corn on the cob.", price:115, currency:"AED", category:"main", img:"https://nellgwynne.com/wp-content/uploads/2025/10/BBQ-Pork-Baby-Back-Ribs.jpeg", chefSpecial:false, isOffer:false }


];

// Dropdown items linking to PDFs — customize the URLs

const SPECIAL_MENUS_LINKS = [
  { label: "Ladies Night", href: "pdfs/Ladies Night.pdf" },
  { label: "Brunch Menu",  href: "pdfs/Brunch menu.pdf" },
  { label: "Lunch Menu", href: "pdfs/Lunch Menu.pdf" },
  { label: "Drinks Menu", href: "pdfs/A la Cart Drinks Menu.pdf" },
  { label: "Oktoberfest Menu", href: "pdfs/Oktoberfest Menu .pdf" },
  { label: "Thanksgiven Menu", href: "pdfs/Thanksgiven Menu.pdf" },
  { label: "Halloween Menu", href: "pdfs/Halloween Menu.pdf" },
  { label: "Christmas Menu", href: "pdfs/Christmas Group Party Menu.pdf" }

];

// ---------- Elements ----------

const grid = document.getElementById("grid");
const tpl = document.getElementById("menuCardTpl");
const searchInput = document.getElementById("searchInput");
const sectionTitle = document.getElementById("sectionTitle");
const itemCount = document.getElementById("itemCount");
const categoryNav = document.getElementById("categoryNav");
const specialMenusBtn = document.getElementById("specialMenusBtn");
const specialMenusMenu = document.getElementById("specialMenusMenu");

// Build dropdown links

specialMenusMenu.innerHTML = SPECIAL_MENUS_LINKS.map(
  (l) => `<a target="_blank" href="${l.href}"><span>${l.label}</span><span>↗</span></a>`
).join("");

// Toggle dropdown

specialMenusBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  specialMenusBtn.parentElement.classList.toggle("open");
});
document.addEventListener("click", () => {
  specialMenusBtn.parentElement.classList.remove("open");
});

let activeCategory = "all";
let searchQuery = "";

// ---------- Rendering ----------

function render(items){
  grid.innerHTML = "";
  items.forEach(item => {
    const node = tpl.content.cloneNode(true);
    const img = node.querySelector(".thumb");
    const title = node.querySelector(".title");
    const price = node.querySelector(".price");
    const desc = node.querySelector(".desc");
    const offer = node.querySelector(".badge-offer");
    const chef = node.querySelector(".badge-chef");

    img.src = item.img;
    img.alt = item.name;
    title.textContent = item.name;
    price.textContent = `${item.price} ${item.currency}`;
    desc.textContent = item.description;
    if(item.isOffer) offer.hidden = false;
    if(item.chefSpecial) chef.hidden = false;

    grid.appendChild(node);
  });
  itemCount.textContent = items.length;
}

// ---------- Filtering ----------

function getFilteredItems(){
  let items = [...MENU_ITEMS];

  const cat = (activeCategory || 'all').toLowerCase();

  // Treat "offers" exactly like the others
  const categories = ["starters","main","desserts","salads","drinks","offers"];
  if (categories.includes(cat)) {
    items = items.filter(i => (i.category || "").toLowerCase() === cat);
  } // "all" returns everything

  // search
  const q = (searchQuery || "").trim().toLowerCase();
  if (q) {
    items = items.filter(i =>
      (i.name || "").toLowerCase().includes(q) ||
      (i.description || "").toLowerCase().includes(q)
    );
  }

  return items;
}

function setActiveCategory(cat){
  activeCategory = cat;
  sectionTitle.textContent = ({

    all: "All Items",
    starters: "Starters",
    main: "Main Course",
    desserts: "Desserts",
    salads: "Salads",
    drinks: "Drinks",
    offers: "Special Offers",

  })[cat] || "All Items";

  // visual active state
  [...categoryNav.querySelectorAll(".chip")].forEach(c => c.classList.remove("active"));
  const btn = categoryNav.querySelector(`[data-category="${cat}"]`);
  if(btn) btn.classList.add("active");

  render(getFilteredItems());
}

// Events
categoryNav.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-category]");
  if(!btn) return;
  setActiveCategory(btn.dataset.category);
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.trim();
  render(getFilteredItems());
});

// Init
setActiveCategory("all");




