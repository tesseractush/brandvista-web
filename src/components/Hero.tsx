
import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-brandBlue"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 bg-[url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')]"></div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-32 md:py-0 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Illuminate Your Brand with BrandVista
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            Sign Boards | Marketing Campaigns | Digital Ads – All Under One Roof
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            We combine creativity, durability, and digital expertise to give businesses 
            the visibility they deserve — both offline and online.
          </p>
          <a
            href="https://wa.me/917055499136"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-lg"
          >
            <MessageCircle size={24} />
            Talk to Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
