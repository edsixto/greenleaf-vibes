
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

interface HeroSectionProps {
  scrollToContact: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToContact }) => {
  // Set target date to 15 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 15);

  return (
    <section className="hero-section relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-vegan-50 to-white">
      <div className="container-custom px-3 sm:px-4">
        {/* Domain For Sale Button - Centered above the heading */}
        <div className="text-center mb-4 sm:mb-6">
          <a 
            href="https://www.atom.com/payments/pay/ORgbU7hKDU" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-vegan-600 hover:bg-vegan-700 text-white font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded-md transition-colors shadow-md text-xs sm:text-sm"
          >
            <ShoppingCart className="mr-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="whitespace-nowrap">Domain For Sale</span>
            <span className="ml-1 text-[10px] sm:text-xs whitespace-nowrap">($497)</span>
            <ExternalLink className="ml-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="heading-xl text-vegan-900 mb-3 sm:mb-4 text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Fresh & Healthy <span className="text-vegan-500">Vegan</span> Lifestyle
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 md:pr-0 lg:pr-12 text-center lg:text-left">
              Discover the power of plant-based living with our premium vegan products 
              and services designed to enhance your health and wellbeing.
            </p>
            
            {/* Domain For Sale Banner */}
            <div className="bg-vegan-100 p-2.5 sm:p-4 rounded-lg mb-4 sm:mb-6 border border-vegan-300 animate-pulse">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-vegan-800 text-sm sm:text-base">VegansHub.com For Sale!</h3>
                  <p className="text-vegan-700 text-xs">Premium domain - Finance for just $83/month</p>
                </div>
                <div>
                  <CountdownTimer targetDate={targetDate} className="mb-1 text-xs sm:text-sm" />
                </div>
              </div>
              <div className="mt-2">
                <a 
                  href="https://www.atom.com/payments/pay/ORgbU7hKDU" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white font-bold py-1.5 px-3 rounded-md transition-colors text-xs sm:text-sm"
                >
                  <ShoppingCart className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">Buy Now - $497</span>
                  <span className="ml-1 text-[10px] sm:text-xs whitespace-nowrap">(Soon $2,750)</span>
                  <ExternalLink className="ml-1.5 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-vegan-200 text-vegan-700 hover:bg-vegan-50 text-xs sm:text-sm"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in lg:ml-auto mt-4 lg:mt-0">
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-10 h-10 sm:w-16 sm:h-16 bg-sky-100 rounded-full opacity-60" />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-14 h-14 sm:w-20 sm:h-20 bg-vegan-100 rounded-full opacity-60" />
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80" 
                alt="Fresh vegan food" 
                className="w-full h-auto object-cover"
              />
              
              {/* Domain sale indicator */}
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                Domain For Sale
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative shape */}
      <div className="absolute bottom-0 left-0 w-full h-8 sm:h-12 md:h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  );
};

export default HeroSection;
