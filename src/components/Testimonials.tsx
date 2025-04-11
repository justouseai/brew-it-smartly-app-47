
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "It brews before I even open my eyes! My mornings have never been smoother.",
    author: "Sarah J.",
    role: "Marketing Executive"
  },
  {
    quote: "The recipe customization is incredible. I've dialed in my perfect cup over time.",
    author: "Michael T.",
    role: "Software Developer"
  },
  {
    quote: "Being able to start brewing from my phone when I'm heading home is a game-changer.",
    author: "Emma L.",
    role: "Healthcare Professional"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <div className="w-16 h-1 bg-coffee-light mx-auto"></div>
        </div>
        
        <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <Quote className="absolute text-coffee-light/20 h-24 w-24 -top-6 -left-6" />
          
          <div className="relative z-10">
            <p className="text-xl md:text-2xl italic mb-8">
              "{testimonials[activeIndex].quote}"
            </p>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-coffee-light/20 flex items-center justify-center text-coffee-light">
                {testimonials[activeIndex].author.charAt(0)}
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button 
              onClick={handlePrevious}
              className="p-2 rounded-full bg-coffee-cream hover:bg-coffee-light/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-coffee-cream hover:bg-coffee-light/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="absolute bottom-4 left-4 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? "bg-coffee-light" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
