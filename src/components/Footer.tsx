
import React from 'react';
import { Coffee, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Coffee className="h-8 w-8 text-coffee-light" />
              <span className="ml-2 text-xl font-bold">SmartBrew</span>
            </div>
            <p className="text-gray-300 mb-6">
              SmartBrew revolutionizes your coffee experience by putting brewing control right in your hands, anytime, anywhere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-coffee-light transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-coffee-light transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-coffee-light transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-coffee-light transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-coffee-light transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-coffee-light transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-coffee-light transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coffee-light transition-colors">Compatibility</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-coffee-light transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coffee-light transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coffee-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-coffee-light transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} SmartBrew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
