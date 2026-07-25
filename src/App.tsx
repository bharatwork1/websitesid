import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatYouGet from '@/components/WhatYouGet';
import Pricing from '@/components/Pricing';
import Results from '@/components/Results';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-brand-dark font-body text-brand-text min-h-screen">
      <Nav />
      <Hero />
      <About />
      <WhatYouGet />
      <Pricing />
      <Results />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
