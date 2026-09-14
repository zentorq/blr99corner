'use client';

import { useEffect, useState } from 'react';

const phone = '+919886067444';

const menu = {
  'Icecreams 🍦': [
    ['Vanilla Classic', '₹60', '₹120', 'Classic vanilla ice cream', 'icecream.png'],
    ['Belgium Chocolate', '₹90', '₹170', 'Rich Belgian chocolate', 'icecream.png'],
    ['Strawberry Bliss', '₹65', '₹120', 'Creamy strawberry delight', 'icecream.png'],
    ['Mango Tango', '₹70', '₹130', 'Mango ice cream', 'icecream.png'],
    ['Pistachio Royal', '₹75', '₹140', 'Premium pistachio', 'icecream.png'],
    ['Blue Berry Cheese Cake', '₹80', '₹150', 'Blueberry cheesecake flavour', 'icecream.png'],
    ['Butter Scotch Dream', '₹65', '₹120', 'Butterscotch ice cream', 'icecream.png'],
    ['Cookies & Cream', '₹80', '₹150', 'Cookies and cream', 'icecream.png'],
    ['Tiramisu', '₹85', '₹160', 'Tiramisu inspired flavour', 'icecream.png'],
    ['DryFruit', '₹90', '₹170', 'Rich dry-fruit ice cream', 'icecream.png'],
    ['Red Velvet', '₹85', '₹160', 'Red velvet flavour', 'icecream.png'],
    ['Black Currant', '₹70', '₹130', 'Black currant flavour', 'icecream.png'],
    ['Normal Chocolate', '₹70', '₹130', 'Classic chocolate ice cream', 'icecream.png'],
    ['Chocolate Fudge', '₹80', '₹150', 'Chocolate fudge ice cream', 'icecream.png'],
  ],
  'Milkshakes 🥤': [
    ['Nutrella Nutty', '₹110', '', 'Creamy hazelnut chocolate shake', 'milkshake.png'],
    ['Classic Vanilla', '₹90', '', 'Smooth vanilla shake', 'milkshake.png'],
    ['Double Chocolate', '₹110', '', 'Extra chocolate goodness', 'milkshake.png'],
    ['StrawBerry Swirls', '₹95', '', 'Strawberry swirled shake', 'milkshake.png'],
    ['Oreo Crush', '₹110', '', 'Oreo cookie shake', 'milkshake.png'],
    ['Mango Madness', '₹100', '', 'Mango milkshake', 'milkshake.png'],
    ['Caramel Drizzle', '₹105', '', 'Caramel topped shake', 'milkshake.png'],
    ['Cold Coffee Classic', '₹100', '', 'Cold coffee milkshake', 'milkshake.png'],
    ['KitKat Shake', '₹115', '', 'KitKat chocolate shake', 'milkshake.png'],
    ['Classic Chocolate', '₹100', '', 'Classic chocolate shake', 'milkshake.png'],
    ['Caramel Mocha', '₹120', '', 'Coffee, chocolate and caramel', 'milkshake.png'],
  ],
  'Sandwiches 🥪': [
    ['Veg Grilled', '₹80', '', 'Grilled to perfection, made for you!', 'sandwich.png'],
    ['Chocolate', '₹75', '', 'Sweet grilled sandwich', 'sandwich.png'],
    ['Corn & Cheese', '₹110', '', 'Creamy corn and cheese', 'sandwich.png'],
    ['Classic Veg Club', '₹110', '', 'Classic layered veg sandwich', 'sandwich.png'],
    ['Chilli Cheeze', '₹90', '', 'Spicy chilli and cheese', 'sandwich.png'],
  ],
  'Burgers 🍔': [
    ['Crispy Veg', '₹90', '', 'Crispy veggie burger', 'burger.png'],
    ['Cheese Burst', '₹110', '', 'Loaded with cheesy goodness', 'burger.png'],
    ['Aloo Tikka Classic', '₹100', '', 'Classic aloo tikka burger', 'burger.png'],
    ['Double Patty Veg', '₹140', '', 'Double patty veggie burger', 'burger.png'],
  ],
  'French Fries 🍟': [
    ['French Fries', '₹85', '', 'Crispy, golden and irresistible', 'fries.png'],
    ['Peri Peri French Fries', '₹95', '', 'Crispy fries with peri peri seasoning', 'fries.png'],
    ['Cheezy Garlic Potato', '₹100', '', 'Cheesy garlic potato — 15 pieces', 'smiley.png'],
    ['Smiley', '₹95', '', '7 pieces', 'smiley.png'],
  ],
  'Waffle Mixes 🧇': [
    ['Honey', '₹80', '₹60', 'With icecream / without icecream', 'waffle.png'],
    ['Coco', '₹95', '₹75', 'With icecream / without icecream', 'waffle.png'],
    ['Nutrella', '₹105', '₹85', 'With icecream / without icecream', 'waffle.png'],
    ['Oreo', '₹95', '₹75', 'With icecream / without icecream', 'waffle.png'],
    ['Fruit & Honey', '₹95', '₹75', 'With icecream / without icecream', 'waffle.png'],
  ],
  'Sundaes 🍨': [
    ['Hot Chocolate Fudge Sundae', '₹110', '', '2 scoops Vanilla, chocolate fudge sauce, peanuts', 'sundae_choco.png'],
    ['Strawberry Dream Sundae', '₹130', '', '2 scoops Strawberry, Vanilla cake, Strawberry compote, Jelly', 'sundae_cherry.png'],
    ['Cake Fudge Sundae', '₹140', '', '2 scoops Vanilla, Chocolate Cake, Chocolate Fudge sauce, Peanuts', 'sundae_choco.png'],
    ['Lychee Sundae', '₹140', '', '2 scoops Vanilla, Lychee pieces, Cream Sauce', 'sundae_cherry.png'],
    ['Dry Fruit Sundae', '₹150', '', '2 scoops Vanilla, Brownie, Roasted dry fruits, Milkmaid, Honey, Jelly', 'sundae_choco.png'],
    ['Neapolitan Sundae', '₹140', '', '3 scoops — Vanilla/Strawberry/Chocolate, Strawberry Compote, Chocolate Sauce', 'sundae_cherry.png'],
    ['Butter Scotch Sundae', '₹130', '', '2 Scoops Butter Scotch, Caramel sauce, Chocolate Sauce, Cashew', 'sundae_choco.png'],
    ['Brownie Fudge Sundae', '₹150', '', '2 scoops Vanilla & Chocolate, Brownie, Chocolate Sauce, Chocochip', 'sundae_choco.png'],
    ['Red Velvet Berry Sundae', '₹150', '', '2 scoops Red Velvet, Strawberry Compote, Jelly, Cherry', 'sundae_cherry.png'],
    ['Tiramisu Sundae', '₹160', '', '2 scoops Tiramisu, Vanilla Cake, Roasted almond, Chocolate Sauce', 'sundae_choco.png'],
    ['Death By Chocolate', '₹190', '', '3 scoops Vanilla, Chocolate Cake, Chocolate Sauce, Roasted Peanut, Cherry', 'sundae_choco.png'],
    ['Fruit Gudbud Sundae', '₹190', '', 'Vanilla/Strawberry/Mango with Choco Cake, Choco Sauce, Peanut, Honey, Cherry', 'sundae_cherry.png'],
    ['Nutella Brownie Mashup Sundae', '₹200', '', '2 scoops Vanilla, Brownie, Nutella, Almond, Cashew, Cherry', 'sundae_choco.png'],
  ],
} as const;

const features = [
  ['🐾', 'Treat Your Pets', 'Why leave your furry friend behind when they can enjoy a delicious ice cream treat too?', 'Pet-friendly treats for your four-legged companions.'],
  ['🧸', 'Kids’ Play Area', 'Enjoy your ice cream peacefully while your little ones have fun!', 'Let the kids play, explore and make memories while you relax.'],
  ['🎮', 'Play & Win Free Ice Cream', 'Play exciting games, challenge yourself and win your favourite ice cream for FREE!', 'Fun challenges and sweet rewards.'],
  ['📲', 'Join Our WhatsApp Community', 'Join our community and unlock exclusive discounts, exciting offers and special treats!', 'Stay connected for new offers and treats.'],
  ['🎯', 'Games for Adults', 'Fun Isn’t Just for Kids!', 'Challenge your friends, test your skills and enjoy exciting games made for grown-ups too.'],
  ['🍨', 'Sugar-Free Ice Cream', 'A delicious option without the added sugar.', 'Ask our team about sugar-free ice cream options.'],
];

export default function Page() {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => setHideHeader(window.scrollY > 120);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const order = (name = '') =>
    `https://wa.me/${phone}?text=${encodeURIComponent(name ? `Hi BLR 99 Corner, I want to order.. ${name}` : 'Hi BLR 99 Corner')}`;

  return (
    <main className="site">
      <style>{`
        :root {
          --green:#075b42;
          --green2:#0c7656;
          --cream:#fff8e8;
          --gold:#d49a24;
          --ink:#1d201d;
          --cyan:#dff5f1;
          --red:#b82b28;
        }
        * { box-sizing:border-box; scroll-behavior:smooth; }
        body { margin:0; background:#e5f4f1; }
        .site {
          min-height:100vh;
          color:var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at 8% 8%, rgba(255,255,255,.9) 0 5%, transparent 23%),
            radial-gradient(circle at 92% 18%, rgba(210,247,239,.95) 0 4%, transparent 22%),
            radial-gradient(circle at 18% 88%, rgba(246,226,174,.28) 0 5%, transparent 25%),
            linear-gradient(135deg,#e9f6f3 0%,#fff9e9 45%,#eef8f6 100%);
          position:relative;
          overflow:hidden;
        }
        .site:before {
          content:"";
          position:fixed; inset:0; pointer-events:none; z-index:0;
          opacity:.12;
          background-image:
            radial-gradient(circle at 20% 20%, #0b6b4d 0 1px, transparent 2px),
            radial-gradient(circle at 80% 70%, #d49a24 0 1px, transparent 2px);
          background-size:42px 42px,58px 58px;
        }
        header {
          position:fixed; top:12px; left:50%; transform:translateX(-50%);
          width:min(1180px,calc(100% - 24px)); z-index:30;
          display:flex; align-items:center; justify-content:space-between; gap:18px;
          padding:10px 14px;
          background:rgba(7,91,66,.94); backdrop-filter:blur(16px);
          border:1px solid rgba(255,255,255,.22); border-bottom:4px solid var(--gold);
          border-radius:22px; box-shadow:0 14px 35px rgba(0,65,48,.22);
          transition:.35s ease;
        }
        header.hide { opacity:0; transform:translate(-50%,-130%); pointer-events:none; }
        .brand { display:flex; align-items:center; gap:11px; min-width:0; }
        .brand img { width:66px;height:66px;border-radius:50%;object-fit:cover;background:white;border:2px solid var(--gold); }
        .brand-title { color:#fff7df;font-weight:950;letter-spacing:.5px;font-size:18px; }
        .brand-sub { color:#d8f4eb;font-size:11px;font-weight:700;margin-top:2px; }
        nav { display:flex; align-items:center; gap:5px; margin-left:auto; }
        nav a { color:#fff;text-decoration:none;font-size:13px;font-weight:850;padding:9px 10px;border-radius:10px; }
        nav a:hover { background:rgba(255,255,255,.13); color:#ffe6a4; }
        .wa { background:#25d366 !important; color:#073d2c !important; padding:11px 15px !important; }
        .hero { position:relative; z-index:1; padding:145px 22px 58px; }
        .hero-inner { max-width:1180px;margin:auto;display:grid;grid-template-columns:1.08fr .92fr;gap:35px;align-items:center; }
        .hero-copy { background:rgba(255,252,241,.9); border:1px solid rgba(7,91,66,.18); border-left:7px solid var(--green); border-radius:28px;padding:38px;box-shadow:0 18px 55px rgba(23,74,61,.1); }
        .eyebrow { display:inline-block;background:var(--green);color:white;border-radius:999px;padding:7px 13px;font-size:11px;font-weight:900;letter-spacing:.5px; }
        h1 { margin:17px 0 13px;font-size:clamp(38px,5vw,64px);line-height:.98;color:var(--green);letter-spacing:-2px; }
        h1 span { color:#0c8d73; }
        .hero-copy p { font-size:17px;line-height:1.65;opacity:.75;max-width:650px; }
        .hero-actions { display:flex;gap:11px;flex-wrap:wrap;margin-top:24px; }
        .btn { text-decoration:none;border-radius:13px;padding:13px 18px;font-weight:900;display:inline-block;transition:.2s; }
        .btn:hover { transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.12); }
        .primary { background:var(--green);color:white; }
        .secondary { background:white;color:var(--green);border:2px solid var(--gold); }
        .hero-logo { width:min(430px,90vw);aspect-ratio:1;object-fit:cover;border-radius:50%;border:8px solid var(--gold);background:white;box-shadow:0 25px 70px rgba(7,91,66,.22); }
        section { position:relative; z-index:1; }
        .section-wrap { max-width:1180px;margin:auto;padding:35px 22px 70px; }
        .section-title { text-align:center;margin:0 0 10px;color:var(--green);font-size:34px;font-weight:950; }
        .section-lead { text-align:center;max-width:760px;margin:0 auto 28px;opacity:.72;line-height:1.6; }
        .menu-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:18px; }
        .menu-category { margin:26px 0 44px; }
        .cat-title { display:inline-flex;align-items:center;gap:8px;background:var(--green);color:white;padding:10px 18px;border-radius:0 15px 15px 0;border-left:5px solid var(--gold);font-size:23px;font-weight:950;box-shadow:0 8px 22px rgba(7,91,66,.12); }
        .cat-note { margin:9px 0 14px 18px;color:#7a3829;font-family:Georgia,serif;font-style:italic;font-weight:700; }
        .card { background:rgba(255,255,255,.92);border:1px solid rgba(7,91,66,.13);border-radius:20px;overflow:hidden;box-shadow:0 10px 28px rgba(0,65,48,.08);transition:.25s; }
        .card:hover { transform:translateY(-5px);box-shadow:0 18px 40px rgba(0,65,48,.14);border-color:rgba(212,154,36,.55); }
        .card-img { height:155px;overflow:hidden;background:#f5ead0; }
        .card-img img { width:100%;height:100%;object-fit:cover;display:block;transition:.4s; }
        .card:hover .card-img img { transform:scale(1.06); }
        .card-body { padding:14px; }
        .name { font-weight:900;font-size:15px; }
        .desc { font-size:11px;opacity:.63;line-height:1.4;margin-top:4px;min-height:31px; }
        .price-row { margin-top:12px;display:flex;justify-content:space-between;align-items:flex-end;gap:8px; }
        .price { color:var(--green);font-size:16px;font-weight:950; }
        .price small { display:block;font-size:8px;color:#777;text-transform:uppercase;letter-spacing:.4px; }
        .add { border:0;background:linear-gradient(90deg,var(--green),#0b9677);color:white;border-radius:999px;padding:7px 12px;font-weight:900;cursor:pointer;text-decoration:none;font-size:11px; }
        .features { background:rgba(255,249,232,.72);border-top:1px solid rgba(7,91,66,.1);border-bottom:1px solid rgba(7,91,66,.1); }
        .feature-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:18px; }
        .feature { background:rgba(255,255,255,.82);border:1px solid rgba(7,91,66,.12);border-radius:22px;padding:22px;box-shadow:0 8px 24px rgba(0,65,48,.06); }
        .feature-icon { font-size:30px; }
        .feature h3 { margin:8px 0 7px;color:var(--green);font-size:19px; }
        .feature p { margin:5px 0;line-height:1.55;font-size:13px;opacity:.75; }
        .about { background:linear-gradient(135deg,rgba(7,91,66,.96),rgba(12,118,86,.92));color:white; }
        .about-grid { display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center; }
        .about h2 { font-size:38px;margin:0 0 12px;color:#fff5d6; }
        .about p { line-height:1.75;color:rgba(255,255,255,.84); }
        .info-card { background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:22px;padding:24px; }
        .social { display:flex;gap:10px;flex-wrap:wrap;margin-top:18px; }
        .social a { color:var(--green);background:#fff8e8;padding:10px 13px;border-radius:999px;text-decoration:none;font-weight:900;font-size:13px; }
        footer { position:relative;z-index:1;background:#063e2d;color:#e9f7f2;text-align:center;padding:40px 22px 55px; }
        footer strong { color:#ffe2a0; }
        .footer-social { margin-top:14px;display:flex;justify-content:center;gap:10px;flex-wrap:wrap; }
        .footer-social a { color:white;text-decoration:none;font-weight:850;padding:8px 12px;border:1px solid rgba(255,255,255,.22);border-radius:999px; }
        .watermark { position:fixed;right:16px;bottom:16px;width:74px;height:74px;border-radius:50%;opacity:.13;z-index:2;pointer-events:none; }
        @media(max-width:900px) {
          header { padding:8px 10px; }
          nav a:not(.wa) { display:none; }
          .hero-inner,.about-grid { grid-template-columns:1fr; }
          .hero-copy { padding:28px; }
          .hero-logo { margin:auto;display:block; }
          .feature-grid { grid-template-columns:1fr 1fr; }
        }
        @media(max-width:600px) {
          header { top:6px;width:calc(100% - 12px);border-radius:16px; }
          .brand img { width:52px;height:52px; }
          .brand-title { font-size:14px; }
          .brand-sub { font-size:9px; }
          .wa { font-size:10px !important;padding:9px 10px !important; }
          .hero { padding-top:112px; }
          .hero-copy { padding:23px; }
          h1 { font-size:40px; }
          .menu-grid { grid-template-columns:1fr 1fr;gap:12px; }
          .card-img { height:125px; }
          .card-body { padding:11px; }
          .name { font-size:13px; }
          .feature-grid { grid-template-columns:1fr; }
          .section-wrap { padding-left:14px;padding-right:14px; }
        }
      `}</style>

      <header className={hideHeader ? 'hide' : ''}>
        <div className="brand">
          <img src="/blr99/logo.png" alt="BLR 99 Corner" />
          <div>
            <div className="brand-title">BLR 99 CORNER</div>
            <div className="brand-sub">100% VEG • Icecream Boutique</div>
          </div>
        </div>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="wa" href={order()} target="_blank" rel="noreferrer">Order on WhatsApp!</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">100% VEG • FRESH ALWAYS</span>
            <h1>Scoops of Happiness,<br /><span>Right at the Corner.</span></h1>
            <p>Icecreams, waffles, sandwiches, burgers, milkshakes and sundaes — made fresh for every kind of sweet moment.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#menu">Explore Our Menu ↓</a>
              <a className="btn secondary" href={order()} target="_blank" rel="noreferrer">📲 Order on WhatsApp</a>
            </div>
          </div>
          <div>
            <img className="hero-logo" src="/blr99/logo.png" alt="BLR 99 Corner logo" />
          </div>
        </div>
      </section>

      <section id="menu">
        <div className="section-wrap">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-lead">Scoop. Sip. Bite. Play. Repeat! 🎉
Whether you’re here for a quick scoop, a loaded sundae, a cheesy bite or a fun hangout with friends and family, BLR 99 Corner has something delicious waiting for you.

Come hungry. Leave happy! 💚🍨.</p>

          {Object.entries(menu).map(([category, items]) => (
            <div className="menu-category" key={category}>
              <div className="cat-title">{category}</div>
              {category === 'Sandwiches 🥪' && <div className="cat-note">Grilled to perfection, made for you!</div>}
              {category === 'Burgers 🍔' && <div className="cat-note">Big bites, bigger smiles!</div>}
              {category === 'French Fries 🍟' && <div className="cat-note">Crispy. Golden. Irresistible!</div>}
              {category === 'Waffle Mixes 🧇' && <div className="cat-note">Crispy Waffles, Sweet Happiness! • With / Without Icecream</div>}

              <div className="menu-grid">
                {items.map(([name, price, doublePrice, desc, img]) => (
                  <article className="card" key={name}>
                    <div className="card-img">
                      <img src={`/blr99/${img}`} alt={name} />
                    </div>
                    <div className="card-body">
                      <div className="name">{name}</div>
                      <div className="desc">{desc}</div>
                      <div className="price-row">
                        <div className="price">
                          {doublePrice ? (
                            <>
                              <small>With icecream</small>{price} <span style={{opacity:.45}}>/</span> {doublePrice}
                              <small style={{marginTop:3}}>Without icecream</small>
                            </>
                          ) : (
                            <>{price}</>
                          )}
                        </div>
                        <a className="add" href={order(name)} target="_blank" rel="noreferrer">Add +</a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div style={{maxWidth:650,margin:'0 auto',background:'#fff5d6',border:'2px dashed #d49a24',borderRadius:20,padding:'18px 22px',textAlign:'center'}}>
            <strong style={{color:'#8f2c27'}}>⭐ TOPPINGS EXTRA CHARGES APPLY ⭐</strong>
            <div style={{marginTop:8,fontWeight:850}}>🍦 CONE ₹15 &nbsp; | &nbsp; 🧇 WAFFLE CONE ₹15</div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-wrap">
          <h2 className="section-title">More Reasons to Visit</h2>
          <p className="section-lead">More than dessert — BLR 99 Corner is a place to play, relax, connect and make sweet memories.</p>
          <div className="feature-grid">
            {features.map(([icon,title,p1,p2]) => (
              <article className="feature" key={title}>
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{p1}</p>
                <p>{p2}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-wrap">
          <div className="about-grid">
            <div>
              <h2>Made for Happiness. 🍨</h2>
              <p>BLR 99 Corner brings together fresh vegetarian treats, playful experiences and a warm neighbourhood vibe. Come in for a scoop, stay for the smiles.</p>
              <div className="social">
                <a href="https://www.instagram.com/blr99corner" target="_blank" rel="noreferrer">Instagram @blr99corner</a>
                <a href="https://www.facebook.com/blr99corner" target="_blank" rel="noreferrer">Facebook /blr99corner</a>
              </div>
            </div>
            <div className="info-card" id="contact">
              <h3 style={{marginTop:0,color:'#ffe3a3'}}>Visit / Contact</h3>
              <p>🚗 Drive-In Service Available</p>
              <p>🛵 Free Home Delivery</p>
              <p>📞 +91 98860-67444</p>
              <p>🌐 www.blr99corner.com</p>
              <p>📍 #41, A.J.Chambers, RV Road, Basavanagudi, Bangalore-560004</p>
              <a className="btn" style={{background:'#25d366',color:'#073d2c',marginTop:7}} href={order()} target="_blank" rel="noreferrer">Join WhatsApp / Order</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <strong>Life is short, Make it Sweet! 💚</strong>
        <div style={{marginTop:8}}>Treat yourself today!</div>
        <div className="footer-social">
          <a href="https://www.instagram.com/blr99corner" target="_blank" rel="noreferrer">📸 @blr99corner</a>
          <a href="https://www.facebook.com/blr99corner" target="_blank" rel="noreferrer">f /blr99corner</a>
        </div>
        <div style={{marginTop:18,fontSize:12,opacity:.75}}>© 2026 BLR 99 Corner • 100% VEG • Icecream Boutique</div>
      </footer>

      <img className="watermark" src="/blr99/logo.png" alt="" />
    </main>
  );
}
