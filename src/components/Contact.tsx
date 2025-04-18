
import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactCard = ({ children, icon: Icon, title }: { children: React.ReactNode; icon: React.ElementType; title: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
    <div className="flex flex-col items-center text-center">
      <div className="p-3 bg-law-light/10 rounded-full mb-4">
        <Icon className="h-6 w-6 text-law-light" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div className="text-muted-foreground">{children}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-gradient-to-b from-background to-law-paper/40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Simplifying Your Legal Workflow</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join thousands of legal professionals who have streamlined their certificate retrieval process with CertifyLegal.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ContactCard icon={Mail} title="Email Us">
            <p>support@certifylegal.com</p>
            <p>For general inquiries and support</p>
          </ContactCard>
          
          <ContactCard icon={Phone} title="Call Us">
            <p>+55 11 4002-8922</p>
            <p>Mon-Fri, 9AM-6PM BRT</p>
          </ContactCard>
          
          <ContactCard icon={MessageSquare} title="Live Chat">
            <p>Available on our platform</p>
            <p>Quick responses during business hours</p>
          </ContactCard>
        </div>
        
        <div className="p-8 bg-white rounded-xl shadow-md border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6">Request a Demo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-law-light"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-law-light"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-law-light"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="How can we help you?"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-law-light"
            ></textarea>
          </div>
          <Button className="bg-law-light hover:bg-law-medium text-white px-8 py-3 w-full md:w-auto">
            Schedule Demo
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Your information will not be shared with third parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
