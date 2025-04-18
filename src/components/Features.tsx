
import React, { useState } from 'react';
import { Clock, FileCheck, MailCheck, Bell } from 'lucide-react';
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
          ? 'bg-law-light/10 border border-law-light/30 shadow-lg' 
          : 'bg-background hover:bg-law-paper/50 border border-transparent'
        }
      `}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className={`
          p-3 rounded-lg mr-4
          ${isActive ? 'bg-law-light text-white' : 'bg-law-paper text-law-dark'}
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
      icon: FileCheck,
      title: "Automated Certificate Retrieval",
      description: "Get legal certificates from government websites with just a CNPJ number.",
      detail: "Our system connects directly to official government databases to retrieve certificates automatically. No more navigating complex websites or filling out repetitive forms. Just enter the CNPJ once and let our system handle the rest.",
    },
    {
      icon: Clock,
      title: "Real-time Progress Tracking",
      description: "Monitor the status of your certificate retrieval in real-time.",
      detail: "Watch as your certificate is processed through our system with a clean, informative progress display. You'll know exactly what's happening at each step, from connection to government systems to document verification and delivery.",
    },
    {
      icon: MailCheck,
      title: "Instant Email Delivery",
      description: "Receive certificates directly in your inbox as soon as they're ready.",
      detail: "Once retrieved, certificates are immediately sent to your specified email address in professional, organized format. They're ready to use, share, or archive according to your needs, with no additional formatting required.",
    },
    {
      icon: Bell,
      title: "Expiration Reminders",
      description: "Get alerted when your certificates are about to expire.",
      detail: "Never miss a renewal deadline again. Our system tracks expiration dates of all retrieved certificates and sends timely reminders, ensuring your legal documentation is always current and compliant with regulatory requirements.",
    },
  ];

  // Get the active feature icon component
  const ActiveIcon = features[activeFeature].icon;

  return (
    <section id="features" className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Streamlined Certificate Management</h2>
        <p className="text-lg text-muted-foreground">
          Designed for legal professionals who value efficiency and precision in document processing.
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
        
        <div className="bg-gradient-to-br from-law-paper/50 to-background rounded-2xl p-8 flex flex-col justify-center animate-float-up" style={{opacity: 0}}>
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <ActiveIcon className="mr-3 h-6 w-6 text-law-light" />
            {features[activeFeature].title}
          </h3>
          <p className="text-lg mb-6">{features[activeFeature].detail}</p>
          <Button className="bg-law-light hover:bg-law-medium text-white w-fit">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
