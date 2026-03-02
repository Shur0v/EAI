'use client';

import { motion } from 'motion/react';
import { Play, ShieldCheck, TrendingUp, Landmark } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-brand-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://thumbs.dreamstime.com/b/concept-fcra-fair-credit-reporting-act-write-book-isolated-wooden-table-costumer-437978165.jpg" 
          alt="FCRA Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy"></div>
      </div>

      {/* Background Texture/Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-1">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck size={14} />
              <span>Estrategia Financiera Premium</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Deja de ser <span className="text-brand-gold">invisible</span> para los bancos.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Construye un perfil financiero de alto nivel. No somos reparación de crédito común; somos arquitectos de tu <span className="text-white font-semibold italic">Bank-Readiness</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-2xl hover:shadow-brand-gold/40 active:scale-95 flex items-center justify-center gap-2"
              >
                Quiero mi Auditoría de Crédito Ahora
              </button>
              <button 
                onClick={() => scrollToSection('metodologia')}
                className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-10 py-5 rounded-xl font-bold text-xl transition-all active:scale-95 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Ver Metodología
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-12 pt-10 border-t border-white/10">
              <div className="flex items-center gap-3 text-white/60">
                <Landmark size={24} className="text-brand-gold" />
                <span className="text-base font-bold uppercase tracking-widest">Bank-Ready Certified</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <TrendingUp size={24} className="text-brand-gold" />
                <span className="text-base font-bold uppercase tracking-widest">FCRA Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
