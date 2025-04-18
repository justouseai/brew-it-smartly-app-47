
import React from 'react';
import { ShieldCheck, Clock, Server, Lock } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
    <div className="p-3 bg-law-light/10 rounded-lg w-fit mb-4">
      <Icon className="h-6 w-6 text-law-light" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Compliance Focused",
      description: "Our system adheres to all regulatory requirements for secure document handling and data privacy."
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "We understand the value of your time. Our automation reduces administrative overhead by up to 90%."
    },
    {
      icon: Server,
      title: "Reliable Systems",
      description: "Built with enterprise-grade infrastructure ensuring 99.9% uptime and consistent performance."
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "End-to-end encryption and strict access controls protect all sensitive information."
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About CertifyLegal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Developed by legal professionals for legal professionals, our platform addresses the specific challenges of document retrieval in the legal sector.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              At CertifyLegal, we're committed to streamlining the administrative burden that often weighs down legal professionals. Our mission is to automate routine document retrieval processes, allowing you to focus on what matters most: serving your clients with excellence.
            </p>
            <p className="text-muted-foreground">
              Founded in 2020 by a team of attorneys and technology specialists, CertifyLegal was born from firsthand experience with the inefficiencies of manual certificate retrieval processes.
            </p>
          </div>
          
          <div className="bg-law-paper/30 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4">By The Numbers</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-law-light">98%</p>
                <p className="text-sm text-muted-foreground">Time Saved</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-law-light">5,000+</p>
                <p className="text-sm text-muted-foreground">Law Firms</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-law-light">1M+</p>
                <p className="text-sm text-muted-foreground">Certificates Retrieved</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-law-light">99.9%</p>
                <p className="text-sm text-muted-foreground">Service Uptime</p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-6 text-center">Our Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
