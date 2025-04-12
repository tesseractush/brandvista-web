
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/917055499136";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500/90 backdrop-blur-md hover:bg-green-600/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center border border-white/20"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
    </a>
  );
};

export default FloatingWhatsApp;
