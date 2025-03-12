
import React from 'react';
import { X } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

interface DomainBannerProps {
  onClose: () => void;
}

const DomainBanner: React.FC<DomainBannerProps> = ({ onClose }) => {
  // Set target date to 15 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 15);

  return (
    <div className="bg-gradient-to-r from-sky-100 to-vegan-100 py-3 shadow-md relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-center lg:text-left">
            <h3 className="font-semibold text-vegan-800">
              This domain is for sale! <span className="font-bold">VegansHub.com</span>
            </h3>
            <p className="text-sm text-vegan-700">
              Premium vegan domain - perfect for your business or <span className="font-bold">finance for just $83/month</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Price increases to:</p>
              <div className="flex items-center gap-2">
                <span className="text-vegan-700 text-lg font-bold">$497</span>
                <span className="text-muted-foreground font-medium">→</span>
                <span className="text-vegan-800 text-xl font-bold">$27,950</span>
              </div>
            </div>
            
            <CountdownTimer targetDate={targetDate} className="mt-2 sm:mt-0" />
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
