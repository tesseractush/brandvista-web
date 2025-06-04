
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceCategories = [
    { name: "3D LED Signage", href: "#3d-led", description: "Eye-catching dimensional displays" },
    { name: "Flex Printing", href: "#flex", description: "High-quality banner solutions" },
    { name: "ACP Boards", href: "#acp", description: "Durable aluminum composite panels" },
    { name: "Steel Signage", href: "#steel", description: "Premium metal displays" },
    { name: "Digital Marketing", href: "#digital", description: "Online brand promotion" },
    { name: "Brand Campaigns", href: "#campaigns", description: "Strategic brand awareness" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? "bg-white/10 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/38869e7c-a51c-44f3-81e2-a043de5e501e.png" 
            alt="BrandVista Logo" 
            className="h-16 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-brandOrange font-medium data-[state=open]:text-brandOrange">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] bg-white/95 backdrop-blur-md shadow-xl rounded-lg border border-white/20">
                    <div className="row-span-3">
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brandBlue/20 to-brandOrange/20 p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 mt-4 text-lg font-medium text-brandBlue">
                          Featured Service
                        </div>
                        <p className="text-sm leading-tight text-gray-700">
                          Transform your brand with our premium 3D LED signage solutions. Create stunning visual impact that captures attention and drives results.
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      {serviceCategories.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brandOrange/10 hover:text-brandOrange focus:bg-brandOrange/10 focus:text-brandOrange"
                        >
                          <div className="text-sm font-medium leading-none text-brandBlue">
                            {service.name}
                          </div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-600">
                            {service.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-white hover:text-brandOrange transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md shadow-lg animate-slide-in-top">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-3">
            <div className="py-2">
              <span className="font-medium text-white hover:text-brandOrange transition-colors">Services</span>
              <div className="ml-4 mt-2 space-y-2">
                {serviceCategories.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block text-sm text-gray-300 hover:text-brandOrange transition-colors"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-white hover:text-brandOrange transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
