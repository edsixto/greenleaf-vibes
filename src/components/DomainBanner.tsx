
import React from 'react';
import { ExternalLink, X } from 'lucide-react';

interface DomainBannerProps {
  onClose: () => void;
}

const DomainBanner: React.FC<DomainBannerProps> = ({ onClose }) => {
  return (
    <div className="bg-gradient-to-r from-sky-100 to-vegan-100 py-3 sm:py-4 shadow-md relative">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center px-2">
          <a 
            href="https://www.atom.com/payments/pay/ORgbU7hKDU" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-vegan-800 font-medium hover:text-vegan-900 transition-colors text-base sm:text-lg text-center"
          >
            Domain For Sale - VegansHub.com
            <ExternalLink className="ml-2 h-5 w-5 flex-shrink-0" />
          </a>
          <p className="text-xs sm:text-sm text-vegan-700 mt-1 text-center">
            This website is designed and built to showcase what your website could look like.
          </p>
        </div>
        
        <button 
          onClick={onClose}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default DomainBanner;
