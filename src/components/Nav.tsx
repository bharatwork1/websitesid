import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'What You Get', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-dark border-b border-brand-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleLink('#hero'); }}
            className="font-display text-xl tracking-widest text-brand-text uppercase"
          >
            SC<span className="text-brand-gold">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
                  className="text-xs font-medium tracking-widest uppercase text-brand-muted hover:text-brand-text transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#pricing"
              onClick={(e) => { e.preventDefault(); handleLink('#pricing'); }}
              className="hidden md:inline-flex items-center px-5 py-2 bg-brand-gold text-brand-dark text-xs font-semibold tracking-widest uppercase hover:bg-brand-gold-light transition-colors duration-200"
            >
              Start Now
            </a>
            <button
              className="md:hidden text-brand-text p-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-brand-dark flex flex-col pt-20 px-6 pb-10">
          <ul className="flex flex-col gap-6 mt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLink(link.href); }}
                  className="font-display text-3xl tracking-wider uppercase text-brand-text hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#pricing"
            onClick={(e) => { e.preventDefault(); handleLink('#pricing'); setOpen(false); }}
            className="mt-10 inline-flex items-center justify-center px-6 py-4 bg-brand-gold text-brand-dark text-sm font-semibold tracking-widest uppercase"
          >
            Start Now
          </a>
        </div>
      )}
    </>
  );
}
