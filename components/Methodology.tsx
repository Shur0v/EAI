'use client';

import { motion } from 'motion/react';
import { Check, X, Shield, Scale, Database, Gavel } from 'lucide-react';

export default function Methodology() {
  const comparison = [
    {
      feature: "Cumplimiento Legal",
      common: "Basado en disputas genéricas",
      eai: "FCRA & Metro 2 Standards",
      isPositive: true
    },
    {
      feature: "Enfoque Estratégico",
      common: "Solo borra cuentas",
      eai: "Auditoría de Integridad de Datos",
      isPositive: true
    },
    {
      feature: "Relación Bancaria",
      common: "Ignorada por completo",
      eai: "Estrategia de Bank-Readiness",
      isPositive: true
    },
    {
      feature: "Resultados",
      common: "Temporales y volátiles",
      eai: "Perfil sólido y escalable",
      isPositive: true
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6">
            Auditoría de Datos vs. Reparación de Crédito Común
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            No somos una agencia de reparación de crédito. Somos una consultoría de estrategia financiera que audita tus datos bajo los estándares más altos de la industria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col"
          >
            <div className="grid grid-cols-3 bg-brand-navy p-6 text-white font-bold text-sm uppercase tracking-widest">
              <div>Característica</div>
              <div className="text-center text-white/50">Reparación Común</div>
              <div className="text-center text-brand-gold">EAI Group</div>
            </div>
            
            <div className="divide-y divide-slate-100 flex-grow">
              {comparison.map((item, index) => (
                <div key={index} className="grid grid-cols-3 p-6 items-center hover:bg-slate-50 transition-colors h-1/4">
                  <div className="font-bold text-brand-navy text-sm md:text-base">{item.feature}</div>
                  <div className="text-center text-slate-400 text-xs md:text-sm flex flex-col items-center gap-2">
                    <X size={16} className="text-red-400" />
                    {item.common}
                  </div>
                  <div className="text-center text-brand-navy font-bold text-xs md:text-sm flex flex-col items-center gap-2">
                    <Check size={16} className="text-brand-green" />
                    {item.eai}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-8 bg-brand-navy/5 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="text-brand-navy w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-brand-navy">Garantía de Cumplimiento</p>
                  <p className="text-sm text-slate-500">Auditamos bajo FCRA para asegurar tu éxito.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Methodology Details */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all group flex-grow flex flex-col justify-center"
            >
              <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scale className="text-brand-gold w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">FCRA Compliance</h3>
              <p className="text-slate-600 leading-relaxed">
                Utilizamos el Fair Credit Reporting Act (FCRA) para auditar la precisión de cada dato en tu reporte. Si no es 100% preciso, no tiene derecho a estar ahí.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all group flex-grow flex flex-col justify-center"
            >
              <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="text-brand-gold w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">Metro 2 Standards</h3>
              <p className="text-slate-600 leading-relaxed">
                Auditamos bajo el lenguaje nativo de los bancos: Metro 2. Esto nos permite hablar el mismo idioma que los algoritmos de aprobación.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all group flex-grow flex flex-col justify-center"
            >
              <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gavel className="text-brand-gold w-7 h-7" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">Posicionamiento Legal</h3>
              <p className="text-slate-600 leading-relaxed">
                No enviamos cartas genéricas. Construimos casos legales sólidos que obligan a los burós a cumplir con la ley federal.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
