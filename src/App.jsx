import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoImg from './assets/Max Pro HN logo.jpg';
import phoneImg from './assets/Gemini_Generated_Image_b3a8xhb3a8xhb3a8.png';
import textureImg from './assets/Gemini_Generated_Image_njil1enjil1enjil.png';
import protocolImg1 from './assets/Gemini_Generated_Image_njil1enjil1enjil-2.png';
import protocolImg2 from './assets/Gemini_Generated_Image_njil1enjil1enjil-4.png';
import protocolImg3 from './assets/Gemini_Generated_Image_njil1enjil1enjil-3.png';

import { Box, Activity, Battery, ShieldCheck, CheckCircle, ArrowRight, Instagram, Facebook, Smartphone, Plus, Minus, X, Menu, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- DESIGN TOKENS ---
// Primary bg: Woodsmoke #111212
// Texts: Primary #E8E8E8, Secondary #8B8B8B

function Button({ children, className = '', href = '#', onClick }) {
  const btnRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const btn = btnRef.current;
      const phone = btn.querySelector('.btn-flying-phone');

      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'back.out(2)' });
        if (phone) {
          gsap.fromTo(phone, 
            { x: 60, y: 30, rotation: 90, scale: 0.5, opacity: 0 },
            { x: 0, y: 0, rotation: -15, scale: 1.1, opacity: 0.5, duration: 0.6, ease: 'back.out(1.5)' }
          );
        }
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
        if (phone) {
          gsap.to(phone, { x: -60, y: -30, rotation: -45, scale: 0.5, opacity: 0, duration: 0.4, ease: 'power2.in' });
        }
      });
    }, btnRef);
    return () => ctx.revert();
  }, []);

  const BaseTag = href !== '#' ? 'a' : 'button';
  
  return (
    <BaseTag 
      ref={btnRef} 
      href={href !== '#' ? href : undefined}
      onClick={onClick}
      className={`group relative overflow-hidden inline-flex items-center justify-center font-semibold font-sans bg-[#44443C] text-[#E8E8E8] px-8 py-4 rounded-full transition-all duration-300 shadow-xl border border-[#443C3E]/50 hover:shadow-2xl z-10 ${className}`}
    >
      <span className="absolute inset-0 w-full h-full bg-[#E8E8E8] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] translate-y-[100%] group-hover:translate-y-0 z-0"></span>
      <img src={phoneImg} className="btn-flying-phone absolute w-24 h-24 object-cover opacity-0 pointer-events-none mix-blend-multiply right-0 top-1/2 -translate-y-1/2 brightness-50" />
      <span className="relative z-10 flex items-center justify-center group-hover:text-[#111212] transition-colors duration-300">
        {children}
      </span>
    </BaseTag>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-[95%] max-w-5xl ${scrolled ? 'bg-[#111212]/80 backdrop-blur-xl border border-[#443C3E]/50 shadow-2xl' : 'bg-transparent'}`}>
        <div className="flex items-center space-x-3">
          <img src={logoImg} alt="Max Pro HN Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(232,232,232,0.3)] filter contrast-125 brightness-110 rounded-xl" />
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-[#E8E8E8]">Max Pro HN</span>
        </div>
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold text-[#8B8B8B] tracking-wide">
          <a href="#features" className="hover:text-[#E8E8E8] transition hover:-translate-y-px">Ventajas</a>
          <a href="#philosophy" className="hover:text-[#E8E8E8] transition hover:-translate-y-px">Filosofía</a>
          <a href="#protocol" className="hover:text-[#E8E8E8] transition hover:-translate-y-px">Garantía</a>
          <a href="#faq" className="hover:text-[#E8E8E8] transition hover:-translate-y-px">FAQ</a>
        </div>
        <div className="flex items-center space-x-4">
          <Button href="#contact" className="hidden md:inline-flex !px-6 !py-2.5 !text-sm tracking-wide">
            Lo Quiero
          </Button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#E8E8E8] p-2 hover:bg-[#1A1A1A] rounded-full transition-colors relative z-50">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-[#111212]/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col items-center justify-center space-y-8 ${menuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'}`}>
        <a href="#features" onClick={() => setMenuOpen(false)} className="text-3xl font-display font-bold text-[#E8E8E8] hover:text-[#8B8B8B] transition-colors px-8 py-3">Ventajas</a>
        <a href="#philosophy" onClick={() => setMenuOpen(false)} className="text-3xl font-display font-bold text-[#E8E8E8] hover:text-[#8B8B8B] transition-colors px-8 py-3">Filosofía</a>
        <a href="#protocol" onClick={() => setMenuOpen(false)} className="text-3xl font-display font-bold text-[#E8E8E8] hover:text-[#8B8B8B] transition-colors px-8 py-3">Garantía</a>
        <a href="#faq" onClick={() => setMenuOpen(false)} className="text-3xl font-display font-bold text-[#E8E8E8] hover:text-[#8B8B8B] transition-colors px-8 py-3">FAQ</a>
        <div className="mt-8">
          <Button href="#contact" onClick={() => setMenuOpen(false)} className="!px-10 !py-4 !text-lg tracking-wide">
            Lo Quiero
          </Button>
        </div>
      </div>
    </>
  );
}

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2
      });
      gsap.from('.hero-btn', {
        y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.6
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-[100dvh] pt-32 pb-20 flex flex-col justify-center px-6 md:px-16 overflow-hidden bg-[#111212]">
      {/* Darkened Background Image for contrast */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={phoneImg} 
          alt="iPhone Pro Max Cinematic"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-[#111212]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111212] via-[#111212]/80 to-[#111212]/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-start xl:items-center xl:text-center gap-8 xl:mt-12">
        <div className="flex flex-col gap-6 w-full items-start xl:items-center">
          <h1 className="hero-text text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#E8E8E8] leading-[1.05] tracking-tight text-balance max-w-4xl drop-shadow-2xl">
            ¿Querés un iPhone Pro Max <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">original</span>, en estado impecable, a un precio que parece <span className="italic">error</span>?
          </h1>
          <p className="hero-text text-lg md:text-xl lg:text-2xl font-sans text-[#8B8B8B] max-w-2xl text-balance leading-relaxed">
            Dejá de pagar de más en tiendas. Dejá de arriesgarte con vendedores dudosos. <strong className="text-[#E8E8E8] font-bold">Existe una tercera opción y está aquí.</strong>
          </p>
        </div>
        <div className="hero-btn mt-4 xl:mt-8">
          <Button href="#contact" className="!px-12 !py-6 !text-lg !font-bold">
            Comprar Mi Pro Max
          </Button>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const philRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.parallax-bg', {
        scrollTrigger: {
          trigger: philRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: 150, ease: 'none'
      });

      gsap.from('.phil-fade', {
        scrollTrigger: { trigger: philRef.current, start: 'top 70%' },
        opacity: 0, y: 30, stagger: 0.15, duration: 1, ease: 'power2.out'
      });
    }, philRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={philRef} className="relative w-full py-32 md:py-48 overflow-hidden bg-[#111212] border-y border-[#1A1A1A]">
      <div className="absolute inset-0 w-full h-full opacity-10">
        <img src={textureImg} alt="Texture" className="parallax-bg w-[110%] h-[120%] -top-[10%] -left-[5%] object-cover mix-blend-screen" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col gap-12 text-[#8B8B8B] font-sans text-xl md:text-2xl leading-relaxed text-balance">
        
        <h2 className="phil-fade text-5xl md:text-7xl font-display font-black tracking-tighter text-[#E8E8E8] leading-[1.05]">
          Seamos honestos. <br/>
          <span className="text-[#8B8B8B] italic text-4xl md:text-5xl lg:text-6xl font-medium mt-4 block">Comprar un iPhone Pro Max en Honduras se siente como un castigo.</span>
        </h2>

        <p className="phil-fade">
          Si lo comprás "nuevo" en una tienda, te sacan un ojo, y el otro. Precios inflados, márgenes absurdos, y al final del día… estás pagando miles de lempiras de más por el mismo teléfono que podrías conseguir a una fracción del costo.
        </p>
        
        <p className="phil-fade font-bold text-[#E8E8E8]">Pero la alternativa tampoco es bonita.</p>

        <p className="phil-fade">
          Comprás un "usado" o "seminuevo" de un vendedor random en redes sociales y te arriesgás a recibir:
        </p>

        <ul className="phil-fade space-y-6 my-6 pl-6 border-l-2 border-[#443C3E]">
          <li className="flex items-start gap-4"><span className="text-2xl mt-1 text-[#E8E8E8]">📱</span><span className="flex-1">Un teléfono que fue <strong className="text-[#E8E8E8]">abierto y reparado con piezas chinas baratas.</strong></span></li>
          <li className="flex items-start gap-4"><span className="text-2xl mt-1 text-[#E8E8E8]">🔋</span><span className="flex-1">Una batería que no es original, es adulterada, y que no te dura ni medio día.</span></li>
          <li className="flex items-start gap-4"><span className="text-2xl mt-1 text-[#E8E8E8]">🚫</span><span className="flex-1">Un equipo <strong className="text-[#E8E8E8]">manipulado</strong> que por fuera parece perfecto… pero por dentro es una bomba de tiempo.</span></li>
        </ul>

        <p className="phil-fade text-2xl md:text-3xl text-[#E8E8E8] font-bold">
          Y lo peor: no tenés garantía. Si algo falla, perdiste tu dinero. Así de simple.
        </p>

        <p className="phil-fade">
          Esa es la realidad que vive la gente que quiere comprar estos tipos de teléfonos en este país. Quieren lo mejor de Apple: la cámara Pro, la pantalla inmensa, el rendimiento brutal del Pro Max, pero sienten que tienen que elegir entre <strong className="text-[#E8E8E8]">quemarse el bolsillo</strong> o <strong className="text-[#E8E8E8]">jugársela con un vendedor desconocido.</strong>
        </p>

        <div className="phil-fade mt-16 bg-[#1A1A1A] p-8 md:p-16 rounded-[3rem] border border-[#443C3E]/60 shadow-2xl relative">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#E8E8E8] mb-8 tracking-tight leading-tight">
            ¿Y si te dijera que hay una tercera opción?
          </h3>
          
          <p className="mb-8">
            Una opción donde conseguís un iPhone Pro Max <strong className="text-[#E8E8E8]">100% original, sin manipular, en condición impecable</strong>… a un precio que el <strong className="text-[#E8E8E8]">95% de los vendedores en Honduras simplemente no pueden igualar.</strong>
          </p>

          <p className="mb-12">
            No es magia. No es estafa. No es "refurbished."<br/>
            Es <strong className="text-[#E8E8E8]">Max Pro HN.</strong> Nosotros no somos una tienda más. No vendemos de todo un poco. No vendemos Samsung, no vendemos Xiaomi, no vendemos accesorios random.
          </p>

          <div className="border-l-4 border-[#E8E8E8] pl-6 md:pl-10 py-2 mb-12">
            <h4 className="text-3xl md:text-5xl font-display font-bold text-[#E8E8E8] leading-[1.1] tracking-tight">
              Nosotros hacemos UNA sola cosa y la hacemos mejor que nadie:
            </h4>
            <p className="text-2xl md:text-3xl italic font-medium mt-6 text-[#8B8B8B]">
              Vendemos exclusivamente iPhone Pro Max (14, 15 y 16) en estado mint, 100% originales, a precios de mayorista.
            </p>
            <p className="text-lg mt-2 font-mono uppercase tracking-wider text-[#44443C]">(Diferentes modelos Pro Max vendrán pronto)</p>
          </div>

          <p>
            ¿Cómo lo logramos? Simple. Nos saltamos la cadena de intermediarios. Accedemos a inventario de calidad premium directamente y trasladamos ese ahorro <strong className="text-[#E8E8E8]">directo a vos.</strong><br/>
            Sin inflación de tienda. Sin márgenes abusivos. Sin sorpresas.
          </p>
        </div>

        <div className="phil-fade mt-8 flex justify-center w-full">
          <Button href="#contact" className="!px-12 !py-6 !text-lg !font-bold">
            Solicitar Catálogo
          </Button>
        </div>

      </div>
    </section>
  );
}

function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 1, title: 'Mint Condition', desc: 'Detalles mínimos.' },
    { id: 2, title: 'Prácticamente Nuevo', desc: 'Recién sacado de caja.' },
    { id: 3, title: 'Detalles Estéticos', desc: 'Leves y superficiales.' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[220px] w-full flex items-center justify-center">
      {cards.map((card, i) => {
        const scale = 1 - i * 0.06;
        const yOffset = i * 20;
        const opacity = Math.max(0.2, 1 - i * 0.35);
        
        return (
          <div 
            key={card.id}
            className="absolute bg-[#1A1A1A] rounded-2xl p-6 border border-[#443C3E]/60 w-[85%] text-center transition-all duration-[800ms] shadow-2xl"
            style={{ 
              transform: `translateY(${yOffset}px) scale(${scale})`, 
              opacity,
              zIndex: 10 - i,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <ShieldCheck className="w-10 h-10 text-[#E8E8E8] mx-auto mb-3 drop-shadow-[0_0_12px_rgba(232,232,232,0.3)]" />
            <h4 className="font-display font-bold text-[#E8E8E8] text-xl">{card.title}</h4>
            <p className="font-mono text-sm text-[#8B8B8B] mt-2">{card.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

function TelemetryTypewriter() {
  const fullText = "Verificando componentes... Placa base original. Pantalla original. Cero piezas chinas... Autenticidad original 100% confirmada.";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const reset = setTimeout(() => {
        setText("");
        setIndex(0);
      }, 5000);
      return () => clearTimeout(reset);
    }
  }, [index, fullText]);

  return (
    <div className="h-[220px] w-full bg-[#111212]/80 rounded-2xl p-6 border border-[#44443C] flex flex-col justify-between font-mono shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between border-b border-[#443C3E]/60 pb-3">
        <span className="text-xs text-[#8B8B8B] font-semibold tracking-widest uppercase">Scanner Int.</span>
        <div className="flex items-center space-x-2 bg-[#1A1A1A] px-3 py-1.5 rounded-full border border-[#2A2A2A]">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
          <span className="text-[10px] text-green-400 font-bold tracking-wider">LIVE FEED</span>
        </div>
      </div>
      <div className="flex-1 mt-6">
        <p className="text-[#8B8B8B] text-sm leading-relaxed">
          <span className="text-[#E8E8E8] font-bold">&gt;</span> {text}
          <span className="w-2 h-4 bg-[#E8E8E8] inline-block ml-1 animate-pulse align-middle"></span>
        </p>
      </div>
    </div>
  );
}

function CursorScheduler() {
  const containerRef = useRef(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const container = containerRef.current;
      let tl;
      const createAnim = () => {
        if(tl) tl.kill();
        const cell = container.querySelector('.day-cell-target');
        const btn = container.querySelector('.act-btn');
        const svg = container.querySelector('.cursor-svg');
        
        if (!cell || !btn || !svg) return;
        
        const contRect = container.getBoundingClientRect();
        const cellRect = cell.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();
        
        // Exact pixel center of target relative to container top-left
        const cx = (cellRect.left - contRect.left) + cellRect.width/2 - 14;
        const cy = (cellRect.top - contRect.top) + cellRect.height/2 - 14;
        const bx = (btnRect.left - contRect.left) + btnRect.width/2 - 14;
        const by = (btnRect.top - contRect.top) + btnRect.height/2 - 14;

        tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
        tl.set(svg, { x: 30, y: 150, opacity: 0, scale: 1 })
          .to(svg, { opacity: 1, duration: 0.3 })
          .to(svg, { x: cx, y: cy, duration: 1, ease: 'power2.inOut' })
          .to(svg, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 }) 
          .to(cell, { backgroundColor: '#E8E8E8', color: '#111212', duration: 0.2 }, "-=0.1")
          .to(svg, { x: bx, y: by, duration: 0.8, ease: 'power2.inOut', delay: 0.4 })
          .to(svg, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 }) 
          .to(btn, { backgroundColor: '#44443C', duration: 0.2 }, "-=0.1")
          .to(svg, { opacity: 0, duration: 0.3, delay: 0.3 })
          .to(cell, { backgroundColor: 'transparent', color: '#8B8B8B', duration: 0.5 })
          .to(btn, { backgroundColor: 'transparent', duration: 0.5 }, "-=0.5");
      };

      createAnim();
      window.addEventListener('resize', createAnim);
      return () => {
        if(tl) tl.kill();
        window.removeEventListener('resize', createAnim);
      };
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-[220px] w-full overflow-hidden bg-[#1A1A1A] rounded-2xl p-6 border border-[#2A2A2A] flex flex-col items-center justify-center shadow-xl">
      <h4 className="text-xs font-mono font-bold text-[#8B8B8B] self-start mb-6 uppercase tracking-widest relative z-10">Rendimiento Constante</h4>
      <div className="flex space-x-2 mb-8 w-full justify-center relative z-10">
        {['8AM', '1PM', '6PM', '11PM'].map((d, i) => (
          <div key={i} className={`w-12 h-12 rounded-xl border border-[#443C3E] flex items-center justify-center text-xs font-mono font-bold text-[#8B8B8B] transition-colors ${i === 3 ? 'day-cell-target' : ''}`}>
            {d}
          </div>
        ))}
      </div>
      <div className="act-btn px-6 py-2.5 rounded-full border border-[#44443C] text-[11px] font-sans font-bold text-[#8B8B8B] uppercase tracking-wider transition-colors relative z-10">Batería Saludable</div>
      <svg className="cursor-svg absolute top-0 left-0 pointer-events-none w-7 h-7 z-20" viewBox="0 0 24 24" fill="none" stroke="#E8E8E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}>
        <path d="M4 4l7.07 17 2.51-7.39L21 11.07z"/>
      </svg>
    </div>
  );
}

function Features() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-32 px-6 md:px-16 bg-[#111212] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#E8E8E8] tracking-tight mb-6">Esto es lo que obtenés con Max Pro HN:</h2>
        </div>
        
        {/* Top 3 Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 mb-8 xl:mb-12">
          
          <div className="feature-card bg-[#111212] border border-[#2A2A2A] hover:border-[#443C3E] transition-colors duration-500 rounded-[2.5rem] p-8 shadow-2xl flex flex-col items-center">
            <DiagnosticShuffler />
            <div className="mt-10 text-center flex-1">
              <h3 className="text-2xl font-display font-bold text-[#E8E8E8] mb-4 tracking-tight">✅ Condición Impecable (Mint Condition)</h3>
              <p className="text-[#8B8B8B] text-base font-sans leading-relaxed">Cada iPhone que vendemos está en estado prácticamente nuevo. Detalles de uso mínimos. Estamos hablando de equipos que parecen recién sacados de la caja. Leves detalles estéticos.</p>
            </div>
          </div>

          <div className="feature-card bg-[#111212] border border-[#2A2A2A] hover:border-[#443C3E] transition-colors duration-500 rounded-[2.5rem] p-8 shadow-2xl flex flex-col items-center">
            <TelemetryTypewriter />
            <div className="mt-10 text-center flex-1">
              <h3 className="text-2xl font-display font-bold text-[#E8E8E8] mb-4 tracking-tight">✅ 100% Original, Sin Manipular</h3>
              <p className="text-[#8B8B8B] text-base font-sans leading-relaxed">Cero piezas reemplazadas. Cero reparaciones. Cero trucos. Cada componente dentro de tu Pro Max es exactamente el que Apple puso ahí. No es "refurbished." No fue abierto. No fue tocado. Es el teléfono real, completo, tal como fue diseñado.</p>
            </div>
          </div>

          <div className="feature-card bg-[#111212] border border-[#2A2A2A] hover:border-[#443C3E] transition-colors duration-500 rounded-[2.5rem] p-8 shadow-2xl flex flex-col items-center">
            <CursorScheduler />
            <div className="mt-10 text-center flex-1">
              <h3 className="text-2xl font-display font-bold text-[#E8E8E8] mb-4 tracking-tight">✅ Batería Saludable (80% – 100%)</h3>
              <p className="text-[#8B8B8B] text-base font-sans leading-relaxed">Dependiendo del modelo y año, la salud de batería va del 80% al 100%. Eso significa rendimiento real, duración real, y cero dolores de cabeza con baterías agotadas que te dejan tirado a media tarde.</p>
            </div>
          </div>

        </div>

        {/* Bottom 2 Static Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          
          <div className="feature-card bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#443C3E] transition-colors duration-500 rounded-[2.5rem] p-10 md:p-12 shadow-2xl flex flex-col justify-center">
             <h3 className="text-3xl font-display font-bold text-[#E8E8E8] mb-4">✅ Especialistas Absolutos en Pro Max</h3>
             <p className="text-[#8B8B8B] text-lg font-sans leading-relaxed">No nos distraemos. No vendemos "de todo." Somos los especialistas en iPhone Pro Max en Honduras. Modelos 14 Pro Max, 15 Pro Max y 16 Pro Max. Eso es todo. Esa especialización es lo que nos permite garantizar la calidad que nadie más puede.</p>
          </div>
          
          <div className="feature-card bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#443C3E] transition-colors duration-500 rounded-[2.5rem] p-10 md:p-12 shadow-2xl flex flex-col justify-center">
             <h3 className="text-3xl font-display font-bold text-[#E8E8E8] mb-4">✅ Precios Que el 95% del Mercado No Puede Igualar</h3>
             <p className="text-[#8B8B8B] text-lg font-sans leading-relaxed">Esto no es un eslogan vacío. Es un hecho. Nuestro modelo de precios mayoristas aplicado al comprador individual significa que vas a pagar significativamente menos que en cualquier tienda tradicional o vendedor promedio. Compará. Investigá. Y después hablá con nosotros. Los números hablan solos.</p>
          </div>

        </div>

        <div className="mt-16 flex justify-center w-full z-20 relative">
          <Button href="#contact" className="!px-12 !py-6 !text-lg !font-bold hover:shadow-[0_0_30px_rgba(232,232,232,0.15)]">
            Ver Precios Exclusivos
          </Button>
        </div>
      </div>
    </section>
  );
}

function Protocol() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current;
      
      let mm = gsap.matchMedia();
      
      mm.add("(min-width: 1024px)", () => {
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;

          gsap.to(card, {
            scale: 0.92,
            opacity: 0.3,
            filter: 'blur(15px)',
            scrollTrigger: {
              trigger: cards[i + 1],
              start: 'top bottom-=10%',
              end: 'top top+=20%',
              scrub: true,
            }
          });
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      step: '01',
      title: 'Garantía Sin Preocupaciones',
      desc: 'Sabemos que comprar tecnología premium requiere confianza. Por eso te damos algo que casi nadie en este mercado ofrece: 14 días de garantía total.',
      img: protocolImg1,
      icon: <CheckCircle className="w-10 h-10 text-[#E8E8E8]" />
    },
    {
      step: '02',
      title: 'Nosotros Asumimos el Riesgo',
      desc: 'Si tu iPhone Pro Max presenta cualquier defecto de fábrica dentro de los primeros 14 días, te ofrecemos: Cambio inmediato por otro equipo, o devolución completa de tu dinero. Sin letras pequeñas. Sin excusas. Sin vueltas. Tu compra está protegida. Punto.',
      img: protocolImg2,
      icon: <ShieldCheck className="w-10 h-10 text-[#E8E8E8]" />
    },
    {
      step: '03',
      title: 'Inventario Limitado — Esto No Dura',
      desc: 'Seamos claros: conseguir iPhone Pro Max en condición mint, 100% originales y sin manipular, no es fácil. Cada lote que recibimos es limitado, y cuando se acaba… se acaba. No hay lista de espera. Los compradores inteligentes no esperan. Actúan.',
      img: protocolImg3,
      icon: <Activity className="w-10 h-10 text-[#E8E8E8]" />
    }
  ];

  return (
    <section id="protocol" ref={containerRef} className="relative w-full bg-[#111212] pt-32 pb-48 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-20 text-center md:text-left">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#E8E8E8]">Garantía Total.</h2>
        <p className="text-xl text-[#8B8B8B] font-sans mt-4 max-w-2xl">Porque confiamos al 100% en la calidad de cada equipo que vendemos.</p>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 space-y-16 lg:space-y-0">
        {steps.map((s, i) => (
          <div 
            key={i} 
            ref={el => cardsRef.current[i] = el}
            className="protocol-card lg:sticky w-full min-h-[400px] flex flex-col md:flex-row rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border border-[#443C3E]/80 shadow-2xl bg-[#1A1A1A] my-8 lg:my-0 lg:-mt-12 transition-all duration-300"
            style={{ 
              top: `calc(10vh + ${i * 40}px)`, 
              zIndex: 10 + i,
              transformOrigin: 'top center'
            }}
          >
            <div className="w-full md:w-1/2 h-[350px] md:h-auto flex-none md:flex-1 relative overflow-hidden bg-[#111212]">
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1A1A1A] via-transparent to-transparent z-10 w-full h-full"></div>
              <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen scale-105" />
            </div>
            
            <div className="w-full md:w-1/2 flex-1 md:h-full flex flex-col justify-center p-8 md:p-12 lg:p-16 text-left relative bg-[#1A1A1A] z-20">
              <span className="font-display font-black text-[120px] lg:text-[180px] absolute -top-10 lg:-top-20 right-8 text-[#111212] opacity-40 select-none z-0">
                .{s.step}
              </span>
              
              <div className="w-20 h-20 flex-shrink-0 bg-[#443C3E]/40 backdrop-blur-xl border border-[#443C3E] rounded-[1.5rem] flex items-center justify-center mb-6 md:mb-8 shadow-2xl relative z-10">
                {s.icon}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#E8E8E8] mb-6 leading-tight">{s.title}</h3>
                <p className="text-[#8B8B8B] text-lg font-sans max-w-md leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-30 mt-24 flex justify-center w-full">
        <Button href="#contact" className="!px-12 !py-6 !text-lg !font-bold hover:shadow-[0_0_30px_rgba(232,232,232,0.15)]">
          Cotizar con Respaldo
        </Button>
      </div>
    </section>
  );
}

function AccordionItem({ question, answer, isOpen, onClick }) {
  const contentRef = useRef(null);
  
  return (
    <div className="border-b border-[#2A2A2A] overflow-hidden py-2">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="font-display font-bold text-xl md:text-2xl text-[#E8E8E8] pr-8 group-hover:text-green-500 transition-colors drop-shadow-md">{question}</span>
        <div className={`flex-shrink-0 w-10 h-10 rounded-[1rem] border border-[#443C3E] flex items-center justify-center transition-all duration-500 shadow-xl ${isOpen ? 'bg-[#E8E8E8] text-[#111212] rotate-180' : 'bg-[#1A1A1A] text-[#E8E8E8]'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <div 
        ref={contentRef} 
        className="transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight + 60 : 0, opacity: isOpen ? 1 : 0 }}
      >
        <div className="pb-8 text-[#8B8B8B] font-sans text-lg md:text-xl leading-relaxed" dangerouslySetInnerHTML={{__html: answer}} />
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    {q: '1. ¿Los iPhones que venden son originales o son "refurbished"?', a: '<b>Son 100% originales. No son refurbished.</b><br/>Cada iPhone Pro Max que vendemos conserva <b>todas sus piezas de fábrica intactas.</b> No fueron abiertos, no fueron reparados, no se les cambió absolutamente nada. Cuando decimos "original" lo decimos en serio — cada tornillo, cada chip, cada componente es exactamente el que Apple colocó.<br/><br/>¿La diferencia con un "refurbished"? Un refurbished fue desarmado, reparado con piezas genéricas y rearmado para que <i>parezca</i> nuevo. <b>Los nuestros nunca fueron tocados.</b>'},
    {q: '2. Si no son nuevos de caja, ¿entonces qué son exactamente?', a: 'Son equipos en <b>condición mint</b> — estado prácticamente nuevo con leves detalles estéticos mínimos. Estamos hablando de iPhones que al verlos y usarlos <b>sentís que acabás de abrir la caja.</b> Funcionan al 100%, se ven al 100%, y rinden al 100%.<br/><br/>La única diferencia con uno "nuevo de tienda" es que ya fueron activados previamente. <b>Todo lo demás — rendimiento, apariencia, calidad — es idéntico.</b>'},
    {q: '3. ¿Qué modelos tienen disponibles?', a: 'Nos especializamos <b>exclusivamente</b> en la línea Pro Max:<br/>- 📱 <b>iPhone 14 Pro Max</b><br/>- 📱 <b>iPhone 15 Pro Max</b><br/>- 📱 <b>iPhone 16 Pro Max</b><br/><br/>No vendemos otros modelos. No vendemos otras marcas. <b>Somos especialistas en Pro Max y punto.</b> Esa obsesión por un solo producto es lo que nos permite garantizar una calidad que nadie más puede.'},
    {q: '4. ¿Qué capacidades de almacenamiento manejan?', a: 'Manejamos la capacidad más popular según disponibilidad: <b>256GB</b>.<br/>La disponibilidad varía según el lote, así que lo mejor es <b>escribirnos por WhatsApp</b> para que te digamos exactamente qué tenemos en stock en este momento.'},
    {q: '5. ¿Cómo está la batería de los equipos?', a: 'La salud de batería de nuestros iPhones va del <b>80% al 100%</b>, dependiendo del modelo y año. Antes de vender cualquier equipo, verificamos la batería y te informamos el porcentaje exacto.<br/><br/>¿Qué significa esto en la práctica? Que tu Pro Max <b>te va a durar todo el día sin problemas.</b> Nada de andar cargando el teléfono a cada rato como pasa con esos equipos "baratos" que venden por ahí con baterías destruidas.'},
    {q: '6. ¿Los equipos vienen con algún accesorio?', a: 'Nuestros iPhones NO vienen con <b>cargador o cable.</b> No incluimos caja original ni accesorios adicionales. ¿Por qué? Porque eso nos permite mantener los precios lo más bajos posible. Preferimos ahorrarte miles de lempiras a darte una cajita bonita que vas a guardar en un cajón.'},
    {q: '7. ¿Puedo verificar que el equipo es original antes de comprarlo?', a: '<b>¡Por supuesto!</b> Te animamos a que lo hagás. Podés revisar el estado de las piezas en los ajustes del iPhone, y confirmar que todo es 100% original de fábrica. No tenemos nada que esconder — al contrario, queremos que lo comprobes vos mismo.'},
    {q: '8. ¿Por qué sus precios son tan bajos? ¿Cuál es el truco?', a: '<b>No hay truco.</b> Hay un modelo de negocio inteligente.<br/><br/>Las tiendas tradicionales compran a intermediarios, que compraron a otros intermediarios, que compraron a distribuidores. Cada eslabón de esa cadena agrega su margen. <b>Vos terminás pagando el teléfono + la ganancia de 3 o 4 personas.</b><br/><br/>Nosotros nos saltamos todo eso. Accedemos a inventario premium directamente y trasladamos ese ahorro <b>directo a vos.</b> Es precio de mayorista para el comprador individual. Así de simple.'},
    {q: '9. ¿Cuánto cuesta un iPhone Pro Max con ustedes?', a: 'Los precios varían según el modelo, capacidad y disponibilidad. Lo que sí te podemos garantizar es que <b>nuestro precio va a ser significativamente menor que el 95% de los vendedores en Honduras.</b><br/><br/>¿Querés saber el precio exacto del modelo que te interesa? <b>Escribinos por WhatsApp</b> y te damos la cotización al instante. Sin compromiso, sin presión.'},
    {q: '10. ¿Qué métodos de pago aceptan?', a: 'Aceptamos <b>transferencia bancaria, depósito y efectivo.</b> Queremos que tu compra sea lo más fácil y cómoda posible. Los detalles exactos te los damos cuando nos contactés por WhatsApp.'},
    {q: '11. ¿Qué cubre exactamente la garantía de 14 días?', a: 'Nuestra garantía cubre <b>cualquier defecto de fábrica</b> que se presente en los primeros 14 días después de tu compra. Si algo falla por un problema de manufactura — no por golpes, caídas o daño por agua — te ofrecemos:<br/>- 🔄 <b>Cambio por otro equipo</b>, o<br/>- 💰 <b>Devolución completa de tu dinero.</b><br/><br/><b>Vos elegís.</b> Sin letras pequeñas, sin excusas, sin vueltas.'},
    {q: '12. ¿Qué NO cubre la garantía?', a: 'La garantía <b>no cubre daños causados por el usuario:</b> caídas, golpes, contacto con líquidos, o manipulación del software (jailbreak). Básicamente, si el teléfono falla por algo que no fue tu culpa, <b>estás cubierto.</b> Si se te cae al piso, eso ya es otra historia.'},
    {q: '13. ¿Cómo hago válida la garantía si algo falla?', a: 'Súper fácil. <b>Nos escribís por WhatsApp</b>, nos explicás qué pasó, y nosotros nos encargamos de todo. Sin formularios eternos, sin correos que nadie responde, sin esperar semanas. Atención directa, rápida y humana.'},
    {q: '15. ¿Puedo recoger mi iPhone en persona?', a: '<b>¡Claro que sí!</b> Solo operamos y hacemos entregas directas en Tegucigalpa. Podemos coordinar un punto de entrega para que recibás tu Pro Max en persona, lo revisés, lo verifiqués, y te vayás 100% satisfecho. Solo coordinamos por WhatsApp el día, hora y lugar.'},
    {q: '16. ¿Por qué solo venden iPhone Pro Max y no otros modelos?', a: 'Porque <b>la especialización es poder.</b><br/><br/>Cualquiera puede vender "de todo un poco." Nosotros decidimos ser <b>los mejores en una sola cosa.</b> Al enfocarnos exclusivamente en la línea Pro Max, conocemos cada detalle de cada modelo, sabemos exactamente qué buscar en calidad, y podemos garantizar un estándar que un vendedor generalista simplemente no puede.<br/><br/><b>Cuando alguien en Honduras piensa en Pro Max, queremos que piense en Max Pro HN.</b>'},
    {q: '17. ¿Cómo sé que puedo confiar en ustedes?', a: 'Dos razones:<br/><b>Primero:</b> te damos una <b>garantía de 14 días por escrito.</b> Un vendedor que no confía en su producto jamás haría eso.<br/><b>Segundo:</b> te invitamos a <b>verificar la originalidad del equipo vos mismo</b> antes, durante y después de la compra. Cero secretos.'},
    {q: '18. ¿Puedo ver fotos y detalles del equipo antes de comprarlo?', a: '<b>Absolutamente.</b> Cuando nos contactés por WhatsApp, te enviamos <b>fotos reales del equipo exacto</b> que vas a recibir — no fotos genéricas de internet. También te compartimos el porcentaje de batería, la capacidad, el color, y cualquier detalle que necesités para tomar tu decisión con total confianza.'}
  ];

  return (
    <section id="faq" className="py-32 px-6 overflow-hidden bg-[#111212] border-t border-[#1A1A1A] flex flex-col items-center relative">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-display font-black text-[#E8E8E8] tracking-tighter mb-16 text-center">
          ❓ Preguntas Frecuentes
        </h2>
        <div className="border-t border-[#2A2A2A]">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              question={faq.q} 
              answer={faq.a} 
              isOpen={openIndex === i} 
              onClick={() => setOpenIndex(i === openIndex ? -1 : i)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HoverCTA() {
  const btnRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const btn = btnRef.current;
      const phone = btn.querySelector('.flying-phone');
      const textSpan = btn.querySelector('.cta-text');

      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.4, ease: 'back.out(1.5)', boxShadow: '0 0 60px rgba(232,232,232,0.3)' });
        
        gsap.fromTo(phone, 
          { x: 300, y: 150, rotation: 120, scale: 0.2, opacity: 0 },
          { x: 0, y: -40, rotation: -15, scale: 1.2, opacity: 0.8, duration: 0.8, ease: 'back.out(1.5)' }
        );
        gsap.to(textSpan, { color: '#ffffff', duration: 0.3, textShadow: '0 2px 10px rgba(0,0,0,0.8)' });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.4, ease: 'power2.out', boxShadow: '0 0 40px rgba(232,232,232,0.15)' });
        
        gsap.to(phone, { x: -300, y: -150, rotation: -90, scale: 0.2, opacity: 0, duration: 0.5, ease: 'power2.in' });
        gsap.to(textSpan, { color: '#111212', duration: 0.3, textShadow: 'none' });
      });
    }, btnRef);
    return () => ctx.revert();
  }, []);

  return (
    <a ref={btnRef} href="https://wa.me/message/YOUR_WHATSAPP_LINK" className="relative overflow-hidden inline-flex items-center justify-center bg-[#E8E8E8] text-[#111212] px-12 md:px-16 py-6 md:py-8 text-xl md:text-2xl rounded-[2.5rem] shadow-[0_0_40px_rgba(232,232,232,0.15)] group cursor-pointer border border-[#E8E8E8] w-full max-w-lg mt-8 mb-6">
      <img src={phoneImg} className="flying-phone absolute w-64 h-64 object-cover rounded-[3rem] opacity-0 pointer-events-none right-0 top-0 shadow-2xl brightness-50" />
      <span className="cta-text relative z-10 flex items-center justify-center text-center font-display font-black tracking-tight transition-colors duration-300">
        <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        Contactar a Ventas
      </span>
    </a>
  );
}

function GetStarted() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 bg-[#1A1A1A] rounded-t-[3rem] md:rounded-t-[5rem] border-t border-[#443C3E]/60 relative z-40 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#8B8B8B]/40 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-[#E8E8E8] mb-8 leading-[1.05]">
          ¿Listo para tener tu iPhone Pro Max al mejor precio de Honduras?
        </h2>
        <p className="text-[#8B8B8B] font-sans text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
          Hacé clic aquí para contactarnos por WhatsApp y asegurar tu Pro Max antes de que se agote nuestro inventario.
        </p>
        
        <HoverCTA />

        <p className="text-[#8B8B8B] font-sans text-lg mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
          O buscanos en nuestras redes sociales. Respondemos rápido. Atención personalizada. Sin bots, sin esperas eternas.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
          <a href="https://www.instagram.com/maxprohn/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-[1.5rem] border border-[#443C3E] bg-[#111212] shadow-xl flex items-center justify-center text-[#E8E8E8] hover:bg-[#E8E8E8] hover:text-[#111212] transition-colors group cursor-pointer">
            <Instagram className="w-7 h-7 transform group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61579600246451" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-[1.5rem] border border-[#443C3E] bg-[#111212] shadow-xl flex items-center justify-center text-[#E8E8E8] hover:bg-[#E8E8E8] hover:text-[#111212] transition-colors group cursor-pointer">
            <Facebook className="w-7 h-7 transform group-hover:scale-110 transition-transform" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-[1.5rem] border border-[#443C3E] bg-[#111212] shadow-xl flex items-center justify-center text-[#E8E8E8] hover:bg-[#E8E8E8] hover:text-[#111212] transition-colors group cursor-pointer">
            <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111212] pt-24 pb-12 px-6 border-t border-[#1F1F1F] relative z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <h3 className="text-4xl font-display font-black text-[#E8E8E8] tracking-tight mb-3">Max Pro HN</h3>
          <p className="text-[#8B8B8B] font-mono text-sm tracking-widest uppercase font-medium">Solo Pro Max. Solo originales. Solo los mejores precios.</p>
        </div>
        
        <div className="flex items-center space-x-3 bg-[#1A1A1A] px-5 py-3 rounded-full border border-[#2A2A2A] shadow-lg">
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse"></div>
          <span className="font-mono text-xs text-[#E8E8E8] font-semibold uppercase tracking-widest">Modo Ahorro Activado</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-[#1F1F1F] flex flex-col md:flex-row justify-between font-mono text-xs text-[#8B8B8B] uppercase tracking-wider">
        <p>&copy; {new Date().getFullYear()} Max Pro HN. Todos los derechos reservados.</p>
        <p className="mt-4 md:mt-0">Honduras, Tegucigalpa</p>
      </div>
    </footer>
  );
}

function GlobalStars() {
  const containerRef = useRef(null);
  
  const [stars] = useState(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      cx: Math.random() * 100, // orbit center X
      cy: Math.random() * 100, // orbit center Y
      radius: Math.random() * 12 + 4, // tight orbital radius (vw/vh)
      angle: Math.random() * Math.PI * 2,
      baseSpeed: (Math.random() * 0.05 + 0.02) * (Math.random() > 0.5 ? 1 : -1)
    }));
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.real-star');
      const container = containerRef.current;
      
      let scrollTimeout;
      let isScrolling = false;
      let lastScrollY = window.scrollY;
      let scrollVelocity = 0;
      
      const onScroll = () => {
        const currentScrollY = window.scrollY;
        // Cap max velocity so hash scrolling doesn't warp speed excessively
        scrollVelocity = Math.min(Math.abs(currentScrollY - lastScrollY), 50);
        lastScrollY = currentScrollY;
        
        if (!isScrolling) {
          isScrolling = true;
          gsap.to(container, { opacity: 1, duration: 0.3, ease: 'power2.out' });
        }
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          // Fade down to 0.3 so stars never completely disappear and keep animating!
          gsap.to(container, { opacity: 0.25, duration: 2, ease: 'sine.inOut' });
        }, 5000); 
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      
      let animFrame;
      const render = () => {
        // Compute continuously since they never fully disappear
        elements.forEach((el, i) => {
          const s = stars[i];
          const speedMultiplier = 1 + (scrollVelocity * 0.15); 
          s.angle += s.baseSpeed * speedMultiplier;
          
          const offsetX = Math.cos(s.angle) * s.radius;
          const offsetY = Math.sin(s.angle) * s.radius;
          
          el.style.transform = `translate3d(${offsetX}vw, ${offsetY}vh, 0)`;
        });
        
        scrollVelocity *= 0.92; // smooth velocity decay
        animFrame = requestAnimationFrame(render);
      };
      
      animFrame = requestAnimationFrame(render);
      
      return () => {
        window.removeEventListener('scroll', onScroll);
        clearTimeout(scrollTimeout);
        cancelAnimationFrame(animFrame);
      };
    }, containerRef);
    return () => ctx.revert();
  }, [stars]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-0">
      {stars.map((s) => (
        <div 
          key={s.id}
          className="real-star absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]"
          style={{
            top: `${s.cy}%`,
            left: `${s.cx}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            transform: `translate3d(${Math.cos(s.angle)*s.radius}vw, ${Math.sin(s.angle)*s.radius}vh, 0)`
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#111212] min-h-screen font-sans selection:bg-[#E8E8E8] selection:text-[#111212] relative">
      <GlobalStars />
            <Navbar />
      <Hero />
      <Philosophy />
      <Features />
      <Protocol />
      <GetStarted />
      <FAQ />
      <Footer />
    </div>
  );
}
