'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center shadow-lg">
              <ShieldCheck className="text-brand-navy w-6 h-6" />
            </div>
            <span className={`text-xl font-display font-bold tracking-tight ${isScrolled || isMenuOpen ? 'text-white' : 'text-white'}`}>
              EAI GROUP
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('metodologia')} className="text-white/80 hover:text-brand-gold transition-colors text-sm font-medium">Metodología</button>
            <button onClick={() => scrollToSection('proceso')} className="text-white/80 hover:text-brand-gold transition-colors text-sm font-medium">Proceso</button>
            <button onClick={() => scrollToSection('soluciones')} className="text-white/80 hover:text-brand-gold transition-colors text-sm font-medium">Soluciones</button>
            <button onClick={() => scrollToSection('testimonios')} className="text-white/80 hover:text-brand-gold transition-colors text-sm font-medium">Testimonios</button>
            <button onClick={() => scrollToSection('autoridad')} className="text-white/80 hover:text-brand-gold transition-colors text-sm font-medium">Nosotros</button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-xl active:scale-95"
            >
              Auditoría Gratis
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-brand-navy border-t border-white/10 p-6 md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                <button onClick={() => scrollToSection('metodologia')} className="text-white text-lg font-medium text-left">Metodología</button>
                <button onClick={() => scrollToSection('proceso')} className="text-white text-lg font-medium text-left">Proceso</button>
                <button onClick={() => scrollToSection('soluciones')} className="text-white text-lg font-medium text-left">Soluciones</button>
                <button onClick={() => scrollToSection('testimonios')} className="text-white text-lg font-medium text-left">Testimonios</button>
                <button onClick={() => scrollToSection('autoridad')} className="text-white text-lg font-medium text-left">Nosotros</button>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="bg-brand-gold text-brand-navy px-6 py-4 rounded-xl font-bold text-center text-lg"
                >
                  Quiero mi Auditoría Ahora
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden bg-brand-navy/80 backdrop-blur-md sticky-cta-shadow border-t border-white/10"
          >
            <button 
              onClick={() => scrollToSection('contacto')}
              className="w-full bg-brand-gold text-brand-navy py-4 rounded-xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Quiero mi Auditoría Ahora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
