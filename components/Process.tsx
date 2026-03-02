'use client';

import { motion } from 'motion/react';
import { Search, FileText, Zap, BarChart3 } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Auditoría Profunda",
      description: "Analizamos tu reporte de crédito bajo la lupa de la ley FCRA para identificar cada inconsistencia que te está bloqueando.",
      icon: <Search className="w-6 h-6" />,
      image: "https://picsum.photos/seed/audit/600/400"
    },
    {
      number: "02",
      title: "Diseño de Estrategia",
      description: "Creamos un plan de acción personalizado basado en tus metas: ¿Casa, Negocio o Inversión? Hablamos el idioma de los bancos.",
      icon: <FileText className="w-6 h-6" />,
      image: "https://picsum.photos/seed/strategy/600/400"
    },
    {
      number: "03",
      title: "Ejecución Metro 2",
      description: "Implementamos disputas legales de alto nivel utilizando estándares Metro 2 para asegurar que tu perfil sea impecable.",
      icon: <Zap className="w-6 h-6" />,
      image: "https://picsum.photos/seed/execution/600/400"
    },
    {
      number: "04",
      title: "Resultados & Capital",
      description: "Con un perfil sólido y Bank-Ready, te acompañamos en el proceso de obtención de capital con las mejores tasas.",
      icon: <BarChart3 className="w-6 h-6" />,
      image: "https://picsum.photos/seed/results/600/400"
    }
  ];

  return (
    <section id="proceso" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6">
            Tu camino hacia el <span className="text-brand-gold">SÍ bancario</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Un proceso estructurado, legal y transparente diseñado para llevarte de la invisibilidad al poder financiero.
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-display font-black text-brand-gold/20 leading-none">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center shadow-lg">
                    <div className="text-brand-gold">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-display font-bold text-brand-navy">
                  {step.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-4">
                  <div className="h-1 w-20 bg-brand-gold rounded-full"></div>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 relative">
                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 relative group">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute -z-10 w-64 h-64 bg-brand-gold/10 blur-3xl rounded-full ${index % 2 === 1 ? '-top-10 -right-10' : '-bottom-10 -left-10'}`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
