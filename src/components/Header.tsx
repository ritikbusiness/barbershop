
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass py-3 shadow-sm' 
          : 'bg-transparent py-5'
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
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
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
        className={`md:hidden absolute top-full left-0 right-0 glass py-5 space-y-3 ${
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
            className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-md font-medium"
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
