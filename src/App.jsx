import React from 'react';
import Hero from './components/Hero';
import AboutClients from './components/AboutClients';
import Services from './components/Services';
import BlogContact from './components/BlogContact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <AboutClients />
      <Services />
      <BlogContact />
      <footer className="bg-black border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60">© {new Date().getFullYear()} Sinai Informática. Todos os direitos reservados.</p>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">LGPD</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default App;
