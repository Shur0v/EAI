'use client';

import { motion } from 'motion/react';
import { Users, TrendingUp, ShieldCheck, Landmark } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      value: "500+",
      label: "Familias Impactadas",
      icon: <Users className="w-6 h-6" />,
      description: "Ayudando a la comunidad latina a crecer."
    },
    {
      value: "$10M+",
      label: "Capital Obtenido",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Financiamiento real para metas reales."
    },
    {
      value: "98%",
      label: "Casos de Éxito",
      icon: <ShieldCheck className="w-6 h-6" />,
      description: "Auditados bajo estándares FCRA."
    },
    {
      value: "100%",
      label: "Bank-Ready",
      icon: <Landmark className="w-6 h-6" />,
      description: "Perfiles optimizados para aprobación."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-brand-navy group transition-all duration-500 shadow-sm hover:shadow-2xl text-center"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-500">
                <div className="text-brand-navy">
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-4xl font-display font-black text-brand-navy group-hover:text-white mb-2 transition-colors">
                {stat.value}
              </div>
              
              <div className="text-lg font-bold text-brand-gold mb-4 uppercase tracking-widest text-xs">
                {stat.label}
              </div>
              
              <p className="text-slate-500 group-hover:text-white/60 text-sm transition-colors">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
