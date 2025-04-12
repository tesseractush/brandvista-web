
import { Clock, CheckCircle, Palette, DollarSign, Lightbulb, MessageCircle } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      title: "Timely Delivery",
      description: "We value your time and ensure projects are delivered on schedule.",
      icon: <Clock size={40} className="text-brandBlue" />,
    },
    {
      id: 2,
      title: "High-Quality Materials",
      description: "Only the finest materials for durability and premium finish.",
      icon: <CheckCircle size={40} className="text-brandBlue" />,
    },
    {
      id: 3,
      title: "Creative Designs",
      description: "Eye-catching, innovative designs that make your brand memorable.",
      icon: <Palette size={40} className="text-brandBlue" />,
    },
    {
      id: 4,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality.",
      icon: <DollarSign size={40} className="text-brandBlue" />,
    },
    {
      id: 5,
      title: "Expert Consultation",
      description: "Personalized advice from industry experts for your branding needs.",
      icon: <Lightbulb size={40} className="text-brandBlue" />,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-brandBlue text-white">
      <div className="container-section">
        <h2 className="section-title text-white">Why Choose BrandVista</h2>
        <p className="section-subtitle text-gray-300">
          We're committed to excellence in every project, delivering the best signage and marketing solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:bg-white/20">
              <div className="mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-white">{benefit.title}</h3>
              <p className="text-gray-300 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/917055499136"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <MessageCircle size={20} />
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
