'use client';

import { useMemo, useState } from 'react';

type MenuItem = {
  name: string;
  price: number;
  doublePrice?: number;
  tag?: string;
  desc: string;
  img: string;
};

type CartItem = MenuItem & { qty: number };

const phone = '+919886067444';

// Images are served directly from the Unsplash CDN.
const cdn = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=82`;

const menu: Record<string, MenuItem[]> = {
  'Icecreams 🍦': [
    { name: 'Vanilla Classic', price: 60, doublePrice: 120, tag: 'CLASSIC', desc: 'Classic vanilla ice cream', img: cdn('photo-1576506295286-5cda18df43e7') },
    { name: 'Belgium Chocolate', price: 90, doublePrice: 170, tag: 'PRIME', desc: 'Rich Belgian chocolate', img: cdn('photo-1563805042-7684c019e1cb') },
    { name: 'Strawberry Bliss', price: 65, doublePrice: 120, tag: 'CLASSIC', desc: 'Creamy strawberry delight', img: cdn('photo-1497034825429-c343d7c6a68f') },
    { name: 'Mango Tango', price: 70, doublePrice: 130, tag: 'CLASSIC', desc: 'Mango ice cream', img: cdn('photo-1501443762994-82bd5dace89a') },
    { name: 'Pistachio Royal', price: 75, doublePrice: 140, tag: 'PRIME', desc: 'Premium pistachio', img: cdn('photo-1579954115563-e72bf1381629') },
    { name: 'Blue Berry Cheese Cake', price: 80, doublePrice: 150, tag: 'PRIME', desc: 'Blueberry cheesecake flavour', img: cdn('photo-1533134242443-d4fd215305ad') },
    { name: 'Butter Scotch Dream', price: 65, doublePrice: 120, tag: 'CLASSIC', desc: 'Butterscotch ice cream', img: cdn('photo-1497034825429-c343d7c6a68f') },
    { name: 'Cookies & Cream', price: 80, doublePrice: 150, tag: 'PRIME', desc: 'Cookies and cream', img: cdn('photo-1579954115545-a95591f28bfc') },
    { name: 'Tiramisu', price: 85, doublePrice: 160, tag: 'PRIME', desc: 'Tiramisu inspired flavour', img: cdn('photo-1571877227200-a0d98ea607e9') },
    { name: 'DryFruit', price: 90, doublePrice: 170, tag: 'PRIME', desc: 'Rich dry-fruit ice cream', img: cdn('photo-1563805042-7684c019e1cb') },
    { name: 'Red Velvet', price: 85, doublePrice: 160, tag: 'PRIME', desc: 'Red velvet flavour', img: cdn('photo-1551024506-0bccd828d307') },
    { name: 'Black Currant', price: 70, doublePrice: 130, tag: 'CLASSIC', desc: 'Black currant flavour', img: cdn('photo-1497034825429-c343d7c6a68f') },
    { name: 'Normal Chocolate', price: 70, doublePrice: 130, tag: 'CLASSIC', desc: 'Classic chocolate ice cream', img: cdn('photo-1563805042-7684c019e1cb') },
    { name: 'Chocolate Fudge', price: 80, doublePrice: 150, tag: 'PRIME', desc: 'Chocolate fudge ice cream', img: cdn('photo-1576506295286-5cda18df43e7') },
  ],
  'Milkshakes 🥤': [
    { name: 'Nutrella Nutty', price: 110, desc: 'Creamy hazelnut chocolate shake', img: cdn('photo-1579954115545-a95591f28bfc') },
    { name: 'Classic Vanilla', price: 90, desc: 'Smooth vanilla shake', img: cdn('photo-1461023058943-07fcbe16d735') },
    { name: 'Double Chocolate', price: 110, desc: 'Extra chocolate goodness', img: cdn('photo-1541658016709-82535e94bc69') },
    { name: 'StrawBerry Swirls', price: 95, desc: 'Strawberry swirled shake', img: cdn('photo-1572490122747-3968b75cc699') },
    { name: 'Oreo Crush', price: 110, desc: 'Oreo cookie shake', img: cdn('photo-1579954115545-a95591f28bfc') },
    { name: 'Mango Madness', price: 100, desc: 'Mango milkshake', img: cdn('photo-1546173159-315724a31696') },
    { name: 'Caramel Drizzle', price: 105, desc: 'Caramel topped shake', img: cdn('photo-1579954115545-a95591f28bfc') },
    { name: 'Cold Coffee Classic', price: 100, desc: 'Cold coffee milkshake', img: cdn('photo-1461023058943-07fcbe16d735') },
    { name: 'KitKat Shake', price: 115, desc: 'KitKat chocolate shake', img: cdn('photo-1541658016709-82535e94bc69') },
    { name: 'Classic Chocolate', price: 100, desc: 'Classic chocolate shake', img: cdn('photo-1579954115545-a95591f28bfc') },
    { name: 'Caramel Mocha', price: 120, desc: 'Coffee, chocolate and caramel', img: cdn('photo-1461023058943-07fcbe16d735') },
  ],
  'Sandwiches 🥪': [
    { name: 'Veg Grilled', price: 80, desc: 'Grilled to perfection, made for you!', img: cdn('photo-1528735602780-2552fd46c7af') },
    { name: 'Chocolate', price: 75, desc: 'Sweet grilled sandwich', img: cdn('photo-1509440159596-0249088772ff') },
    { name: 'Corn & Cheese', price: 110, desc: 'Creamy corn and cheese', img: cdn('photo-1528735602780-2552fd46c7af') },
    { name: 'Classic Veg Club', price: 110, desc: 'Classic layered veg sandwich', img: cdn('photo-1553909489-cd47e0907980') },
    { name: 'Chilli Cheeze', price: 90, desc: 'Spicy chilli and cheese', img: cdn('photo-1528735602780-2552fd46c7af') },
  ],
  'Burgers 🍔': [
    { name: 'Crispy Veg', price: 90, desc: 'Crispy veggie burger', img: cdn('photo-1568901346375-23c9450c58cd') },
    { name: 'Cheese Burst', price: 110, desc: 'Loaded with cheesy goodness', img: cdn('photo-1572802419224-296b0aeee0d9') },
    { name: 'Aloo Tikka Classic', price: 100, desc: 'Classic aloo tikka burger', img: cdn('photo-1550547660-d9450f859349') },
    { name: 'Double Patty Veg', price: 140, desc: 'Double patty veggie burger', img: cdn('photo-1568901346375-23c9450c58cd') },
  ],
  'French Fries 🍟': [
    { name: 'French Fries', price: 85, desc: 'Crispy, golden and irresistible', img: cdn('photo-1573080496219-bb080dd4f877') },
    { name: 'Peri Peri French Fries', price: 95, desc: 'Crispy fries with peri peri seasoning', img: cdn('photo-1630384060421-cb20d0e0649d') },
    { name: 'Cheezy Garlic Potato', price: 100, desc: 'Cheesy garlic potato — 15 pieces', img: cdn('photo-1585109649139-366815a0d713') },
    { name: 'Smiley', price: 95, desc: '7 pieces', img: cdn('photo-1623238913973-21e45cced554') },
  ],
  'Waffle Mixes 🧇': [
    { name: 'Honey', price: 80, desc: 'With icecream ₹80 • Without icecream ₹60', img: cdn('photo-1562376552-0d160a2f238d') },
    { name: 'Coco', price: 95, desc: 'With icecream ₹95 • Without icecream ₹75', img: cdn('photo-1562376552-0d160a2f238d') },
    { name: 'Nutrella', price: 105, desc: 'With icecream ₹105 • Without icecream ₹85', img: cdn('photo-1562376552-0d160a2f238d') },
    { name: 'Oreo', price: 95, desc: 'With icecream ₹95 • Without icecream ₹75', img: cdn('photo-1562376552-0d160a2f238d') },
    { name: 'Fruit & Honey', price: 95, desc: 'With icecream ₹95 • Without icecream ₹75', img: cdn('photo-1562376552-0d160a2f238d') },
  ],
  'Sundaes 🍨': [
    { name: 'Hot Chocolate Fudge Sundae', price: 110, desc: '2 scoops Vanilla, chocolate fudge sauce, peanuts', img: cdn('photo-1563805042-7684c019e1cb') },
    { name: 'Strawberry Dream Sundae', price: 130, desc: '2 scoops Strawberry, Vanilla cake, Strawberry compote, Jelly', img: cdn('photo-1497034825429-c343d7c6a68f') },
    { name: 'Cake Fudge Sundae', price: 140, desc: '2 scoops Vanilla, Chocolate Cake, Chocolate Fudge sauce, Peanuts', img: cdn('photo-1576506295286-5cda18df43e7') },
    { name: 'Lychee Sundae', price: 140, desc: '2 scoops Vanilla, Lychee pieces, Cream Sauce', img: cdn('photo-1497034825429-c343d7c6a68f') },
    { name: 'Dry Fruit Sundae', price: 150, desc: '2 scoops Vanilla, Brownie, roasted dry fruits, Milkmaid, Honey, Jelly', img: cdn('photo-1563805042-7684c019e1cb') },
    { name: 'Neapolitan Sundae', price: 140, desc: '3 scoops — Vanilla, Strawberry & Chocolate', img: cdn('photo-1497034825429-c343d7c6a68f') },
    { name: 'Butter Scotch Sundae', price: 130, desc: '2 scoops Butterscotch, caramel sauce, chocolate sauce, cashew', img: cdn('photo-1579954115563-e72bf1381629') },
    { name: 'Brownie Fudge Sundae', price: 150, desc: '2 scoops Vanilla & Chocolate, brownie, chocolate sauce, chocochip', img: cdn('photo-1576506295286-5cda18df43e7') },
    { name: 'Red Velvet Berry Sundae', price: 150, desc: '2 scoops Red Velvet, strawberry compote, jelly, cherry', img: cdn('photo-1551024506-0bccd828d307') },
    { name: 'Tiramisu Sundae', price: 160, desc: '2 scoops Tiramisu, vanilla cake, roasted almond, chocolate sauce', img: cdn('photo-1571877227200-a0d98ea607e9') },
    { name: 'Death By Chocolate', price: 190, desc: '3 scoops Vanilla, Chocolate Cake, Chocolate Sauce, roasted peanut, cherry', img: cdn('photo-1563805042-7684c019e1cb') },
    { name: 'Fruit Gudbud Sundae', price: 190, desc: 'Vanilla, Strawberry & Mango with choco cake, sauce, peanut, honey, cherry', img: cdn('photo-1497034825429-c343d7c6a68f') },
    { name: 'Nutella Brownie Mashup Sundae', price: 200, desc: '2 scoops Vanilla, brownie, Nutella, almond, cashew, cherry', img: cdn('photo-1576506295286-5cda18df43e7') },
  ],
};

const categorySubtitles: Record<string, string> = {
  'Icecreams 🍦': 'Classic scoops. Premium flavours.',
  'Milkshakes 🥤': 'Thick shakes. Happy vibes.',
  'Sandwiches 🥪': 'Grilled to perfection, made for you!',
  'Burgers 🍔': 'Big bites, bigger smiles!',
  'French Fries 🍟': 'Crispy. Golden. Irresistible!',
  'Waffle Mixes 🧇': 'Crispy waffles, sweet happiness!',
  'Sundaes 🍨': 'Scoops. Toppings. Pure joy!',
};

const allItems = Object.values(menu).flat();

export default function Page() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.qty, 0), [cart]);

  const addToCart = (item: MenuItem) => {
    setCart((current) => {
      const found = current.find((x) => x.name === item.name);
      if (found) {
        return current.map((x) => x.name === item.name ? { ...x, qty: x.qty + 1 } : x);
      }
      return [...current, { ...item, qty: 1 }];
    });
    setCartOpen(true);
  };

  const changeQty = (name: string, delta: number) => {
    setCart((current) => current
      .map((item) => item.name === name ? { ...item, qty: item.qty + delta } : item)
      .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (name: string) => {
    setCart((current) => current.filter((item) => item.name !== name));
  };

  const orderOnWhatsApp = () => {
    if (!cart.length) return;
    const lines = cart.map((item) => `• ${item.name} x${item.qty} — ₹${item.price * item.qty}`);
    const message = [
      'Hi BLR 99 Corner! 👋',
      '',
      'I would like to order:',
      ...lines,
      '',
      `Subtotal: ₹${subtotal}`,
      '',
      'Please confirm my order. Thank you! 🍦',
    ].join('\n');
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="site-shell">
      <style>{`
        :root { --lavender:#e9ddff; --lavender-deep:#7557c7; --cyan:#5de7e0; --cyan-deep:#0b9f9c; --ink:#17205d; --cream:#fffaff; --card:rgba(255,255,255,.92); }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; }
        .site-shell { min-height:100vh; color:var(--ink); font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; background:linear-gradient(135deg,#e8ddff 0%,#f8f3ff 35%,#d9fbf7 100%); overflow-x:hidden; }
        .site-shell:before { content:""; position:fixed; inset:0; z-index:0; pointer-events:none; opacity:.52; background-image:radial-gradient(circle at 8% 15%,rgba(117,87,199,.28) 0 70px,transparent 71px),radial-gradient(circle at 92% 20%,rgba(93,231,224,.34) 0 100px,transparent 101px),radial-gradient(circle at 78% 88%,rgba(117,87,199,.22) 0 80px,transparent 81px),linear-gradient(120deg,transparent 0 46%,rgba(255,255,255,.48) 46.2% 46.7%,transparent 47% 100%); }
        .site-shell:after { content:""; position:fixed; inset:0; z-index:0; pointer-events:none; opacity:.10; background:linear-gradient(135deg,rgba(117,87,199,.75),rgba(93,231,224,.55)),url('https://images.unsplash.com/photo-1554118811-1e0d58224f31?auto=format&fit=crop&w=1800&q=70') center/cover no-repeat; mix-blend-mode:multiply; }
        .content { position:relative; z-index:1; }
        .topbar { position:sticky; top:0; z-index:30; backdrop-filter:blur(18px); background:rgba(250,247,255,.88); border-bottom:1px solid rgba(117,87,199,.16); box-shadow:0 8px 30px rgba(74,50,130,.08); }
        .nav { max-width:1220px; margin:auto; min-height:78px; padding:10px 22px; display:flex; align-items:center; justify-content:space-between; gap:18px; }
        .brand { display:flex; align-items:center; gap:12px; text-decoration:none; color:var(--ink); }
        .brand img { width:62px; height:62px; object-fit:cover; border-radius:50%; background:white; border:3px solid var(--cyan-deep); box-shadow:0 8px 22px rgba(11,159,156,.18); }
        .brand-title { font-size:18px; font-weight:950; letter-spacing:.02em; }
        .brand-sub { font-size:11px; font-weight:750; color:#6c62a7; margin-top:3px; }
        .navlinks { display:flex; align-items:center; gap:8px; }
        .navlinks a { text-decoration:none; color:var(--ink); font-weight:800; font-size:13px; padding:10px 12px; border-radius:999px; }
        .navlinks a:hover { background:#e4faf8; }
        .whatsapp { border:0; cursor:pointer; text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:linear-gradient(100deg,#0b9f9c,#20c9c0); color:white; font-weight:900; padding:12px 18px; border-radius:999px; box-shadow:0 9px 24px rgba(11,159,156,.23); }
        .hero { max-width:1220px; margin:auto; padding:58px 22px 34px; display:grid; grid-template-columns:1.1fr .9fr; gap:28px; align-items:center; }
        .hero-copy { background:rgba(255,255,255,.78); border:1px solid rgba(117,87,199,.16); border-radius:34px; padding:40px; box-shadow:0 22px 65px rgba(80,56,145,.12); }
        .eyebrow { display:inline-block; padding:7px 13px; border-radius:999px; background:#d9fffc; color:#087d79; font-size:11px; font-weight:900; letter-spacing:.06em; }
        .hero h1 { margin:18px 0 12px; font-size:clamp(42px,6vw,68px); line-height:.98; letter-spacing:-.045em; color:#4b389c; }
        .hero h1 span { color:#079e9b; }
        .hero p { max-width:640px; margin:0; color:#565b85; font-size:17px; line-height:1.65; }
        .hero-actions { margin-top:24px; display:flex; flex-wrap:wrap; gap:10px; }
        .outline { display:inline-flex; align-items:center; justify-content:center; text-decoration:none; border:2px solid #8a71d2; color:#5d48a9; background:white; padding:11px 17px; border-radius:999px; font-weight:900; }
        .hero-art { min-height:390px; border-radius:38px; overflow:hidden; position:relative; background:linear-gradient(145deg,rgba(117,87,199,.9),rgba(93,231,224,.88)); box-shadow:0 28px 80px rgba(76,56,140,.2); display:grid; place-items:center; }
        .hero-art:before,.hero-art:after { content:""; position:absolute; border-radius:50%; background:rgba(255,255,255,.2); }
        .hero-art:before { width:230px;height:230px; top:-65px;right:-50px; }
        .hero-art:after { width:170px;height:170px; bottom:-50px;left:-35px; }
        .hero-art img { width:74%; height:74%; object-fit:cover; border-radius:42% 58% 55% 45% / 48% 42% 58% 52%; border:9px solid rgba(255,255,255,.86); box-shadow:0 24px 55px rgba(41,27,89,.25); position:relative; z-index:1; }
        .hero-bubble { position:absolute; z-index:2; background:white; color:#4b389c; padding:12px 15px; border-radius:18px; font-weight:950; box-shadow:0 12px 30px rgba(50,30,100,.18); }
        .bubble-one { top:28px;left:24px;transform:rotate(-4deg); } .bubble-two { right:20px;bottom:28px;transform:rotate(4deg); }
        .menu-wrap { max-width:1220px; margin:auto; padding:18px 22px 70px; }
        .menu-heading { text-align:center; padding:30px 20px 14px; }
        .menu-heading h2 { font-size:42px; margin:0 0 10px; color:#4b389c; letter-spacing:-.03em; }
        .menu-heading p { max-width:760px; margin:0 auto; color:#5c628c; font-size:16px; line-height:1.7; }
        .menu-layout { display:grid; grid-template-columns:minmax(0,1fr) 330px; gap:22px; align-items:start; }
        .categories { min-width:0; }
        .category { margin:0 0 26px; padding:22px; background:rgba(255,255,255,.72); border:1px solid rgba(117,87,199,.14); border-radius:28px; box-shadow:0 12px 40px rgba(78,55,137,.07); }
        .cat-head { display:flex; align-items:flex-end; justify-content:space-between; gap:12px; margin-bottom:16px; }
        .cat-title { margin:0; color:#4d399c; font-size:23px; font-weight:950; }
        .cat-sub { margin:4px 0 0; color:#68709c; font-size:12px; font-weight:700; }
        .view-label { color:#099b98; font-size:12px; font-weight:900; white-space:nowrap; }
        .items-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(178px,1fr)); gap:14px; }
        .item-card { overflow:hidden; border-radius:20px; background:var(--card); border:1px solid rgba(117,87,199,.12); box-shadow:0 8px 25px rgba(65,45,125,.06); transition:transform .22s ease,box-shadow .22s ease; }
        .item-card:hover { transform:translateY(-5px); box-shadow:0 16px 38px rgba(65,45,125,.13); }
        .item-img { width:100%; height:142px; object-fit:cover; display:block; background:#eee5ff; }
        .item-body { padding:13px; }
        .item-name { font-size:14px; font-weight:900; min-height:35px; }
        .item-desc { color:#6a7091; font-size:10.5px; line-height:1.45; margin-top:4px; min-height:31px; }
        .item-bottom { margin-top:12px; display:flex; align-items:center; justify-content:space-between; gap:7px; }
        .price { color:#553ea4; font-size:15px; font-weight:950; }
        .price small { display:block; color:#8186a5; font-size:9px; font-weight:800; margin-bottom:2px; }
        .add-btn { border:0; cursor:pointer; color:white; background:linear-gradient(100deg,#0b9f9c,#22c8c0); font-weight:900; font-size:11px; padding:8px 13px; border-radius:999px; box-shadow:0 7px 16px rgba(11,159,156,.18); }
        .add-btn:hover { transform:translateY(-1px); filter:brightness(1.05); }
        .cart { position:sticky; top:96px; background:rgba(255,255,255,.9); border:1px solid rgba(117,87,199,.16); border-radius:28px; padding:18px; box-shadow:0 18px 55px rgba(71,49,128,.13); }
        .cart-title-row { display:flex; align-items:center; justify-content:space-between; gap:10px; }
        .cart-title { margin:0; font-size:21px; color:#4d399c; }
        .cart-count { min-width:30px;height:30px;display:grid;place-items:center;border-radius:50%;background:#d9fffc;color:#087d79;font-size:12px;font-weight:950; }
        .cart-empty { padding:32px 8px; text-align:center; color:#777c9e; font-size:13px; line-height:1.6; }
        .cart-items { margin-top:14px; max-height:440px; overflow:auto; }
        .cart-item { display:grid; grid-template-columns:54px 1fr auto; gap:10px; align-items:center; padding:12px 0; border-bottom:1px solid #eee9fa; }
        .cart-item img { width:54px;height:54px;object-fit:cover;border-radius:13px; }
        .cart-name { font-size:12px;font-weight:900;line-height:1.3; }
        .cart-price { color:#665aa0;font-size:11px;font-weight:800;margin-top:3px; }
        .qty { display:flex;align-items:center;gap:6px;margin-top:7px; }
        .qty button { width:24px;height:24px;border:1px solid #d8d1ef;background:#fff;border-radius:7px;cursor:pointer;font-weight:900;color:#57449e; }
        .qty span { min-width:16px;text-align:center;font-size:11px;font-weight:900; }
        .remove { border:0;background:transparent;color:#d85c87;cursor:pointer;font-size:11px;font-weight:900; padding:5px; }
        .cart-total { display:flex;justify-content:space-between;gap:10px;margin-top:16px;padding-top:14px;border-top:2px dashed #d9d0f0;font-size:15px;font-weight:950; }
        .cart-note { color:#7a7e9d;font-size:10px;margin-top:7px;line-height:1.5; }
        .cart-wa { width:100%;margin-top:13px; }
        .continue { width:100%;margin-top:9px;border:0;background:transparent;color:#6355a1;font-weight:800;cursor:pointer;padding:8px; }
        .features { max-width:1220px;margin:auto;padding:0 22px 70px; }
        .features h2 { color:#4b389c;text-align:center;font-size:32px;margin:0 0 18px; }
        .feature-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:14px; }
        .feature { background:rgba(255,255,255,.68);border:1px solid rgba(117,87,199,.13);border-radius:23px;padding:20px;min-height:120px; }
        .feature-icon { font-size:27px; } .feature h3 { margin:9px 0 5px;font-size:15px; } .feature p { margin:0;color:#6a7091;font-size:12px;line-height:1.5; }
        .footer { position:relative;z-index:1;background:linear-gradient(120deg,rgba(117,87,199,.95),rgba(11,159,156,.94));color:white;padding:42px 22px; }
        .footer-inner { max-width:1220px;margin:auto;text-align:center; }
        .footer h2 { margin:0 0 7px;font-size:27px; } .footer p { margin:5px 0;color:rgba(255,255,255,.88);font-size:13px; }
        .social { display:flex;justify-content:center;gap:10px;margin-top:16px; } .social a { color:#fff;text-decoration:none;background:rgba(255,255,255,.16);padding:9px 13px;border-radius:999px;font-weight:850;font-size:12px; }
        .mobile-cart { display:none; }
        @media (max-width:980px) { .hero{grid-template-columns:1fr}.menu-layout{grid-template-columns:1fr}.cart{position:fixed;right:14px;bottom:14px;top:auto;width:min(390px,calc(100vw - 28px));max-height:78vh;z-index:40;display:${cartOpen ? 'block' : 'none'};overflow:auto}.mobile-cart{display:flex;position:fixed;right:18px;bottom:18px;z-index:35;border:0;cursor:pointer;background:#4d399c;color:white;padding:13px 17px;border-radius:999px;font-weight:950;box-shadow:0 14px 35px rgba(71,49,128,.28)}.navlinks{display:none}.feature-grid{grid-template-columns:1fr 1fr} }
        @media (max-width:620px) { .nav{padding:9px 14px}.brand img{width:50px;height:50px}.brand-title{font-size:15px}.brand-sub{font-size:9px}.nav .whatsapp{padding:10px 12px;font-size:11px}.hero{padding:28px 14px 20px}.hero-copy{padding:26px 22px;border-radius:25px}.hero h1{font-size:43px}.hero p{font-size:14px}.hero-art{min-height:310px}.menu-wrap,.features{padding-left:14px;padding-right:14px}.menu-heading h2{font-size:34px}.menu-heading p{font-size:14px}.category{padding:15px;border-radius:22px}.items-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.item-img{height:118px}.item-body{padding:10px}.item-name{font-size:12px}.item-desc{font-size:9.5px}.item-bottom{align-items:flex-end}.price{font-size:13px}.add-btn{font-size:10px;padding:7px 10px}.feature-grid{grid-template-columns:1fr}.cart{width:calc(100vw - 24px);right:12px}.cart-items{max-height:35vh} }
      `}</style>

      <div className="content">
        <header className="topbar">
          <nav className="nav">
            <a className="brand" href="#home">
              <img src="/blr99/logo.png" alt="BLR 99 Corner" onError={(e) => { e.currentTarget.src = '/logo.png'; }} />
              <span><div className="brand-title">BLR 99 CORNER</div><div className="brand-sub">100% VEG • Icecream Boutique</div></span>
            </a>
            <div className="navlinks"><a href="#home">Home</a><a href="#menu">Menu</a><a href="#about">About</a><a href="#contact">Contact</a></div>
            <button className="whatsapp" onClick={orderOnWhatsApp} disabled={!cart.length} style={{ opacity: cart.length ? 1 : .75 }}>
              💬 Order on WhatsApp {cart.length ? `(${cartCount})` : ''}
            </button>
          </nav>
        </header>

        <section id="home" className="hero">
          <div className="hero-copy">
            <span className="eyebrow">100% VEG • FRESHLY MADE • HAPPY VIBES</span>
            <h1>Your Cravings.<br /><span>Your Happy Place.</span></h1>
            <p>From creamy scoops and dreamy sundaes to crispy fries, loaded waffles, burgers, sandwiches and refreshing milkshakes — there is something delicious waiting for everyone at BLR 99 Corner.</p>
            <div className="hero-actions"><a className="whatsapp" href="#menu">🍦 Explore Our Menu</a><a className="outline" href={`tel:${phone}`}>📞 +91 98860-67444</a></div>
          </div>
          <div className="hero-art">
            <div className="hero-bubble bubble-one">Life is better with ice cream 🍨</div>
            <img src={cdn('photo-1563805042-7684c019e1cb')} alt="Delicious ice cream" />
            <div className="hero-bubble bubble-two">Scoop • Sip • Bite • Repeat!</div>
          </div>
        </section>

        <section id="menu" className="menu-wrap">
          <div className="menu-heading">
            <h2>Our Menu 🍦</h2>
            <p><strong>More Than Just Ice Cream — It’s a Whole Lot of Happiness!</strong><br />Pick your favourite, make it your own, and enjoy every sweet moment at BLR 99 Corner. Add your favourites to the cart and send the complete order straight to WhatsApp.</p>
          </div>

          <div className="menu-layout">
            <div className="categories">
              {Object.entries(menu).map(([category, items]) => (
                <section className="category" key={category}>
                  <div className="cat-head">
                    <div><h3 className="cat-title">{category}</h3><p className="cat-sub">{categorySubtitles[category]}</p></div>
                    <span className="view-label">{items.length} choices →</span>
                  </div>
                  <div className="items-grid">
                    {items.map((item) => (
                      <article className="item-card" key={item.name}>
                        <img className="item-img" src={item.img} alt={item.name} loading="lazy" onError={(e) => { e.currentTarget.src = '/blr99/logo.png'; }} />
                        <div className="item-body">
                          <div className="item-name">{item.name}</div>
                          <div className="item-desc">{item.desc}</div>
                          <div className="item-bottom">
                            <div className="price">
                              <small>{item.doublePrice ? 'Single Scoop' : 'Price'}</small>
                              ₹{item.price}{item.doublePrice ? ` / ₹${item.doublePrice}` : ''}
                            </div>
                            <button className="add-btn" onClick={() => addToCart(item)}>+ Add</button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}

              <div style={{ marginTop:10, padding:'18px 22px', borderRadius:20, background:'rgba(255,250,235,.9)', border:'2px dashed #b49ae9', textAlign:'center', color:'#5b4c93' }}>
                <strong>⭐ TOPPINGS EXTRA CHARGES APPLY ⭐</strong><br />
                <span style={{ fontSize:13, fontWeight:800 }}>🍦 CONE ₹15 &nbsp; | &nbsp; 🧇 WAFFLE CONE ₹15</span>
              </div>
            </div>

            <aside className="cart" id="cart">
              <div className="cart-title-row"><h3 className="cart-title">🛒 Your Cart</h3><span className="cart-count">{cartCount}</span></div>
              {!cart.length ? (
                <div className="cart-empty">Your cart is waiting for something delicious! 🍨<br />Click <strong>+ Add</strong> on any menu item.</div>
              ) : (
                <>
                  <div className="cart-items">
                    {cart.map((item) => (
                      <div className="cart-item" key={item.name}>
                        <img src={item.img} alt="" />
                        <div>
                          <div className="cart-name">{item.name}</div>
                          <div className="cart-price">₹{item.price} × {item.qty} = ₹{item.price * item.qty}</div>
                          <div className="qty"><button onClick={() => changeQty(item.name, -1)} aria-label={`Decrease ${item.name}`}>−</button><span>{item.qty}</span><button onClick={() => changeQty(item.name, 1)} aria-label={`Increase ${item.name}`}>+</button></div>
                        </div>
                        <button className="remove" onClick={() => removeFromCart(item.name)} aria-label={`Remove ${item.name}`}>✕ Remove</button>
                      </div>
                    ))}
                  </div>
                  <div className="cart-total"><span>Subtotal</span><span>₹{subtotal}</span></div>
                  <div className="cart-note">Prices shown are menu prices. Ice-cream items are added as single scoops; double-scoop pricing is shown on the menu.</div>
                  <button className="whatsapp cart-wa" onClick={orderOnWhatsApp}>💬 Order on WhatsApp</button>
                  <button className="continue" onClick={() => setCartOpen(false)}>← Continue shopping</button>
                </>
              )}
            </aside>
          </div>
        </section>

        <section id="about" className="features">
          <h2>More Sweet Experiences ✨</h2>
          <div className="feature-grid">
            <div className="feature"><div className="feature-icon">🐾</div><h3>Treat Your Pets</h3><p>Pet-friendly treats for your four-legged companions.</p></div>
            <div className="feature"><div className="feature-icon">🧸</div><h3>Kids’ Play Area</h3><p>A fun little space where kids can explore and play.</p></div>
            <div className="feature"><div className="feature-icon">🎮</div><h3>Play & Win Free Ice Cream</h3><p>Challenge yourself and win your favourite ice cream for FREE!</p></div>
            <div className="feature"><div className="feature-icon">📲</div><h3>Join Our WhatsApp Community</h3><p>Get exclusive discounts, exciting offers and special treats.</p></div>
            <div className="feature"><div className="feature-icon">🎯</div><h3>Games for Adults</h3><p>Challenge your friends, test your skills and enjoy exciting games.</p></div>
            <div className="feature"><div className="feature-icon">🍨</div><h3>Sugar-Free Ice Cream</h3><p>A delicious treat without the added sugar.</p></div>
          </div>
        </section>

        <footer id="contact" className="footer">
          <div className="footer-inner">
            <h2>Good Food. Happy Mood. 💜</h2>
            <p>🚗 Drive-In Service Available (After 8 P.M) &nbsp; • &nbsp; 🛵 Free Home Delivery</p>
            <p>#41, A.J. Chambers, RV Road, Basavanagudi, Bangalore-560004</p>
            <p>📞 +91 98860-67444 &nbsp; • &nbsp; 🌐 www.blr99corner.com</p>
            <div className="social"><a href="https://www.instagram.com/blr99corner" target="_blank" rel="noreferrer">Instagram @blr99corner</a><a href="https://www.facebook.com/blr99corner" target="_blank" rel="noreferrer">Facebook /blr99corner</a></div>
            <p style={{ marginTop:18, opacity:.75 }}>© 2026 BLR 99 Corner</p>
          </div>
        </footer>
      </div>

      <button className="mobile-cart" onClick={() => setCartOpen((open) => !open)}>🛒 Cart {cartCount ? `(${cartCount}) • ₹${subtotal}` : ''}</button>
    </main>
  );
}
