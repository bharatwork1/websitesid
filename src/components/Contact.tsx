import { MessageCircle, Mail, Instagram, Send, AlertCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

const WA_LINK = 'https://wa.me/918100481232';

const goalOptions = [
  'Weight Loss',
  'Muscle Building',
  'General Fitness',
  'Strength & Performance',
  'Body Recomposition',
  'Post-Injury Comeback',
  'Other',
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formsubmit.co/ajax/siddhantchowdhury57@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-brand-dark border-t border-brand-border py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-14 md:mb-20">
          <p className="text-brand-gold text-xs font-semibold tracking-widest2 uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-none uppercase text-brand-text">
            Ready to
            <span className="text-brand-gold"> Start?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left — contact info */}
          <div>
            <p className="text-brand-muted text-base leading-relaxed mb-10 max-w-sm">
              Reach out on any platform below — or fill in the form and Siddhant will
              get back to you within 24 hours.
            </p>

            <div className="space-y-0">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 py-6 border-b border-brand-border group hover:bg-brand-dark-2 transition-colors duration-200 px-2 -mx-2"
              >
                <div className="w-10 h-10 border border-brand-border flex items-center justify-center group-hover:border-brand-gold transition-colors">
                  <MessageCircle size={18} className="text-brand-muted group-hover:text-brand-gold transition-colors" />
                </div>
                <div>
                  <p className="text-brand-text text-xs font-semibold tracking-widest uppercase mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-brand-muted text-sm">+91 81004 81232</p>
                </div>
              </a>

              <a
                href="mailto:siddhantchowdhury57@gmail.com"
                className="flex items-center gap-5 py-6 border-b border-brand-border group hover:bg-brand-dark-2 transition-colors duration-200 px-2 -mx-2"
              >
                <div className="w-10 h-10 border border-brand-border flex items-center justify-center group-hover:border-brand-gold transition-colors">
                  <Mail size={18} className="text-brand-muted group-hover:text-brand-gold transition-colors" />
                </div>
                <div>
                  <p className="text-brand-text text-xs font-semibold tracking-widest uppercase mb-0.5">
                    Email
                  </p>
                  <p className="text-brand-muted text-sm">siddhantchowdhury57@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/siddhantchowdhury_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 py-6 border-b border-brand-border group hover:bg-brand-dark-2 transition-colors duration-200 px-2 -mx-2"
              >
                <div className="w-10 h-10 border border-brand-border flex items-center justify-center group-hover:border-brand-gold transition-colors">
                  <Instagram size={18} className="text-brand-muted group-hover:text-brand-gold transition-colors" />
                </div>
                <div>
                  <p className="text-brand-text text-xs font-semibold tracking-widest uppercase mb-0.5">
                    Instagram
                  </p>
                  <p className="text-brand-muted text-sm">@siddhantchowdhury_</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — lead capture form */}
          <div>
            {status === 'success' ? (
              <div className="border border-brand-gold bg-brand-dark-2 p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[360px]">
                <Send size={32} className="text-brand-gold" />
                <h3 className="font-display text-2xl uppercase text-brand-text tracking-wide">
                  Message Sent
                </h3>
                <p className="text-brand-muted text-sm max-w-xs">
                  Siddhant will get back to you shortly. For a faster reply, message him directly on WhatsApp.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 px-5 py-3 bg-brand-gold text-brand-dark text-xs font-semibold tracking-widest uppercase"
                >
                  <MessageCircle size={14} />
                  WhatsApp Now
                </a>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-brand-muted text-xs tracking-widest uppercase underline underline-offset-4 hover:text-brand-text transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_subject" value="New Lead from Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label htmlFor="name" className="block text-brand-muted text-xs tracking-widest uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-brand-dark-2 border border-brand-border text-brand-text text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-muted/50"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-brand-muted text-xs tracking-widest uppercase mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-brand-dark-2 border border-brand-border text-brand-text text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-muted/50"
                  />
                </div>

                <div>
                  <label htmlFor="goal" className="block text-brand-muted text-xs tracking-widest uppercase mb-2">
                    Your Goal
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    required
                    defaultValue=""
                    className="w-full bg-brand-dark-2 border border-brand-border text-brand-text text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select your primary goal</option>
                    {goalOptions.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-brand-muted text-xs tracking-widest uppercase mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell Siddhant a bit about yourself and what you're looking for..."
                    className="w-full bg-brand-dark-2 border border-brand-border text-brand-text text-sm px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors resize-none placeholder:text-brand-muted/50"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-xs border border-red-400/30 bg-red-400/10 px-4 py-3">
                    <AlertCircle size={14} />
                    Something went wrong. Please try WhatsApp or email directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-brand-gold text-brand-dark text-sm font-semibold tracking-widest uppercase hover:bg-brand-gold-light transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={15} />
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
