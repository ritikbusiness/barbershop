
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for the hero section on load
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <span className="inline-block mb-4 text-sm md:text-base tracking-widest uppercase text-white/90 border border-white/20 px-4 py-1 rounded-full backdrop-blur">Premium Grooming Experience</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold max-w-5xl mx-auto leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Crafting the Perfect Look for the Modern Gentleman
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Experience the art of traditional barbering combined with contemporary styles for the discerning man
        </p>
        
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#services"
            className="bg-white text-barber-900 px-8 py-4 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="bg-transparent text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-md font-medium transition-all duration-300 hover:bg-white/10"
          >
            Book an Appointment
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-20 animate-fade-in" style={{ animationDelay: '1s' }}>
        <a href="#services" className="inline-block text-white/80 hover:text-white transition-colors">
          <span className="sr-only">Scroll down</span>
          <ChevronDown size={28} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
