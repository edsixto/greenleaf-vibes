
import React from 'react';
import { X } from 'lucide-react';

interface DomainBannerProps {
  onClose: () => void;
}

const DomainBanner: React.FC<DomainBannerProps> = ({ onClose }) => {
  return (
    <div className="bg-gradient-to-r from-sky-100 to-vegan-100 py-3 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="text-center lg:text-left">
            <h3 className="font-semibold text-vegan-800">
              This domain is for sale! <span className="font-bold">VegansHub.com</span>
            </h3>
            <p className="text-sm text-vegan-700">
              Premium vegan domain - perfect for your business or <span className="font-bold">finance for just $83/month</span>
            </p>
            <p className="text-xs text-vegan-700 mt-1">
              Limited time offer: <span className="font-bold">$497</span> (regular price: <span className="font-bold">$2,750</span>)
            </p>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="absolute right-2 top-2 p-1 text-gray-500 hover:text-gray-700"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default DomainBanner;
