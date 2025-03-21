
import { useEffect, useRef, useState } from 'react';

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.fade-in-section');
      elements.forEach(el => observer.observe(el));
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll('.fade-in-section');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      alt: "Classic haircut with fade",
      title: "Classic Fade"
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      alt: "Modern pompadour style",
      title: "Modern Pompadour"
    },
    {
      src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      alt: "Beard trim and styling",
      title: "Beard Sculpting"
    },
    {
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      alt: "Executive style haircut",
      title: "Executive Cut"
    },
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      alt: "Textured crop haircut",
      title: "Textured Crop"
    },
    {
      src: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
      alt: "Classic side part with volume",
      title: "Classic Side Part"
    }
  ];

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-barber-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-2 text-sm tracking-widest uppercase text-barber-500 fade-in-section">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold fade-in-section">Showcase of Our Work</h2>
          <div className="mt-4 h-px w-24 bg-barber-300 mx-auto fade-in-section"></div>
          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground fade-in-section">
            Browse through our gallery to see examples of our recent work and get inspired for your next visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="fade-in-section overflow-hidden rounded-lg shadow-sm cursor-pointer group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-10 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full h-auto max-h-[90vh] animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-full h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
