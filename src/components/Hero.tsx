
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Coffee, ArrowRight, Smartphone } from "lucide-react";

const Hero = () => {
  const cupRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fill-cup');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    if (cupRef.current) {
      observer.observe(cupRef.current);
    }
    
    return () => {
      if (cupRef.current) observer.unobserve(cupRef.current);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background to-coffee-cream/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Coffee, Brewed by Time. <br />
              <span className="text-coffee-light">Controlled by You.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Schedule, customize, and brew perfect coffee directly from your smartphone. Because your morning shouldn't wait for you.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-coffee-light hover:bg-coffee-medium text-white text-lg px-6 py-6">
                Download App <Smartphone className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-lg px-6 py-6">
                How It Works <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Coffee cup */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-56 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl overflow-hidden">
                {/* Notification style */}
                <div className="h-6 w-full bg-gray-800 flex items-center px-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-auto text-xs text-white">SmartBrew</div>
                </div>
                
                {/* Cup content */}
                <div className="p-4 text-center">
                  <Coffee className="h-8 w-8 mx-auto mb-2 text-coffee-light" />
                  <h3 className="text-lg font-semibold">Your coffee is ready!</h3>
                  <p className="text-sm text-gray-600">Perfect timing, as scheduled.</p>
                  
                  {/* Coffee cup visual */}
                  <div className="mt-4 relative w-32 h-32 mx-auto">
                    <div className="absolute bottom-0 w-full h-24 bg-coffee-dark rounded-b-3xl rounded-t-lg border-2 border-gray-800 overflow-hidden">
                      {/* Coffee liquid */}
                      <div 
                        ref={cupRef}
                        className="absolute bottom-0 w-full bg-coffee-medium opacity-80" 
                        style={{ height: '0%' }}
                      ></div>
                      
                      {/* Steam */}
                      <div className="absolute -top-8 left-1/4 steam animate-steam delay-100"></div>
                      <div className="absolute -top-8 left-1/2 steam animate-steam delay-300"></div>
                      <div className="absolute -top-8 left-3/4 steam animate-steam delay-500"></div>
                    </div>
                    {/* Cup handle */}
                    <div className="absolute right-0 top-1/4 w-8 h-12 border-4 border-gray-800 rounded-r-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
