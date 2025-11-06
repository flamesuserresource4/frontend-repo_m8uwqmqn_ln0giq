import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
];

const testimonials = [
  {
    name: 'Fernanda Souza',
    role: 'CTO, Orion Labs',
    quote: 'A Sinai trouxe previsibilidade e automações inteligentes que reduziram nossos incidentes em 47%.',
  },
  {
    name: 'Lucas Almeida',
    role: 'Head de Produto, Vortex',
    quote: 'Entrega rápida e com qualidade. O time é muito parceiro e domina IA aplicada ao negócio.',
  },
  {
    name: 'Marina Costa',
    role: 'CEO, Nexa Retail',
    quote: 'A migração para cloud foi tranquila e segura. Suporte 24/7 realmente presente.',
  },
];

const AboutClients = () => {
  return (
    <section id="sobre" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Sobre */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Sobre a Sinai Informática</h2>
            <p className="mt-4 text-white/80">
              Nossa missão é elevar a maturidade tecnológica das empresas com inovação, segurança e personalização. 
              Visão de futuro com IA prática, aplicada ao que gera resultado: automação, dados e experiência.
            </p>
            <ul className="mt-6 space-y-3 text-white/75">
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-cyan-400"/> Inovação contínua com IA</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-purple-500"/> Segurança e confiabilidade</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-400"/> Soluções sob medida</li>
            </ul>
          </div>

          {/* Clientes */}
          <div id="clientes">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-widest text-white/60">Clientes & Parceiros</p>
              {/* Logo carousel */}
              <div className="mt-4 overflow-hidden">
                <motion.div
                  className="flex gap-10"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  {[...logos, ...logos].map((src, i) => (
                    <img key={i} src={src} alt="logo" className="h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" />
                  ))}
                </motion.div>
              </div>

              {/* Testimonials */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {testimonials.map((t, i) => (
                  <div key={i} className="rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-4 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <div className="flex items-center gap-1 text-amber-300">
                      {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
                    </div>
                    <p className="mt-3 text-sm text-white/80">“{t.quote}”</p>
                    <p className="mt-2 text-xs text-white/60">{t.name} • {t.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClients;
