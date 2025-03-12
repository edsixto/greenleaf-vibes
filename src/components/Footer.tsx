
import React from 'react';
import { Leaf, Instagram, Twitter, Facebook, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-vegan-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-vegan-400" />
              <span className="text-xl font-bold">VegansHub</span>
            </div>
            <p className="text-vegan-200 mb-6">
              Empowering a healthier, more sustainable world through plant-based living and conscious choices.
            </p>
            
            {/* Domain For Sale Banner */}
            <div className="bg-vegan-800 p-3 rounded-md mb-6 border border-vegan-700">
              <div className="flex items-center justify-between">
                <h4 className="text-vegan-200 font-semibold">VegansHub.com For Sale</h4>
                <a 
                  href="https://www.atom.com/payments/pay/ORgbU7hKDU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-vegan-400 hover:text-vegan-300 flex items-center"
                >
                  Details <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-vegan-800 hover:bg-vegan-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-vegan-800 hover:bg-vegan-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-vegan-800 hover:bg-vegan-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-vegan-800 hover:bg-vegan-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-vegan-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-vegan-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-vegan-200 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-vegan-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-vegan-200 hover:text-white transition-colors">Vegan Consultation</a></li>
              <li><a href="#" className="text-vegan-200 hover:text-white transition-colors">Meal Planning</a></li>
              <li><a href="#" className="text-vegan-200 hover:text-white transition-colors">Cooking Classes</a></li>
              <li><a href="#" className="text-vegan-200 hover:text-white transition-colors">Vegan Products</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-vegan-200 mb-4">
              Join our newsletter to receive updates and exclusive offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-vegan-800 text-white rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-vegan-400"
                disabled
              />
              <button
                type="button" // Changed to button instead of submit
                className="bg-vegan-500 hover:bg-vegan-600 px-4 py-2 rounded-r-md transition-colors cursor-not-allowed opacity-80"
                disabled
              >
                Join
              </button>
            </form>
            <p className="text-xs text-vegan-400 mt-2">* Form disabled for demonstration</p>
          </div>
        </div>
        
        <div className="border-t border-vegan-800 pt-8 mt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-vegan-300 mb-4 md:mb-0">
            &copy; {currentYear} VegansHub. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-vegan-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-vegan-300 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-vegan-300 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
