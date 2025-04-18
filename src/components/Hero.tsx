
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, SearchCheck } from "lucide-react";
import CertificateForm from './CertificateForm';

const Hero = () => {
  const documentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-float-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    if (documentRef.current) {
      observer.observe(documentRef.current);
    }
    
    return () => {
      if (documentRef.current) observer.unobserve(documentRef.current);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background to-law-paper/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Certificates, Retrieved <br />
              <span className="text-law-light">Automatically.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Simplify your legal workflow with automated certificate retrieval from government institutions. Enter a CNPJ, receive documents instantly.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-law-light hover:bg-law-medium text-white text-lg px-6 py-6">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-lg px-6 py-6">
                How It Works <SearchCheck className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full md:w-80">
                {/* Certificate Form Module */}
                <CertificateForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
