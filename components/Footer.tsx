'use client';

import { ShieldCheck, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center shadow-lg">
                <ShieldCheck className="text-brand-navy w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">
                EAI GROUP
              </span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Estrategia financiera y auditoría de datos bajo estándares FCRA y Metro 2. Empoderando a la comunidad latina en EE.UU.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-brand-gold hover:text-brand-navy text-white rounded-full flex items-center justify-center transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-brand-gold hover:text-brand-navy text-white rounded-full flex items-center justify-center transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-brand-gold hover:text-brand-navy text-white rounded-full flex items-center justify-center transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-brand-gold transition-colors text-sm">Inicio</a></li>
              <li><a href="#metodologia" className="text-white/60 hover:text-brand-gold transition-colors text-sm">Metodología</a></li>
              <li><a href="#soluciones" className="text-white/60 hover:text-brand-gold transition-colors text-sm">Soluciones</a></li>
              <li><a href="#autoridad" className="text-white/60 hover:text-brand-gold transition-colors text-sm">Nosotros</a></li>
              <li><a href="#contacto" className="text-white/60 hover:text-brand-gold transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <Mail className="text-brand-gold w-5 h-5 mt-0.5" />
                <span className="text-white/60 text-sm">info@eaigroup.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-brand-gold w-5 h-5 mt-0.5" />
                <span className="text-white/60 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-gold w-5 h-5 mt-0.5" />
                <span className="text-white/60 text-sm">Miami, Florida, EE.UU.</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Trust */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Confianza</h4>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Auditamos bajo leyes federales para asegurar que tus datos trabajen para ti, no en tu contra.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="text-brand-gold w-6 h-6" />
                </div>
                <span className="text-white font-bold text-xs uppercase tracking-widest leading-tight">FCRA Compliant Specialist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs">
            © {currentYear} EAI Group. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs">Política de Privacidad</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-xs">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
