import React, { useState, useEffect } from 'react';
import { CHECKOUT_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - Substituir com <img src={LOGO_URL} /> quando tiver o arquivo real */}
          <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-full flex items-center justify-center font-bold text-black border-2 border-white/20">
            KC
          </div>
          <span className="text-xl md:text-2xl font-display font-bold tracking-tighter text-white">
            KETO <span className="text-amber-500">CARNIVORA</span>
          </span>
        </div>
        
        <a 
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-block px-6 py-2 rounded-full font-bold text-sm transition-all ${scrolled ? 'bg-amber-500 text-black hover:bg-amber-400' : 'bg-white/10 text-white hover:bg-white/20'}`}
        >
          COMPRAR AGORA
        </a>
      </div>
    </nav>
  );
};