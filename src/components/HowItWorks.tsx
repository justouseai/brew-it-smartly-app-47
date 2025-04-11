
import React, { useEffect, useRef } from 'react';
import { Droplet, Smartphone, Coffee, Bell } from 'lucide-react';

const StepCard = ({ 
  number, 
  title, 
  description, 
  icon: Icon 
}: { 
  number: number;
  title: string; 
  description: string; 
  icon: React.ElementType 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-float-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="relative p-6 bg-white rounded-xl shadow-md border border-coffee-cream opacity-0" 
      style={{ transitionDelay: `${number * 150}ms` }}
    >
      <div className="absolute -left-4 -top-4 bg-coffee-light text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="mb-4 text-coffee-light">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: Droplet,
      title: "Fill Once",
      description: "Fill your machine with coffee, water, milk, or any ingredients your recipe requires.",
    },
    {
      icon: Smartphone,
      title: "Set & Forget",
      description: "Use the app to set your brewing time or control it remotely whenever you want.",
    },
    {
      icon: Coffee,
      title: "Automatic Brewing",
      description: "SmartBrew starts brewing automatically at your scheduled time or on-demand.",
    },
    {
      icon: Bell,
      title: "Get Notified",
      description: "Receive alerts when your coffee is ready or when ingredients are running low.",
    }
  ];

  return (
    <section id="how-it-works" className="section-container bg-coffee-cream/20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-muted-foreground">
          Simple steps to transform your coffee routine with SmartBrew technology.
        </p>
      </div>
      
      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-coffee-light/30 -translate-x-1/2 hidden md:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-24">
          {steps.map((step, index) => (
            <div key={index} className={`${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <StepCard 
                number={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
