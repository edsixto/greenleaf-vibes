
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ExternalLink, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface HeroSectionProps {
  scrollToContact: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToContact
}) => {
  return <section className="hero-section relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-vegan-50 to-white">
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
            <span className="whitespace-nowrap">Own VegansHub.com for Just $247 Down</span>
            <ExternalLink className="ml-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          </a>
        </div>
        
        {/* Top Box Component - Compact and left aligned */}
        <div className="relative z-10 mb-6 max-w-[420px]">
          <div className="bg-white rounded-md shadow-md p-3">
            {/* CTA Button */}
            <a
              href="https://www.atom.com/payments/pay/ORgbU7hKDU"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded-md shadow-md mb-3 transition-colors"
            >
              <ShoppingCart className="mr-2 h-4 w-4 flex-shrink-0" />
              <span className="text-sm">Own VegansHub.com for Just $247 Down</span>
              <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0" />
            </a>
            
            {/* Logo Strip */}
            <div className="flex justify-center">
              <div className="flex space-x-4 items-center">
                <img src="https://s.googleusercontent.com/webtools/logos/godaddy-logo.svg" alt="GoDaddy" className="h-5 w-auto grayscale opacity-80" />
                <img src="https://atom.com/wp-content/uploads/2023/11/ATOM-LOGO-WHITE-scaled.jpg" alt="Atom.com" className="h-5 w-auto object-contain bg-gray-800 p-0.5 rounded grayscale opacity-80" />
                <img src="https://static.escrow.com/escrow/escrow-com-logo.svg" alt="Escrow.com" className="h-5 w-auto grayscale opacity-80" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="heading-xl text-vegan-900 mb-3 sm:mb-4 text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Stand Out in the Vegan Industry!
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-vegan-700 mb-4 sm:mb-6 text-center lg:text-left">
              VegansHub.com can give you an instantly recognizable brand to attract and engage your target audience.
            </h2>
            
            {/* Highlighted Domain Availability Box */}
            <Card className="mb-6 border-2 border-vegan-500 bg-gradient-to-r from-vegan-50 to-white shadow-lg animate-fade-in">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-vegan-800 text-xl sm:text-2xl text-center mb-3">
                  VegansHub.com is Available – Own It for Just $247 Down
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-vegan-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-vegan-700">Finance the final 3 payments for just $83/month.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-vegan-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-vegan-700">Or secure it with a one-time payment of $497.</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="https://www.atom.com/payments/pay/ORgbU7hKDU" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-vegan-600 hover:bg-vegan-700 text-white font-bold py-2 px-4 rounded-md transition-colors shadow-md">
                    <ShoppingCart className="mr-2 h-4 w-4 flex-shrink-0" />
                    <span>Purchase Domain Now</span>
                    <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0" />
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 text-center lg:text-left">
              <p className="text-sm text-vegan-600">
                🔹 This website is designed and built to showcase what your website could look like.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="outline" size="sm" className="border-vegan-200 text-vegan-700 hover:bg-vegan-50 text-xs sm:text-sm">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in lg:ml-auto mt-4 lg:mt-0">
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-10 h-10 sm:w-16 sm:h-16 bg-sky-100 rounded-full opacity-60" />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-14 h-14 sm:w-20 sm:h-20 bg-vegan-100 rounded-full opacity-60" />
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80" alt="Fresh vegan food" className="w-full h-auto object-cover" />
              
              {/* Domain sale indicator */}
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                Domain For Sale
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative shape */}
      <div className="absolute bottom-0 left-0 w-full h-8 sm:h-12 md:h-20 bg-white" style={{
      clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'
      }}></div>
    </section>;
};

export default HeroSection;
