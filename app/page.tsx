import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Methodology from '@/components/Methodology';
import Process from '@/components/Process';
import Solutions from '@/components/Solutions';
import Stats from '@/components/Stats';
import Authority from '@/components/Authority';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Methodology />
      <Process />
      <Solutions />
      
      {/* Visual Break / Lifestyle Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://picsum.photos/seed/success/1920/1080" 
          alt="Success Lifestyle" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/60 flex items-center justify-center p-4">
          <div className="max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              El capital es el combustible de tus sueños.
            </h2>
            <p className="text-xl text-white/80 italic">
              &quot;No dejes que un reporte de crédito mal auditado detenga tu visión. Toma el control de tu futuro financiero hoy mismo.&quot;
            </p>
          </div>
        </div>
      </section>

      <Stats />
      <Authority />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
