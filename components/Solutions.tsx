'use client';

import { motion } from 'motion/react';
import { Briefcase, Home, Car, TrendingUp, ArrowRight } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: "Emprendedores & Dueños de Negocio",
      description: "Construye el crédito de tu empresa sin arriesgar tu patrimonio personal. Bank-Ready para capital real.",
      icon: <Briefcase className="w-8 h-8" />,
      tag: "Business"
    },
    {
      title: "Futuros Propietarios",
      description: "No solo califiques para una hipoteca; califica para la mejor tasa del mercado. Ahorra miles en intereses.",
      icon: <Home className="w-8 h-8" />,
      tag: "Mortgage"
    },
    {
      title: "Inversionistas de Bienes Raíces",
      description: "Escala tu portafolio con apalancamiento estratégico. Auditoría de datos para financiamiento continuo.",
      icon: <TrendingUp className="w-8 h-8" />,
      tag: "Investment"
    },
    {
      title: "Financiamiento de Vehículos",
      description: "Deja de pagar tasas de interés abusivas. Auditoría previa para asegurar tu aprobación en minutos.",
      icon: <Car className="w-8 h-8" />,
      tag: "Auto"
    }
  ];

  return (
    <section id="soluciones" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-widest mb-6">
            <span>Servicios Estratégicos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6">
            Estrategias diseñadas para tu meta real
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Cada perfil es único. Auditamos tus datos basándonos en tu objetivo financiero específico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-brand-navy hover:border-brand-navy transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-md group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-500">
                <div className="text-brand-navy group-hover:text-brand-navy">
                  {solution.icon}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold group-hover:text-brand-gold-light">
                  {solution.tag}
                </span>
              </div>
              
              <h3 className="text-xl font-display font-bold text-brand-navy group-hover:text-white mb-4 transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-slate-600 group-hover:text-white/70 mb-8 flex-grow transition-colors">
                {solution.description}
              </p>
              
              <button className="flex items-center gap-2 text-brand-navy font-bold group-hover:text-brand-gold transition-colors">
                <span>Saber más</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
