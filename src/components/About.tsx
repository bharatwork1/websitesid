import { Instagram, CheckCircle2 } from 'lucide-react';

const credentials = [
  {
    number: '01',
    title: 'Certified & Qualified',
    desc: 'Formally trained and certified personal trainer with deep knowledge of exercise science and programming.',
  },
  {
    number: '02',
    title: 'Personalized Programming',
    desc: 'No cookie-cutter plans. Every program is built around your body, your goals, and your starting point.',
  },
  {
    number: '03',
    title: 'Nutrition-Informed Coaching',
    desc: 'Sustainable nutrition guidance that complements your training without crash diets or gimmicks.',
  },
  {
    number: '04',
    title: 'Direct Access, Always',
    desc: 'Message Siddhant directly on WhatsApp — no middlemen, no delays. Real accountability, real results.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-brand-dark-2 border-t border-brand-border py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section label */}
        <p className="text-brand-gold text-xs font-semibold tracking-widest2 uppercase mb-4">
          About
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — photo + bio */}
          <div>
            {/* Photo */}
            <div className="relative aspect-square w-full max-w-xs border border-brand-border overflow-hidden mb-8">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-brand-gold z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-brand-gold z-10" />
              <img
                src="/images/sid2.jpg"
                alt="Siddhant Chowdhury"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none uppercase text-brand-text mb-6">
              Siddhant
              <br />
              <span className="text-brand-gold">Chowdhury</span>
            </h2>

            <p className="text-brand-muted leading-relaxed mb-4">
              I'm a certified personal trainer who believes fitness is built in the details —
              the right movement, the right load, the right recovery. I don't believe in
              shortcuts. I believe in systems that work for your real life.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8">
              Whether you're starting from zero or breaking through a plateau, I'll design
              your program from scratch, guide your nutrition, and stay in your corner
              seven days a week. My clients aren't just followers — they're people I'm
              personally invested in helping succeed.
            </p>

            {/* Instagram follow */}
            <a
              href="https://www.instagram.com/siddhantchowdhury_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-brand-border text-brand-text text-xs font-semibold tracking-widest uppercase hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
            >
              <Instagram size={15} />
              @siddhantchowdhury_
            </a>
          </div>

          {/* Right — credentials */}
          <div className="space-y-0">
            {credentials.map((item, i) => (
              <div
                key={i}
                className="group border-b border-brand-border py-7 flex gap-5 hover:bg-brand-dark-3 transition-colors duration-200 px-2 -mx-2"
              >
                <span className="font-display text-xs tracking-widest text-brand-gold-dim pt-1 flex-shrink-0">
                  {item.number}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={14} className="text-brand-gold flex-shrink-0" />
                    <h3 className="text-brand-text font-semibold text-sm tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
