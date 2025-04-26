
import { useState } from "react";
import { MessageCircle } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  const portfolioItems = [
    {
      id: 1,
      title: "3D LED Storefront Sign",
      category: "3dled",
      image: "https://images.unsplash.com/photo-1563889362352-b0492c224f62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Shopping Mall Banner",
      category: "flex",
      image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Corporate Office Signage",
      category: "acp",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "Restaurant Steel Signage",
      category: "steel",
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 5,
      title: "Digital Marketing Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 6,
      title: "Brand Awareness Campaign",
      category: "campaign",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
  ];

  const categories = [
    { id: "all", name: "All Work" },
    { id: "3dled", name: "3D LED Signs" },
    { id: "flex", name: "Flex Prints" },
    { id: "acp", name: "ACP Boards" },
    { id: "steel", name: "Steel Boards" },
    { id: "marketing", name: "Marketing" },
    { id: "campaign", name: "Campaigns" },
  ];

  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container-section">
        <h2 className="section-title text-white">Our Portfolio</h2>
        <p className="section-subtitle text-gray-300">
          Take a look at some of our best work. Click on the categories to filter our projects.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                filter === category.id
                  ? "bg-brandOrange text-white"
                  : "bg-white/10 backdrop-blur-md hover:bg-white/20 text-white"
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl group bg-white/5 backdrop-blur-md"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/917055499136"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            <MessageCircle size={20} />
            Get a Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
