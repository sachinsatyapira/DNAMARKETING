
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: -1,
    name: "Rahul Sharma",
    role: " Managing Director - Sharma Constructions",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 5,
    content: "Centra's digital marketing expertise has transformed our online presence completely. Their strategic approach helped us reach a wider audience and increased our sales by 35% in just two months. Truly impressed with their professionalism!"
  },
  {
    id: 1,
    name: "Amol Thokale",
    role: "Owner, House of Sneakers 24",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    content: "Centra's digital marketing expertise has transformed our online presence completely. Their strategic approach helped us reach a wider audience and increased our sales by 35% in just two months. Truly impressed with their professionalism!"
  },
  {
    id: 5,
    name: " Vikram Patel",
    role: "Skyline Developers",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    content: "Centra's digital marketing expertise has transformed our online presence completely. Their strategic approach helped us reach a wider audience and increased our sales by 35% in just two months. Truly impressed with their professionalism!"
  },
  {
    id: 2,
    name: "Ajay Dubey",
    role: "CEO, Kunal Cargo Logistics",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5,
    content: "Working with Centra has been a game-changer for our logistics business. Their targeted marketing strategies helped us connect with the right clients and expand our operations across multiple regions. Exceptional service and results!"
  },
  {
    id: 3,
    name: "Emma Roberts",
    role: "Brand Manager, Fashion Forward",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    content: "The team at Centra truly understands the fashion industry. They connected us with the perfect influencers for our brand image and helped us navigate social media trends effectively."
  },
  {
    id: 6,
    name: " Sunita Kapoor",
    role: "Marketing Head - Golden Square Mall",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    content: "Centra's digital marketing expertise has transformed our online presence completely. Their strategic approach helped us reach a wider audience and increased our sales by 35% in just two months. Truly impressed with their professionalism!"
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Operations Director, GlobalTech",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    rating: 5,
    content: "Exceptional service and impressive results. Centra's data-driven approach to digital marketing gave us clear insights into our campaign performance and helped us optimize our strategy."
  },

];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const visibleTestimonials = testimonials.slice(currentIndex * 3, (currentIndex * 3) + 3);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg
        key={i}
        className={cn("w-5 h-5", i < rating ? "text-yellow-400" : "text-gray-300")}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Centra.
          </p>
        </div>
        
        <div
          ref={ref}
          className={cn(
            "transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
          
          {testimonials.length > 3 && (
            <div className="flex justify-center mt-10 space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              {Array(Math.ceil(testimonials.length / 3)).fill(0).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "w-3 h-3 rounded-full mx-1",
                    i === currentIndex ? "bg-centra-blue" : "bg-gray-300"
                  )}
                />
              ))}
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
