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
      {/* Background Texture/Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.15),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck size={14} />
              <span>Estrategia Financiera Premium</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Deja de ser <span className="text-brand-gold">invisible</span> para los bancos.
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Construye un perfil financiero de alto nivel. No somos reparación de crédito común; somos arquitectos de tu <span className="text-white font-semibold italic">Bank-Readiness</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-brand-gold/20 active:scale-95 flex items-center justify-center gap-2"
              >
                Quiero mi Auditoría de Crédito Ahora
              </button>
              <button 
                onClick={() => scrollToSection('metodologia')}
                className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-5 rounded-xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Ver Metodología
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/50">
                <Landmark size={20} className="text-brand-gold" />
                <span className="text-sm font-medium">Bank-Ready Certified</span>
              </div>
              <div className="flex items-center gap-2 text-white/50">
                <TrendingUp size={20} className="text-brand-gold" />
                <span className="text-sm font-medium">FCRA Compliant</span>
              </div>
            </div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video bg-brand-royal rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer relative">
              <img 
                src="https://picsum.photos/seed/finance/1280/720" 
                alt="Emmanuel - CEO EAI Group" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="text-brand-navy fill-brand-navy ml-1" size={32} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-navy to-transparent">
                <p className="text-white font-bold text-lg">Mensaje del CEO: Emmanuel</p>
                <p className="text-white/60 text-sm">Tu futuro financiero comienza aquí</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-gold/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-brand-green/10 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
