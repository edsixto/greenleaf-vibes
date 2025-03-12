
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If target date passed, set all to zero
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' }
  ];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center mb-1 text-primary">
        <Clock className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
        <span className="font-semibold text-xs sm:text-sm">Limited Time Offer</span>
      </div>
      
      <div className="flex space-x-1 sm:space-x-2">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white shadow-md rounded-lg p-1 sm:p-2 w-8 sm:w-10 animate-countdown-pulse">
              <div className="text-center font-bold text-xs sm:text-sm text-vegan-800">
                {unit.value.toString().padStart(2, '0')}
              </div>
            </div>
            <span className="text-[8px] sm:text-xs mt-0.5 text-muted-foreground">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
