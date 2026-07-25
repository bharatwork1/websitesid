import { Quote } from 'lucide-react';

type TextReview = {
  type: 'text';
  quote: string;
  name: string;
  role: string;
};

type ImageReview = {
  type: 'image';
  id: string;
  label: string;
};

type Review = TextReview | ImageReview;

const reviews: Review[] = [
  {
    type: 'text',
    quote:
      "Working with Siddhant completely changed how I approach fitness. His programming is smart, his guidance is clear, and his support is constant. 12 weeks in and I feel like a different person.",
    name: 'Rohan M.',
    role: 'Client, 3-Month Program',
  },
  {
    type: 'image',
    id: 'REVIEW_PHOTO_1',
    label: 'WhatsApp / Instagram review screenshot',
  },
  {
    type: 'text',
    quote:
      "I've tried so many trainers before. Siddhant is different — he actually listens, adapts your plan when life gets in the way, and replies instantly. Genuinely the best investment I've made.",
    name: 'Priya S.',
    role: 'Client, Monthly Program',
  },
  {
    type: 'image',
    id: 'REVIEW_PHOTO_2',
    label: 'WhatsApp / Instagram review screenshot',
  },
  {
    type: 'text',
    quote:
      "Lost 8kg in 3 months while actually enjoying the process. The nutrition guidance is practical, not restrictive. My whole relationship with food and exercise has shifted.",
    name: 'Aryan K.',
    role: 'Client, 3-Month Program',
  },
  {
    type: 'image',
    id: 'REVIEW_PHOTO_3',
    label: 'Review screenshot',
  },
];

function TextCard({ review }: { review: TextReview }) {
  return (
    <div className="border border-brand-border bg-brand-dark-2 p-6 md:p-7 flex flex-col h-full">
      <Quote size={24} className="text-brand-gold mb-5 flex-shrink-0" />
      <p className="text-brand-text text-sm leading-relaxed flex-1 mb-6 italic">
        "{review.quote}"
      </p>
      <div className="border-t border-brand-border pt-4">
        <p className="text-brand-text font-semibold text-sm">{review.name}</p>
        <p className="text-brand-gold text-xs tracking-widest uppercase mt-0.5">{review.role}</p>
      </div>
    </div>
  );
}

function ImageCard({ review }: { review: ImageReview }) {
  return (
    <div
      className="relative border border-brand-border overflow-hidden min-h-[280px] flex flex-col items-center justify-center gap-2"
      style={{ background: '#111110' }}
    >
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-brand-gold opacity-40" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-brand-gold opacity-40" />
      <div className="w-10 h-[1px] bg-brand-gold-dim" />
      <p className="font-display text-xs tracking-widest uppercase text-brand-gold-dim text-center px-4">
        {review.id}
      </p>
      <p className="text-xs text-brand-muted text-center px-6">{review.label}</p>
      <div className="w-10 h-[1px] bg-brand-gold-dim" />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-brand-dark-2 border-t border-brand-border py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-14 md:mb-20">
          <p className="text-brand-gold text-xs font-semibold tracking-widest2 uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-none uppercase text-brand-text">
            What Clients
            <span className="text-brand-gold"> Say</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, i) =>
            review.type === 'text' ? (
              <TextCard key={i} review={review} />
            ) : (
              <ImageCard key={i} review={review} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
