
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  className 
}) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card-hover border border-border", 
      className
    )}>
      <div className="inline-flex items-center justify-center p-3 bg-vegan-100 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-vegan-600" />
      </div>
      <h3 className="heading-md mb-2 text-vegan-900">{title}</h3>
      <p className="paragraph">{description}</p>
    </div>
  );
};

export default ServiceCard;
