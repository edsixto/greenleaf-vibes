
import React from 'react';
import { Info, X } from 'lucide-react';

interface DomainBannerProps {
  onClose: () => void;
}

const DomainBanner: React.FC<DomainBannerProps> = ({ onClose }) => {
  return (
    <div className="bg-gradient-to-r from-sky-100 to-vegan-100 py-3 shadow-md relative">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-2">
          <Info className="h-5 w-5 text-vegan-800" />
          <p className="text-sm font-medium text-vegan-800">
            Welcome to the future of plant-based living!
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
