
import { useEffect, useRef } from 'react';
import { Scissors, Paintbrush, Clock, Repeat } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      title: "Precision Haircut",
      description: "Our signature precision cut is tailored to your face shape, hair type, and personal style for a perfect look.",
      icon: Scissors,
      price: "From $35"
    },
    {
      title: "Beard Styling",
      description: "Expert beard trimming, shaping, and detailing that enhances your facial features and complements your haircut.",
      icon: Paintbrush,
      price: "From $25"
    },
    {
      title: "Hot Towel Shave",
      description: "Experience our luxurious traditional hot towel shave with premium products for the smoothest result.",
      icon: Clock,
      price: "From $40"
    },
    {
      title: "Color & Highlights",
      description: "Subtle color enhancement to cover grays or bold statement colors, applied with expert precision.",
      icon: Repeat,
      price: "From $55"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-secondary">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-2 text-sm tracking-widest uppercase text-barber-500 fade-in-section">Our Specialties</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold fade-in-section">Premium Services</h2>
          <div className="mt-4 h-px w-24 bg-barber-300 mx-auto fade-in-section"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-sm p-8 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] fade-in-section"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-barber-50 text-barber-700 mb-6">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="text-lg font-semibold text-barber-700">{service.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in-section">
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
          >
            Book Your Appointment
          </a>
          <p className="mt-4 text-sm text-muted-foreground">Experience premium grooming services tailored just for you</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
