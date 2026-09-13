export default function Page() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff8f0', color: '#2d1a0e', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <header style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>BLR 99 Corner</h1>
        <span style={{ background: '#ff3b82', color: 'white', padding: '6px 14px', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>Icecream Boutique</span>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px', display: 'grid', gap: 20 }}>
        <div style={{ background: 'white', borderRadius: 24, padding: 32, boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
          <h2 style={{ fontSize: 42, lineHeight: 1.1, margin: '0 0 12px', fontWeight: 900 }}>
            Scoops of Happiness,<br />Right at the Corner.
          </h2>
          <p style={{ fontSize: 18, opacity: 0.7, margin: '0 0 24px' }}>
            Premium ice creams, thick shakes, and sundaes — made fresh daily at BLR 99 Corner.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="tel:+919886067444" style={{ background: '#2d1a0e', color: 'white', padding: '14px 22px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>Order Now</a>
            <a href="#menu" style={{ background: '#ffe4ec', color: '#b91c4a', padding: '14px 22px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>View Menu</a>
          </div>
        </div>

        <div id="menu" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
          {[
            ['Vanilla Dream', '₹99'],
            ['Chocolate Fudge', '₹129'],
            ['Mango Mastani', '₹149'],
            ['Butterscotch Crunch', '₹129'],
          ].map(([name, price]) => (
            <div key={name} style={{ background: 'white', borderRadius: 20, padding: 20, boxShadow: '0 6px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: '#fff0f5', marginBottom: 12 }} />
              <div style={{ fontWeight: 800 }}>{name}</div>
              <div style={{ opacity: 0.6, fontSize: 14, marginTop: 4 }}>{price}</div>
            </div>
          ))}
        </div>

        <footer style={{ textAlign: 'center', padding: '30px 0', opacity: 0.5, fontSize: 13 }}>
          © 2026 BLR 99 Corner Icecream Boutique • Made with love in Bangalore
        </footer>
      </section>
    </main>
  )
}
