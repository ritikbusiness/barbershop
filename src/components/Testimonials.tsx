
import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const testimonials = [
    {
      name: "Alexander Mitchell",
      role: "Marketing Executive",
      testimonial: "The attention to detail at Elite Cuts is unmatched. James understood exactly what I was looking for and delivered beyond expectations. My go-to barber for three years now.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
    },
    {
      name: "Marcus Johnson",
      role: "Software Developer",
      testimonial: "Finally found a barber who knows how to handle my curly hair. The atmosphere is great, and the hot towel shave is an experience everyone should try at least once.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
    },
    {
      name: "David Williams",
      role: "Creative Director",
      testimonial: "As someone who values both style and efficiency, Elite Cuts hits all the marks. Professional service, great ambiance, and consistently excellent results every time.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={18} 
        className={index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
      />
    ));
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-barber-900 text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-2 text-sm tracking-widest uppercase text-barber-300 fade-in-section">Client Reviews</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold fade-in-section">What Our Clients Say</h2>
          <div className="mt-4 h-px w-24 bg-barber-700 mx-auto fade-in-section"></div>
        </div>

        <div className="max-w-4xl mx-auto fade-in-section">
          <div className="relative">
            <div 
              className="overflow-hidden" 
              style={{ height: '400px' }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 flex flex-col md:flex-row items-center gap-8 transition-all duration-500 p-6 ${
                    index === currentIndex 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-full pointer-events-none'
                  }`}
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-barber-700">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-xl italic mb-4">"{testimonial.testimonial}"</blockquote>
                    <div className="font-display font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-barber-300 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-barber-800 hover:bg-barber-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-barber-300 scale-125' : 'bg-barber-700 hover:bg-barber-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-barber-800 hover:bg-barber-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
