'use client';

import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, XCircle, TrendingDown, Landmark } from 'lucide-react';

export default function Problem() {
  const painPoints = [
    "Tu score de 700 no es suficiente para que te digan que SÍ.",
    "Los bancos ven tu perfil, no solo tu número.",
    "Errores en tus datos están bloqueando tu capital.",
    "La reparación de crédito tradicional no soluciona el fondo.",
    "Te sientes invisible para el sistema bancario de EE.UU."
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6">
              ¿Tu score de 700 no es suficiente para que te digan que SÍ?
            </h2>
            <div className="w-20 h-1.5 bg-brand-gold mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-600 leading-relaxed">
              Muchos creen que el número es todo. Pero en el mundo de las finanzas de alto nivel, los bancos buscan <span className="text-brand-navy font-bold italic">Data Integrity</span> y <span className="text-brand-navy font-bold italic">Bank-Readiness</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Pain Points List */}
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-gold/30 transition-colors group"
                >
                  <div className="mt-1 p-1 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                    <AlertCircle className="text-brand-gold w-5 h-5" />
                  </div>
                  <p className="text-lg font-medium text-slate-700">{point}</p>
                </motion.div>
              ))}
            </div>

            {/* Right: Visual Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-brand-navy rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-green/10 blur-3xl rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                        <Landmark className="text-brand-gold w-6 h-6" />
                      </div>
                      <span className="text-white font-bold uppercase tracking-widest text-xs">Análisis Bancario</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-widest">
                      Estatus: Denegado
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/60 text-xs">Credit Score</span>
                        <span className="text-brand-gold font-bold">712</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[71%] h-full bg-brand-gold"></div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/60 text-xs">Data Integrity</span>
                        <span className="text-red-400 font-bold">Failed</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[30%] h-full bg-red-400"></div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <p className="text-white/80 text-sm italic mb-4">&quot;El score es solo el 35% de la historia. El resto está en la integridad de tus datos.&quot;</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center">
                          <CheckCircle2 className="text-brand-navy w-5 h-5" />
                        </div>
                        <span className="text-white font-bold text-sm">Solución: Auditoría FCRA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
