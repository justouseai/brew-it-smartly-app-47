
import React from 'react';
import { Scale, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-law-dark text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Scale className="h-8 w-8 text-law-light" />
              <span className="ml-2 text-xl font-bold">Certify<span className="text-law-light">Legal</span></span>
            </div>
            <p className="text-gray-300 mb-6">
              CertifyLegal streamlines the certificate retrieval process for legal professionals, saving time and reducing administrative burden.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-law-light transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-law-light transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-law-light transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-law-light transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-law-light transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-law-light transition-colors">How It Works</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-law-light transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-law-light transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-law-light transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-light transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-light transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-law-light transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} CertifyLegal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
