import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const BlogCard = ({ tag, title, excerpt }) => (
  <article className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl transition hover:-translate-y-1">
    <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">{tag}</span>
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-white/70">{excerpt}</p>
    <button className="mt-4 text-sm text-cyan-300 group-hover:text-cyan-200">Ler artigo →</button>
  </article>
);

const BlogContact = () => {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleWhatsApp = (e) => {
    e.preventDefault();
    const phone = '5551999999999';
    const text = encodeURIComponent(`Olá, meu nome é ${form.nome}. ${form.mensagem} (email: ${form.email})`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="blog" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Blog */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Blog</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Insights técnicos em IA aplicada, cloud, automação e segurança.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BlogCard tag="IA" title="Agentes autônomos na operação de TI" excerpt="Como agentes coordenam rotinas de suporte e reduzem incidentes." />
          <BlogCard tag="Cloud" title="FinOps com observabilidade" excerpt="Controle de custos com telemetria inteligente e previsões." />
          <BlogCard tag="Segurança" title="Zero Trust na prática" excerpt="Estratégias para ambientes híbridos com compliance contínuo." />
        </div>

        {/* Contato */}
        <div id="contato" className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold">Fale com a Sinai</h3>
            <p className="mt-3 text-white/70">Porto Alegre • RS • Brasil</p>
            <div className="mt-6 space-y-3 text-white/80">
              <p className="flex items-center gap-2"><MapPin size={18} /> Av. Exemplo, 123 - Porto Alegre/RS</p>
              <p className="flex items-center gap-2"><Mail size={18} /> contato@sinaiinformatica.com.br</p>
              <p className="flex items-center gap-2"><Phone size={18} /> (51) 99999-9999</p>
            </div>
          </div>
          <form onSubmit={handleWhatsApp} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Nome</label>
                <input name="nome" required value={form.nome} onChange={handleChange} className="mt-1 w-full rounded-xl bg-black/40 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" />
              </div>
              <div>
                <label className="text-sm text-white/70">E-mail</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange} className="mt-1 w-full rounded-xl bg-black/40 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Mensagem</label>
              <textarea name="mensagem" required rows={4} value={form.mensagem} onChange={handleChange} className="mt-1 w-full rounded-xl bg-black/40 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 px-6 py-3 text-black font-semibold shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:scale-[1.02] active:scale-[0.98] transition">
              <Send size={18} /> Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogContact;
