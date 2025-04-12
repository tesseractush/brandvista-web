
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mrityunjay Srivastava",
      text: "BrandVista's attention to detail and quality is unmatched. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "SuryaPrakash Tiwari",
      text: "From signage to digital marketing, they handle it all flawlessly.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Suyeb Khan",
      text: "Professional, creative, and always on time.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Prankush Chauhan",
      text: "Our go-to team for both offline and online branding.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, current]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container-section">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">
          Don't just take our word for it. Here's what our clients have to say about our work.
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Testimonials */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <h4 className="font-semibold">{testimonial.name}</h4>
                  </div>
                  <div className="relative">
                    <Quote className="absolute text-gray-200 w-10 h-10 -top-2 -left-2 z-0" />
                    <p className="text-gray-600 relative z-10 pl-4">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Testimonial Carousel */}
          <div className="md:hidden">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <h4 className="font-semibold">{testimonials[current].name}</h4>
              </div>
              <div className="relative">
                <Quote className="absolute text-gray-200 w-10 h-10 -top-2 -left-2 z-0" />
                <p className="text-gray-600 relative z-10 pl-4">
                  "{testimonials[current].text}"
                </p>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Indicator dots */}
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`mx-1 w-2 h-2 rounded-full ${
                    index === current ? "bg-brandOrange" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
