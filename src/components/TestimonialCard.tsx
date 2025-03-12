
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  imageSrc?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  quote,
  rating,
  imageSrc,
  className,
  style
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card-hover border border-border flex flex-col h-full",
        className
      )}
      style={style}
    >
      {/* Stars */}
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-gray-700 italic mb-6 flex-grow">"{quote}"</blockquote>
      
      {/* Person */}
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 bg-vegan-100 rounded-full overflow-hidden mr-4 flex items-center justify-center text-vegan-500 font-bold">
          {imageSrc ? (
            <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <h4 className="font-semibold text-vegan-900">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
