
import React, { useState } from 'react';
import { Clock, Smartphone, BookOpen, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  isActive,
  onClick,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div 
      className={`
        p-6 rounded-xl transition-all duration-300 cursor-pointer
        ${isActive 
          ? 'bg-coffee-light/10 border border-coffee-light/30 shadow-lg' 
          : 'bg-background hover:bg-coffee-cream/50 border border-transparent'
        }
      `}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className={`
          p-3 rounded-lg mr-4
          ${isActive ? 'bg-coffee-light text-white' : 'bg-coffee-cream text-coffee-dark'}
        `}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      icon: Clock,
      title: "Automatic Brew Timer",
      description: "Schedule your coffee to brew at specific times, even on recurring days of the week.",
      detail: "Never wake up to an empty coffee pot again. With SmartBrew's precision timer, you can set your coffee to start brewing before your alarm goes off. Schedule daily brews for workdays, different times for weekends, or one-time special occasions.",
    },
    {
      icon: Smartphone,
      title: "Remote Control",
      description: "Start, stop, or adjust your coffee brewing from anywhere with your phone.",
      detail: "Forgot to set the timer? No problem. With SmartBrew's remote control feature, you can start brewing while still in bed, on your commute home, or from anywhere with an internet connection. Full control in the palm of your hand.",
    },
    {
      icon: BookOpen,
      title: "Recipe Customization",
      description: "Create and save your perfect coffee recipes with precise measurements.",
      detail: "Everyone has their perfect cup. SmartBrew lets you fine-tune water temperature, brew strength, and even pre-infusion times. Save multiple recipes for different moods or family members, and switch between them with a tap.",
    },
    {
      icon: Bell,
      title: "Inventory Alerts",
      description: "Get notified when you're running low on coffee beans, water, or filters.",
      detail: "SmartBrew's sensors monitor your coffee maker's status and send timely alerts when supplies are running low. Never be caught without your morning coffee essentials again. The app also tracks usage patterns to predict when you'll need to restock.",
    },
  ];

  return (
    <section id="features" className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Features for Coffee Lovers</h2>
        <p className="text-lg text-muted-foreground">
          Control every aspect of your brewing experience with technology designed around your coffee routine.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isActive={index === activeFeature}
              onClick={() => setActiveFeature(index)}
            />
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-coffee-cream/50 to-background rounded-2xl p-8 flex flex-col justify-center animate-float-up" style={{opacity: 0}}>
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <features[activeFeature].icon className="mr-3 h-6 w-6 text-coffee-light" />
            {features[activeFeature].title}
          </h3>
          <p className="text-lg mb-6">{features[activeFeature].detail}</p>
          <Button className="bg-coffee-light hover:bg-coffee-medium text-white w-fit">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
