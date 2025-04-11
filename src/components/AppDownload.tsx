
import React from 'react';
import { AppleIcon, QrCode } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AppStoreButton = ({ children, icon: Icon }: { children: React.ReactNode; icon: React.ElementType }) => (
  <Button 
    variant="outline" 
    className="flex items-center justify-center px-6 py-3 border-2 border-foreground/20 rounded-xl hover:bg-foreground/5 transition-colors"
  >
    <Icon className="mr-3 h-6 w-6" />
    <div className="text-left">
      <div className="text-xs">Download on the</div>
      <div className="font-semibold text-lg">{children}</div>
    </div>
  </Button>
);

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M5.26 3.25C4.76 3.25 4.35 3.65 4.35 4.15V19.85C4.35 20.35 4.76 20.75 5.26 20.75H18.74C19.24 20.75 19.65 20.35 19.65 19.85V4.15C19.65 3.65 19.24 3.25 18.74 3.25H5.26ZM5.89 7.91L12.5 14.53L19.11 7.91C19.29 7.73 19.29 7.43 19.11 7.25C18.93 7.07 18.63 7.07 18.45 7.25L12.5 13.21L6.55 7.25C6.37 7.07 6.07 7.07 5.89 7.25C5.71 7.43 5.71 7.73 5.89 7.91Z" />
  </svg>
);

const AppDownload = () => {
  return (
    <section className="section-container bg-gradient-to-b from-background to-coffee-cream/40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Coffee Routine?</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Download SmartBrew today and join thousands of coffee lovers who've revolutionized their morning brew.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Get the App</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AppStoreButton icon={AppleIcon}>App Store</AppStoreButton>
              <AppStoreButton icon={GooglePlayIcon}>Google Play</AppStoreButton>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-xl shadow-lg mb-4">
              <QrCode className="w-32 h-32 md:w-48 md:h-48" />
            </div>
            <p className="text-sm text-muted-foreground">Scan to download</p>
          </div>
        </div>
        
        <div className="mt-16 p-6 bg-white rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">Be the first to brew smarter</h3>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-coffee-light"
            />
            <Button className="bg-coffee-light hover:bg-coffee-medium text-white">
              Join the Brew Crew
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            We'll send you product updates and special offers. No spam, just coffee talk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
