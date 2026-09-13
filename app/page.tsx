'use client';
import { useState, useEffect } from 'react';

export default function Page() {
  const phone = "+919886067444";
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 120) setHideHeader(true);
      else setHideHeader(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menu = {
    "Icecreams 🍦": [
      { name: "Vanilla Dream", price: "₹99", desc: "Classic Madagascar vanilla", img: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=400&h=400&fit=crop" },
      { name: "Chocolate Fudge", price: "₹129", desc: "Dark Belgian chocolate", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop" },
      { name: "Butterscotch Crunch", price: "₹129", desc: "Caramel + praline", img: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=400&fit=crop" },
      { name: "Mango Mastani", price: "₹149", desc: "Alphonso seasonal", img: "/mango-mastani.jpg?w=400&h=400&fit=crop&auto=format" },
      { name: "Strawberry Swirl", price: "₹139", desc: "Fresh strawberry bits", img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=400&fit=crop" },
      { name: "Pista Delight", price: "₹149", desc: "Premium pistachio", img: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=400&h=400&fit=crop" },
    ],
    "Waffles 🧇": [
      { name: "Nutella Berry Waffle", price: "₹199", desc: "Strawberry, blueberry, Nutella", img: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=400&h=400&fit=crop" },
      { name: "Classic Honey Waffle", price: "₹149", desc: "Whipped cream + honey", img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=400&fit=crop" },
      { name: "Choco Overload Waffle", price: "₹219", desc: "Triple chocolate", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop" },
    ],
    "Sandwiches 🥪": [
      { name: "Veg Grilled Sandwich", price: "₹119", desc: "Cheese + veggies", img: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=400&h=400&fit=crop" },
      { name: "Paneer Tikka Sandwich", price: "₹149", desc: "Spicy paneer + mint", img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=400&h=400&fit=crop" },
      { name: "Club Veg Sandwich", price: "₹169", desc: "Triple layer", img: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=400&h=400&fit=crop" },
    ],
    "Burgers 🍔": [
      { name: "Veg Supreme Burger", price: "₹129", desc: "Aloo tikki + cheese", img: "/veg-burger.jpg?w=400&h=400&fit=crop&auto=format" },
      { name: "Paneer Burger", price: "₹159", desc: "Crispy paneer patty", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop" },
    ],
    "Milkshakes 🥤": [
      { name: "Cold Coffee Shake", price: "₹129", desc: "Strong + creamy", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop" },
      { name: "KitKat Shake", price: "₹169", desc: "Crushed KitKat", img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400&h=400&fit=crop" },
      { name: "Oreo Shake", price: "₹159", desc: "Oreo + vanilla", img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&h=400&fit=crop" },
      { name: "Chocolate Shake", price: "₹149", desc: "Dutch chocolate", img: "/chocolate-shake.jpg?w=400&h=400&fit=crop" },
    ],
  };

  return (
    <main style={{ minHeight: '100vh', fontFamily: 'system-ui, sans-serif', position: 'relative' }}>
      <style>{`
        .btn-hover {
          transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s ease, filter 0.22s ease;
          display: inline-block;
        }
        .btn-hover:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
        }
        .btn-hover:active {
          transform: translateY(0) scale(0.98);
        }
        .card-hover {
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(10, 110, 209, 0.14);
          border-color: rgba(212, 160, 23, 0.45) !important;
        }
        .card-hover .img-zoom {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card-hover:hover .img-zoom {
          transform: scale(1.07);
        }
        .hero-img-hover {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
        }
        .hero-img-hover:hover {
          transform: scale(1.03) rotate(1deg);
          box-shadow: 0 28px 70px rgba(10, 110, 209, 0.32) !important;
        }
      `}</style>

      {/* HEADER */}
      <header style={{ 
        padding: '12px 24px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        maxWidth: 1120, 
        margin: '0 auto', 
        position: 'fixed', 
        top: 0, left: 0, right: 0,
        background: 'linear-gradient(90deg, rgba(10,110,209,0.98), rgba(15,163,177,0.98))', 
        backdropFilter: 'blur(12px)', 
        zIndex: 20, 
        borderBottom: '4px solid #D4A017', 
        boxShadow: '0 4px 20px rgba(10,110,209,0.25)',
        transition: 'all 0.5s ease',
        opacity: hideHeader ? 0 : 1,
        transform: hideHeader ? 'translateY(-100%)' : 'translateY(0)',
        pointerEvents: hideHeader ? 'none' : 'auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img src="/logo.png" alt="BLR 99 Corner" style={{ width: 150, height: 150, borderRadius: '50%', objectFit: 'cover', border: '4px solid #D4A017', background: 'white' }} />
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0, lineHeight: 1, color: '#F5E8C9' }}>BLR 99 CORNER</h1>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#2EC4B6' }}>100% VEG • Icecream Boutique</span>
            <div style={{ fontSize: 11, color: 'rgba(245,232,201,0.9)', marginTop: 2 }}>Taste Once • Feel Difference</div>
          </div>
        </div>
        <a 
          href={`https://wa.me/${phone}?text=Hi%20BLR99`} 
          className="btn-hover"
          style={{ background: '#D4A017', color: '#0A6ED1', padding: '12px 20px', borderRadius: 999, textDecoration: 'none', fontWeight: 900, fontSize: 14 }}
        >
          Order on WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section style={{ 
        background: `linear-gradient(135deg, #F5E8C9 0%, #fff9eb 100%)`,
        padding: '190px 24px 40px 24px'
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 24, alignItems: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.95)', borderRadius: 28, padding: 32, boxShadow: '0 10px 30px rgba(0,0,0,0.06)', borderLeft: '6px solid #0FA3B1', borderTop: '1px solid #D4A017' }}>
            <span style={{ background: 'linear-gradient(90deg, #0A6ED1, #0FA3B1)', color: 'white', padding: '6px 14px', borderRadius: 999, fontSize: 11, fontWeight: 800 }}>100% VEG • Fresh Always</span>
            <h2 style={{ fontSize: 42, lineHeight: 1.05, margin: '18px 0 12px', fontWeight: 900, color: '#0A6ED1' }}>Scoops of Happiness,<br /><span style={{ color: '#0FA3B1' }}>Right at the Corner.</span></h2>
            <p style={{ fontSize: 16, opacity: 0.7, margin: '0 0 24px' }}>Icecreams, Waffles, Sandwiches, Burgers & Milkshakes, made fresh daily in Bangalore.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={`tel:${phone}`} className="btn-hover" style={{ background: '#0A6ED1', color: 'white', padding: '14px 22px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>📞 {phone}</a>
              <a href="#menu" className="btn-hover" style={{ background: 'white', color: '#0A6ED1', border: '2px solid #D4A017', padding: '12px 20px', borderRadius: 12, textDecoration: 'none', fontWeight: 800 }}>View Menu ↓</a>
            </div>
          </div>
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <img 
              src="/logo.png" 
              alt="Hero" 
              className="hero-img-hover"
              style={{ width: '100%', maxWidth: 440, aspectRatio: '1', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 20px 60px rgba(10,110,209,0.25)', border: '8px solid #D4A017' }} 
            />
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" style={{ 
        background: `linear-gradient(180deg, #E0F7FA 0%, #E6F4FF 50%, #ffffff 100%)`,
        padding: '36px 24px', 
        borderTop: '4px solid #D4A017'
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          {Object.entries(menu).map(([cat, items]) => (
            <div key={cat} style={{ marginTop: 36 }}>
              <h3 style={{ fontSize: 22, fontWeight: 900, margin: '0 0 14px', color: '#0A6ED1', borderLeft: '5px solid #D4A017', paddingLeft: 12, background: 'white', display: 'inline-block', paddingRight: 14, borderRadius: '0 12px 12px 0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>{cat}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 16 }}>
                {items.map((it) => (
                  <div key={it.name} className="card-hover" style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 24px rgba(10,110,209,0.08)', border: '1px solid rgba(212,160,23,0.15)' }}>
                    <div style={{ overflow: 'hidden', height: 150 }}>
                      <img 
                        src={it.img} 
                        alt={it.name} 
                        className="img-zoom"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#F5E8C9', display: 'block' }} 
                        onError={(e) => { e.currentTarget.src = '/logo.png' }} 
                      />
                    </div>
                    <div style={{ padding: 14 }}>
                      <div style={{ fontWeight: 800, fontSize: 14 }}>{it.name}</div>
                      <div style={{ opacity: 0.6, fontSize: 11, marginTop: 3 }}>{it.desc}</div>
                      <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 900, fontSize: 15, color: '#D4A017' }}>{it.price}</span>
                        <a 
                          href={`https://wa.me/${phone}?text=I%20want%20${encodeURIComponent(it.name)}`} 
                          className="btn-hover"
                          style={{ fontSize: 11, fontWeight: 800, background: 'linear-gradient(90deg, #0A6ED1, #0FA3B1)', color: 'white', padding: '6px 12px', borderRadius: 999, textDecoration: 'none' }}
                        >
                          Add +
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <footer style={{ textAlign: 'center', padding: '50px 0 100px', opacity: 0.7, fontSize: 17, color: '#0A6ED1' }}>
            🚗 Drive-In (after 8 P.M) | 🛵 Free Delivery | 🌐 www.blr99corner.com<br />
            © 2026 BLR 99 Corner • #41, A.J.Chambers, RV Road, Basavanagudi, Bangalore-560004<br />📞 +91 98860-67444
          </footer>
        </div>
      </section>

      {/* Watermark 172px */}
      <img src="/logo.png" alt="watermark" style={{ position: 'fixed', bottom: 16, right: 16, width: 72, height: 72, borderRadius: '50%', opacity: 0.15, pointerEvents: 'none', zIndex: 5, border: '2px solid #D4A017', background: 'white' }} />
    </main>
  )
}
