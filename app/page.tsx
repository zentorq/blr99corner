'use client';
import { useState } from 'react';

const menu = [
  { cat: 'Signature Scoops - ₹99', items: [
    { name: 'Fiji Blue Vanilla', desc: 'Madagascar vanilla with Fiji blue swirl', price: '99', tag: 'BESTSELLER' },
    { name: 'Teal Mint Choco', desc: 'Fresh mint with dark choco chips', price: '99' },
    { name: 'Beige Butterscotch', desc: 'Caramelized butterscotch crunch', price: '99' },
    { name: 'Golden Mango', desc: 'Alphonso mango with gold dust', price: '99' },
    { name: 'Cyan Pista', desc: 'Royal pistachio with cyan candy', price: '99' },
  ]},
  { cat: 'Waffle Cones & Sundaes', items: [
    { name: 'BLR 99 Special Sundae', desc: '3 scoops + beige waffle + gold sprinkles', price: '149' },
    { name: 'Fiji Tropic Cone', desc: 'Teal & cyan double scoop in beige cone', price: '129' },
    { name: 'Gold Choco Overload', desc: 'Triple chocolate with gold flakes', price: '149' },
  ]},
  { cat: 'Shakes & Coolers', items: [
    { name: 'Fiji Blue Lagoon Shake', desc: 'Blue vanilla shake', price: '99' },
    { name: 'Teal Mint Cooler', desc: 'Icy mint lime', price: '79' },
  ]},
];

export default function Page() {
  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(245,232,201,0.88), rgba(255,255,255,0.92)), url('/icecream-bg.png')`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      fontFamily: "'Outfit', system-ui, sans-serif",
    }}>
      {/* HEADER - 150px Circle Logo Top Left */}
      <header style={{
        background: 'linear-gradient(90deg, #0A6ED1 0%, #0FA3B1 100%)',
        padding: '12px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '4px solid #D4A017',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: '0 4px 20px rgba(10,110,209,0.25)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <img src="/logo.png" alt="BLR 99 Corner" 
            style={{ width: 150, height: 150, borderRadius: '50%', border: '4px solid #D4A017', boxShadow: '0 6px 20px rgba(0,0,0,0.25)', objectFit: 'cover', background: 'white' }} />
          <div>
            <h1 style={{ color: '#F5E8C9', margin: 0, fontSize: '32px', fontWeight: 900, letterSpacing: '1px', lineHeight: 1 }}>BLR 99 CORNER</h1>
            <p style={{ color: '#2EC4B6', margin: '4px 0 0 0', fontWeight: 700, letterSpacing: '2px', fontSize: '13px' }}>FIJI BLUE • TEAL • BEIGE • GOLD • CYAN</p>
            <p style={{ color: 'rgba(245,232,201,0.9)', margin: '2px 0 0 0', fontSize: '12px' }}>Tropical Scoops • Gold Standard Taste</p>
          </div>
        </div>
        <div style={{ background: '#D4A017', color: '#0A6ED1', padding: '8px 16px', borderRadius: '20px', fontWeight: 800, fontSize: '12px' }}>OPEN • ₹99 MENU</div>
      </header>

      {/* HERO STRIP */}
      <div style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)', padding: '18px', textAlign: 'center', borderBottom: '1px solid rgba(212,160,23,0.2)' }}>
        <h2 style={{ margin: 0, color: '#0A6ED1', fontWeight: 800 }}>Inviting • Creamy • Tropical • Premium Ice Cream Experience</h2>
        <p style={{ margin: '4px 0 0 0', color: '#0FA3B1' }}>Crafted with Fiji blue vibes, teal freshness, beige creaminess & gold luxury</p>
      </div>

      {/* MENU */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px 18px 100px 18px' }}>
        {menu.map((section) => (
          <div key={section.cat} style={{ marginBottom: '28px' }}>
            <h2 style={{ color: '#0A6ED1', borderLeft: '6px solid #D4A017', paddingLeft: '12px', background: 'rgba(255,255,255,0.8)', display: 'inline-block', padding: '6px 14px', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>{section.cat}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', marginTop: '14px' }}>
              {section.items.map((item) => (
                <div key={item.name} style={{
                  background: 'rgba(255,255,255,0.94)',
                  borderRadius: '18px',
                  padding: '18px',
                  borderLeft: '5px solid #0FA3B1',
                  borderTop: '1px solid #D4A017',
                  boxShadow: '0 6px 20px rgba(10,110,209,0.10)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {item.tag && <span style={{ position: 'absolute', top: '10px', right: '10px', background: '#D4A017', color: 'white', fontSize: '10px', fontWeight: 800, padding: '3px 8px', borderRadius: '10px' }}>{item.tag}</span>}
                  <h3 style={{ margin: '0 0 4px 0', color: '#0A6ED1', fontWeight: 800 }}>{item.name}</h3>
                  <p style={{ margin: '0 0 10px 0', color: '#5a6d7e', fontSize: '13px', lineHeight: 1.4 }}>{item.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: '#D4A017', fontWeight: 900, fontSize: '18px' }}>₹{item.price}</span>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #0FA3B1, #2EC4B6)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>+</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* WATERMARK Bottom Right - 72px */}
      <div style={{ position: 'fixed', bottom: 18, right: 18, opacity: 0.14, zIndex: 0, pointerEvents: 'none' }}>
        <img src="/logo.png" alt="watermark" style={{ width: 72, height: 72, borderRadius: '50%', border: '2px solid #D4A017' }} />
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#0A6ED1', color: '#F5E8C9', textAlign: 'center', padding: '16px', borderTop: '4px solid #D4A017' }}>
        <p style={{ margin: 0, fontWeight: 700 }}>© BLR 99 Corner — Fiji Blue • Teal • Beige • Gold • Cyan</p>
      </footer>
    </div>
  );
}
