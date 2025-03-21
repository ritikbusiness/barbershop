
import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // In a real application, you'd send this data to your server
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });
    }, 5000);
  };

  const hours = [
    { day: 'Monday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-2 text-sm tracking-widest uppercase text-barber-500 fade-in-section">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold fade-in-section">Book Your Appointment</h2>
          <div className="mt-4 h-px w-24 bg-barber-300 mx-auto fade-in-section"></div>
          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground fade-in-section">
            Ready for a fresh look? Book your appointment with our expert barbers today. Walk-ins are welcome, but appointments are recommended.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in-section">
            {isSubmitted ? (
              <div className="bg-green-50 text-green-700 p-8 rounded-lg border border-green-200 text-center">
                <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
                <h3 className="text-2xl font-semibold mb-2">Booking Received!</h3>
                <p className="mb-4">Thank you for choosing Elite Cuts. We'll confirm your appointment shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-white bg-green-600 hover:bg-green-700 px-6 py-2 rounded transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-barber-500 focus:border-barber-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-barber-500 focus:border-barber-500 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-barber-500 focus:border-barber-500 transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-barber-500 focus:border-barber-500 transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="haircut">Precision Haircut</option>
                      <option value="beard">Beard Styling</option>
                      <option value="shave">Hot Towel Shave</option>
                      <option value="color">Color & Highlights</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2">Preferred Date & Time</label>
                  <input
                    type="datetime-local"
                    id="date"
                    name="date"
                    value={formState.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-barber-500 focus:border-barber-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-barber-500 focus:border-barber-500 transition-all"
                    placeholder="Any special requests or preferences..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-md font-medium transition-all duration-300 hover:shadow-md"
                >
                  Book Appointment
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in-section">
            <div className="bg-barber-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-barber-700 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">123 Main Street, Downtown<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 text-barber-700 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">(212) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 text-barber-700 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">info@elitecuts.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-barber-50 p-8 rounded-lg">
              <div className="flex items-start mb-6">
                <Clock className="mr-4 text-barber-700 flex-shrink-0 mt-1" size={20} />
                <h3 className="text-2xl font-semibold">Business Hours</h3>
              </div>
              
              <div className="space-y-2">
                {hours.map((item) => (
                  <div key={item.day} className="flex justify-between py-2 border-b border-barber-100 last:border-0">
                    <span className="font-medium">{item.day}</span>
                    <span className={`${item.hours === 'Closed' ? 'text-red-500' : 'text-barber-700'}`}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
