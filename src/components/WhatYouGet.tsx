const features = [
  {
    number: '01',
    title: 'Personalized Workout Plan',
    desc: 'A program designed specifically for your body, equipment, and goals — updated every week based on your progress.',
  },
  {
    number: '02',
    title: 'Nutrition Guidance',
    desc: 'Practical eating strategies that fuel your training and fit your lifestyle. No extreme diets, no calorie obsession.',
  },
  {
    number: '03',
    title: 'Weekly Check-ins',
    desc: 'Regular progress reviews to track results, adjust your plan, and keep your momentum going week after week.',
  },
  {
    number: '04',
    title: 'Direct WhatsApp Support',
    desc: 'Message Siddhant anytime, 7 days a week. Ask questions, share progress, get feedback — instantly.',
  },
];

export default function WhatYouGet() {
  return (
    <section id="features" className="bg-brand-dark border-t border-brand-border py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-14 md:mb-20">
          <p className="text-brand-gold text-xs font-semibold tracking-widest2 uppercase mb-4">
            What You Get
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-none uppercase text-brand-text max-w-lg">
            Everything You Need to
            <span className="text-brand-gold"> Succeed</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-brand-border">
          {features.map((feat) => (
            <div
              key={feat.number}
              className="border-r border-b border-brand-border p-7 group hover:bg-brand-dark-2 transition-colors duration-200"
            >
              <span className="block font-display text-4xl text-brand-gold leading-none mb-6 group-hover:text-brand-gold-light transition-colors">
                {feat.number}
              </span>
              <h3 className="font-semibold text-brand-text text-sm tracking-wide mb-3 uppercase">
                {feat.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
