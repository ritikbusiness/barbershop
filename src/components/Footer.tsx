
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-barber-950 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors size={24} className="text-barber-300" />
              <span className="text-2xl font-display font-bold tracking-tight">ELITE CUTS</span>
            </div>
            <p className="text-barber-300 text-sm">
              Premier barbershop specializing in precision cuts, beard styling, and grooming services for the modern gentleman.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-barber-300 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-barber-300 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-barber-300 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-barber-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-barber-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#team" className="text-barber-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#gallery" className="text-barber-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-barber-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-barber-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-barber-300 hover:text-white transition-colors">Precision Haircut</a></li>
              <li><a href="#services" className="text-barber-300 hover:text-white transition-colors">Beard Styling</a></li>
              <li><a href="#services" className="text-barber-300 hover:text-white transition-colors">Hot Towel Shave</a></li>
              <li><a href="#services" className="text-barber-300 hover:text-white transition-colors">Color & Highlights</a></li>
              <li><a href="#services" className="text-barber-300 hover:text-white transition-colors">Kids Haircut</a></li>
              <li><a href="#services" className="text-barber-300 hover:text-white transition-colors">Grooming Products</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-barber-300 space-y-2">
              <p>123 Main Street, Downtown</p>
              <p>New York, NY 10001</p>
              <p className="pt-2">(212) 555-1234</p>
              <p><a href="mailto:info@elitecuts.com" className="hover:text-white transition-colors">info@elitecuts.com</a></p>
            </address>
          </div>
        </div>

        <div className="border-t border-barber-800 mt-12 pt-6 text-center text-sm text-barber-400">
          <p>&copy; {currentYear} Elite Cuts Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
