'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "¿Qué es la auditoría FCRA y por qué es diferente?",
      answer: "A diferencia de la reparación de crédito común que envía cartas genéricas, la auditoría FCRA utiliza la Ley Federal de Reporte Justo de Crédito para exigir a los burós que demuestren la precisión del 100% de cada dato. Si no pueden probarlo, la ley exige su eliminación inmediata."
    },
    {
      question: "¿Cuánto tiempo toma ver resultados reales?",
      answer: "Cada perfil es único, pero la mayoría de nuestros clientes comienzan a ver cambios significativos en su integridad de datos entre los primeros 45 a 90 días. Nuestro enfoque no es solo borrar cuentas, sino construir un perfil sólido para el largo plazo."
    },
    {
      question: "¿Qué significa ser 'Bank-Ready'?",
      answer: "Ser Bank-Ready significa que tu perfil financiero cumple con los algoritmos y requisitos específicos que los bancos utilizan para aprobar capital. No se trata solo de tener un score alto, sino de tener datos estructurados que generen confianza en el sistema bancario."
    },
    {
      question: "¿Pueden ayudarme si mi score es muy bajo?",
      answer: "Absolutamente. De hecho, los perfiles con scores bajos suelen tener la mayor cantidad de errores e inconsistencias que pueden ser auditadas legalmente. Nuestro trabajo es limpiar el camino para que tu score refleje tu verdadero potencial financiero."
    },
    {
      question: "¿Trabajan con crédito comercial para negocios?",
      answer: "Sí, somos especialistas en ayudar a dueños de negocios a separar su crédito personal del comercial y a construir un perfil de negocio que sea atractivo para préstamos y líneas de crédito de alto nivel."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-widest mb-6">
              <HelpCircle size={14} />
              <span>Preguntas Frecuentes</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6">
              Resolviendo tus dudas estratégicas
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              La transparencia es la base de nuestra autoridad. Aquí respondemos lo que necesitas saber antes de comenzar.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-bold text-brand-navy leading-tight">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center transition-transform duration-300 ${activeIndex === index ? 'rotate-180 bg-brand-gold/20' : ''}`}>
                    <ChevronDown size={20} className={activeIndex === index ? 'text-brand-navy' : 'text-slate-400'} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-3xl bg-brand-navy text-white text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold mb-4">¿Tienes una pregunta diferente?</h3>
              <p className="text-white/70 mb-8">Nuestro equipo de estrategas está listo para asesorarte personalmente.</p>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-gold text-brand-navy px-8 py-4 rounded-xl font-bold hover:bg-brand-gold-light transition-all shadow-xl active:scale-95"
              >
                Hablar con un Estratega
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
