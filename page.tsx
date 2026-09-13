"use client"
import { useState } from 'react'

const flavours = [
  { id:1, name:"Lavender Bliss", price:99, badge:"SIGNATURE", emoji:"💜", desc:"Our logo flavour - creamy lavender + cherry" },
  { id:2, name:"Belgian Chocolate Overload", price:99, badge:"BESTSELLER", emoji:"🍫", desc:"Rich Belgian dark chocolate" },
  { id:3, name:"Madagascar Vanilla Bean", price:99, badge:"", emoji:"🍦", desc:"Pure Madagascar vanilla" },
  { id:4, name:"Alphonso Mango Magic", price:99, badge:"SEASONAL", emoji:"🥭", desc:"Ratnagiri Alphonso" },
  { id:5, name:"Pista Royal", price:99, badge:"", emoji:"🥜", desc:"Roasted California pista" },
  { id:6, name:"Butterscotch Crunch", price:99, badge:"", emoji:"🍯", desc:"Caramel crunch" },
  { id:7, name:"Strawberry Cheesecake", price:99, badge:"", emoji:"🍓", desc:"Cream cheese + strawberry" },
  { id:8, name:"Cookies & Cream", price:99, badge:"YOUTH FAV", emoji:"🍪", desc:"Oreo loaded" },
]

export default function Home() {
  const [cart, setCart] = useState<any[]>([])
  const WA_NUMBER = "919886967444"

  const addToCart = (f:any) => {
    const ex = cart.find(c=>c.id===f.id)
    if(ex) setCart(cart.map(c=>c.id===f.id?{...c, qty:c.qty+1}:c))
    else setCart([...cart, {...f, qty:1}])
  }

  const total = cart.reduce((s,i)=>s+i.price*i.qty,0)

  const orderOnWhatsApp = () => {
    if(cart.length===0) return alert("Add items first!")
    let msg = `*NEW ORDER - BLR 99 CORNER*%0A%0A`
    cart.forEach(i=>{ msg+=`• ${i.name} x${i.qty} = ₹${i.price*i.qty}%0A` })
    msg+=`%0A*Total: ₹${total} (COD)*%0A%0A`
    msg+=`Customer: %0AAddress: %0A%0A#41 AJ Chambers, RV Road, Basavangudi%0A+91 98869 67444`
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#0f1d33] text-white">
      <nav className="sticky top-0 z-50 bg-[#0f1d33]/90 backdrop-blur p-4 flex justify-between items-center border-b border-white/10">
        <div className="font-black text-xl">BLR<span className="text-[#c4a8ff]">99</span> CORNER</div>
        <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" className="bg-green-500 px-5 py-2 rounded-full font-bold text-sm">Order on WhatsApp</a>
      </nav>

      <section className="p-6 md:p-10 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black leading-tight">BLR 99 Corner<br/><span className="text-[#c4a8ff] italic font-serif">Icecream Boutique</span></h1>
        <p className="mt-3 text-white/70">Handcrafted • 100% VEG • Made Fresh Daily</p>
        <div className="mt-4 bg-[#c4a8ff]/20 inline-block px-4 py-2 rounded-full text-sm">📍 #41 AJ Chambers, RV Road, Basavangudi, Bangalore 560004 | 📞 +91 98869 67444</div>
      </section>

      <section className="p-4 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {flavours.map(f=>(
          <div key={f.id} className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/10">
            <div className="flex justify-between"><span className="text-3xl">{f.emoji}</span>{f.badge && <span className="text-[10px] bg-[#c4a8ff] text-black px-2 py-1 rounded-full font-black">{f.badge}</span>}</div>
            <h3 className="font-bold mt-3 text-[15px]">{f.name}</h3>
            <p className="text-xs text-white/60 h-8">{f.desc}</p>
            <p className="font-black mt-2 text-lg">₹{f.price}</p>
            <button onClick={()=>addToCart(f)} className="mt-2 w-full bg-[#c4a8ff] text-black py-2 rounded-full font-bold text-sm">Add</button>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto p-6">
        <h3 className="font-bold mb-3">Find Us</h3>
        <iframe src="https://www.google.com/maps?q=41+AJ+Chambers+RV+Road+Basavangudi+Bangalore+560004&z=17&output=embed" className="w-full h-72 rounded-2xl border border-white/10" loading="lazy"></iframe>
        <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm text-white/70">
          <div>📍 #41 AJ Chambers, RV Road, Basavangudi, Bangalore - 560004</div>
          <div>📞 +91 98869 67444</div>
          <div>✉️ info@blr99corner.com | www.blr99corner.com</div>
        </div>
      </section>

      {cart.length>0 && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white text-black p-4 rounded-[20px] shadow-2xl z-50">
          <div className="flex justify-between font-bold"><span>Cart ({cart.reduce((s,i)=>s+i.qty,0)} items)</span><span>₹{total}</span></div>
          <div className="max-h-24 overflow-auto my-2 text-sm">{cart.map((c,i)=><div key={i} className="flex justify-between"><span>{c.name} x{c.qty}</span><span>₹{c.price*c.qty}</span></div>)}</div>
          <button onClick={orderOnWhatsApp} className="w-full bg-green-500 text-white py-3 rounded-full font-black">💬 Order on WhatsApp (COD)</button>
          <button onClick={()=>setCart([])} className="w-full mt-2 text-xs text-gray-500">Clear Cart</button>
        </div>
      )}

      <footer className="text-center p-8 text-white/40 text-xs">© 2026 BLR 99 Corner Icecream Boutique • Open 11AM-10:30PM • Handcrafted with Love in Basavangudi</footer>
    </div>
  )
}"use client"
import { useState } from 'react'

const flavours = [
  { id:1, name:"Lavender Bliss", price:99, badge:"SIGNATURE", emoji:"💜", desc:"Our logo flavour - creamy lavender + cherry" },
  { id:2, name:"Belgian Chocolate Overload", price:99, badge:"BESTSELLER", emoji:"🍫", desc:"Rich Belgian dark chocolate" },
  { id:3, name:"Madagascar Vanilla Bean", price:99, badge:"", emoji:"🍦", desc:"Pure Madagascar vanilla" },
  { id:4, name:"Alphonso Mango Magic", price:99, badge:"SEASONAL", emoji:"🥭", desc:"Ratnagiri Alphonso" },
  { id:5, name:"Pista Royal", price:99, badge:"", emoji:"🥜", desc:"Roasted California pista" },
  { id:6, name:"Butterscotch Crunch", price:99, badge:"", emoji:"🍯", desc:"Caramel crunch" },
  { id:7, name:"Strawberry Cheesecake", price:99, badge:"", emoji:"🍓", desc:"Cream cheese + strawberry" },
  { id:8, name:"Cookies & Cream", price:99, badge:"YOUTH FAV", emoji:"🍪", desc:"Oreo loaded" },
]

export default function Home() {
  const [cart, setCart] = useState<any[]>([])
  const WA_NUMBER = "919886967444"

  const addToCart = (f:any) => {
    const ex = cart.find(c=>c.id===f.id)
    if(ex) setCart(cart.map(c=>c.id===f.id?{...c, qty:c.qty+1}:c))
    else setCart([...cart, {...f, qty:1}])
  }

  const total = cart.reduce((s,i)=>s+i.price*i.qty,0)

  const orderOnWhatsApp = () => {
    if(cart.length===0) return alert("Add items first!")
    let msg = `*NEW ORDER - BLR 99 CORNER*%0A%0A`
    cart.forEach(i=>{ msg+=`• ${i.name} x${i.qty} = ₹${i.price*i.qty}%0A` })
    msg+=`%0A*Total: ₹${total} (COD)*%0A%0A`
    msg+=`Customer: %0AAddress: %0A%0A#41 AJ Chambers, RV Road, Basavangudi%0A+91 98869 67444`
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#0f1d33] text-white">
      <nav className="sticky top-0 z-50 bg-[#0f1d33]/90 backdrop-blur p-4 flex justify-between items-center border-b border-white/10">
        <div className="font-black text-xl">BLR<span className="text-[#c4a8ff]">99</span> CORNER</div>
        <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" className="bg-green-500 px-5 py-2 rounded-full font-bold text-sm">Order on WhatsApp</a>
      </nav>

      <section className="p-6 md:p-10 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black leading-tight">BLR 99 Corner<br/><span className="text-[#c4a8ff] italic font-serif">Icecream Boutique</span></h1>
        <p className="mt-3 text-white/70">Handcrafted • 100% VEG • Made Fresh Daily</p>
        <div className="mt-4 bg-[#c4a8ff]/20 inline-block px-4 py-2 rounded-full text-sm">📍 #41 AJ Chambers, RV Road, Basavangudi, Bangalore 560004 | 📞 +91 98869 67444</div>
      </section>

      <section className="p-4 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {flavours.map(f=>(
          <div key={f.id} className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/10">
            <div className="flex justify-between"><span className="text-3xl">{f.emoji}</span>{f.badge && <span className="text-[10px] bg-[#c4a8ff] text-black px-2 py-1 rounded-full font-black">{f.badge}</span>}</div>
            <h3 className="font-bold mt-3 text-[15px]">{f.name}</h3>
            <p className="text-xs text-white/60 h-8">{f.desc}</p>
            <p className="font-black mt-2 text-lg">₹{f.price}</p>
            <button onClick={()=>addToCart(f)} className="mt-2 w-full bg-[#c4a8ff] text-black py-2 rounded-full font-bold text-sm">Add</button>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto p-6">
        <h3 className="font-bold mb-3">Find Us</h3>
        <iframe src="https://www.google.com/maps?q=41+AJ+Chambers+RV+Road+Basavangudi+Bangalore+560004&z=17&output=embed" className="w-full h-72 rounded-2xl border border-white/10" loading="lazy"></iframe>
        <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm text-white/70">
          <div>📍 #41 AJ Chambers, RV Road, Basavangudi, Bangalore - 560004</div>
          <div>📞 +91 98869 67444</div>
          <div>✉️ info@blr99corner.com | www.blr99corner.com</div>
        </div>
      </section>

      {cart.length>0 && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white text-black p-4 rounded-[20px] shadow-2xl z-50">
          <div className="flex justify-between font-bold"><span>Cart ({cart.reduce((s,i)=>s+i.qty,0)} items)</span><span>₹{total}</span></div>
          <div className="max-h-24 overflow-auto my-2 text-sm">{cart.map((c,i)=><div key={i} className="flex justify-between"><span>{c.name} x{c.qty}</span><span>₹{c.price*c.qty}</span></div>)}</div>
          <button onClick={orderOnWhatsApp} className="w-full bg-green-500 text-white py-3 rounded-full font-black">💬 Order on WhatsApp (COD)</button>
          <button onClick={()=>setCart([])} className="w-full mt-2 text-xs text-gray-500">Clear Cart</button>
        </div>
      )}

      <footer className="text-center p-8 text-white/40 text-xs">© 2026 BLR 99 Corner Icecream Boutique • Open 11AM-10:30PM • Handcrafted with Love in Basavangudi</footer>
    </div>
  )
}