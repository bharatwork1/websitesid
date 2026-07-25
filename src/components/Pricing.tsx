import { Check } from 'lucide-react';

const WA_BASE = 'https://wa.me/918100481232?text=';

const plans = [
  {
    name: 'Per Class',
    price: '₹500',
    period: 'per class',
    badge: null,
    description: 'Pay as you go. Perfect for trying out the coaching style.',
    features: [
      'Single session with Siddhant',
      'Personalized workout for that day',
      'Session recap & notes',
      'No commitment required',
    ],
    cta: 'Book a Session',
    waMessage: "Hi Siddhant, I'd like to book a Per Class session with you.",
    highlight: false,
  },
  {
    name: 'Monthly',
    price: '₹5,000',
    period: 'per month',
    badge: 'Most Popular',
    description: '20 classes per month with full coaching support.',
    features: [
      '20 classes included',
      'Custom monthly workout program',
      'Nutrition guidance',
      'Weekly progress check-in',
      'WhatsApp support all week',
    ],
    cta: 'Start Monthly Plan',
    waMessage: "Hi Siddhant, I'd like to start the Monthly plan (₹5,000/month).",
    highlight: true,
  },
  {
    name: '3 Months',
    price: '₹12,000',
    period: 'for 3 months',
    badge: 'Best Value',
    description: 'Commit to real transformation. Save ₹3,000 vs monthly.',
    features: [
      '60 classes included',
      'Full custom programming',
      'Nutrition & lifestyle coaching',
      'Weekly check-ins + adjustments',
      'Priority WhatsApp support',
      'Transformation progress tracking',
    ],
    cta: 'Start 3-Month Plan',
    waMessage: "Hi Siddhant, I'd like to start the 3-Month plan (₹12,000).",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-brand-dark-2 border-t border-brand-border py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-14 md:mb-20">
          <p className="text-brand-gold text-xs font-semibold tracking-widest2 uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-none uppercase text-brand-text">
            Invest in Your
            <span className="text-brand-gold"> Transformation</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-l border-t border-brand-border">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border-r border-b border-brand-border flex flex-col relative ${
                plan.highlight ? 'bg-brand-dark-3' : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0">
                  <div className="bg-brand-gold px-3 py-1">
                    <span className="text-brand-dark text-xs font-bold tracking-widest uppercase">
                      {plan.badge}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-7 md:p-8 flex flex-col flex-1">
                <p className="text-brand-muted text-xs tracking-widest uppercase font-medium mb-3">
                  {plan.name}
                </p>

                <div className="mb-2">
                  <span className="font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-none text-brand-text">
                    {plan.price}
                  </span>
                </div>
                <p className="text-brand-gold-dim text-xs tracking-widest uppercase mb-4">
                  {plan.period}
                </p>

                <p className="text-brand-muted text-sm leading-relaxed border-t border-brand-border pt-4 mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className="text-brand-gold mt-0.5 flex-shrink-0"
                      />
                      <span className="text-brand-text text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${WA_BASE}${encodeURIComponent(plan.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-6 py-4 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
                    plan.highlight
                      ? 'bg-brand-gold text-brand-dark hover:bg-brand-gold-light'
                      : 'border border-brand-border text-brand-text hover:border-brand-gold hover:text-brand-gold'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-brand-muted text-xs mt-6">
          All plans are billed directly. Message Siddhant on WhatsApp to get started.
        </p>
      </div>
    </section>
  );
}
