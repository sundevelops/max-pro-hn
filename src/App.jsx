import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoImg from './assets/Max Pro HN logo.jpg';
import phoneImg from './assets/Gemini_Generated_Image_b3a8xhb3a8xhb3a8.png';


import { Box, Activity, Battery, ShieldCheck, CheckCircle, ArrowRight, Instagram, Facebook, Smartphone, Plus, Minus, X, Menu, Lock, Copy, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const isInAppBrowser = () => {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  return (ua.indexOf("FBAN") > -1) || 
         (ua.indexOf("FBAV") > -1) || 
         (ua.indexOf("Instagram") > -1) || 
         (ua.indexOf("TikTok") > -1);
};

const isTikTokBrowser = () => {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  return (ua.indexOf("TikTok") > -1) || 
         (ua.indexOf("BytedanceWebview") > -1) || 
         (ua.indexOf("musical_ly") > -1) ||
         (ua.indexOf("ByteLocale") > -1);
};

function TikTokBlockerModal() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("+50487866985");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 bg-[#111212] font-sans overflow-y-auto">
      <div className="relative bg-[#1A1A1A] border border-pink-500/40 p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] w-full max-w-lg flex flex-col items-center text-center my-auto shrink-0">
        
        <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-[1.5rem] flex items-center justify-center mb-8 drop-shadow-[0_0_20px_rgba(236,72,153,0.4)]">
          <Instagram className="w-10 h-10 text-white" />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-display font-black text-[#E8E8E8] tracking-tight mb-4 leading-tight">Experiencia Limitada</h3>
        <p className="text-[#8B8B8B] font-sans text-lg mb-8 leading-relaxed text-balance">
          El navegador interno de TikTok bloquea funciones críticas de nuestra tienda.<br/><br/>
          Para ver nuestro catálogo y comprar sin interrupciones, por favor hacé clic abajo y <strong>contactanos directamente desde nuestro Instagram oficial.</strong>
        </p>

        <a href="https://www.instagram.com/maxprohn/" target="_top" rel="noopener noreferrer" className="relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-10 py-5 text-lg md:text-xl rounded-full shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:scale-105 transition-all duration-300 w-full cursor-pointer border border-pink-400/50 mb-8">
          <Instagram className="w-6 h-6 mr-3" />
          Ir a Instagram
        </a>

        <div className="w-full pt-8 border-t border-[#2A2A2A] flex flex-col items-center">
          <p className="text-[#8B8B8B] font-sans text-sm md:text-base mb-4 text-balance">O si preferís, escribinos directamente en WhatsApp usando este número:</p>
          <button onClick={handleCopy} className="flex items-center justify-between gap-4 bg-[#111212] border border-[#2A2A2A] rounded-2xl p-4 w-full md:w-auto hover:border-[#25D366]/50 transition-colors group">
            <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.3)] shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </div>
            <span className="font-display font-bold text-[#E8E8E8] text-xl tracking-wider select-text flex-1 text-center">+504 8786-6985</span>
            <div className={`p-2 rounded-lg transition-colors shrink-0 ${copied ? 'bg-green-500/20 text-green-400' : 'bg-[#1A1A1A] text-[#8B8B8B] group-hover:text-[#E8E8E8]'}`}>
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}

function WhatsAppRedirectOverlay() {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-between p-8 md:p-12 bg-[#111212] font-sans">
      
      {/* Top Content */}
      <div className="flex flex-col items-center mt-12 md:mt-16 w-full">
        <div className="w-28 h-28 md:w-32 md:h-32 bg-[#25D366] rounded-[2rem] flex items-center justify-center mb-6 shadow-[0_0_60px_rgba(37,211,102,0.4)] animate-pulse">
          <svg className="w-14 h-14 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-black text-[#E8E8E8] tracking-tight text-center">Abriendo WhatsApp...</h2>
      </div>

      {/* Bottom Content */}
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 md:p-8 max-w-lg w-full text-center shadow-2xl relative overflow-hidden mb-12 md:mb-16">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#25D366] to-transparent opacity-50 relative z-0"></div>
        <p className="text-[#8B8B8B] font-sans text-base md:text-xl leading-relaxed relative z-10">
          El sistema está intentando abrir otra aplicación.
        </p>
        <p className="text-[#E8E8E8] font-sans text-lg md:text-2xl font-bold mt-4 leading-relaxed relative z-10">
          Por favor, seleccioná <span className="text-[#25D366]">"Permitir"</span> o <span className="text-[#25D366]">"Abrir"</span> en la ventana emergente que aparece en tu pantalla para ir directamente al chat.
        </p>
      </div>
      
    </div>
  );
}

// --- DESIGN TOKENS ---
// Primary bg: Woodsmoke #111212
// Texts: Primary #E8E8E8, Secondary #8B8B8B

function Button({ children, className = '', href = '#', onClick }) {
  const btnRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const btn = btnRef.current;
      const phone = btn.querySelector('.btn-flying-phone');

      if (phone) gsap.set(phone, { x: 60, y: 30, rotation: 90, scale: 0.5, opacity: 0 });

      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'back.out(2)', overwrite: 'auto' });
        if (phone) {
          gsap.to(phone, { x: 0, y: 0, rotation: -15, scale: 1.1, opacity: 0.5, duration: 0.6, ease: 'back.out(1.5)', overwrite: 'auto' });
        }
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
        if (phone) {
          gsap.to(phone, { x: 60, y: 30, rotation: 90, scale: 0.5, opacity: 0, duration: 0.4, ease: 'power2.in', overwrite: 'auto' });
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
      <img src={phoneImg} className="btn-flying-phone absolute w-24 h-24 object-cover opacity-0 pointer-events-none mix-blend-multiply right-0 top-1/2 -translate-y-1/2 brightness-50" style={{ willChange: "transform, opacity" }} />
      <span className="relative z-10 flex items-center justify-center group-hover:text-[#111212] transition-colors duration-300">
        {children}
      </span>
    </BaseTag>
  );
}

function TopBanner() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-start pt-3 z-[110] pointer-events-none">
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <filter id="elegant-flag-ripple">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="2" result="noise">
              <animate attributeName="baseFrequency" values="0.01 0.02;0.012 0.025;0.01 0.02" dur="6s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="relative animate-sway-flag shadow-[0_10px_30px_rgba(0,0,0,0.6)] pointer-events-auto rounded-[2px]"
           style={{ minWidth: 'min(92vw, 800px)', height: '54px' }}>
           
        <div className="absolute inset-0 w-full h-full flex flex-col rounded-[2px] overflow-hidden" style={{ filter: 'url(#elegant-flag-ripple)' }}>
           <div className="flex-1 bg-[#00BCE4]"></div>
           <div className="flex-1 bg-white relative"></div>
           <div className="flex-1 bg-[#00BCE4]"></div>

           <div className="absolute inset-0 w-full h-full animate-flag-wind mix-blend-multiply opacity-[0.25]"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none">
           <div className="relative w-8 h-[14px] text-[#00BCE4] flex-shrink-0">
             <span className="absolute top-0 left-0 text-[7px] leading-none">★</span>
             <span className="absolute top-0 right-0 text-[7px] leading-none">★</span>
             <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[7px] leading-none">★</span>
             <span className="absolute bottom-0 left-0 text-[7px] leading-none">★</span>
             <span className="absolute bottom-0 right-0 text-[7px] leading-none">★</span>
           </div>

           <span className="font-sans font-black tracking-wide text-[#071320] text-[10px] md:text-[13px] uppercase text-center px-4"
                 style={{ textShadow: '0 1px 1px rgba(255,255,255,1), 0 0 8px rgba(255,255,255,0.8)' }}>
             ¡Pronto estaremos expandiendo y haciendo envíos a nivel nacional!
           </span>

           <div className="relative w-8 h-[14px] text-[#00BCE4] flex-shrink-0">
             <span className="absolute top-0 left-0 text-[7px] leading-none">★</span>
             <span className="absolute top-0 right-0 text-[7px] leading-none">★</span>
             <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[7px] leading-none">★</span>
             <span className="absolute bottom-0 left-0 text-[7px] leading-none">★</span>
             <span className="absolute bottom-0 right-0 text-[7px] leading-none">★</span>
           </div>
        </div>
      </div>
    </div>
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
      <nav className={`fixed left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-[95%] max-w-5xl ${scrolled ? 'top-[4.5rem] bg-[#111212]/80 backdrop-blur-xl border border-[#443C3E]/50 shadow-2xl' : 'top-[5.5rem] bg-transparent'}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center space-x-3 cursor-pointer group">
          <img src={logoImg} alt="Max Pro HN Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(232,232,232,0.3)] filter contrast-125 brightness-110 rounded-xl transform group-hover:scale-105 transition-transform" />
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-[#E8E8E8]">Max Pro HN</span>
        </a>
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold text-[#8B8B8B] tracking-wide">
          <a href="#features" className="hover:text-[#E8E8E8] transition hover:-translate-y-px">Ventajas</a>
          <a href="#productos" className="hover:text-[#E8E8E8] transition hover:-translate-y-px">Productos</a>
          <a href="#faq" className="hover:text-[#E8E8E8] transition hover:-translate-y-px">Preguntas Frecuentes</a>
        </div>
        <div className="flex items-center space-x-4">
          <Button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="hidden md:inline-flex !px-6 !py-2.5 !text-sm tracking-wide">
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
        <a href="#productos" onClick={() => setMenuOpen(false)} className="text-3xl font-display font-bold text-[#E8E8E8] hover:text-[#8B8B8B] transition-colors px-8 py-3">Productos</a>
        <a href="#faq" onClick={() => setMenuOpen(false)} className="text-3xl font-display font-bold text-[#E8E8E8] hover:text-[#8B8B8B] transition-colors px-8 py-3">Preguntas Frecuentes</a>
        <div className="mt-8">
          <Button onClick={() => { setMenuOpen(false); window.dispatchEvent(new CustomEvent('openContactModal')); }} className="!px-10 !py-4 !text-lg tracking-wide">
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

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-start xl:items-center xl:text-center gap-8 mt-24 md:mt-16 xl:mt-12">
        <div className="flex flex-col gap-6 w-full items-start xl:items-center">
          <h1 className="hero-text text-5xl md:text-6xl lg:text-7xl font-display font-black text-[#E8E8E8] leading-[1.05] tracking-tight text-balance max-w-4xl drop-shadow-2xl">
            ¿Querés un iPhone Pro Max <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">original</span>, en estado impecable, a un precio que <span className="italic">es accesible</span>?
          </h1>
          <p className="hero-text text-lg md:text-xl lg:text-2xl font-sans text-[#8B8B8B] max-w-2xl text-balance leading-relaxed">
            Dejá de pagar de más en tiendas. Dejá de arriesgarte con vendedores dudosos. <strong className="text-[#E8E8E8] font-bold">Existe una tercera opción y está aquí.</strong>
          </p>
        </div>
        <div className="hero-btn mt-4 xl:mt-8">
          <Button onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))} className="!px-12 !py-6 !text-lg !font-bold">
            Comprar Mi Pro Max
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProofMetrics() {
  return (
    <section id="features" className="py-24 px-6 bg-[#111212] relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-black text-[#E8E8E8] tracking-tight mb-12 text-center md:text-left">
          ¿Por qué deberías confiar en nosotros?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[28px] p-8 hover:border-[#443C3E] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 min-w-[320px]">
            <p className="font-display font-black text-[56px] text-[#E8E8E8] leading-none mb-2">50+</p>
            <h3 className="font-display font-bold text-2xl text-[#E8E8E8] mb-3">Equipos Vendidos</h3>
            <p className="font-sans text-[15px] text-[#8B8B8B] leading-relaxed">Sin problemas. Sin devoluciones. Clientes satisfechos en Tegucigalpa en nuestro corto tiempo en el mercado.</p>
          </div>
          
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[28px] p-8 hover:border-[#443C3E] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 min-w-[320px]">
            <p className="font-display font-black text-[56px] text-[#E8E8E8] leading-none mb-2">100%</p>
            <h3 className="font-display font-bold text-2xl text-[#E8E8E8] mb-3">Original Certificado</h3>
            <p className="font-sans text-[15px] text-[#8B8B8B] leading-relaxed">Cada Pro Max pasa diagnóstico técnico. Documento verifiable. Componentes de fábrica intactos.</p>
          </div>
          
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[28px] p-8 hover:border-[#443C3E] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 min-w-[320px]">
            <p className="font-display font-black text-[56px] text-[#E8E8E8] leading-none mb-2">14d</p>
            <h3 className="font-display font-bold text-2xl text-[#E8E8E8] mb-3">Garantía Sin Restricciones</h3>
            <p className="font-sans text-[15px] text-[#8B8B8B] leading-relaxed">Cambio o devolución completa. Nosotros asumimos el riesgo, no vos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VerificationChecklist() {
  const checks = [
    "Autenticidad de Componentes",
    "Prueba de Cámara & Audio",
    "Diagnóstico Técnico Completo",
    "Reporte de Batería Documentado",
    "Garantía 14 Días Incluida"
  ];

  return (
    <section className="py-24 px-6 bg-[#111212] relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-black text-[#E8E8E8] tracking-tight mb-12 text-center md:text-left">
          Cómo Verificamos Cada Equipo
        </h2>
        
        <div className="rounded-[28px] border border-[#2A2A2A] bg-[#1A1A1A] shadow-xl overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-4 bg-[#0B0B0B] p-6 font-mono font-bold text-[12px] uppercase tracking-[0.18em] text-[#8B8B8B]">
              <div className="col-span-1">Verificación</div>
              <div className="text-center">14 Pro Max</div>
              <div className="text-center">15 Pro Max</div>
              <div className="text-center">16 Pro Max</div>
            </div>
            {/* Rows */}
            {checks.map((check, i) => (
              <div key={i} className="grid grid-cols-4 p-6 border-b border-[#2A2A2A] last:border-b-0 items-center">
                <div className="col-span-1 font-sans text-lg text-[#E8E8E8] font-medium">{check}</div>
                <div className="text-center font-display font-black text-2xl text-[#4ADE80]">✓</div>
                <div className="text-center font-display font-black text-2xl text-[#4ADE80]">✓</div>
                <div className="text-center font-display font-black text-2xl text-[#4ADE80]">✓</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ModelsAvailable() {
  return (
    <section id="productos" className="py-24 px-6 bg-[#111212] relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-black text-[#E8E8E8] tracking-tight mb-12 text-center md:text-left">
          Modelos Disponibles Ahora
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 14 Pro Max */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[28px] p-8 text-center hover:border-[#443C3E] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col items-center">
            <h3 className="font-display font-black text-[36px] text-[#E8E8E8] mb-2 tracking-tight">14 Pro Max</h3>
            <p className="font-mono font-bold text-[14px] text-[#8B8B8B] tracking-[0.14em] uppercase mb-8">256GB</p>
            <div className="mt-auto flex flex-col items-center">
              <p className="font-display font-black text-[48px] text-[#E8E8E8] leading-none mb-4">L15,800</p>
              <div className="bg-[#4ADE80]/10 border border-[#4ADE80]/20 px-4 py-2 rounded-full">
                <p className="font-mono font-bold text-[13px] text-[#4ADE80] tracking-wide">Battery: 75–100%</p>
              </div>
            </div>
          </div>

          {/* 15 Pro Max */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[28px] p-8 text-center hover:border-[#443C3E] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col items-center">
            <h3 className="font-display font-black text-[36px] text-[#E8E8E8] mb-2 tracking-tight">15 Pro Max</h3>
            <p className="font-mono font-bold text-[14px] text-[#8B8B8B] tracking-[0.14em] uppercase mb-8">256GB</p>
            <div className="mt-auto flex flex-col items-center">
              <p className="font-display font-black text-[48px] text-[#E8E8E8] leading-none mb-4">L18,500</p>
              <div className="bg-[#4ADE80]/10 border border-[#4ADE80]/20 px-4 py-2 rounded-full">
                <p className="font-mono font-bold text-[13px] text-[#4ADE80] tracking-wide">Battery: 80–100%</p>
              </div>
            </div>
          </div>

          {/* 16 Pro Max */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[28px] p-8 text-center hover:border-[#443C3E] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col items-center">
            <h3 className="font-display font-black text-[36px] text-[#E8E8E8] mb-2 tracking-tight">16 Pro Max</h3>
            <p className="font-mono font-bold text-[14px] text-[#8B8B8B] tracking-[0.14em] uppercase mb-8">256GB</p>
            <div className="mt-auto flex flex-col items-center">
              <p className="font-display font-black text-[48px] text-[#E8E8E8] leading-none mb-4">L24,800</p>
              <div className="bg-[#4ADE80]/10 border border-[#4ADE80]/20 px-4 py-2 rounded-full">
                <p className="font-mono font-bold text-[13px] text-[#4ADE80] tracking-wide">Battery: 90–100%</p>
              </div>
            </div>
          </div>
        </div>
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
    {q: '1. ¿Los iPhones que venden son originales o son "reacondicionados"?', a: '<b>Son 100% originales. No son reacondicionados.</b><br/>Cada iPhone Pro Max que vendemos conserva <b>todas sus piezas de fábrica intactas.</b> No fueron abiertos, no fueron reparados, no se les cambió absolutamente nada. Cuando decimos "original" lo decimos en serio — cada tornillo, cada chip, cada componente es exactamente el que Apple colocó.<br/><br/>¿La diferencia con un "reacondicionado"? Un reacondicionado fue desarmado, reparado con piezas genéricas y rearmado para que <i>parezca</i> nuevo. <b>Los nuestros nunca fueron tocados.</b>'},
    {q: '2. Si no son nuevos de caja, ¿entonces qué son exactamente?', a: 'Son equipos en <b>condición mint</b> — estado prácticamente nuevo con leves detalles estéticos mínimos. Estamos hablando de iPhones que al verlos y usarlos <b>sentís que acabás de abrir la caja.</b> Funcionan al 100%, se ven al 100%, y rinden al 100%.<br/><br/>La única diferencia con uno "nuevo de tienda" es que ya fueron activados previamente. <b>Todo lo demás — rendimiento, apariencia, calidad — es idéntico.</b>'},
    {q: '3. ¿Qué modelos tienen disponibles?', a: 'Nos especializamos <b>exclusivamente</b> en la línea Pro Max:<br/>- 📱 <b>iPhone 14 Pro Max</b><br/>- 📱 <b>iPhone 15 Pro Max</b><br/>- 📱 <b>iPhone 16 Pro Max</b><br/><br/>No vendemos otros modelos. No vendemos otras marcas. <b>Somos especialistas en Pro Max y punto.</b> Esa obsesión por un solo producto es lo que nos permite garantizar una calidad que nadie más puede.'},
    {q: '4. ¿Qué capacidades de almacenamiento manejan?', a: 'Manejamos la capacidad más popular según disponibilidad: <b>256GB</b>.<br/>La disponibilidad varía según el lote, así que lo mejor es <b>escribirnos por WhatsApp</b> para que te digamos exactamente qué tenemos en stock en este momento.'},
    {q: '5. ¿Cómo está la batería de los equipos?', a: 'La salud de batería de nuestros iPhones va del <b>75-100%</b>, dependiendo del modelo y año. Antes de vender cualquier equipo, verificamos la batería y te informamos el porcentaje exacto.<br/><br/>¿Qué significa esto en la práctica? Que tu Pro Max <b>te va a durar todo el día sin problemas.</b> Nada de andar cargando el teléfono a cada rato como pasa con esos equipos "baratos" que venden por ahí con baterías destruidas.'},
    {q: '6. ¿Los equipos vienen con algún accesorio?', a: 'Nuestros iPhones NO vienen con <b>cargador o cable.</b> No incluimos caja original ni accesorios adicionales. ¿Por qué? Porque eso nos permite mantener los precios lo más bajos posible. Preferimos ahorrarte miles de lempiras a darte una cajita bonita que vas a guardar en un cajón.'},
    {q: '7. ¿Puedo verificar que el equipo es original antes de comprarlo?', a: '<b>¡Por supuesto!</b> Te animamos a que lo hagás. Podés revisar el estado de las piezas en los ajustes del iPhone, y confirmar que todo es 100% original de fábrica. No tenemos nada que esconder — al contrario, queremos que lo comprobes vos mismo.'},
    {q: '8. ¿Por qué sus precios son tan bajos? ¿Cuál es el truco?', a: '<b>No hay truco.</b> Hay un modelo de negocio inteligente.<br/><br/>Las tiendas tradicionales compran a intermediarios, que compraron a otros intermediarios, que compraron a distribuidores. Cada eslabón de esa cadena agrega su margen. <b>Vos terminás pagando el teléfono + la ganancia de 3 o 4 personas.</b><br/><br/>Nosotros nos saltamos todo eso. Accedemos a inventario premium directamente y trasladamos ese ahorro <b>directo a vos.</b> Es un precio accesible para el comprador individual. Así de simple.'},
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

function HoverCTA({ className = '', isOpen = null }) {
  const btnRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const btn = btnRef.current;
      const phone = btn.querySelector('.flying-phone');
      const textSpan = btn.querySelector('.cta-text');

      gsap.set(phone, { x: 300, y: 150, rotation: 120, scale: 0.2, opacity: 0 });

      const playAnim = () => {
        gsap.to(btn, { scale: 1.05, duration: 0.4, ease: 'back.out(1.5)', boxShadow: '0 0 60px rgba(232,232,232,0.3)', overwrite: 'auto' });
        gsap.to(phone, { x: 0, y: -40, rotation: -15, scale: 1.2, opacity: 0.8, duration: 0.8, ease: 'back.out(1.5)', overwrite: 'auto', force3D: true });
        gsap.to(textSpan, { color: '#ffffff', duration: 0.3, textShadow: '0 2px 10px rgba(0,0,0,0.8)', overwrite: 'auto' });
      };

      const reverseAnim = () => {
        gsap.to(btn, { scale: 1, duration: 0.4, ease: 'power2.out', boxShadow: '0 0 40px rgba(232,232,232,0.15)', overwrite: 'auto' });
        gsap.to(phone, { x: 300, y: 150, rotation: 120, scale: 0.2, opacity: 0, duration: 0.5, ease: 'power2.in', overwrite: 'auto', force3D: true });
        gsap.to(textSpan, { color: '#111212', duration: 0.3, textShadow: 'none', overwrite: 'auto' });
      };

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      if (isOpen === true) {
        timeoutRef.current = setTimeout(playAnim, 300);
      } else if (isOpen === false) {
        reverseAnim();
      }

      btn.addEventListener('mouseenter', playAnim);
      btn.addEventListener('mouseleave', reverseAnim);
    }, btnRef);
    return () => {
      ctx.revert();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, [isOpen]);

  const handleClick = (e) => {
    if (isInAppBrowser()) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'instant' });
      window.location.hash = 'whatsapp';
      window.dispatchEvent(new CustomEvent('openInAppAlertModal'));
    }
  };

  return (
    <a onClick={handleClick} ref={btnRef} href="https://wa.me/50487866985?text=Hola,%20me%20interesa%20un%20iPhone%20Pro%20Max" target="_blank" rel="noopener noreferrer" className={`relative overflow-hidden inline-flex items-center justify-center bg-[#E8E8E8] text-[#111212] px-12 md:px-16 py-6 md:py-8 text-xl md:text-2xl rounded-[2.5rem] shadow-[0_0_40px_rgba(232,232,232,0.15)] group cursor-pointer border border-[#E8E8E8] w-full max-w-lg mt-8 mb-6 ${className}`}>
      <img src={phoneImg} className="flying-phone absolute w-64 h-64 object-cover rounded-[3rem] opacity-0 pointer-events-none right-0 top-0 shadow-2xl brightness-50" style={{ willChange: "transform, opacity" }} />
      <span className="cta-text relative z-10 flex items-center justify-center text-center font-display font-black tracking-tight transition-colors duration-300">
        <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        Contactar a Ventas
      </span>
    </a>
  );
}

function InAppAlertModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openInAppAlertModal', handleOpen);
    return () => window.removeEventListener('openInAppAlertModal', handleOpen);
  }, []);

  useLayoutEffect(() => {
    if (contentRef.current) {
      gsap.set(contentRef.current, { y: 50, scale: 0.95, opacity: 0 });
    }
  }, []);

  useEffect(() => {
    if (!modalRef.current || !contentRef.current) return;
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(modalRef.current, { opacity: 1, pointerEvents: 'auto', duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(contentRef.current, { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.2)', delay: 0.1, overwrite: 'auto' });
    } else {
      document.body.style.overflow = 'unset';
      gsap.to(modalRef.current, { opacity: 0, pointerEvents: 'none', duration: 0.3, overwrite: 'auto' });
      gsap.to(contentRef.current, { y: 20, scale: 0.95, opacity: 0, duration: 0.3, overwrite: 'auto' });
    }
  }, [isOpen]);

  return (
    <div ref={modalRef} className="fixed inset-0 z-[2000] flex items-center justify-center p-4 opacity-0 pointer-events-none">
      <div className="absolute inset-0 bg-[#111212]/90 backdrop-blur-xl" onClick={() => setIsOpen(false)}></div>
      <div ref={contentRef} className="relative bg-[#1A1A1A] border border-green-500/40 p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] w-full max-w-lg flex flex-col items-center text-center z-10 overflow-hidden">
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-[#8B8B8B] hover:text-[#E8E8E8] transition-colors p-2 bg-[#111212] rounded-full border border-[#2A2A2A]">
          <X className="w-6 h-6" />
        </button>
        
        <svg className="w-16 h-16 text-green-500 mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        <h3 className="text-3xl md:text-4xl font-display font-black text-[#E8E8E8] tracking-tight mb-4 leading-tight">Enlace de WhatsApp</h3>
        <p className="text-[#8B8B8B] font-sans text-lg mb-8 leading-relaxed text-balance">
          ¡Estás a un solo paso! Para ir a nuestro chat y ver el catálogo cómodamente, por favor completá estos rápidos pasos:
        </p>
        
        <div className="w-full bg-[#111212] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col gap-4">
           <div className="flex justify-between items-center text-sm font-mono text-[#8B8B8B]">
             <span>Paso 1:</span>
             <span className="text-[#E8E8E8] text-right">Tocá los tres puntos (•••)<br/>arriba a la derecha</span>
           </div>
           <div className="h-px w-full bg-[#2A2A2A]"></div>
           <div className="flex justify-between items-center text-sm font-mono text-[#8B8B8B]">
             <span>Paso 2:</span>
             <span className="text-[#E8E8E8] font-bold text-right">Tocá "Abrir en<br/>el navegador"</span>
           </div>
        </div>
        
        <button onClick={() => setIsOpen(false)} className="mt-8 font-sans font-bold text-sm uppercase tracking-widest text-[#8B8B8B] hover:text-[#E8E8E8] transition-colors pb-1 border-b border-transparent hover:border-[#E8E8E8]">Entendido</button>
      </div>
    </div>
  );
}

function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openContactModal', handleOpen);
    return () => window.removeEventListener('openContactModal', handleOpen);
  }, []);

  useLayoutEffect(() => {
    if (contentRef.current) {
      gsap.set(contentRef.current, { y: 50, scale: 0.95, opacity: 0 });
    }
  }, []);

  useEffect(() => {
    if (!modalRef.current || !contentRef.current) return;
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(modalRef.current, { opacity: 1, pointerEvents: 'auto', duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(contentRef.current, { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.2)', delay: 0.1, overwrite: 'auto' });
    } else {
      document.body.style.overflow = 'unset';
      gsap.to(modalRef.current, { opacity: 0, pointerEvents: 'none', duration: 0.3, overwrite: 'auto' });
      gsap.to(contentRef.current, { y: 20, scale: 0.95, opacity: 0, duration: 0.3, overwrite: 'auto' });
    }
  }, [isOpen]);

  return (
    <div ref={modalRef} className="fixed inset-0 z-[1000] flex items-center justify-center p-4 opacity-0 pointer-events-none">
      <div className="absolute inset-0 bg-[#111212]/80 backdrop-blur-xl" onClick={() => setIsOpen(false)}></div>
      <div ref={contentRef} className="contact-modal-content relative bg-[#1A1A1A] border border-[#443C3E]/60 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] w-full max-w-2xl flex flex-col items-center text-center z-10 overflow-hidden">
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-[#8B8B8B] hover:text-[#E8E8E8] transition-colors p-2 bg-[#111212] rounded-full border border-[#2A2A2A]">
          <X className="w-6 h-6" />
        </button>
        
        <h3 className="text-3xl md:text-5xl font-display font-black text-[#E8E8E8] tracking-tight mb-4">Conectemos</h3>
        <p className="text-[#8B8B8B] font-sans text-lg mb-8 text-balance">Contactanos por WhatsApp o visita nuestras redes para ver catálogos y más detalles exclusivos.</p>
        
        <HoverCTA isOpen={isOpen} className="!w-full !max-w-none !mt-0 !mb-8" />
        
        <p className="text-[#8B8B8B] font-sans text-sm mb-4 font-mono uppercase tracking-widest">Nuestras Redes</p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="https://www.instagram.com/maxprohn/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] border border-[#443C3E] bg-[#111212] shadow-xl flex items-center justify-center text-[#E8E8E8] hover:bg-[#E8E8E8] hover:text-[#111212] transition-colors group cursor-pointer">
            <Instagram className="w-6 h-6 md:w-7 md:h-7 transform group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61571001415237" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] border border-[#443C3E] bg-[#111212] shadow-xl flex items-center justify-center text-[#E8E8E8] hover:bg-[#E8E8E8] hover:text-[#111212] transition-colors group cursor-pointer">
            <Facebook className="w-6 h-6 md:w-7 md:h-7 transform group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.tiktok.com/@maxprohn" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] border border-[#443C3E] bg-[#111212] shadow-xl flex items-center justify-center text-[#E8E8E8] hover:bg-[#E8E8E8] hover:text-[#111212] transition-colors group cursor-pointer">
            <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function NewCTA() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 bg-[#1A1A1A] rounded-t-[3rem] md:rounded-t-[5rem] border-t border-[#443C3E]/60 relative z-40 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#8B8B8B]/40 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter text-[#E8E8E8] mb-8 leading-[1.05]">
          Escribinos Hoy.
        </h2>
        <p className="text-[#8B8B8B] font-sans text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
          Decinos qué modelo querés. Te enviamos foto real, especificaciones exactas, y precio firme.
        </p>
        
        <HoverCTA />

        <p className="text-[#8B8B8B] font-sans text-lg mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
          O buscanos en nuestras redes sociales. Respondemos rápido. Atención personalizada. Sin bots, sin esperas eternas.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
          <a href="https://www.instagram.com/maxprohn/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-[1.5rem] border border-[#443C3E] bg-[#111212] shadow-xl flex items-center justify-center text-[#E8E8E8] hover:bg-[#E8E8E8] hover:text-[#111212] transition-colors group cursor-pointer">
            <Instagram className="w-7 h-7 transform group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61571001415237" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-[1.5rem] border border-[#443C3E] bg-[#111212] shadow-xl flex items-center justify-center text-[#E8E8E8] hover:bg-[#E8E8E8] hover:text-[#111212] transition-colors group cursor-pointer">
            <Facebook className="w-7 h-7 transform group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.tiktok.com/@maxprohn" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-[1.5rem] border border-[#443C3E] bg-[#111212] shadow-xl flex items-center justify-center text-[#E8E8E8] hover:bg-[#E8E8E8] hover:text-[#111212] transition-colors group cursor-pointer">
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
  const isTikTok = isTikTokBrowser();
  const [isRedirectingToWhatsApp, setIsRedirectingToWhatsApp] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#whatsapp') {
      window.history.replaceState(null, '', window.location.pathname);
      if (!isInAppBrowser()) {
        setIsRedirectingToWhatsApp(true);
        window.location.href = "https://wa.me/50487866985?text=Hola,%20me%20interesa%20un%20iPhone%20Pro%20Max";
      }
    }
  }, []);

  if (isTikTok) {
    return <TikTokBlockerModal />;
  }

  if (isRedirectingToWhatsApp) {
    return <WhatsAppRedirectOverlay />;
  }

  return (
    <div className="bg-[#111212] min-h-screen font-sans selection:bg-[#E8E8E8] selection:text-[#111212] relative">
      <TopBanner />
      <GlobalStars />
      <InAppAlertModal />
      <ContactModal />
            <Navbar />
      <Hero />
      <ProofMetrics />
      <VerificationChecklist />
      <ModelsAvailable />
      <NewCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
