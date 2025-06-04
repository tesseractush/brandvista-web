
import { Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container-section">
        <h2 className="section-title text-white">Contact Us</h2>
        <p className="section-subtitle text-gray-300">
          Ready to elevate your brand? We're just a message away.
        </p>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          <div className="flex-1 bg-white/10 backdrop-blur-md shadow-lg rounded-lg overflow-hidden border border-white/20">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-3 text-brandOrange" size={20} />
                  <span className="text-white">+91 70554 99136</span>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-3 text-white">We do business through WhatsApp</h4>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28509.55934721967!2d80.94707337431639!3d26.850000000000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1672913234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BrandVista Location - Gomti Nagar, Lucknow"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
