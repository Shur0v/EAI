'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function VisualBreak() {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/67bedce4ab92a0001d7e147f.jpg" 
          alt="Success Lifestyle" 
          className="w-full h-full object-cover scale-110"
        />
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-8 md:p-12 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden group"
          >
            {/* Decorative Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-gold/20 blur-3xl rounded-full group-hover:bg-brand-gold/30 transition-all duration-700"></div>
            
            <Quote className="text-brand-gold/40 w-16 h-16 mb-8" />
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
              El capital es el <span className="text-brand-gold">combustible</span> de tus sueños.
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light italic">
                &quot;No dejes que un reporte de crédito mal auditado detenga tu visión. Toma el control de tu futuro financiero hoy mismo.&quot;
              </p>
              
              <div className="flex items-center gap-4 pt-6">
                <div className="h-px w-12 bg-brand-gold"></div>
                <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">EAI Group Strategy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute bottom-12 right-12 w-32 h-32 border border-white/10 rounded-full hidden lg:block"
      />
    </section>
  );
}
