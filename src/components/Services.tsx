
import { 
  Lightbulb, 
  Printer, 
  Square, 
  Circle, 
  TrendingUp, 
  Megaphone, 
  MessageCircle 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "3D LED Sign Board",
      description: "Eye-catching, long-lasting signage for maximum brand visibility.",
      icon: <Lightbulb size={40} className="text-brandOrange" />,
    },
    {
      id: 2,
      title: "Flex Printing",
      description: "Affordable and versatile prints for banners, hoardings, and more.",
      icon: <Printer size={40} className="text-brandOrange" />,
    },
    {
      id: 3,
      title: "ACP Boards",
      description: "Modern, sleek panels perfect for facades and interiors.",
      icon: <Square size={40} className="text-brandOrange" />,
    },
    {
      id: 4,
      title: "Stainless Steel Boards",
      description: "Premium branding boards with a polished professional look.",
      icon: <Circle size={40} className="text-brandOrange" />,
    },
    {
      id: 5,
      title: "Online Marketing",
      description: "Targeted campaigns to grow your digital presence.",
      icon: <TrendingUp size={40} className="text-brandOrange" />,
    },
    {
      id: 6,
      title: "Advertising Campaigns",
      description: "Strategy, design, and execution for high-impact brand promotions.",
      icon: <Megaphone size={40} className="text-brandOrange" />,
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container-section">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We provide premium quality signage and advertising solutions tailored to help businesses stand out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href="https://wa.me/917055499136"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brandOrange hover:text-brandOrange-light font-medium"
              >
                <MessageCircle size={18} className="mr-1" />
                Contact Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
