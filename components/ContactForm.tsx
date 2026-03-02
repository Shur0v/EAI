'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Loader2, Calendar, ShieldCheck, Landmark } from 'lucide-react';

const formSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre es obligatorio' }),
  email: z.string().email({ message: 'Email inválido' }),
  telefono: z.string().min(10, { message: 'Teléfono inválido' }),
  meta: z.string().min(5, { message: 'Por favor, cuéntanos tu meta' }),
  acepto: z.boolean().refine((val) => val === true, { message: 'Debes aceptar los términos' })
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      acepto: true
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log('Form submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50 overflow-hidden relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-widest mb-8">
                  <Calendar size={14} />
                  <span>Evaluación Estratégica</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-8 leading-tight">
                  El capital que necesitas está a una <span className="text-brand-gold">auditoría</span> de distancia.
                </h2>
                
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  No pierdas más tiempo con soluciones genéricas. Agenda tu evaluación hoy y descubre cómo podemos hacerte <span className="text-brand-navy font-bold italic">Bank-Ready</span>.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <ShieldCheck className="text-brand-gold w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-navy">Auditoría FCRA Completa</p>
                      <p className="text-sm text-slate-500">Analizamos cada dato bajo la ley federal.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <Landmark className="text-brand-gold w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-navy">Plan de Bank-Readiness</p>
                      <p className="text-sm text-slate-500">Estrategia personalizada para aprobación bancaria.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Placeholder */}
              <div className="p-8 rounded-3xl bg-brand-navy text-white shadow-2xl relative overflow-hidden group cursor-pointer mt-auto">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full group-hover:bg-brand-gold/20 transition-all"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-2">Opción 2</p>
                    <h3 className="text-xl font-bold mb-2">Agenda vía Calendly</h3>
                    <p className="text-white/60 text-sm">Elige el horario que mejor te convenga.</p>
                  </div>
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Calendar className="text-brand-navy w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative flex flex-col h-full"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <h3 className="text-2xl font-display font-bold text-brand-navy mb-8">Empieza tu Auditoría</h3>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-brand-navy uppercase tracking-widest mb-2">Nombre Completo</label>
                        <input 
                          {...register('nombre')}
                          className={`w-full px-6 py-4 rounded-xl bg-slate-50 border ${errors.nombre ? 'border-red-400' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all`}
                          placeholder="Ej: Juan Pérez"
                        />
                        {errors.nombre && <p className="text-red-500 text-xs mt-1 font-medium">{errors.nombre.message}</p>}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-brand-navy uppercase tracking-widest mb-2">Email</label>
                          <input 
                            {...register('email')}
                            className={`w-full px-6 py-4 rounded-xl bg-slate-50 border ${errors.email ? 'border-red-400' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all`}
                            placeholder="juan@ejemplo.com"
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-brand-navy uppercase tracking-widest mb-2">Teléfono</label>
                          <input 
                            {...register('telefono')}
                            className={`w-full px-6 py-4 rounded-xl bg-slate-50 border ${errors.telefono ? 'border-red-400' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all`}
                            placeholder="+1 (555) 000-0000"
                          />
                          {errors.telefono && <p className="text-red-500 text-xs mt-1 font-medium">{errors.telefono.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-brand-navy uppercase tracking-widest mb-2">¿Cuál es tu meta financiera?</label>
                        <textarea 
                          {...register('meta')}
                          rows={4}
                          className={`w-full px-6 py-4 rounded-xl bg-slate-50 border ${errors.meta ? 'border-red-400' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all resize-none`}
                          placeholder="Ej: Comprar mi primera casa, capital para mi negocio..."
                        />
                        {errors.meta && <p className="text-red-500 text-xs mt-1 font-medium">{errors.meta.message}</p>}
                      </div>

                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          {...register('acepto')}
                          id="acepto"
                          className="w-5 h-5 rounded border-slate-300 text-brand-gold focus:ring-brand-gold"
                        />
                        <label htmlFor="acepto" className="text-xs text-slate-500 leading-relaxed">
                          Acepto recibir comunicaciones estratégicas de EAI Group. Mis datos están protegidos.
                        </label>
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-navy py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-brand-gold/20 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin" size={24} />
                            <span>Procesando...</span>
                          </>
                        ) : (
                          <>
                            <Send size={24} />
                            <span>Agendar mi Evaluación Estratégica</span>
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="text-brand-green w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-brand-navy mb-4">¡Solicitud Recibida!</h3>
                    <p className="text-lg text-slate-600 mb-10">
                      Un estratega de EAI Group se pondrá en contacto contigo en las próximas 24 horas hábiles.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-brand-gold font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Volver al formulario
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
