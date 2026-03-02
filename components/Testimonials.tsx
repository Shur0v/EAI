'use client';

import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos M.",
      role: "Dueño de Negocio",
      text: "Después de años de intentar con agencias de reparación de crédito que solo me hacían perder el tiempo, EAI Group me llevó a ser Bank-Ready. Hoy tengo mi primera línea de crédito comercial de $50k.",
      image: "https://picsum.photos/seed/user1/200/200",
      rating: 5
    },
    {
      name: "Elena R.",
      role: "Inversionista de Bienes Raíces",
      text: "La auditoría FCRA de Emmanuel fue la clave. No solo borraron errores, sino que me enseñaron a estructurar mis datos para que el banco me viera como una inversión segura. ¡Tercera propiedad financiada!",
      image: "https://picsum.photos/seed/user2/200/200",
      rating: 5
    },
    {
      name: "Juan P.",
      role: "Emprendedor",
      text: "Increíble el nivel de profesionalismo. No es solo crédito, es estrategia financiera real. Me ayudaron a entender cómo funciona el sistema y ahora tengo el capital que mi negocio necesitaba.",
      image: "https://picsum.photos/seed/user3/200/200",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-brand-navy overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
            <Star size={14} />
            <span>Casos de Éxito</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Nuestra mayor satisfacción es ver a nuestra comunidad alcanzar sus metas financieras más ambiciosas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 relative group"
            >
              <Quote className="absolute top-8 right-8 text-brand-gold/20 w-12 h-12 group-hover:text-brand-gold/40 transition-all" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>

              <p className="text-lg text-white/80 italic mb-8 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold/30 shadow-xl">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-white/10 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest">
            <CheckCircle2 className="text-brand-gold" />
            <span>FCRA Certified</span>
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest">
            <CheckCircle2 className="text-brand-gold" />
            <span>Metro 2 Specialist</span>
          </div>
          <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest">
            <CheckCircle2 className="text-brand-gold" />
            <span>Bank-Ready Approved</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
