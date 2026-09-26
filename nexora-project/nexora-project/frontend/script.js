/* ============ ICONS ============ */
const ICO = {
  star:'<svg class="icon icon-fill" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.63 22 9.24 16.5 14.14 18.18 21 12 17.27 5.82 21 7.5 14.14 2 9.24 8.91 8.63"/></svg>',
  starOutline:'<svg class="icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.63 22 9.24 16.5 14.14 18.18 21 12 17.27 5.82 21 7.5 14.14 2 9.24 8.91 8.63"/></svg>',
  sun:'<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5"/><line x1="12" y1="1.5" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22.5"/><line x1="4.2" y1="4.2" x2="6" y2="6"/><line x1="18" y1="18" x2="19.8" y2="19.8"/><line x1="1.5" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22.5" y2="12"/><line x1="4.2" y1="19.8" x2="6" y2="18"/><line x1="18" y1="6" x2="19.8" y2="4.2"/></svg>',
  moon:'<svg class="icon" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7.2 7.2 0 0 0 9.8 9.8z"/></svg>',
  heart:'<svg class="icon" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  truck:'<svg class="icon" viewBox="0 0 24 24"><rect x="1" y="6" width="14" height="11"/><path d="M15 9h4l3 4v4h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>',
  shield:'<svg class="icon" viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5.2 3.4 9.4 8 11 4.6-1.6 8-5.8 8-11V5z"/></svg>',
  refresh:'<svg class="icon" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.5 15a9 9 0 1 0 2-9.5L1 10"/></svg>',
  pin:'<svg class="icon" viewBox="0 0 24 24"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  card:'<svg class="icon" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  cash:'<svg class="icon" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/></svg>',
  upi:'<svg class="icon" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M8 8h8v8H8z"/></svg>',
  check:'<svg class="icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
  bag:'<svg class="icon" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  box:'<svg class="icon" viewBox="0 0 24 24"><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5"/><line x1="12" y1="13" x2="12" y2="21"/></svg>',
  user:'<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/></svg>',
  logout:'<svg class="icon" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  edit:'<svg class="icon" viewBox="0 0 24 24"><path d="M17 3a2.8 2.8 0 1 1 4 4L7 21l-4 1 1-4Z"/></svg>',
};
function starsHtml(rating){
  let h='<div class="stars">';
  for(let i=1;i<=5;i++){ h += i<=Math.round(rating) ? ICO.star : ICO.starOutline; }
  h+='</div>'; return h;
}

/* ============ PRODUCT DATA ============ */
const PRODUCTS = [
{id:1,name:"AirPulse Pro Wireless Earbuds",cat:"Electronics",price:6639,orig:10789,rating:4.6,reviews:812,desc:"Immersive active noise cancellation, 32-hour battery life with the charging case, and a secure ergonomic fit built for all-day listening.",img:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80",colors:["Obsidian","Pearl White"],stock:24},
{id:2,name:"ChronoFit Smartwatch Series 5",cat:"Electronics",price:12449,orig:16599,rating:4.7,reviews:1204,desc:"Track heart rate, sleep, and 20+ workouts with a vivid always-on AMOLED display and 7-day battery life. Water resistant to 50m.",img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",colors:["Graphite","Rose Gold"],stock:15},
{id:3,name:"BassBeam Portable Bluetooth Speaker",cat:"Electronics",price:4979,orig:7469,rating:4.4,reviews:530,desc:"360° room-filling sound in a rugged, IPX7 waterproof shell. Pair two speakers for stereo sound and enjoy up to 18 hours of playtime.",img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",colors:["Midnight Black","Ocean Blue"],stock:31},
{id:4,name:"SnapShot X Mirrorless Camera",cat:"Electronics",price:53949,orig:66399,rating:4.8,reviews:298,desc:"A 24MP APS-C sensor, in-body stabilization, and 4K video make this the ideal companion for creators who refuse to compromise on quality.",img:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",colors:["Black"],stock:9},
{id:5,name:"Urban Drift Oversized Hoodie",cat:"Fashion",price:3729,orig:5809,rating:4.5,reviews:410,desc:"Heavyweight brushed fleece with a relaxed, oversized cut. Garment-dyed for a lived-in look that only gets better with wear.",img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=800&q=80",colors:["Charcoal","Sand","Olive"],sizes:["S","M","L","XL"],stock:44},
{id:6,name:"Nightfall Bomber Jacket",cat:"Fashion",price:7469,orig:11619,rating:4.6,reviews:267,desc:"A water-resistant shell with quilted lining, ribbed cuffs, and a tailored silhouette that moves easily from day to night.",img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",colors:["Black","Forest Green"],sizes:["S","M","L","XL"],stock:18},
{id:7,name:"Everyday Essential Tee — 3 Pack",cat:"Fashion",price:2069,orig:2899,rating:4.3,reviews:955,desc:"Soft 100% combed cotton, pre-shrunk and reinforced at the seams. The wardrobe staple you'll reach for every single day.",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=800&q=80",colors:["White","Black","Grey"],sizes:["S","M","L","XL","XXL"],stock:60},
{id:8,name:"Solstice Wrap Midi Dress",cat:"Fashion",price:4559,orig:7049,rating:4.7,reviews:189,desc:"A flattering wrap silhouette in flowing crepe fabric, finished with a tie waist and fluttering sleeves for effortless elegance.",img:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",colors:["Terracotta","Navy"],sizes:["XS","S","M","L"],stock:22},
{id:9,name:"StrideMax Running Sneakers",cat:"Shoes",price:5809,orig:8299,rating:4.6,reviews:721,desc:"Responsive foam midsole and a breathable knit upper deliver a light, cushioned ride mile after mile.",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",colors:["White/Blue","Black/Red"],sizes:["7","8","9","10","11"],stock:38},
{id:10,name:"Cobblestone Leather Boots",cat:"Shoes",price:9959,orig:14109,rating:4.8,reviews:302,desc:"Full-grain leather uppers on a durable rubber lug sole — built to handle city streets and rougher trails alike.",img:"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",colors:["Tan","Dark Brown"],sizes:["7","8","9","10","11"],stock:14},
{id:11,name:"AeroFlex Everyday Sneakers",cat:"Shoes",price:4559,orig:6639,rating:4.4,reviews:498,desc:"A minimalist silhouette with a flexible sole and cushioned collar, engineered for all-day comfort.",img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",colors:["White","Grey"],sizes:["7","8","9","10","11"],stock:29},
{id:12,name:"Coastal Slide Sandals",cat:"Shoes",price:2489,orig:3729,rating:4.2,reviews:156,desc:"Contoured footbed sandals with quick-dry straps — the easy choice for beach days and poolside lounging.",img:"https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1622560481156-01a35bc45b19?auto=format&fit=crop&w=800&q=80",colors:["Black","Beige"],sizes:["7","8","9","10","11"],stock:33},
{id:13,name:"Horizon Aviator Sunglasses",cat:"Accessories",price:2899,orig:4559,rating:4.5,reviews:274,desc:"Polarized lenses with 100% UV protection set in a lightweight metal frame with an iconic teardrop shape.",img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",colors:["Gold/Green","Black/Grey"],stock:41},
{id:14,name:"Meridian Chrono Watch",cat:"Accessories",price:10789,orig:14939,rating:4.7,reviews:203,desc:"A stainless steel chronograph with sapphire-coated glass and a genuine leather strap — precision with quiet confidence.",img:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80",colors:["Brown Leather","Steel"],stock:12},
{id:15,name:"Voyager Canvas Backpack",cat:"Accessories",price:5389,orig:7879,rating:4.6,reviews:389,desc:"Water-resistant waxed canvas with a padded 15-inch laptop sleeve and leather trims built to age beautifully.",img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",colors:["Olive","Charcoal"],stock:26},
{id:16,name:"Heritage Leather Wallet",cat:"Accessories",price:2489,orig:3729,rating:4.4,reviews:167,desc:"Hand-finished full-grain leather with RFID-blocking card slots and a slim profile that fits any pocket.",img:"https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",colors:["Brown","Black"],stock:52},
{id:17,name:"Lumen Arc Floor Lamp",cat:"Home",price:6639,orig:9129,rating:4.5,reviews:143,desc:"A sculptural arc silhouette in brushed brass with a soft linen shade — warm, ambient lighting for any living space.",img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=800&q=80",colors:["Brass","Matte Black"],stock:17},
{id:18,name:"Haven Lounge Chair",cat:"Home",price:20749,orig:27389,rating:4.8,reviews:96,desc:"Solid oak legs and premium bouclé upholstery combine for a chair that anchors a room in quiet, understated comfort.",img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",colors:["Cream","Sage"],stock:8},
{id:19,name:"Terra Ceramic Mug Set (4pc)",cat:"Home",price:2899,orig:4149,rating:4.6,reviews:211,desc:"Hand-glazed stoneware mugs with a soft matte finish, each subtly unique — dishwasher and microwave safe.",img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",colors:["Terracotta Mix"],stock:47},
{id:20,name:"Aroma Mist Diffuser",cat:"Home",price:3319,orig:4979,rating:4.3,reviews:178,desc:"Whisper-quiet ultrasonic diffuser with seven ambient light modes and up to 10 hours of continuous mist.",img:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80",colors:["White","Wood Grain"],stock:36},
{id:21,name:"Detective L Premium T-shirt",cat:"Anime",price:3729,orig:5389,rating:4.9,reviews:512,desc:"A finely detailed 1/8 scale PVC figure of the enigmatic detective, captured mid-thought in his signature perched pose. Hand-painted with a matte finish.",img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRDks9K85AnkjpZF9HwObvK2xBkeq0xdsqtSaXBC2NsSJS_triAJNwhy9gI2uTK4iT9uxLeCikruCnOzM3u_gPHVaf6eW6q",img2:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRtqlPTWLpHYO0mIjZ-LLBoxkq_RekIMcBjkLBfdmzI2aJhPa_5ZQ1HQ_FzvgFMpIw0fIrvC_-KNDBibkVv8Q6RJt95X6Q3Dg",colors:["Standard Edition","Glow-in-the-Dark"],stock:19},
{id:22,name:"Notebook of Rules Journal",cat:"Anime",price:1409,orig:2069,rating:4.7,reviews:876,desc:"A jet-black hardcover journal inspired by classic mystery-thriller anime, complete with faux-aged pages and a ribbon bookmark. 200 lined pages.",img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",colors:["Classic Black"],stock:64},
{id:23,name:"Academy Uniform Hoodie",cat:"Anime",price:3319,orig:4979,rating:4.6,reviews:341,desc:"A cozy fleece hoodie inspired by elite-academy uniform aesthetics, featuring an embroidered crest and ribbed cuffs for that effortlessly composed look.",img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1622445275649-434e75316718?auto=format&fit=crop&w=800&q=80",colors:["Charcoal Grey","Navy"],sizes:["S","M","L","XL"],stock:37},
{id:24,name:"Death Note Book",cat:"Anime",price:4559,orig:6639,rating:4.8,reviews:229,desc:"A weighted wooden chess set for players who think several moves ahead — inspired by the calculated rivalries of psychological-thriller anime. Includes a felt-lined storage board.",img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTnG6V6BqtdC2PCdRpdQ4I4IfqXuSmrUqrPljIXq-i5ZWHyk3avvmVAR6uKVGmteium24xl_4GjcuNWQ5hU38m6PXj_ynmG01ltHihaVGJEHPCMpxT19FEsiQ",img2:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsrODehwRSqTrm0HjeM_pLxCYVMqwSI7RSTKvThi5Ckq84S0-3SycKxHCiOobupZqpzI1HM4b1vX_g7NdyJwBEYMp2LMLCB8PMTfoAyT9ROfFEeNiel2MIjA",colors:["Walnut/Maple"],stock:22},
{id:25,name:"Pulseband Fitness Tracker",cat:"Electronics",price:2899,orig:4149,rating:4.3,reviews:344,desc:"A lightweight fitness band with heart-rate tracking, sleep monitoring, and 10-day battery life in a slim silicone strap.",img:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80",colors:["Black", "Teal"],stock:52},
{id:26,name:"EchoDome Smart Speaker",cat:"Electronics",price:6639,orig:8299,rating:4.5,reviews:421,desc:"Voice-controlled smart speaker with rich 360° sound and built-in home automation hub.",img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",colors:["White", "Charcoal"],stock:28},
{id:27,name:"FlexCharge 65W GaN Charger",cat:"Electronics",price:2489,orig:3319,rating:4.6,reviews:612,desc:"Compact GaN fast charger with dual USB-C ports, powerful enough for laptops and phones alike.",img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",colors:["Black"],stock:71},
{id:28,name:"ViewPad 11 Tablet",cat:"Electronics",price:24899,orig:29899,rating:4.4,reviews:189,desc:"An 11-inch tablet with a crisp LCD display, all-day battery, and a stylus-ready screen for work or play.",img:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",colors:["Silver", "Space Grey"],stock:13},
{id:29,name:"NoiseGuard Over-Ear Headphones",cat:"Electronics",price:8299,orig:11619,rating:4.7,reviews:534,desc:"Plush over-ear cushions and adaptive noise cancellation for long listening sessions in comfort.",img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=800&q=80",colors:["Black", "Navy"],stock:22},
{id:30,name:"RapidLink Wireless Charging Pad",cat:"Electronics",price:1659,orig:2489,rating:4.2,reviews:298,desc:"A sleek 15W wireless charging pad with anti-slip surface and LED charge indicator.",img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",colors:["Black", "White"],stock:64},
{id:31,name:"StreamCast 4K Media Stick",cat:"Electronics",price:4149,orig:5809,rating:4.5,reviews:376,desc:"Stream your favorite shows in crisp 4K HDR with voice remote and one-tap app switching.",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=800&q=80",colors:["Black"],stock:39},
{id:32,name:"Cascade Denim Jacket",cat:"Fashion",price:4979,orig:7469,rating:4.5,reviews:213,desc:"Classic washed denim jacket with a relaxed fit, button front, and reinforced stitching.",img:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",colors:["Light Wash", "Dark Indigo"],sizes:["S", "M", "L", "XL"],stock:31},
{id:33,name:"Linen Blend Summer Shirt",cat:"Fashion",price:2899,orig:4149,rating:4.4,reviews:302,desc:"Breathable linen-cotton blend shirt with a relaxed cut, perfect for warm days.",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",colors:["White", "Sky Blue", "Sand"],sizes:["S", "M", "L", "XL"],stock:48},
{id:34,name:"Highline Pleated Trousers",cat:"Fashion",price:3729,orig:5389,rating:4.3,reviews:176,desc:"Tailored pleated trousers with a comfortable elastic waistband and a tapered leg.",img:"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",colors:["Black", "Beige"],sizes:["28", "30", "32", "34", "36"],stock:27},
{id:35,name:"Velour Track Set",cat:"Fashion",price:5809,orig:8299,rating:4.6,reviews:254,desc:"A cozy matching velour hoodie and joggers set, soft to the touch with a relaxed athletic fit.",img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",colors:["Maroon", "Charcoal"],sizes:["S", "M", "L", "XL"],stock:33},
{id:36,name:"Classic Trench Coat",cat:"Fashion",price:9959,orig:13279,rating:4.7,reviews:142,desc:"A timeless double-breasted trench coat in water-resistant cotton twill with a belted waist.",img:"https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1622560481156-01a35bc45b19?auto=format&fit=crop&w=800&q=80",colors:["Camel", "Black"],sizes:["S", "M", "L", "XL"],stock:16},
{id:37,name:"Everyday Denim Jeans",cat:"Fashion",price:3319,orig:4979,rating:4.5,reviews:489,desc:"Stretch-comfort denim jeans with a straight fit that goes from desk to weekend effortlessly.",img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",colors:["Indigo", "Black"],sizes:["28", "30", "32", "34", "36"],stock:57},
{id:38,name:"TrailBlaze Hiking Boots",cat:"Shoes",price:8299,orig:11619,rating:4.7,reviews:234,desc:"Waterproof hiking boots with rugged lug soles and ankle support for rough terrain.",img:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80",colors:["Brown", "Grey"],sizes:["7", "8", "9", "10", "11"],stock:19},
{id:39,name:"Court Classic Sneakers",cat:"Shoes",price:4979,orig:6639,rating:4.5,reviews:612,desc:"Retro-inspired court sneakers with a clean leather upper and cushioned insole.",img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",colors:["White", "White/Green"],sizes:["7", "8", "9", "10", "11"],stock:44},
{id:40,name:"Nimbus Cloud Slip-Ons",cat:"Shoes",price:3319,orig:4979,rating:4.3,reviews:287,desc:"Featherlight slip-on shoes with a knit upper and memory-foam footbed for all-day comfort.",img:"https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",colors:["Grey", "Black"],sizes:["7", "8", "9", "10", "11"],stock:52},
{id:41,name:"Formal Oxford Shoes",cat:"Shoes",price:6639,orig:9129,rating:4.6,reviews:156,desc:"Handcrafted leather Oxford shoes with a polished finish, perfect for formal occasions.",img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=800&q=80",colors:["Black", "Dark Brown"],sizes:["7", "8", "9", "10", "11"],stock:21},
{id:42,name:"Aqua Grip Sports Sandals",cat:"Shoes",price:1909,orig:2899,rating:4.1,reviews:198,desc:"Adjustable strap sandals with a grippy outsole, built for water sports and quick outdoor trips.",img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",colors:["Black", "Blue"],sizes:["7", "8", "9", "10", "11"],stock:39},
{id:43,name:"Slimline RFID Card Holder",cat:"Accessories",price:1409,orig:2069,rating:4.4,reviews:321,desc:"A minimalist leather card holder with RFID-blocking layers and a slot for cash.",img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",colors:["Black", "Tan"],stock:68},
{id:44,name:"Nomad Canvas Duffel Bag",cat:"Accessories",price:5809,orig:7879,rating:4.6,reviews:176,desc:"A rugged waxed-canvas duffel with reinforced handles, ideal for weekend getaways.",img:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80",colors:["Olive", "Charcoal"],stock:24},
{id:45,name:"Aizen T-shirt",cat:"Accessories",price:1909,orig:2899,rating:4.5,reviews:245,desc:"Full-grain leather belt with a solid brass buckle, built to last for years of daily wear.",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwTKeJhy8g3tG_aX7ZkoHkZpbRFhrZZSET4pjhWON4w&s",img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4sb2RhuMY6Ix6KFigr8PtZoELsk-5M8gQtsnoJ5kGKg&s",colors:["Black", "Brown"],stock:57},
{id:46,name:"Polarized Sport Sunglasses",cat:"Accessories",price:2489,orig:3729,rating:4.3,reviews:198,desc:"Lightweight wraparound sunglasses with polarized lenses, built for active outdoor days.",img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",colors:["Black/Grey", "Blue/Silver"],stock:41},
{id:47,name:"Woven Cotton Scarf",cat:"Accessories",price:1659,orig:2489,rating:4.4,reviews:132,desc:"A soft woven cotton scarf with a subtle checked pattern, perfect for layering in cooler months.",img:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80",colors:["Grey", "Rust"],stock:63},
{id:48,name:"Woven Jute Area Rug",cat:"Home",price:5389,orig:7469,rating:4.5,reviews:178,desc:"A natural jute area rug with a subtle herringbone weave, adding warmth to any room.",img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",colors:["Natural"],stock:18},
{id:49,name:"Cascade Ceramic Planter Set",cat:"Home",price:2489,orig:3729,rating:4.6,reviews:203,desc:"A set of three hand-glazed ceramic planters in graduated sizes with drainage holes.",img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",colors:["Terracotta", "Sage"],stock:44},
{id:50,name:"SoftGlow LED Table Lamp",cat:"Home",price:3319,orig:4559,rating:4.4,reviews:156,desc:"A minimalist table lamp with dimmable warm-white LED and a fabric-wrapped cord.",img:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",colors:["Cream", "Black"],stock:32},
{id:51,name:"Linen Throw Blanket",cat:"Home",price:2899,orig:4149,rating:4.7,reviews:267,desc:"A breathable linen-cotton throw blanket, lightweight yet warm, finished with a fringed edge.",img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=800&q=80",colors:["Oatmeal", "Sage"],stock:38},
{id:52,name:"Bamboo Kitchen Organizer Set",cat:"Home",price:1909,orig:2899,rating:4.3,reviews:189,desc:"A modular bamboo organizer set for drawers and countertops, keeping kitchen tools tidy.",img:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",colors:["Natural"],stock:53},
{id:53,name:"Shonen Hero Action Figure",cat:"Anime",price:4149,orig:5809,rating:4.8,reviews:421,desc:"A dynamic 1/7 scale action figure capturing a fan-favorite hero mid-battle, hand-painted with fine detail.",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=800&q=80",colors:["Standard Edition", "Limited Gold"],stock:27},
{id:54,name:"Mecha Pilot Model Kit",cat:"Anime",price:5389,orig:7469,rating:4.7,reviews:298,desc:"A snap-fit mecha model kit with posable joints and detailed panel lines, no glue required.",img:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",colors:["Standard Colorway"],stock:34},
{id:55,name:"Sensei Study Desk Mat",cat:"Anime",price:1659,orig:2489,rating:4.5,reviews:312,desc:"A large anime-illustrated desk mat with a smooth mousing surface and stitched edges.",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",colors:["Classic Print"],stock:58},
{id:56,name:"Guardian Spirit Wall Scroll",cat:"Anime",price:1409,orig:2069,rating:4.6,reviews:189,desc:"A high-resolution fabric wall scroll featuring an iconic guardian spirit illustration.",img:"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",colors:["Standard"],stock:71},
{id:57,name:"Katana Prop Replica Stand",cat:"Anime",price:6639,orig:8299,rating:4.9,reviews:142,desc:"A display-only katana replica on a lacquered wooden stand, inspired by classic samurai anime.",img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",colors:["Black Saya", "Red Saya"],stock:14},
{id:58,name:"Chibi Keychain Collector Set",cat:"Anime",price:1659,orig:2489,rating:4.7,reviews:534,desc:"A set of six chibi-style enamel keychains featuring beloved characters from a fan-favorite series.",img:"https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1622560481156-01a35bc45b19?auto=format&fit=crop&w=800&q=80",colors:["Series Set A", "Series Set B"],stock:82},
{id:59,name:"Ronin Ink Art Print",cat:"Anime",price:1909,orig:2899,rating:4.6,reviews:98,desc:"A museum-quality giclée print of an original ink-wash illustration inspired by samurai-era anime.",img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",img2:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",colors:["Framed", "Unframed"],stock:46},
];
const CATS = [
  {name:"Electronics",icon:'<svg class="icon" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="10" y1="19" x2="14" y2="19"/></svg>'},
  {name:"Fashion",icon:'<svg class="icon" viewBox="0 0 24 24"><path d="M16 4l4 4-3 3-2-2v11H9V9L7 11l-3-3 4-4 4 2z"/></svg>'},
  {name:"Shoes",icon:'<svg class="icon" viewBox="0 0 24 24"><path d="M3 18c0-3 2-4 5-6l4-4 3 2 6 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>'},
  {name:"Accessories",icon:'<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>'},
  {name:"Home",icon:'<svg class="icon" viewBox="0 0 24 24"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>'},
  {name:"Anime",icon:'<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 10.5c.5-1 1.5-1 2 0"/><path d="M14 10.5c.5-1 1.5-1 2 0"/><path d="M8.5 15c1 1 5 1 6 0"/></svg>'},
];
const REVIEWS = [
  {name:"Ananya S.",initial:"A",rating:5,text:"The earbuds exceeded expectations — noise cancellation is genuinely impressive and delivery was two days early."},
  {name:"Rohit M.",initial:"R",rating:5,text:"Ordered the lounge chair and it looks even better in person. Packaging was excellent, zero damage."},
  {name:"Kavya P.",initial:"K",rendered:true,rating:4,text:"Great quality clothing for the price. Sizing ran slightly large but customer support helped me exchange easily."},
];

/* ============ STATE ============ */
const LS = {
  get(k,d){ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):d; }catch(e){ return d; } },
  set(k,v){ localStorage.setItem(k, JSON.stringify(v)); }
};
let state = {
  theme: LS.get('nexora_theme','dark'),
  cart: LS.get('nexora_cart',[]),
  wishlist: LS.get('nexora_wishlist',[]),
  users: LS.get('nexora_users',[]),
  currentUser: LS.get('nexora_current_user',null),
  orders: LS.get('nexora_orders',[]),
  recentlyViewed: LS.get('nexora_recent',[]),
  coupon: LS.get('nexora_coupon',null),
  flashEnd: LS.get('nexora_flash_end', null),
};
if(!state.flashEnd || state.flashEnd < Date.now()){
  state.flashEnd = Date.now() + (8*3600*1000);
  LS.set('nexora_flash_end', state.flashEnd);
}
function persist(){
  LS.set('nexora_cart', state.cart);
  LS.set('nexora_wishlist', state.wishlist);
  LS.set('nexora_users', state.users);
  LS.set('nexora_current_user', state.currentUser);
  LS.set('nexora_orders', state.orders);
  LS.set('nexora_recent', state.recentlyViewed);
  LS.set('nexora_coupon', state.coupon);
}
const COUPONS = { "WELCOME10":{type:"pct",value:10}, "NEXORA20":{type:"pct",value:20}, "FLAT5":{type:"flat",value:400} };

/* ============ UTIL ============ */
function fmt(n){ return "₹"+Math.round(n).toLocaleString('en-IN'); }
function toast(msg,type=''){
  const wrap=document.getElementById('toastWrap');
  const el=document.createElement('div');
  el.className='toast '+type;
  el.innerHTML = (type==='success'?ICO.check:'') + '<span>'+msg+'</span>';
  wrap.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='opacity .3s'; setTimeout(()=>el.remove(),300); }, 2600);
}
function getProduct(id){ return PRODUCTS.find(p=>p.id===Number(id)); }
function imgFallback(e, name){
  e.onerror=null;
  const initial = name ? name.charAt(0) : 'N';
  e.src = 'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="%23E7A33E"/><text x="50%" y="50%" font-size="120" fill="%2317151C" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif">${initial}</text></svg>`);
}

/* ============ THEME ============ */
function applyTheme(){
  document.documentElement.setAttribute('data-theme', state.theme);
  document.getElementById('themeToggle').innerHTML = state.theme==='dark' ? ICO.sun : ICO.moon;
  LS.set('nexora_theme', state.theme);
}
document.getElementById('themeToggle').addEventListener('click', ()=>{
  state.theme = state.theme==='dark'?'light':'dark';
  applyTheme();
});
applyTheme();

/* ============ BADGES ============ */
function updateBadges(){
  const cartCount = state.cart.reduce((s,i)=>s+i.qty,0);
  const cb=document.getElementById('cartBadge');
  cb.textContent=cartCount; cb.classList.toggle('hidden', cartCount===0);
  const wb=document.getElementById('wishBadge');
  wb.textContent=state.wishlist.length; wb.classList.toggle('hidden', state.wishlist.length===0);
}

/* ============ NAV / ROUTER ============ */
function navigate(hash){ location.hash = hash; }
window.addEventListener('hashchange', route);
document.addEventListener('click', (e)=>{
  const a = e.target.closest('[data-route]');
  if(a){ closeMobileMenu(); }
});
document.getElementById('burgerBtn').addEventListener('click', ()=>{ document.getElementById('mobileMenu').classList.add('open'); });
document.getElementById('mmClose').addEventListener('click', closeMobileMenu);
document.getElementById('mobileMenu').addEventListener('click', (e)=>{ if(e.target.id==='mobileMenu') closeMobileMenu(); });
function closeMobileMenu(){ document.getElementById('mobileMenu').classList.remove('open'); }

document.getElementById('loginBtn').addEventListener('click', ()=>{
  navigate(state.currentUser ? '#account' : '#login');
});
document.getElementById('wishBtn').addEventListener('click', ()=>{ navigate('#account?tab=wishlist'); });
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartCloseBtn').addEventListener('click', closeCart);
document.getElementById('overlayBg').addEventListener('click', ()=>{ closeCart(); closeFilterPanel(); });

function parseHash(){
  const raw = location.hash.slice(1) || 'home';
  const [route, qs] = raw.split('?');
  const params = new URLSearchParams(qs||'');
  return {route: route||'home', params};
}
function route(){
  const {route:r, params} = parseHash();
  document.querySelectorAll('.nav-links a, .mm-panel a').forEach(a=>{
    a.classList.toggle('active', a.dataset.route===r);
  });
  window.scrollTo({top:0,behavior:'instant'});
  const app = document.getElementById('app');
  if(r==='home') app.innerHTML = renderHome();
  else if(r==='shop') app.innerHTML = renderShop(params);
  else if(r==='checkout') app.innerHTML = state.cart.length ? renderCheckout() : renderEmptyCheckout();
  else if(r==='success') app.innerHTML = renderSuccess(params.get('id'));
  else if(r==='login') app.innerHTML = state.currentUser ? '' : renderAuth();
  else if(r==='account') app.innerHTML = renderAccount(params);
  else if(r==='help') app.innerHTML = renderHelp();
  else app.innerHTML = render404();
  if(r==='login' && state.currentUser){ navigate('#account'); return; }
  bindPageEvents(r, params);
  updateBadges();
}

/* ============ HOME ============ */
function renderHome(){
  const featured = PRODUCTS.slice(0,8);
  const trending = [...PRODUCTS].sort((a,b)=>b.reviews-a.reviews).slice(0,8);
  return `
  <section class="hero">
    <div class="wrap hero-grid">
      <div>
        <span class="pill pill-accent">New Season Arrivals</span>
        <h1 class="hero-title">Objects made<br>to <em>last, not trend.</em></h1>
        <p class="hero-text">Nexora curates electronics, fashion, footwear, accessories and home pieces that are considered, durable, and quietly premium — no noise, just things worth owning.</p>
        <div class="hero-cta">
          <a href="#shop" data-route="shop" class="btn btn-primary">Shop the Collection ${arrowIcon()}</a>
          <a href="#shop?cat=Electronics" data-route="shop" class="btn btn-outline">Explore Electronics</a>
        </div>
        <div class="hero-stats">
          <div><b class="mono">20+</b><span>Curated Products</span></div>
          <div><b class="mono">4.6</b><span>Avg. Rating</span></div>
          <div><b class="mono">12K+</b><span>Happy Customers</span></div>
        </div>
      </div>
      <div class="hero-visual">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80" onerror="imgFallback(this,'N')" alt="Featured product">
        <div class="hero-badge-card">
          <div><span style="font-size:11px;color:var(--ink-soft)">This week's pick</span><br><b class="mono">ChronoFit Series 5</b></div>
          <span class="pill pill-accent">25% OFF</span>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="flash-strip">
        <div class="flash-left">
          ${ICO.box}
          <div><b>Flash Sale — up to 40% off</b><br><span style="font-size:12.5px;opacity:.75">Ends soon. Don't miss out.</span></div>
        </div>
        <div class="flash-timer" id="flashTimer"></div>
        <a href="#shop" data-route="shop" class="btn btn-primary btn-sm">Shop Deals</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <div><span class="eyebrow">Browse</span><h2 class="section-title">Shop by Category</h2></div>
      </div>
      <div class="cat-grid">
        ${CATS.map(c=>`
          <a href="#shop?cat=${c.name}" data-route="shop" class="cat-card">
            <div class="cat-icon">${c.icon}</div>
            <b>${c.name}</b><span>${PRODUCTS.filter(p=>p.cat===c.name).length} items</span>
          </a>`).join('')}
      </div>
    </div>
  </section>

  <section class="section" style="background:var(--surface-2)">
    <div class="wrap">
      <div class="section-head">
        <div><span class="eyebrow">Curated for you</span><h2 class="section-title">Featured Products</h2><p class="section-sub">Hand-picked pieces our editors keep coming back to.</p></div>
        <a href="#shop" data-route="shop" class="link-more">View All ${arrowIcon()}</a>
      </div>
      <div class="product-grid">${featured.map(p=>productCard(p)).join('')}</div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <div><span class="eyebrow">Most Loved</span><h2 class="section-title">Trending Now</h2></div>
        <a href="#shop" data-route="shop" class="link-more">View All ${arrowIcon()}</a>
      </div>
      <div class="product-grid">${trending.map(p=>productCard(p)).join('')}</div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Limited Time</span><h2 class="section-title">Today's Offers</h2></div></div>
      <div class="offer-banner">
        <div class="offer-card o1">
          <h3>Electronics Sale</h3>
          <p>Save up to 35% on earbuds, watches and speakers this week only.</p>
          <a href="#shop?cat=Electronics" data-route="shop" class="btn btn-dark" style="background:#fff;color:#222;">Shop Now</a>
        </div>
        <div class="offer-card o2">
          <h3>Home Refresh</h3>
          <p>Update your space — 20% off lighting and living room pieces.</p>
          <a href="#shop?cat=Home" data-route="shop" class="btn btn-dark" style="background:#fff;color:#222;">Shop Now</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background:var(--surface-2)">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Testimonials</span><h2 class="section-title">What customers say</h2></div></div>
      <div class="review-grid">
        ${REVIEWS.map(r=>`
          <div class="review-card">
            ${starsHtml(r.rating)}
            <p>"${r.text}"</p>
            <div class="review-user">
              <div class="review-avatar">${r.initial}</div>
              <div><b>${r.name}</b><span>Verified Buyer</span></div>
            </div>
          </div>`).join('')}
      </div>
    </div>
  </section>

  <div class="wrap" id="recentlyViewedWrap"></div>
  `;
}
function arrowIcon(){ return '<svg class="icon" style="width:16px;height:16px" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'; }

function productCard(p){
  const isWished = state.wishlist.includes(p.id);
  return `
  <div class="pcard" data-pid="${p.id}">
    <div class="pcard-media">
      <span class="pcard-idx mono">N°${String(p.id).padStart(2,'0')}</span>
      <span class="pcard-disc">-${Math.round((1-p.price/p.orig)*100)}%</span>
      <img src="${p.img}" alt="${p.name}" onerror="imgFallback(this,'${p.name.charAt(0)}')" class="pcard-img" data-open="${p.id}">
      <button class="pcard-wish ${isWished?'active':''}" data-wish="${p.id}">${ICO.heart}</button>
    </div>
    <div class="pcard-body">
      <span class="pcard-cat">${p.cat}</span>
      <span class="pcard-name" data-open="${p.id}">${p.name}</span>
      <div class="pcard-rating">${starsHtml(p.rating)} <span>(${p.reviews})</span></div>
      <div class="pcard-price"><span class="price-now mono">${fmt(p.price)}</span><span class="price-old mono">${fmt(p.orig)}</span></div>
      <div class="pcard-actions">
        <button class="btn btn-outline btn-sm" data-open="${p.id}">View</button>
        <button class="btn btn-primary btn-sm" data-addcart="${p.id}">Add to Cart</button>
      </div>
    </div>
  </div>`;
}

let flashTimerInterval;
function startFlashTimer(){
  clearInterval(flashTimerInterval);
  const el = document.getElementById('flashTimer');
  if(!el) return;
  function tick(){
    let diff = state.flashEnd - Date.now();
    if(diff<=0){ state.flashEnd = Date.now()+8*3600*1000; LS.set('nexora_flash_end', state.flashEnd); diff = 8*3600*1000; }
    const h = Math.floor(diff/3600000), m = Math.floor((diff%3600000)/60000), s = Math.floor((diff%60000)/1000);
    el.innerHTML = `<div class="t">${String(h).padStart(2,'0')}<span>hrs</span></div><div class="t">${String(m).padStart(2,'0')}<span>min</span></div><div class="t">${String(s).padStart(2,'0')}<span>sec</span></div>`;
  }
  tick();
  flashTimerInterval = setInterval(tick,1000);
}

function renderRecentlyViewed(){
  const wrap = document.getElementById('recentlyViewedWrap');
  if(!wrap) return;
  const ids = state.recentlyViewed.slice(0,4);
  if(ids.length===0){ wrap.innerHTML=''; return; }
  const items = ids.map(id=>getProduct(id)).filter(Boolean);
  wrap.innerHTML = `
    <div class="section-head"><div><span class="eyebrow">History</span><h2 class="section-title">Recently Viewed</h2></div></div>
    <div class="product-grid" style="margin-bottom:40px;">${items.map(p=>productCard(p)).join('')}</div>`;
}

/* ============ SHOP ============ */
let shopFilters = { search:'', cat:'All', min:0, max:70000, sort:'popular' };
function renderShop(params){
  if(params.get('cat')) shopFilters.cat = params.get('cat');
  if(params.get('q')) shopFilters.search = params.get('q');
  return `
  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <div><span class="eyebrow">Catalog</span><h2 class="section-title">Shop All Products</h2></div>
        <button class="btn btn-outline mobile-filter-btn" id="openFilterBtn">${filterIcon()} Filters</button>
      </div>
      <div class="shop-layout">
        <aside class="filter-card" id="filterCard">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
            <h4 style="margin:0;">Filters</h4>
            <button class="icon-btn" id="closeFilterBtn" style="display:none;"><svg class="icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
          </div>
          <div class="filter-group">
            <h4>Category</h4>
            <label class="filter-chip"><input type="radio" name="fcat" value="All" ${shopFilters.cat==='All'?'checked':''}> All Categories</label>
            ${CATS.map(c=>`<label class="filter-chip"><input type="radio" name="fcat" value="${c.name}" ${shopFilters.cat===c.name?'checked':''}> ${c.name}</label>`).join('')}
          </div>
          <div class="filter-group">
            <h4>Max Price</h4>
            <input type="range" id="priceRange" min="500" max="70000" step="500" value="${shopFilters.max}">
            <div class="price-vals"><span>₹500</span><span id="priceValLabel" class="mono">${fmt(shopFilters.max)}</span><span>₹70,000</span></div>
          </div>
          <button class="btn btn-outline btn-block" id="resetFiltersBtn">Reset Filters</button>
        </aside>
        <div>
          <div class="toolbar">
            <span class="toolbar-left" id="resultCount"></span>
            <select id="sortSelect">
              <option value="popular">Sort: Popularity</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="discount">Biggest Discount</option>
            </select>
          </div>
          <div class="product-grid" id="shopGrid"></div>
        </div>
      </div>
    </div>
  </section>`;
}
function filterIcon(){ return '<svg class="icon" viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="9" cy="6" r="1.6" fill="currentColor"/><circle cx="15" cy="12" r="1.6" fill="currentColor"/><circle cx="9" cy="18" r="1.6" fill="currentColor"/></svg>'; }

function applyShopFilters(){
  let list = PRODUCTS.filter(p=>{
    const matchCat = shopFilters.cat==='All' || p.cat===shopFilters.cat;
    const matchSearch = !shopFilters.search || p.name.toLowerCase().includes(shopFilters.search.toLowerCase()) || p.cat.toLowerCase().includes(shopFilters.search.toLowerCase());
    const matchPrice = p.price <= shopFilters.max;
    return matchCat && matchSearch && matchPrice;
  });
  if(shopFilters.sort==='priceLow') list.sort((a,b)=>a.price-b.price);
  else if(shopFilters.sort==='priceHigh') list.sort((a,b)=>b.price-a.price);
  else if(shopFilters.sort==='rating') list.sort((a,b)=>b.rating-a.rating);
  else if(shopFilters.sort==='discount') list.sort((a,b)=>(1-b.price/b.orig)-(1-a.price/a.orig));
  else list.sort((a,b)=>b.reviews-a.reviews);
  const grid = document.getElementById('shopGrid');
  const count = document.getElementById('resultCount');
  if(count) count.textContent = `${list.length} product${list.length!==1?'s':''} found`;
  if(grid){
    grid.innerHTML = list.length ? list.map(p=>productCard(p)).join('') : `
      <div class="empty-state" style="grid-column:1/-1;">
        <div class="icon-wrap">${filterIcon()}</div>
        <b>No products match your filters</b>
        <span>Try adjusting your search or price range.</span>
        <button class="btn btn-primary btn-sm" id="clearFiltersInline">Clear Filters</button>
      </div>`;
    const clr = document.getElementById('clearFiltersInline');
    if(clr) clr.addEventListener('click', ()=>{ shopFilters={search:'',cat:'All',min:0,max:700,sort:'popular'}; renderShopControls(); applyShopFilters(); });
  }
  bindProductCardEvents();
}
function renderShopControls(){
  document.querySelectorAll('input[name="fcat"]').forEach(r=>r.checked = r.value===shopFilters.cat);
  const pr=document.getElementById('priceRange'); if(pr) pr.value=shopFilters.max;
  const pl=document.getElementById('priceValLabel'); if(pl) pl.textContent=fmt(shopFilters.max);
  const ss=document.getElementById('sortSelect'); if(ss) ss.value=shopFilters.sort;
}
function openFilterPanel(){ document.getElementById('filterCard').classList.add('open'); document.getElementById('overlayBg').classList.add('show'); document.getElementById('closeFilterBtn').style.display='flex'; }
function closeFilterPanel(){ const f=document.getElementById('filterCard'); if(f) f.classList.remove('open'); document.getElementById('overlayBg').classList.remove('show'); }

/* ============ PRODUCT MODAL ============ */
let activeModalProduct = null;
let modalSelected = {color:null,size:null,qty:1,imgIdx:0};
function openProductModal(id){
  const p = getProduct(id);
  if(!p) return;
  activeModalProduct = p;
  modalSelected = {color:p.colors?p.colors[0]:null, size:p.sizes?p.sizes[0]:null, qty:1, imgIdx:0};
  state.recentlyViewed = [id, ...state.recentlyViewed.filter(x=>x!==id)].slice(0,8);
  persist();
  renderProductModal();
  document.getElementById('productModalBg').classList.add('show');
  document.body.style.overflow='hidden';
}
function closeProductModal(){
  document.getElementById('productModalBg').classList.remove('show');
  document.body.style.overflow='';
  activeModalProduct=null;
  renderRecentlyViewed();
}
document.getElementById('productModalBg').addEventListener('click',(e)=>{ if(e.target.id==='productModalBg') closeProductModal(); });

function renderProductModal(){
  const p = activeModalProduct;
  const images = [p.img, p.img2];
  const related = PRODUCTS.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,4);
  document.getElementById('productModalBox').innerHTML = `
    <button class="modal-close" id="pdCloseBtn"><svg class="icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    <div class="pd-grid">
      <div class="pd-media">
        <div class="pd-main-img"><img id="pdMainImg" src="${images[modalSelected.imgIdx]}" onerror="imgFallback(this,'${p.name.charAt(0)}')"></div>
        <div class="pd-thumbs">
          ${images.map((im,i)=>`<img src="${im}" onerror="imgFallback(this,'${p.name.charAt(0)}')" class="${i===modalSelected.imgIdx?'active':''}" data-thumb="${i}">`).join('')}
        </div>
      </div>
      <div class="pd-info">
        <span class="pill pill-soft">${p.cat}</span>
        <h2>${p.name}</h2>
        <div class="pcard-rating">${starsHtml(p.rating)} <span>${p.rating} · ${p.reviews} reviews</span></div>
        <div class="pd-price-row">
          <span class="price-now mono">${fmt(p.price)}</span>
          <span class="price-old mono">${fmt(p.orig)}</span>
          <span class="pill pill-danger">-${Math.round((1-p.price/p.orig)*100)}%</span>
        </div>
        <p class="pd-desc">${p.desc}</p>
        ${p.colors?`<span class="pd-option-label">Color: ${modalSelected.color}</span><div class="pd-swatches" id="colorSwatches">${p.colors.map(c=>`<button class="swatch ${c===modalSelected.color?'active':''}" data-color="${c}">${c}</button>`).join('')}</div>`:''}
        ${p.sizes?`<span class="pd-option-label">Size: ${modalSelected.size}</span><div class="pd-swatches" id="sizeSwatches">${p.sizes.map(s=>`<button class="swatch ${s===modalSelected.size?'active':''}" data-size="${s}">${s}</button>`).join('')}</div>`:''}
        <span class="pd-option-label">Quantity</span>
        <div class="qty-stepper">
          <button id="qtyMinus">−</button><span id="qtyVal">${modalSelected.qty}</span><button id="qtyPlus">+</button>
        </div>
        <div class="pd-btn-row">
          <button class="btn btn-primary" id="pdAddCart">${ICO.bag} Add to Cart</button>
          <button class="btn btn-dark" id="pdBuyNow">Buy Now</button>
          <button class="btn btn-outline" id="pdWish" style="flex:0 0 auto;padding:13px 16px;">${ICO.heart}</button>
        </div>
        <div class="pd-meta">
          <div>${ICO.truck} Free shipping over ₹999</div>
          <div>${ICO.refresh} 30-day returns</div>
          <div>${ICO.shield} 1-year warranty</div>
        </div>
      </div>
    </div>
    ${related.length?`<div style="padding:0 32px 32px;"><h4 style="margin-bottom:16px;">You may also like</h4><div class="product-grid" style="grid-template-columns:repeat(4,1fr);">${related.map(r=>productCard(r)).join('')}</div></div>`:''}
  `;
  document.getElementById('pdCloseBtn').addEventListener('click', closeProductModal);
  document.querySelectorAll('#productModalBox [data-thumb]').forEach(t=>t.addEventListener('click',()=>{ modalSelected.imgIdx=Number(t.dataset.thumb); renderProductModal(); }));
  document.querySelectorAll('#productModalBox [data-color]').forEach(b=>b.addEventListener('click',()=>{ modalSelected.color=b.dataset.color; renderProductModal(); }));
  document.querySelectorAll('#productModalBox [data-size]').forEach(b=>b.addEventListener('click',()=>{ modalSelected.size=b.dataset.size; renderProductModal(); }));
  document.getElementById('qtyMinus').addEventListener('click',()=>{ modalSelected.qty=Math.max(1,modalSelected.qty-1); document.getElementById('qtyVal').textContent=modalSelected.qty; });
  document.getElementById('qtyPlus').addEventListener('click',()=>{ modalSelected.qty=Math.min(p.stock,modalSelected.qty+1); document.getElementById('qtyVal').textContent=modalSelected.qty; });
  document.getElementById('pdAddCart').addEventListener('click',()=>{ addToCart(p.id, modalSelected.qty, modalSelected.color, modalSelected.size); });
  document.getElementById('pdBuyNow').addEventListener('click',()=>{ addToCart(p.id, modalSelected.qty, modalSelected.color, modalSelected.size, true); closeProductModal(); navigate('#checkout'); });
  const wishBtn=document.getElementById('pdWish');
  if(state.wishlist.includes(p.id)) wishBtn.classList.add('active');
  wishBtn.addEventListener('click',()=>{ toggleWishlist(p.id); wishBtn.classList.toggle('active'); });
  document.querySelectorAll('#productModalBox [data-open]').forEach(el=>el.addEventListener('click',()=>openProductModal(Number(el.dataset.open))));
  document.querySelectorAll('#productModalBox [data-addcart]').forEach(el=>el.addEventListener('click',(e)=>{ e.stopPropagation(); addToCart(Number(el.dataset.addcart),1); }));
  document.querySelectorAll('#productModalBox [data-wish]').forEach(el=>el.addEventListener('click',(e)=>{ e.stopPropagation(); toggleWishlist(Number(el.dataset.wish)); el.classList.toggle('active'); }));
}

/* ============ CART ============ */
function cartKey(pid,color,size){ return `${pid}__${color||''}__${size||''}`; }
function addToCart(pid, qty=1, color=null, size=null, silent=false){
  const p = getProduct(pid);
  const key = cartKey(pid,color,size);
  const existing = state.cart.find(i=>i.key===key);
  if(existing){ existing.qty += qty; }
  else { state.cart.push({key, pid, qty, color, size}); }
  persist(); updateBadges();
  if(!silent) toast(`${p.name} added to cart`, 'success');
  renderCartDrawer();
}
function updateCartQty(key, delta){
  const item = state.cart.find(i=>i.key===key);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) state.cart = state.cart.filter(i=>i.key!==key);
  persist(); updateBadges(); renderCartDrawer();
  if(location.hash.startsWith('#checkout')) route();
}
function removeFromCart(key){
  state.cart = state.cart.filter(i=>i.key!==key);
  persist(); updateBadges(); renderCartDrawer(); toast('Item removed from cart');
  if(location.hash.startsWith('#checkout')) route();
}
function cartTotals(){
  let subtotal = 0;
  state.cart.forEach(i=>{ const p=getProduct(i.pid); if(p) subtotal += p.price*i.qty; });
  let discount = 0;
  if(state.coupon && COUPONS[state.coupon]){
    const c = COUPONS[state.coupon];
    discount = c.type==='pct' ? subtotal*(c.value/100) : c.value;
  }
  const afterDiscount = Math.max(0, subtotal-discount);
  const shipping = afterDiscount>999 || afterDiscount===0 ? 0 : 99;
  const total = afterDiscount + shipping;
  return {subtotal, discount, shipping, total};
}
function openCart(){ renderCartDrawer(); document.getElementById('cartDrawer').classList.add('open'); document.getElementById('overlayBg').classList.add('show'); }
function closeCart(){ document.getElementById('cartDrawer').classList.remove('open'); document.getElementById('overlayBg').classList.remove('show'); }

function renderCartDrawer(){
  const wrap = document.getElementById('cartItemsWrap');
  const foot = document.getElementById('cartFoot');
  if(state.cart.length===0){
    wrap.innerHTML = `<div class="empty-state"><div class="icon-wrap">${ICO.bag}</div><b>Your cart is empty</b><span>Looks like you haven't added anything yet.</span><button class="btn btn-primary btn-sm" id="emptyCartShopBtn">Start Shopping</button></div>`;
    foot.innerHTML='';
    const b=document.getElementById('emptyCartShopBtn'); if(b) b.addEventListener('click',()=>{ closeCart(); navigate('#shop'); });
    return;
  }
  wrap.innerHTML = state.cart.map(item=>{
    const p = getProduct(item.pid);
    if(!p) return '';
    return `<div class="cd-item">
      <img src="${p.img}" onerror="imgFallback(this,'${p.name.charAt(0)}')">
      <div class="cd-item-info">
        <b>${p.name}</b>
        <span>${item.color?item.color+' · ':''}${item.size?'Size '+item.size:''}</span>
        <div class="cd-item-bottom">
          <div class="cd-qty">
            <button data-qtydown="${item.key}">−</button>
            <span class="mono">${item.qty}</span>
            <button data-qtyup="${item.key}">+</button>
          </div>
          <span class="mono" style="font-weight:700;font-size:13.5px;">${fmt(p.price*item.qty)}</span>
        </div>
        <button class="cd-remove" data-remove="${item.key}" style="align-self:flex-start;">Remove</button>
      </div>
    </div>`;
  }).join('');
  const t = cartTotals();
  foot.innerHTML = `
    <div class="coupon-row">
      <input id="couponInput" placeholder="Coupon code (try WELCOME10)" value="${state.coupon||''}">
      <button class="btn btn-outline btn-sm" id="applyCouponBtn">Apply</button>
    </div>
    <div class="sum-row"><span>Subtotal</span><span class="mono">${fmt(t.subtotal)}</span></div>
    ${t.discount>0?`<div class="sum-row" style="color:var(--accent-2)"><span>Discount ${state.coupon?('('+state.coupon+')'):''}</span><span class="mono">-${fmt(t.discount)}</span></div>`:''}
    <div class="sum-row"><span>Shipping</span><span class="mono">${t.shipping===0?'FREE':fmt(t.shipping)}</span></div>
    <div class="sum-row total"><span>Total</span><span class="mono">${fmt(t.total)}</span></div>
    <button class="btn btn-primary btn-block" id="goCheckoutBtn" style="margin-top:14px;">Proceed to Checkout ${arrowIcon()}</button>
  `;
  wrap.querySelectorAll('[data-qtyup]').forEach(b=>b.addEventListener('click',()=>updateCartQty(b.dataset.qtyup,1)));
  wrap.querySelectorAll('[data-qtydown]').forEach(b=>b.addEventListener('click',()=>updateCartQty(b.dataset.qtydown,-1)));
  wrap.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>removeFromCart(b.dataset.remove)));
  document.getElementById('applyCouponBtn').addEventListener('click', applyCoupon);
  document.getElementById('goCheckoutBtn').addEventListener('click',()=>{ closeCart(); navigate('#checkout'); });
}
function applyCoupon(){
  const val = document.getElementById('couponInput').value.trim().toUpperCase();
  if(!val){ state.coupon=null; persist(); renderCartDrawer(); return; }
  if(COUPONS[val]){ state.coupon=val; persist(); toast('Coupon applied!','success'); }
  else { toast('Invalid coupon code','error'); state.coupon=null; }
  persist(); renderCartDrawer();
}

/* ============ WISHLIST ============ */
function toggleWishlist(pid){
  const p = getProduct(pid);
  if(state.wishlist.includes(pid)){
    state.wishlist = state.wishlist.filter(id=>id!==pid);
    toast(`${p.name} removed from wishlist`);
  } else {
    state.wishlist.push(pid);
    toast(`${p.name} added to wishlist`,'success');
  }
  persist(); updateBadges();
  document.querySelectorAll(`[data-wish="${pid}"]`).forEach(el=>el.classList.toggle('active', state.wishlist.includes(pid)));
}

/* ============ PRODUCT CARD EVENT BINDING ============ */
function bindProductCardEvents(){
  document.querySelectorAll('[data-open]').forEach(el=>{
    el.replaceWith(el.cloneNode(true));
  });
  document.querySelectorAll('[data-open]').forEach(el=>el.addEventListener('click',()=>openProductModal(Number(el.dataset.open))));
  document.querySelectorAll('[data-addcart]').forEach(el=>el.addEventListener('click',(e)=>{ e.stopPropagation(); addToCart(Number(el.dataset.addcart),1); }));
  document.querySelectorAll('[data-wish]').forEach(el=>el.addEventListener('click',(e)=>{ e.stopPropagation(); toggleWishlist(Number(el.dataset.wish)); el.classList.toggle('active'); }));
}

/* ============ CHECKOUT ============ */
function renderEmptyCheckout(){
  return `<div class="wrap section"><div class="empty-state"><div class="icon-wrap">${ICO.bag}</div><b>Your cart is empty</b><span>Add items to your cart before checking out.</span><a href="#shop" data-route="shop" class="btn btn-primary btn-sm">Browse Products</a></div></div>`;
}
function renderCheckout(){
  const t = cartTotals();
  const u = state.currentUser;
  return `
  <section class="section">
    <div class="wrap">
      <div class="section-head"><div><span class="eyebrow">Almost there</span><h2 class="section-title">Checkout</h2></div></div>
      <form id="checkoutForm" class="checkout-layout">
        <div>
          <div class="co-card">
            <h4>${ICO.pin} Shipping Address</h4>
            <div class="co-grid">
              <div class="field"><label>Full Name</label><input name="fullName" required value="${u?u.name:''}"><span class="field-error">Please enter your full name</span></div>
              <div class="field"><label>Phone Number</label><input name="phone" required placeholder="10-digit number"><span class="field-error">Enter a valid phone number</span></div>
              <div class="field full"><label>Address Line</label><input name="address" required placeholder="House no, street, area"><span class="field-error">Address is required</span></div>
              <div class="field"><label>City</label><input name="city" required><span class="field-error">City is required</span></div>
              <div class="field"><label>State</label><input name="state" required><span class="field-error">State is required</span></div>
              <div class="field"><label>PIN / ZIP Code</label><input name="zip" required placeholder="6-digit code"><span class="field-error">Enter a valid PIN code</span></div>
              <div class="field"><label>Email</label><input name="email" type="email" required value="${u?u.email:''}"><span class="field-error">Enter a valid email address</span></div>
            </div>
          </div>
          <div class="co-card">
            <h4>${ICO.card} Payment Method</h4>
            <label class="pay-option active" data-pay="card"><input type="radio" name="pay" value="card" checked>${ICO.card}<div><b>Credit / Debit Card</b><br><span style="font-size:12px;color:var(--ink-soft);">Visa, Mastercard, RuPay accepted</span></div></label>
            <div id="cardFields" class="co-grid" style="margin:12px 0 18px;">
              <div class="field full"><label>Card Number</label><input name="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19"><span class="field-error">Enter a valid 16-digit card number</span></div>
              <div class="field"><label>Expiry (MM/YY)</label><input name="cardExpiry" placeholder="MM/YY" maxlength="5"><span class="field-error">Enter a valid expiry date</span></div>
              <div class="field"><label>CVV</label><input name="cardCvv" placeholder="123" maxlength="3"><span class="field-error">Enter a valid CVV</span></div>
            </div>
            <label class="pay-option" data-pay="upi"><input type="radio" name="pay" value="upi">${ICO.upi}<div><b>UPI</b><br><span style="font-size:12px;color:var(--ink-soft);">Pay via any UPI app</span></div></label>
            <label class="pay-option" data-pay="cod"><input type="radio" name="pay" value="cod">${ICO.cash}<div><b>Cash on Delivery</b><br><span style="font-size:12px;color:var(--ink-soft);">Pay when your order arrives</span></div></label>
          </div>
        </div>
        <div class="co-card" style="position:sticky; top:96px;">
          <h4>Order Summary</h4>
          ${state.cart.map(i=>{ const p=getProduct(i.pid); return p?`<div class="co-summary-item"><span>${p.name} × ${i.qty}</span><span class="mono">${fmt(p.price*i.qty)}</span></div>`:''; }).join('')}
          <div class="sum-row" style="margin-top:14px;"><span>Subtotal</span><span class="mono">${fmt(t.subtotal)}</span></div>
          ${t.discount>0?`<div class="sum-row" style="color:var(--accent-2)"><span>Discount</span><span class="mono">-${fmt(t.discount)}</span></div>`:''}
          <div class="sum-row"><span>Shipping</span><span class="mono">${t.shipping===0?'FREE':fmt(t.shipping)}</span></div>
          <div class="sum-row total"><span>Total</span><span class="mono">${fmt(t.total)}</span></div>
          <button type="submit" class="btn btn-primary btn-block" style="margin-top:16px;">Place Order</button>
        </div>
      </form>
    </div>
  </section>`;
}

/* ============ SUCCESS ============ */
function renderSuccess(orderId){
  const order = state.orders.find(o=>o.id===orderId);
  if(!order) return render404();
  return `
  <div class="wrap success-box">
    <div class="success-icon">${ICO.check}</div>
    <h2 style="font-size:28px;">Order Placed Successfully!</h2>
    <p style="color:var(--ink-soft); margin-top:10px;">Thank you${order.name?', '+order.name:''} — a confirmation has been generated for your order.</p>
    <div class="order-id-box">
      <div style="text-align:left;"><span style="font-size:11px;color:var(--ink-soft);text-transform:uppercase;">Order ID</span><br><b class="mono">${order.id}</b></div>
      <span class="pill pill-accent">Confirmed</span>
    </div>
    <div style="text-align:left; background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:18px 20px; margin-bottom:24px;">
      ${order.items.map(i=>`<div class="co-summary-item"><span>${i.name} × ${i.qty}</span><span class="mono">${fmt(i.price*i.qty)}</span></div>`).join('')}
      <div class="sum-row total" style="margin-top:8px;"><span>Total Paid</span><span class="mono">${fmt(order.total)}</span></div>
    </div>
    <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
      <a href="#shop" data-route="shop" class="btn btn-outline">Continue Shopping</a>
      <a href="#account?tab=orders" data-route="account" class="btn btn-primary">View My Orders</a>
    </div>
  </div>`;
}

/* ============ AUTH ============ */
let authMode = 'login';
function renderAuth(){
  return `
  <div class="wrap">
    <div class="auth-box">
      <div class="auth-tabs">
        <button class="auth-tab ${authMode==='login'?'active':''}" data-authtab="login">Login</button>
        <button class="auth-tab ${authMode==='register'?'active':''}" data-authtab="register">Register</button>
      </div>
      <div id="authFormWrap"></div>
    </div>
  </div>`;
}
function renderAuthForm(){
  const wrap = document.getElementById('authFormWrap');
  if(!wrap) return;
  if(authMode==='login'){
    wrap.innerHTML = `
      <form id="loginForm">
        <div class="field"><label>Email</label><input name="email" type="email" required><span class="field-error">Enter a valid email address</span></div>
        <div class="field"><label>Password</label><input name="password" type="password" required><span class="field-error">Password is required</span></div>
        <button type="submit" class="btn btn-primary btn-block">Login</button>
        <p style="font-size:12.5px; color:var(--ink-soft); text-align:center; margin-top:16px;">Demo tip: register a new account first, then log in.</p>
      </form>`;
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
  } else {
    wrap.innerHTML = `
      <form id="registerForm">
        <div class="field"><label>Full Name</label><input name="name" required><span class="field-error">Name is required</span></div>
        <div class="field"><label>Email</label><input name="email" type="email" required><span class="field-error">Enter a valid email address</span></div>
        <div class="field"><label>Password</label><input name="password" type="password" required><span class="field-error">Minimum 6 characters</span></div>
        <div class="field"><label>Confirm Password</label><input name="confirm" type="password" required><span class="field-error">Passwords do not match</span></div>
        <button type="submit" class="btn btn-primary btn-block">Create Account</button>
      </form>`;
    document.getElementById('registerForm').addEventListener('submit', handleRegister);
  }
}
function setFieldError(field, hasError){
  field.classList.toggle('invalid', hasError);
}
function handleLogin(e){
  e.preventDefault();
  const f = e.target;
  const email = f.email.value.trim();
  const password = f.password.value;
  let valid = true;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  setFieldError(f.email.closest('.field'), !emailOk); if(!emailOk) valid=false;
  setFieldError(f.password.closest('.field'), password.length===0); if(!password) valid=false;
  if(!valid) return;
  const user = state.users.find(u=>u.email===email && u.password===password);
  if(!user){ toast('Invalid email or password','error'); return; }
  state.currentUser = {name:user.name, email:user.email};
  persist(); toast(`Welcome back, ${user.name}!`,'success');
  navigate('#account');
}
function handleRegister(e){
  e.preventDefault();
  const f = e.target;
  const name=f.name.value.trim(), email=f.email.value.trim(), password=f.password.value, confirm=f.confirm.value;
  let valid = true;
  setFieldError(f.name.closest('.field'), name.length===0); if(!name) valid=false;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  setFieldError(f.email.closest('.field'), !emailOk); if(!emailOk) valid=false;
  setFieldError(f.password.closest('.field'), password.length<6); if(password.length<6) valid=false;
  setFieldError(f.confirm.closest('.field'), confirm!==password); if(confirm!==password) valid=false;
  if(!valid) return;
  if(state.users.find(u=>u.email===email)){ toast('An account with this email already exists','error'); return; }
  state.users.push({name,email,password});
  state.currentUser = {name,email};
  persist(); toast('Account created successfully!','success');
  navigate('#account');
}

/* ============ ACCOUNT ============ */
function renderAccount(params){
  if(!state.currentUser) return renderAuth();
  const tab = params.get('tab') || 'orders';
  const u = state.currentUser;
  const myOrders = state.orders.filter(o=>o.email===u.email).reverse();
  const wishItems = state.wishlist.map(id=>getProduct(id)).filter(Boolean);
  return `
  <section class="section">
    <div class="wrap account-layout">
      <aside class="acc-side">
        <div class="acc-avatar">${u.name.charAt(0).toUpperCase()}</div>
        <b>${u.name}</b><br><span style="font-size:12.5px;color:var(--ink-soft);">${u.email}</span>
        <div style="margin-top:18px; text-align:left;">
          <a href="#account?tab=orders" data-route="account" class="acc-tab ${tab==='orders'?'active':''}">${ICO.box} My Orders</a>
          <a href="#account?tab=wishlist" data-route="account" class="acc-tab ${tab==='wishlist'?'active':''}">${ICO.heart} Wishlist</a>
          <a href="#account?tab=profile" data-route="account" class="acc-tab ${tab==='profile'?'active':''}">${ICO.user} Profile</a>
          <button class="acc-tab" id="logoutBtn" style="width:100%;">${ICO.logout} Logout</button>
        </div>
      </aside>
      <div>
        ${tab==='orders' ? `
          <h3 style="margin-bottom:18px;">My Orders</h3>
          ${myOrders.length===0 ? `<div class="empty-state"><div class="icon-wrap">${ICO.box}</div><b>No orders yet</b><span>Your placed orders will appear here.</span><a href="#shop" data-route="shop" class="btn btn-primary btn-sm">Start Shopping</a></div>` :
          myOrders.map(o=>`
            <div class="order-row">
              <div class="order-row-top"><b class="mono">${o.id}</b><span class="pill pill-accent">Confirmed</span></div>
              <div class="order-items-line">${o.items.map(i=>i.name+' × '+i.qty).join(', ')}</div>
              <div style="display:flex;justify-content:space-between;margin-top:10px;font-size:13.5px;">
                <span style="color:var(--ink-soft)">${new Date(o.date).toLocaleDateString()}</span>
                <span class="mono" style="font-weight:700;">${fmt(o.total)}</span>
              </div>
            </div>`).join('')}
        ` : ''}
        ${tab==='wishlist' ? `
          <h3 style="margin-bottom:18px;">My Wishlist</h3>
          ${wishItems.length===0 ? `<div class="empty-state"><div class="icon-wrap">${ICO.heart}</div><b>Your wishlist is empty</b><span>Save products you love to find them here later.</span><a href="#shop" data-route="shop" class="btn btn-primary btn-sm">Browse Products</a></div>` :
          `<div class="product-grid">${wishItems.map(p=>productCard(p)).join('')}</div>`}
        ` : ''}
        ${tab==='profile' ? `
          <h3 style="margin-bottom:18px;">Profile Details</h3>
          <div class="co-card">
            <div class="co-grid">
              <div class="field"><label>Full Name</label><input value="${u.name}" disabled></div>
              <div class="field"><label>Email</label><input value="${u.email}" disabled></div>
            </div>
            <p style="font-size:12.5px;color:var(--ink-soft);">${ICO.edit} Profile editing is a demo feature — coming soon.</p>
          </div>
        ` : ''}
      </div>
    </div>
  </section>`;
}

/* ============ HELP / 404 ============ */
function renderHelp(){
  return `<section class="section"><div class="wrap" style="max-width:700px;">
    <span class="eyebrow">Support</span><h2 class="section-title" style="margin-bottom:20px;">Help Center</h2>
    <div class="co-card"><h4>Shipping & Delivery</h4><p style="color:var(--ink-soft);font-size:14.5px;line-height:1.7;">Orders over ₹999 ship free and typically arrive within 3–6 business days. You'll receive tracking details by email once your order is confirmed.</p></div>
    <div class="co-card"><h4>Returns & Exchanges</h4><p style="color:var(--ink-soft);font-size:14.5px;line-height:1.7;">Not the right fit? Items can be returned within 30 days of delivery in original condition for a full refund.</p></div>
    <div class="co-card"><h4>Contact Us</h4><p style="color:var(--ink-soft);font-size:14.5px;line-height:1.7;">Reach our support team anytime at support@nexora.demo — we usually respond within 24 hours.</p></div>
  </div></section>`;
}
function render404(){
  return `<div class="wrap notfound"><b class="mono">404</b><h2 style="margin:16px 0 10px;">Page not found</h2><p style="color:var(--ink-soft);margin-bottom:24px;">The page you're looking for doesn't exist or has moved.</p><a href="#home" data-route="home" class="btn btn-primary">Back to Home</a></div>`;
}

/* ============ ORDER PLACEMENT ============ */
function generateOrderId(){
  return 'NX-' + Date.now().toString(36).toUpperCase().slice(-6) + Math.floor(Math.random()*900+100);
}

/* ============ PAGE-LEVEL EVENT BINDING ============ */
function bindPageEvents(r, params){
  if(r==='home'){
    startFlashTimer();
    renderRecentlyViewed();
    bindProductCardEvents();
  }
  if(r==='shop'){
    renderShopControls();
    applyShopFilters();
    document.querySelectorAll('input[name="fcat"]').forEach(el=>el.addEventListener('change',()=>{ shopFilters.cat=el.value; applyShopFilters(); }));
    const pr=document.getElementById('priceRange');
    if(pr) pr.addEventListener('input',()=>{ shopFilters.max=Number(pr.value); document.getElementById('priceValLabel').textContent=fmt(shopFilters.max); applyShopFilters(); });
    const ss=document.getElementById('sortSelect');
    if(ss) ss.addEventListener('change',()=>{ shopFilters.sort=ss.value; applyShopFilters(); });
    const reset=document.getElementById('resetFiltersBtn');
    if(reset) reset.addEventListener('click',()=>{ shopFilters={search:shopFilters.search,cat:'All',min:0,max:700,sort:'popular'}; renderShopControls(); applyShopFilters(); });
    const openF=document.getElementById('openFilterBtn'); if(openF) openF.addEventListener('click', openFilterPanel);
    const closeF=document.getElementById('closeFilterBtn'); if(closeF) closeF.addEventListener('click', closeFilterPanel);
  }
  if(r==='checkout' && state.cart.length){
    document.querySelectorAll('.pay-option').forEach(opt=>{
      opt.addEventListener('click',()=>{
        document.querySelectorAll('.pay-option').forEach(o=>o.classList.remove('active'));
        opt.classList.add('active');
        opt.querySelector('input').checked = true;
        document.getElementById('cardFields').style.display = opt.dataset.pay==='card' ? 'grid':'none';
      });
    });
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckoutSubmit);
  }
  if(r==='login'){ renderAuthForm(); document.querySelectorAll('[data-authtab]').forEach(t=>t.addEventListener('click',()=>{ authMode=t.dataset.authtab; document.querySelectorAll('.auth-tab').forEach(x=>x.classList.remove('active')); t.classList.add('active'); renderAuthForm(); })); }
  if(r==='account'){
    bindProductCardEvents();
    const lo=document.getElementById('logoutBtn');
    if(lo) lo.addEventListener('click',()=>{ state.currentUser=null; persist(); toast('Logged out successfully'); navigate('#home'); });
  }
  if(r==='home' || r==='shop' || r==='account'){ bindProductCardEvents(); }
  // nav-search
  const navSearch = document.getElementById('navSearchInput');
  navSearch.value = shopFilters.search;
  navSearch.oninput = ()=>{ shopFilters.search = navSearch.value; };
  navSearch.onkeydown = (e)=>{ if(e.key==='Enter'){ navigate('#shop'); route(); document.getElementById('navSearchInput').value=shopFilters.search; } };
  const mmSearch = document.getElementById('mmSearchInput');
  mmSearch.onkeydown = (e)=>{ if(e.key==='Enter'){ shopFilters.search = mmSearch.value; closeMobileMenu(); navigate('#shop'); route(); } };
}

function handleCheckoutSubmit(e){
  e.preventDefault();
  const f = e.target;
  const fields = ['fullName','phone','address','city','state','zip','email'];
  let valid = true;
  fields.forEach(name=>{
    const input = f[name];
    const val = input.value.trim();
    let bad = val.length===0;
    if(name==='email') bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if(name==='phone') bad = !/^\d{7,15}$/.test(val.replace(/\D/g,''));
    if(name==='zip') bad = !/^\d{4,8}$/.test(val);
    setFieldError(input.closest('.field'), bad);
    if(bad) valid = false;
  });
  const payMethod = f.pay.value;
  if(payMethod==='card'){
    const num = f.cardNumber.value.replace(/\s/g,'');
    const numBad = !/^\d{16}$/.test(num);
    setFieldError(f.cardNumber.closest('.field'), numBad); if(numBad) valid=false;
    const expBad = !/^\d{2}\/\d{2}$/.test(f.cardExpiry.value.trim());
    setFieldError(f.cardExpiry.closest('.field'), expBad); if(expBad) valid=false;
    const cvvBad = !/^\d{3}$/.test(f.cardCvv.value.trim());
    setFieldError(f.cardCvv.closest('.field'), cvvBad); if(cvvBad) valid=false;
  }
  if(!valid){ toast('Please fix the highlighted fields','error'); return; }
  const t = cartTotals();
  const orderId = generateOrderId();
  const order = {
    id: orderId,
    email: f.email.value.trim(),
    name: f.fullName.value.trim(),
    date: Date.now(),
    items: state.cart.map(i=>{ const p=getProduct(i.pid); return {name:p.name, qty:i.qty, price:p.price}; }),
    total: t.total,
    payMethod
  };
  state.orders.push(order);
  state.cart = [];
  state.coupon = null;
  persist(); updateBadges();
  navigate('#success?id='+orderId);
}

/* ============ GLOBAL SCROLL / SCROLL TOP ============ */
window.addEventListener('scroll', ()=>{
  document.getElementById('scrollTop').classList.toggle('show', window.scrollY>500);
});
document.getElementById('scrollTop').addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ============ INIT ============ */
route();
updateBadges();