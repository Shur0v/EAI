'use client';

import { motion } from 'motion/react';
import { Quote, Star, ShieldCheck, Award } from 'lucide-react';

export default function Authority() {
  return (
    <section id="autoridad" className="py-24 bg-brand-navy overflow-hidden relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-brand-royal rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative group">
              <img 
                src="https://picsum.photos/seed/ceo/800/1000" 
                alt="Emmanuel - Fundador de EAI Group" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center shadow-lg">
                    <Award className="text-brand-navy w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Emmanuel</p>
                    <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">Estratega Financiero & Fundador</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green/10 blur-3xl rounded-full"></div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-widest mb-8">
              <Star size={14} />
              <span>Nuestra Historia</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              De la cabina de un camión a <span className="text-brand-gold">estratega financiero</span>.
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed mb-10">
              <p>
                Emmanuel no nació en el mundo de las finanzas. Su camino comenzó en las carreteras, manejando camiones y enfrentando las mismas barreras financieras que tú.
              </p>
              <p>
                Frustrado por un sistema que parecía diseñado para mantenerlo invisible, decidió estudiar las leyes federales (FCRA) y los algoritmos bancarios (Metro 2) para hackear su propio destino.
              </p>
              <p>
                Hoy, EAI Group es el resultado de esa transformación. No solo ayudamos a personas; empoderamos a la comunidad latina para que tome el lugar que le corresponde en el sistema financiero de EE.UU.
              </p>
            </div>

            <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 mb-12">
              <Quote className="absolute -top-4 -left-4 text-brand-gold w-10 h-10 opacity-50" />
              <p className="text-xl text-white font-medium italic leading-relaxed">
                &quot;Mi misión es que ningún latino con visión se quede sin capital por culpa de un reporte de crédito mal auditado.&quot;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-0.5 bg-brand-gold"></div>
                <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Firma: Emmanuel</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-gold w-6 h-6" />
                <span className="text-white font-bold text-sm uppercase tracking-widest">FCRA Expert</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-gold w-6 h-6" />
                <span className="text-white font-bold text-sm uppercase tracking-widest">Metro 2 Specialist</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
