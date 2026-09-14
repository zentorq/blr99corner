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
      {
        name: "Vanilla Classic",
        price: "₹60",
        doublePrice: "₹120",
        tag: "CLASSIC",
        desc: "Classic vanilla ice cream",
        img: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=600&h=600&fit=crop"
      },
      {
        name: "Belgium Chocolate",
        price: "₹90",
        doublePrice: "₹170",
        tag: "PRIME",
        desc: "Rich Belgian chocolate",
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop"
      },
      {
        name: "Strawberry Bliss",
        price: "₹65",
        doublePrice: "₹120",
        tag: "CLASSIC",
        desc: "Creamy strawberry delight",
        img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&h=600&fit=crop"
      },
      {
        name: "Mango Tango",
        price: "₹70",
        doublePrice: "₹130",
        tag: "CLASSIC",
        desc: "Mango ice cream",
        img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=600&fit=crop"
      },
      {
        name: "Pistachio Royal",
        price: "₹75",
        doublePrice: "₹140",
        tag: "PRIME",
        desc: "Premium pistachio",
        img: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=600&h=600&fit=crop"
      },
      {
        name: "Blue Berry Cheese Cake",
        price: "₹80",
        doublePrice: "₹150",
        tag: "PRIME",
        desc: "Blueberry cheesecake flavour",
        img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=600&fit=crop"
      },
      {
        name: "Butter Scotch Dream",
        price: "₹65",
        doublePrice: "₹120",
        tag: "CLASSIC",
        desc: "Butterscotch ice cream",
        img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&h=600&fit=crop"
      },
      {
        name: "Cookies & Cream",
        price: "₹80",
        doublePrice: "₹150",
        tag: "PRIME",
        desc: "Cookies and cream",
        img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=600&fit=crop"
      },
      {
        name: "Tiramisu",
        price: "₹85",
        doublePrice: "₹160",
        tag: "PRIME",
        desc: "Tiramisu inspired flavour",
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=600&fit=crop"
      },
      {
        name: "DryFruit",
        price: "₹90",
        doublePrice: "₹170",
        tag: "PRIME",
        desc: "Rich dry-fruit ice cream",
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop"
      },
      {
        name: "Red Velvet",
        price: "₹85",
        doublePrice: "₹160",
        tag: "PRIME",
        desc: "Red velvet flavour",
        img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=600&fit=crop"
      },
      {
        name: "Black Currant",
        price: "₹70",
        doublePrice: "₹130",
        tag: "CLASSIC",
        desc: "Black currant flavour",
        img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&h=600&fit=crop"
      },
      {
        name: "Normal Chocolate",
        price: "₹70",
        doublePrice: "₹130",
        tag: "CLASSIC",
        desc: "Classic chocolate ice cream",
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop"
      },
      {
        name: "Chocolate Fudge",
        price: "₹80",
        doublePrice: "₹150",
        tag: "PRIME",
        desc: "Chocolate fudge ice cream",
        img: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=600&h=600&fit=crop"
      }
    ],

    "Milkshakes 🥤": [
      {
        name: "Nutrella Nutty",
        price: "₹110",
        desc: "Creamy hazelnut chocolate shake",
        img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=600&fit=crop"
      },
      {
        name: "Classic Vanilla",
        price: "₹90",
        desc: "Smooth vanilla shake",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=600&fit=crop"
      },
      {
        name: "Double Chocolate",
        price: "₹110",
        desc: "Extra chocolate goodness",
        img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=600&h=600&fit=crop"
      },
      {
        name: "StrawBerry Swirls",
        price: "₹95",
        desc: "Strawberry swirled shake",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=600&fit=crop"
      },
      {
        name: "Oreo Crush",
        price: "₹110",
        desc: "Oreo cookie shake",
        img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=600&fit=crop"
      },
      {
        name: "Mango Madness",
        price: "₹100",
        desc: "Mango milkshake",
        img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&h=600&fit=crop"
      },
      {
        name: "Caramel Drizzle",
        price: "₹105",
        desc: "Caramel topped shake",
        img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=600&fit=crop"
      },
      {
        name: "Cold Coffee Classic",
        price: "₹100",
        desc: "Cold coffee milkshake",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=600&fit=crop"
      },
      {
        name: "KitKat Shake",
        price: "₹115",
        desc: "KitKat chocolate shake",
        img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=600&h=600&fit=crop"
      },
      {
        name: "Classic Chocolate",
        price: "₹100",
        desc: "Classic chocolate shake",
        img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&h=600&fit=crop"
      },
      {
        name: "Caramel Mocha",
        price: "₹120",
        desc: "Coffee, chocolate and caramel",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=600&fit=crop"
      }
    ]
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        fontFamily: 'system-ui, sans-serif',
        position: 'relative'
      }}
    >

      <style>{`
        .btn-hover {
          transition:
            transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.22s ease,
            filter 0.22s ease;
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
          transition:
            transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.28s ease,
            border-color 0.28s ease;
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
          transition:
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.5s ease;
        }

        .hero-img-hover:hover {
          transform: scale(1.03) rotate(1deg);
          box-shadow: 0 28px 70px rgba(10, 110, 209, 0.32) !important;
        }
      `}</style>

      {/* HEADER */}
      <header
        style={{
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 1120,
          margin: '0 auto',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background:
            'linear-gradient(90deg, rgba(10,110,209,0.98), rgba(15,163,177,0.98))',
          backdropFilter: 'blur(12px)',
          zIndex: 20,
          borderBottom: '4px solid #D4A017',
          boxShadow: '0 4px 20px rgba(10,110,209,0.25)',
          transition: 'all 0.5s ease',
          opacity: hideHeader ? 0 : 1,
          transform: hideHeader ? 'translateY(-100%)' : 'translateY(0)',
          pointerEvents: hideHeader ? 'none' : 'auto'
        }}
      >

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16
          }}
        >
          <img
            src="/logo.png"
            alt="BLR 99 Corner"
            style={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #D4A017',
              background: 'white'
            }}
          />

          <div>
            <h1
              style={{
                fontSize: 22,
                fontWeight: 900,
                margin: 0,
                lineHeight: 1,
                color: '#F5E8C9'
              }}
            >
              BLR 99 CORNER
            </h1>

            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: '#2EC4B6'
              }}
            >
              100% VEG • Icecream Boutique
            </span>

            <div
              style={{
                fontSize: 11,
                color: 'rgba(245,232,201,0.9)',
                marginTop: 2
              }}
            >
              Taste Once • Feel Difference
            </div>
          </div>
        </div>

        <a
          href={`https://wa.me/${phone}?text=Hi%20BLR99`}
          className="btn-hover"
          style={{
            background: '#D4A017',
            color: '#0A6ED1',
            padding: '12px 20px',
            borderRadius: 999,
            textDecoration: 'none',
            fontWeight: 900,
            fontSize: 14
          }}
        >
          Order on WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section
        style={{
          background:
            'linear-gradient(135deg, #F5E8C9 0%, #fff9eb 100%)',
          padding: '190px 24px 40px 24px'
        }}
      >

        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 24,
            alignItems: 'center'
          }}
        >

          <div
            style={{
              background: 'rgba(255,255,255,0.95)',
              borderRadius: 28,
              padding: 32,
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
              borderLeft: '6px solid #0FA3B1',
              borderTop: '1px solid #D4A017'
            }}
          >

            <span
              style={{
                background:
                  'linear-gradient(90deg, #0A6ED1, #0FA3B1)',
                color: 'white',
                padding: '6px 14px',
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 800
              }}
            >
              100% VEG • Fresh Always
            </span>

            <h2
              style={{
                fontSize: 42,
                lineHeight: 1.05,
                margin: '18px 0 12px',
                fontWeight: 900,
                color: '#0A6ED1'
              }}
            >
              Scoops of Happiness,
              <br />
              <span style={{ color: '#0FA3B1' }}>
                Right at the Corner.
              </span>
            </h2>

            <p
              style={{
                fontSize: 16,
                opacity: 0.7,
                margin: '0 0 24px'
              }}
            >
              Icecreams, Waffles, Sandwiches, Burgers & Milkshakes,
              made fresh daily in Bangalore.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap'
              }}
            >
              <a
                href={`tel:${phone}`}
                className="btn-hover"
                style={{
                  background: '#0A6ED1',
                  color: 'white',
                  padding: '14px 22px',
                  borderRadius: 12,
                  textDecoration: 'none',
                  fontWeight: 700
                }}
              >
                📞 +91 98860-67444
              </a>

              <a
                href="#menu"
                className="btn-hover"
                style={{
                  background: 'white',
                  color: '#0A6ED1',
                  border: '2px solid #D4A017',
                  padding: '12px 20px',
                  borderRadius: 12,
                  textDecoration: 'none',
                  fontWeight: 800
                }}
              >
                View Menu ↓
              </a>
            </div>
          </div>

          <div style={{ display: 'grid', placeItems: 'center' }}>
            <img
              src="/logo.png"
              alt="Hero"
              className="hero-img-hover"
              style={{
                width: '100%',
                maxWidth: 440,
                aspectRatio: '1',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow:
                  '0 20px 60px rgba(10,110,209,0.25)',
                border: '8px solid #D4A017'
              }}
            />
          </div>

        </div>
      </section>

      {/* MENU */}
      <section
        id="menu"
        style={{
          background:
            'linear-gradient(180deg, #E0F7FA 0%, #E6F4FF 50%, #ffffff 100%)',
          padding: '36px 24px',
          borderTop: '4px solid #D4A017'
        }}
      >

        <div style={{ maxWidth: 1120, margin: '0 auto' }}>

          {Object.entries(menu).map(([cat, items]) => (
            <div key={cat} style={{ marginTop: 36 }}>

              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  margin: '0 0 14px',
                  color: '#0A6ED1',
                  borderLeft: '5px solid #D4A017',
                  paddingLeft: 12,
                  background: 'white',
                  display: 'inline-block',
                  paddingRight: 14,
                  borderRadius: '0 12px 12px 0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
              >
                {cat}
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fill, minmax(190px, 1fr))',
                  gap: 16
                }}
              >

                {items.map((it) => (
                  <div
                    key={it.name}
                    className="card-hover"
                    style={{
                      background: 'white',
                      borderRadius: 20,
                      overflow: 'hidden',
                      boxShadow:
                        '0 8px 24px rgba(10,110,209,0.08)',
                      border:
                        '1px solid rgba(212,160,23,0.15)'
                    }}
                  >

                    <div
                      style={{
                        overflow: 'hidden',
                        height: 150
                      }}
                    >
                      <img
                        src={it.img}
                        alt={it.name}
                        className="img-zoom"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          background: '#F5E8C9',
                          display: 'block'
                        }}
                        onError={(e) => {
                          e.currentTarget.src = '/logo.png';
                        }}
                      />
                    </div>

                    <div style={{ padding: 14 }}>

                      <div
                        style={{
                          fontWeight: 800,
                          fontSize: 14
                        }}
                      >
                        {it.name}
                      </div>

                      <div
                        style={{
                          opacity: 0.6,
                          fontSize: 11,
                          marginTop: 3
                        }}
                      >
                        {it.desc}
                      </div>

                      <div
                        style={{
                          marginTop: 12,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-end',
                          gap: 8
                        }}
                      >

                        <div>
                          {it.doublePrice ? (
                            <div
                              style={{
                                display: 'flex',
                                gap: 10,
                                alignItems: 'flex-end'
                              }}
                            >

                              <div>
                                <div
                                  style={{
                                    fontSize: 9,
                                    fontWeight: 800,
                                    opacity: 0.55,
                                    textTransform: 'uppercase'
                                  }}
                                >
                                  Single Scoop
                                </div>

                                <span
                                  style={{
                                    fontWeight: 900,
                                    fontSize: 15,
                                    color: '#D4A017'
                                  }}
                                >
                                  {it.price}
                                </span>
                              </div>

                              <div>
                                <div
                                  style={{
                                    fontSize: 9,
                                    fontWeight: 800,
                                    opacity: 0.55,
                                    textTransform: 'uppercase'
                                  }}
                                >
                                  Double Scoop
                                </div>

                                <span
                                  style={{
                                    fontWeight: 900,
                                    fontSize: 15,
                                    color: '#D4A017'
                                  }}
                                >
                                  {it.doublePrice}
                                </span>
                              </div>

                            </div>
                          ) : (
                            <div>

                              <div
                                style={{
                                  fontSize: 9,
                                  fontWeight: 800,
                                  opacity: 0.55
                                }}
                              >
                                300 ML
                              </div>

                              <span
                                style={{
                                  fontWeight: 900,
                                  fontSize: 15,
                                  color: '#D4A017'
                                }}
                              >
                                {it.price}
                              </span>

                            </div>
                          )}
                        </div>

                        <a
                          href={`https://wa.me/${phone}?text=I%20want%20${encodeURIComponent(
                            it.name
                          )}`}
                          className="btn-hover"
                          style={{
                            fontSize: 11,
                            fontWeight: 800,
                            background:
                              'linear-gradient(90deg, #0A6ED1, #0FA3B1)',
                            color: 'white',
                            padding: '6px 12px',
                            borderRadius: 999,
                            textDecoration: 'none',
                            whiteSpace: 'nowrap'
                          }}
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

          {/* TOPPINGS */}
          <div
            style={{
              maxWidth: 620,
              margin: '44px auto 0',
              background: '#FFF7DF',
              border: '2px dashed #D4A017',
              borderRadius: 20,
              padding: '18px 24px',
              textAlign: 'center',
              boxShadow:
                '0 8px 24px rgba(212,160,23,0.12)'
            }}
          >
            <div
              style={{
                fontWeight: 900,
                color: '#D7265B',
                fontSize: 16
              }}
            >
              ⭐ TOPPINGS EXTRA CHARGES APPLY ⭐
            </div>

            <div
              style={{
                marginTop: 10,
                fontWeight: 800,
                fontSize: 15
              }}
            >
              🍦 CONE ₹15
              &nbsp;&nbsp; | &nbsp;&nbsp;
              🧇 WAFFLE CONE ₹15
            </div>
          </div>

          {/* FOOTER */}
          <footer
            style={{
              textAlign: 'center',
              padding: '50px 0 100px',
              opacity: 0.7,
              fontSize: 17,
              color: '#000000'
            }}
          >
            🚗 Drive-In Service Available |
            🛵 Free Home Delivery |
            🌐 www.blr99corner.com
            <br />

            © 2026 BLR 99 Corner •
            #41, A.J.Chambers, RV Road,
            Basavanagudi, Bangalore-560004
            <br />

            📞 +91 98860-67444
          </footer>

        </div>
      </section>

      {/* WATERMARK */}
      <img
        src="/logo.png"
        alt="watermark"
        style={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          width: 72,
          height: 72,
          borderRadius: '50%',
          opacity: 0.15,
          pointerEvents: 'none',
          zIndex: 5,
          border: '2px solid #D4A017',
          background: 'white'
        }}
      />

    </main>
  );
}
