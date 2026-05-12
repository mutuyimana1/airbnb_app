import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';
import imgTestimonialBg from "../../imports/1920WDefault/370dc16c1acd1f3b66939bb9bfd9efd9e4401024.png";

const testimonials = [
  {
    id: 1,
    quote: "This platform helped me discover amazing places I never knew existed. The listings are accurate and the booking process is seamless. Highly recommended!",
    author: "Sarah Johnson",
    role: "Travel Blogger",
  },
  {
    id: 2,
    quote: "Outstanding service! I found the perfect vacation spot for my family. The detailed descriptions and photos made it easy to choose. Will definitely use again!",
    author: "Michael Chen",
    role: "Business Owner",
  },
  {
    id: 3,
    quote: "Love how easy it is to find and compare different locations. The search filters are intuitive and the customer support is excellent. Five stars!",
    author: "Emma Williams",
    role: "Photographer",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={imgTestimonialBg}
          alt="Testimonial Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Quote Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-orange-500/20 backdrop-blur-sm rounded-full p-6">
            <Quote className="text-orange-500" size={48} />
          </div>
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-white text-2xl md:text-3xl mb-8 leading-relaxed italic">
          "{currentTestimonial.quote}"
        </blockquote>

        {/* Author */}
        <div className="mb-8">
          <p className="text-white text-xl mb-1">{currentTestimonial.author}</p>
          <p className="text-orange-500">{currentTestimonial.role}</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevious}
            className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-orange-500 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange-500 w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-orange-500 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
