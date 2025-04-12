
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brandBlue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">BrandVista</h3>
            <p className="mb-4 text-gray-300">Your Brand. Our Vision.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-300 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">3D LED Sign Board</li>
              <li className="text-gray-300">Flex Printing</li>
              <li className="text-gray-300">ACP Boards</li>
              <li className="text-gray-300">Stainless Steel Boards</li>
              <li className="text-gray-300">Online Marketing</li>
              <li className="text-gray-300">Advertising Campaigns</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} BrandVista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
