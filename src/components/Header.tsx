
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scrolling for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-1 left-2 right-2 z-50 transition-all duration-300 rounded-full ${
        isScrolled 
          ? 'glass py-3 shadow-sm' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <span className="text-2xl font-display font-bold tracking-tight">ELITE CUTS</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide btn-hover pb-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-barber-900 text-white px-6 py-3 rounded-md text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full mt-2 left-0 right-0 glass py-5 space-y-3 rounded-xl ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        } transition-all duration-300 ease-in-out`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="block text-center py-2 text-base transition hover:bg-accent hover:text-accent-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <div className="pt-2 pb-3 px-6">
          <a
            href="#contact"
            className="block w-full bg-barber-900 text-white text-center py-3 rounded-md font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
