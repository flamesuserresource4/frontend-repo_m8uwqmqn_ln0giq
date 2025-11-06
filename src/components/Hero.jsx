import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  const handleWhatsApp = () => {
    const phone = '5551999999999'; // Example number; replace with the company's WhatsApp later if needed
    const text = encodeURIComponent('Olá, equipe Sinai Informática! Gostaria de saber mais sobre soluções com IA.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Header - glassmorphism */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-purple-500 to-emerald-400 animate-pulse" />
              <span className="text-lg font-semibold tracking-tight">Sinai Informática</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#sobre" className="hover:text-white transition">Sobre</a>
              <a href="#servicos" className="hover:text-white transition">Serviços</a>
              <a href="#clientes" className="hover:text-white transition">Clientes</a>
              <a href="#blog" className="hover:text-white transition">Blog</a>
              <a href="#contato" className="hover:text-white transition">Contato</a>
            </nav>
            <button onClick={handleWhatsApp} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-cyan-500/20 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400/60">
              <Rocket size={16} /> Fale no WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-6 pt-24">
        <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Gestão em Tecnologia com Inteligência Artificial
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80">
          Inovação, segurança e personalização para acelerar seus resultados com soluções de TI e IA sob medida.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <button onClick={handleWhatsApp} className="rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 px-6 py-3 text-black font-semibold shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:scale-[1.02] active:scale-[0.98] transition">
            Fale Conosco no WhatsApp
          </button>
          <a href="#servicos" className="rounded-full border border-white/20 px-6 py-3 text-white/90 hover:bg-white/10 transition">
            Conheça os Serviços
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
