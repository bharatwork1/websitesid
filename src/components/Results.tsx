type TransformationItem =
  | { type: 'photo'; src: string; alt: string }
  | { type: 'placeholder'; id: string; label: string };

const transformations: TransformationItem[] = [
  { type: 'photo', src: '/images/sid3.jpg', alt: 'Client transformation' },
  { type: 'photo', src: '/images/sid4.jpg', alt: 'Client transformation' },
  { type: 'placeholder', id: 'TRANSFORMATION_PHOTO_3', label: 'Client Transformation 3' },
];

function PhotoPlaceholder({ id, label }: { id: string; label: string }) {
  return (
    <div
      className="relative aspect-[3/4] border border-brand-border overflow-hidden group cursor-default"
      style={{ background: '#111110' }}
    >
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-brand-gold opacity-40 group-hover:opacity-80 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-brand-gold opacity-40 group-hover:opacity-80 transition-opacity" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
        <div className="w-10 h-[1px] bg-brand-gold-dim" />
        <p className="font-display text-xs tracking-widest uppercase text-brand-gold-dim text-center">
          {id}
        </p>
        <p className="text-xs text-brand-muted text-center">{label}</p>
        <div className="w-10 h-[1px] bg-brand-gold-dim" />
      </div>
    </div>
  );
}

export default function Results() {
  return (
    <section id="results" className="bg-brand-dark border-t border-brand-border py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-14 md:mb-20">
          <p className="text-brand-gold text-xs font-semibold tracking-widest2 uppercase mb-4">
            Results
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-none uppercase text-brand-text">
              Real
              <span className="text-brand-gold"> Transformations</span>
            </h2>
            <p className="text-brand-muted text-sm max-w-sm md:text-right">
              These are real clients who committed to the process and got real results.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {transformations.map((item, i) =>
            item.type === 'photo' ? (
              <div
                key={i}
                className="relative aspect-[3/4] border border-brand-border overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-brand-gold z-10" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-brand-gold z-10" />
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ) : (
              <PhotoPlaceholder key={i} id={item.id} label={item.label} />
            )
          )}
        </div>

        <p className="text-center text-brand-muted text-xs mt-8 tracking-widest uppercase">
          More transformations coming soon
        </p>
      </div>
    </section>
  );
}
