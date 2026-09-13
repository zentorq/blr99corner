export default function Page() {
  const phone = "+919886067444";
  
  const menu = {
    "Icecreams 🍦": [
      { name: "Vanilla Dream", price: "₹99", desc: "Classic Madagascar vanilla" },
      { name: "Chocolate Fudge", price: "₹129", desc: "Dark Belgian chocolate" },
      { name: "Butterscotch Crunch", price: "₹129", desc: "Caramel + praline" },
      { name: "Mango Mastani", price: "₹149", desc: "Alphonso seasonal" },
      { name: "Strawberry Swirl", price: "₹139", desc: "Fresh strawberry bits" },
      { name: "Pista Delight", price: "₹149", desc: "Premium pistachio" },
    ],
    "Waffles 🧇": [
      { name: "Nutella Berry Waffle", price: "₹199", desc: "Strawberry, blueberry, Nutella" },
      { name: "Classic Honey Waffle", price: "₹149", desc: "Whipped cream + honey" },
      { name: "Choco Overload Waffle", price: "₹219", desc: "Triple chocolate" },
    ],
    "Sandwiches 🥪": [
      { name: "Veg Grilled Sandwich", price: "₹119", desc: "Cheese + veggies" },
      { name: "Paneer Tikka Sandwich", price: "₹149", desc: "Spicy paneer + mint" },
      { name: "Club Veg Sandwich", price: "₹169", desc: "Triple layer" },
    ],
    "Burgers 🍔": [
      { name: "Veg Supreme Burger", price: "₹129", desc: "Aloo tikki + cheese" },
      { name: "Paneer Burger", price: "₹159", desc: "Crispy paneer patty" },
    ],
    "Milkshakes 🥤": [
      { name: "Cold Coffee Shake", price: "₹129", desc: "Strong + creamy" },
      { name: "KitKat Shake", price: "₹169", desc: "Crushed KitKat" },
      { name: "Oreo Shake", price: "₹159", desc: "Oreo + vanilla" },
      { name: "Chocolate Shake", price: "₹149", desc: "Dutch chocolate" },
    ],
  };

  return (
    <main style={{ minHeight: '100vh', background: '#fff8f0', color: '#2d1a0e', fontFamily: 'system-ui, sans-serif', position: 'relative' }}>
      {/* Header with Logo Top Left */}
      <header style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1120, margin: '0 auto', position: 'sticky', top: 0, background: 'rgba(255,248,240,0.9)', backdropFilter: 'blur(10px)', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/logo.png" alt="BLR 99 Corner" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '2px solid #4a2c0a' }} />
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 900, margin: 0, lineHeight: 1 }}>BLR 99 CORNER</h1>
            <span style={{ fontSize: 12, opacity: 0.7, fontWeight: 600 }}>100% VEG • Icecream Boutique</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ display: 'none', fontSize: 12, fontWeight: 700, background: 'white', padding: '6px 10px', borderRadius: 999, border: '1px solid #eee' }} className="md:block">DRIVE-IN | FREE DELIVERY</span>
          <a href={`https://wa.me/${phone}?text=Hi%20BLR99%20Corner%2C%20I%20want%20to%20order`} style={{ background: '#2d1a0e', color: 'white', padding: '10px 18px', borderRadius: 999, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>Order on WhatsApp</a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '24px 24px 12px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 20, alignItems: 'center' }}>
        <div style={{ background: 'white', borderRadius: 28, padding: 36, boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
          <span style={{ background: '#e6f9e6', color: '#0a5c0a', padding: '6px 12px', borderRadius: 999, fontSize: 12, fontWeight: 800 }}>100% VEG • www.blr99corner.com</span>
          <h2 style={{ fontSize: 44, lineHeight: 1.05, margin: '16px 0 12px', fontWeight: 900 }}>
            Scoops of Happiness,<br />Right at the Corner.
          </h2>
          <p style={{ fontSize: 17, opacity: 0.7, margin: '0 0 24px', lineHeight: 1.5 }}>
            Icecreams, Waffles, Sandwiches, Burgers & Milkshakes — made fresh daily in Bangalore. Drive-in available + Free Home Delivery.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={`tel:${phone}`} style={{ background: '#2d1a0e', color: 'white', padding: '14px 22px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>📞 {phone}</a>
            <a href="#menu" style={{ background: '#ffe4ec', color: '#b91c4a', padding: '14px 22px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>View Full Menu ↓</a>
          </div>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <img src="/logo.png" alt="BLR 99 Corner Hero" style={{ width: '100%', maxWidth: 480, aspectRatio: '1', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: '8px solid #4a2c0a' }} />
        </div>
      </section>

      {/* Menu */}
      <section id="menu" style={{ maxWidth: 1120, margin: '0 auto', padding: '24px' }}>
        {Object.entries(menu).map(([cat, items]) => (
          <div key={cat} style={{ marginTop: 36 }}>
            <h3 style={{ fontSize: 22, fontWeight: 900, margin: '0 0 14px' }}>{cat}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 14 }}>
              {items.map((it) => (
                <div key={it.name} style={{ background: 'white', borderRadius: 20, padding: 18, boxShadow: '0 6px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: '#fff0f5', marginBottom: 10, display: 'grid', placeItems: 'center', fontSize: 22 }}>🍧</div>
                    <div style={{ fontWeight: 800, fontSize: 15 }}>{it.name}</div>
                    <div style={{ opacity: 0.6, fontSize: 12, marginTop: 4, lineHeight: 1.3 }}>{it.desc}</div>
                  </div>
                  <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 900, fontSize: 15 }}>{it.price}</span>
                    <a href={`https://wa.me/${phone}?text=I%20want%20to%20order%20${encodeURIComponent(it.name)}`} style={{ fontSize: 12, fontWeight: 800, background: '#2d1a0e', color: 'white', padding: '6px 10px', borderRadius: 999, textDecoration: 'none' }}>Add</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <footer style={{ textAlign: 'center', padding: '50px 0 100px', opacity: 0.6, fontSize: 13, lineHeight: 1.6 }}>
          <div style={{ marginBottom: 10 }}>🚗 Drive-In Service Available | 🛵 Free Home Delivery | 🌐 www.blr99corner.com</div>
          © 2026 BLR 99 Corner Icecream Boutique • 100% VEG • Made with love in Bangalore<br />
          📞 +91 98860-67444
        </footer>
      </section>

      {/* Logo Bottom Right Watermark */}
      <img src="/logo.png" alt="watermark" style={{ position: 'fixed', bottom: 16, right: 16, width: 72, height: 72, borderRadius: '50%', opacity: 0.18, pointerEvents: 'none', zIndex: 5, border: '2px solid #4a2c0a' }} />
    </main>
  )
}
