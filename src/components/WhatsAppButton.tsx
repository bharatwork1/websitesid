import { MessageCircle } from 'lucide-react';

const WA_LINK = 'https://wa.me/918100481232';

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 shadow-lg hover:bg-[#1fba58] transition-colors duration-200 group"
    >
      <MessageCircle size={20} />
      <span className="text-xs font-semibold tracking-widest uppercase hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
