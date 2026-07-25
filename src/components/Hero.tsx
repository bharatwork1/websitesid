import { MessageCircle } from 'lucide-react';

const WA_LINK = 'https://wa.me/918100481232';

const stats = [
  { label: '100% Online' },
  { label: '1:1 Personal Attention' },
  { label: '7-Day Support' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-brand-dark overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#f2efe9 1px, transparent 1px), linear-gradient(90deg, #f2efe9 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gold accent line left */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-brand-gold opacity-20" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-brand-gold text-xs font-semibold tracking-widest2 uppercase mb-4">
              Certified Personal Trainer
            </p>

            <h1 className="font-display text-[clamp(3rem,10vw,7rem)] leading-[0.92] uppercase text-brand-text mb-6">
              Train With
              <br />
              <span className="text-brand-gold">Purpose.</span>
              <br />
              Transform
              <br />
              For Life.
            </h1>

            <p className="text-brand-muted text-base md:text-lg leading-relaxed max-w-md mb-10">
              Personalized 1:1 coaching built around your goals, your schedule,
              and your life — with direct access to Siddhant every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-7 py-4 bg-brand-gold text-brand-dark text-sm font-semibold tracking-widest uppercase hover:bg-brand-gold-light transition-colors duration-200"
              >
                See Plans & Pricing
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-brand-border text-brand-text text-sm font-semibold tracking-widest uppercase hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
              >
                <MessageCircle size={16} />
                Message on WhatsApp
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 md:gap-10 border-t border-brand-border pt-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-brand-gold flex-shrink-0" />
                  <span className="text-xs font-medium tracking-widest uppercase text-brand-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo placeholder */}
          <div className="relative">
            <div
              className="relative aspect-[3/4] w-full max-w-sm mx-auto border border-brand-border overflow-hidden"
              style={{ background: '#111110' }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-gold" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-gold" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-[1px] bg-brand-gold-dim" />
                <p className="font-display text-sm tracking-widest uppercase text-brand-gold-dim">
                  HERO_PHOTO
                </p>
                <p className="text-xs text-brand-muted text-center px-6">
                  Replace with Siddhant's photo
                </p>
                <div className="w-16 h-[1px] bg-brand-gold-dim" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-brand-gold px-4 py-3">
              <p className="font-display text-brand-dark text-xs tracking-widest uppercase">
                Certified
              </p>
              <p className="font-display text-brand-dark text-lg leading-tight">
                Personal Trainer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
