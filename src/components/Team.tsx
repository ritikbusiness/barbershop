
import { useEffect, useRef } from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Team = () => {
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

  const team = [
    {
      name: "James Wilson",
      role: "Master Barber & Founder",
      image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
      bio: "With over 15 years of experience, James brings unmatched skill and vision to every haircut.",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Senior Stylist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
      bio: "Michael specializes in contemporary styles with a focus on precision fades and texture work.",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Daniel Rodriguez",
      role: "Beard Specialist",
      image: "https://images.unsplash.com/photo-1578176603894-57973e38890f?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
      bio: "Daniel is our beard expert, creating perfectly sculpted facial hair tailored to your features.",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Robert Thomas",
      role: "Color Expert",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
      bio: "Robert brings artistry to color, specializing in natural-looking gray coverage and highlights.",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-2 text-sm tracking-widest uppercase text-barber-500 fade-in-section">Meet Our Experts</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold fade-in-section">The Masters Behind The Chair</h2>
          <div className="mt-4 h-px w-24 bg-barber-300 mx-auto fade-in-section"></div>
          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground fade-in-section">
            Our team of skilled barbers combines years of experience with a passion for their craft. Each member brings unique expertise to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className="fade-in-section bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-barber-600 mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={member.social.instagram} className="text-barber-700 hover:text-barber-500 transition-colors">
                    <Instagram size={18} />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href={member.social.twitter} className="text-barber-700 hover:text-barber-500 transition-colors">
                    <Twitter size={18} />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href={member.social.linkedin} className="text-barber-700 hover:text-barber-500 transition-colors">
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
