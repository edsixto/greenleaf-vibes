
import React from 'react';
import { ExternalLink, X } from 'lucide-react';

interface DomainBannerProps {
  onClose: () => void;
}

const DomainBanner: React.FC<DomainBannerProps> = ({ onClose }) => {
  return (
    <div className="bg-gradient-to-r from-sky-100 to-vegan-100 py-2 shadow-md relative">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center px-2 py-1">
          <a 
            href="https://www.atom.com/payments/pay/ORgbU7hKDU" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-vegan-800 font-medium hover:text-vegan-900 transition-colors text-sm sm:text-base md:text-lg text-center"
          >
            Domain For Sale - VegansHub.com
            <ExternalLink className="ml-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
          </a>
          <p className="text-xs sm:text-sm text-vegan-700 mt-0.5 text-center max-w-xs sm:max-w-none px-2">
            This website is designed and built to showcase what your website could look like.
          </p>
        </div>
        
        <button 
          onClick={onClose}
          className="absolute right-1 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default DomainBanner;
