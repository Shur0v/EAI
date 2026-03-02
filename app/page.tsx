import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Methodology from '@/components/Methodology';
import Process from '@/components/Process';
import Solutions from '@/components/Solutions';
import VisualBreak from '@/components/VisualBreak';
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
      
      <VisualBreak />

      <Stats />
      <Authority />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
