
import { Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Ready to elevate your brand? We're just a message away.
        </p>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-3 text-brandBlue" size={20} />
                  <span>+91 70554 99136</span>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-3">We do business through WhatsApp</h4>
                  <a
                    href="https://wa.me/917055499136"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn block w-full text-center"
                  >
                    <MessageCircle size={20} />
                    Start a Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden h-[400px]">
            {/* Replace with actual embed code if location map is available */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.23982784132!2d82.94292795!3d25.32127765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1649928113331!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BrandVista Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
