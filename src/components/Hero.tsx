
import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-brandBlue overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 bg-[url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brandBlue/30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brandOrange/20 blur-3xl animate-pulse" style={{ animationDuration: '7s' }}></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-32 md:py-0 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-slide-in-top" style={{ animationDuration: '0.8s', animationDelay: '0.1s' }}>
            Illuminate Your Brand with BrandVista
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 animate-slide-in-top" style={{ animationDuration: '0.8s', animationDelay: '0.3s' }}>
            Sign Boards | Marketing Campaigns | Digital Ads – All Under One Roof
          </p>
          <div className="animate-slide-in-bottom" style={{ animationDuration: '0.8s', animationDelay: '0.5s' }}>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10">
              We combine creativity, durability, and digital expertise to give businesses 
              the visibility they deserve — both offline and online.
            </p>
            <a
              href="https://wa.me/917055499136"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-lg backdrop-blur-md bg-green-500/90 hover:bg-green-600/90 transition-all duration-300 hover:scale-105 border border-white/20 shadow-lg"
            >
              <MessageCircle size={24} />
              Talk to Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
