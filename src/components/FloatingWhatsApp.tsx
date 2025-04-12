
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/917055499136";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
    </a>
  );
};

export default FloatingWhatsApp;
