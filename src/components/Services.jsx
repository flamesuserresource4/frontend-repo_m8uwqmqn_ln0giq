import React from 'react';
import { Headphones, Code2, Users, Globe } from 'lucide-react';

const services = [
  {
    icon: Headphones,
    title: 'Suporte 24/7',
    desc: 'Monitoramento, atendimento e resposta imediata com SRE e automações inteligentes.',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Code2,
    title: 'Desenvolvimento de Sistemas e Apps',
    desc: 'Aplicações web e mobile com arquitetura escalável e recursos de IA.',
    gradient: 'from-purple-500 to-fuchsia-500',
  },
  {
    icon: Users,
    title: 'Outsourcing de TI',
    desc: 'Alocação de especialistas, squads ágeis e gestão por performance.',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Globe,
    title: 'Criação de Sites Rápidos',
    desc: 'Landing pages e e-commerces com SEO, alta performance e design futurista.',
    gradient: 'from-blue-500 to-cyan-400',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Serviços</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Tecnologia com DNA de IA para impulsionar sua operação com segurança e eficiência.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, gradient }, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.25)]"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-black shadow-xl`}> 
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
