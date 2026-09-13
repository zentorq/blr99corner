export default function Page() {
  const phone = "+919886067444";
  
  const menu = {
    "Icecreams 🍦": [
      { name: "Vanilla Dream", price: "₹99", desc: "Classic Madagascar vanilla", img: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=300&h=300&fit=crop", color: "#F5E8C9" },
      { name: "Chocolate Fudge", price: "₹129", desc: "Dark Belgian chocolate", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop", color: "#0A6ED1" },
      { name: "Butterscotch Crunch", price: "₹129", desc: "Caramel + praline", img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300&h=300&fit=crop", color: "#D4A017" },
      { name: "Mango Mastani", price: "₹149", desc: "Alphonso seasonal", img: "https://images.unsplash.com/photo-1591141755734-1d72c0c57d7f?w=300&h=300&fit=crop", color: "#2EC4B6" },
      { name: "Strawberry Swirl", price: "₹139", desc: "Fresh strawberry bits", img: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=300&h=300&fit=crop", color: "#0FA3B1" },
      { name: "Pista Delight", price: "₹149", desc: "Premium pistachio", img: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=300&h=300&fit=crop", color: "#0FA3B1" },
    ],
    "Waffles 🧇": [
      { name: "Nutella Berry Waffle", price: "₹199", desc: "Strawberry, blueberry, Nutella", img: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=300&h=300&fit=crop" },
      { name: "Classic Honey Waffle", price: "₹149", desc: "Whipped cream + honey", img: "https://images.unsplash.com/photo-1517433367424-64c6d794b85d?w=300&h=300&fit=crop" },
      { name: "Choco Overload Waffle", price: "₹219", desc: "Triple chocolate", img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop" },
    ],
    "Sandwiches 🥪": [
      { name: "Veg Grilled Sandwich", price: "₹119", desc: "Cheese + veggies", img: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=300&h=300&fit=crop" },
      { name: "Paneer Tikka Sandwich", price: "₹149", desc: "Spicy paneer + mint", img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=300&h=300&fit=crop" },
      { name: "Club Veg Sandwich", price: "₹169", desc: "Triple layer", img: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=300&h=300&fit=crop" },
    ],
    "Burgers 🍔": [
      { name: "Veg Supreme Burger", price: "₹129", desc: "Aloo tikki + cheese", img: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=300&h=300&fit=crop" },
      { name: "Paneer Burger", price: "₹159", desc: "Crispy paneer patty", img: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=300&h=300&fit=crop" },
    ],
    "Milkshakes 🥤": [
      { name: "Cold Coffee Shake", price: "₹129", desc: "Strong + creamy", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop" },
      { name: "KitKat Shake", price: "₹169", desc: "Crushed KitKat", img: "https://images.unsplash.com/photo-1572490122747-d74843c9c0a3?w=300&h=300&fit=crop" },
      { name: "Oreo Shake", price: "₹159", desc: "Oreo + vanilla", img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=300&h=300&fit=crop" },
      { name: "Chocolate Shake", price: "₹149", desc: "Dutch chocolate", img: "https://images.unsplash.com/photo-1572490122747-d74843c9c0a3?w=300&h=300&fit=crop" },
    ],
  };

  return (
    <main style={{ 
      minHeight: '100vh', 
      background: `linear-gradient(135deg, #F5E8C9 0%, #ffffff 40%, #E6F7FF 70%, #D6F0F5 100%)`,
      color: '#1a2b3c', 
      fontFamily: 'system-ui, sans-serif', 
      position: 'relative' 
    }}>
      {/* Soft Teal & Fiji Blue blobs for inviting feel */}
      <div style={{ position: 'fixed', top: -100, right: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(10,110,209,0.08), transparent)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: -50, left: -50, width: 500, height: 500, background: 'radial-gradient(circle, rgba(15,163,177,0.10), transparent)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Header - 150px Circle Logo Top Left */}
      <header style={{ padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1120, margin: '0 auto', position: 'sticky', top: 0, background: 'linear-gradient(90deg, rgba(10,110,209,0.95), rgba(15,163,177,0.95))', backdropFilter: 'blur(12px)', zIndex: 10, borderBottom: '4px solid #D4A017', boxShadow: '0 4px 20px rgba(10,110,209,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img src="/logo.png" alt="BLR 99 Corner" style={{ width: 150, height: 150, borderRadius: '50%', objectFit: 'cover', border: '4px solid #D4A017', background: 'white', boxShadow: '0 6px 18px rgba(0,0,0,0.2)' }} />
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 900, margin: 0, lineHeight: 1, color: '#F5E8C9' }}>BLR 99 CORNER</h1>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#2EC4B6', letterSpacing: '1px' }}>100% VEG • Icecream Boutique</span>
            <div style={{ fontSize: 11, color: 'rgba(245,232,201,0.9)', marginTop: 2 }}>Taste Our IceCream once • Experience the Difference.</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href={`https://wa.me/${phone}?text=Hi%20BLR99%20Corner%2C%20I%20want%20to%20order`} style={{ background: '#D4A017', color: '#0A6ED1', padding: '12px 20px', borderRadius: 999, textDecoration: 'none', fontWeight: 900, fontSize: 14, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>Order on WhatsApp</a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '28px 24px 12px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 24, alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ background: 'rgba(255,255,255,0.92)', borderRadius: 28, padding: 32, boxShadow: '0 10px 30px rgba(10,110,209,0.08)', borderLeft: '6px solid #0FA3B1', borderTop: '1px solid #D4A017' }}>
          <span style={{ background: 'linear-gradient(90deg, #0A6ED1, #0FA3B1)', color: 'white', padding: '6px 14px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '1px' }}>100% VEG • FIJI BLUE PREMIUM</span>
          <h2 style={{ fontSize: 42, lineHeight: 1.05, margin: '18px 0 12px', fontWeight: 900, color: '#0A6ED1' }}>
            Scoops of Happiness,<br /><span style={{ color: '#0FA3B1' }}>Right at the Corner.</span>
          </h2>
          <p style={{ fontSize: 16, opacity: 0.7, margin: '0 0 24px', lineHeight: 1.5 }}>
            Icecreams, Waffles, Sandwiches, Burgers & Milkshakes — made fresh daily in Bangalore. Drive-in + Free Delivery.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={`tel:${phone}`} style={{ background: '#0A6ED1', color: 'white', padding: '14px 22px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>📞 {phone}</a>
            <a href="#menu" style={{ background: '#F5E8C9', color: '#0A6ED1', border: '2px solid #D4A017', padding: '12px 20px', borderRadius: 12, textDecoration: 'none', fontWeight: 800 }}>View Menu ↓</a>
          </div>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <img src="/logo.png" alt="BLR 99 Corner Hero" style={{ width: '100%', maxWidth: 440, aspectRatio: '1', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 20px 60px rgba(10,110,209,0.25)', border: '8px solid #D4A017' }} />
        </div>
      </section>

      {/* Menu with Images */}
      <section id="menu" style={{ maxWidth: 1120, margin: '0 auto', padding: '24px', position: 'relative', zIndex: 1 }}>
        {Object.entries(menu).map(([cat, items]) => (
          <div key={cat} style={{ marginTop: 36 }}>
            <h3 style={{ fontSize: 22, fontWeight: 900, margin: '0 0 14px', color: '#0A6ED1', borderLeft: '5px solid #D4A017', paddingLeft: 12, background: 'rgba(255,255,255,0.8)', display: 'inline-block', paddingRight: 14, borderRadius: '0 12px 12px 0' }}>{cat}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 16 }}>
              {items.map((it) => (
                <div key={it.name} style={{ background: 'rgba(255,255,255,0.96)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 24px rgba(10,110,209,0.08)', border: '1px solid rgba(212,160,23,0.15)', display: 'flex', flexDirection: 'column' }}>
                  <img src={it.img} alt={it.name} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
                  <div style={{ padding: 14, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 14, color: '#1a2b3c' }}>{it.name}</div>
                      <div style={{ opacity: 0.6, fontSize: 11, marginTop: 3, lineHeight: 1.3 }}>{it.desc}</div>
                    </div>
                    <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 900, fontSize: 15, color: '#D4A017' }}>{it.price}</span>
                      <a href={`https://wa.me/${phone}?text=I%20want%20to%20order%20${encodeURIComponent(it.name)}`} style={{ fontSize: 11, fontWeight: 800, background: 'linear-gradient(90deg, #0A6ED1, #0FA3B1)', color: 'white', padding: '6px 12px', borderRadius: 999, textDecoration: 'none' }}>Add +</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <footer style={{ textAlign: 'center', padding: '50px 0 100px', opacity: 0.7, fontSize: 17, lineHeight: 1.6, color: '#0A6ED1' }}>
          <div style={{ marginBottom: 10, fontWeight: 700 }}>🚗 Drive-In(after 8 P.M) | 🛵 Free Delivery | 🌐 www.blr99corner.com</div>
          © 2026 BLR 99 Corner - 100% VEG • #41, A.J.Chambers, RV Road, BasavanGudi, Bangalore-560004 • <br />📞 +91 98860-67444
        </footer>
      </section>

      {/* Logo Bottom Right Watermark 72px */}
      <img src="/logo.png" alt="watermark" style={{ position: 'fixed', bottom: 16, right: 16, width: 72, height: 72, borderRadius: '50%', opacity: 0.18, pointerEvents: 'none', zIndex: 5, border: '2px solid #D4A017', background: 'white' }} />
    </main>
  )
}
