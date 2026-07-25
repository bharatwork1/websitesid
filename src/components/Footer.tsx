import { Instagram, MessageCircle, Mail } from 'lucide-react';

const WA_LINK = 'https://wa.me/918100481232';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-2 border-t border-brand-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Name mark */}
          <div>
            <p className="font-display text-2xl tracking-widest uppercase text-brand-text">
              Siddhant<span className="text-brand-gold">.</span>
            </p>
            <p className="text-brand-muted text-xs tracking-widest uppercase mt-1">
              Train With Purpose. Transform For Life.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 border border-brand-border flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="mailto:siddhantchowdhury57@gmail.com"
              aria-label="Email"
              className="w-9 h-9 border border-brand-border flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://www.instagram.com/siddhantchowdhury_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 border border-brand-border flex items-center justify-center text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-brand-border mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-xs">
            &copy; {year} Siddhant Chowdhury. All rights reserved.
          </p>
          <p className="text-brand-muted text-xs">
            Certified Personal Trainer &mdash; Online Coaching
          </p>
        </div>
      </div>
    </footer>
  );
}
