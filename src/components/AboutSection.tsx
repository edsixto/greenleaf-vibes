
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  const benefits = [
    'Plant-based nutrition expertise',
    'Sustainable and ethical practices',
    'Personalized wellness solutions',
    'Community-focused approach',
    'Science-backed methodologies',
    'Holistic health perspective'
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-vegan-100 rounded-full opacity-60" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-sky-100 rounded-full opacity-60" />
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80" 
                alt="Green nature" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="animate-fade-in order-1 lg:order-2">
            <h2 className="heading-lg text-vegan-900 mb-6">About GreenLeaf Vegan</h2>
            <p className="paragraph mb-6">
              Founded on the principles of compassion, sustainability, and wellness, GreenLeaf has been at the forefront of the plant-based movement for over a decade. Our mission is to make vegan living accessible, enjoyable, and beneficial for everyone.
            </p>
            <p className="paragraph mb-8">
              Our team of certified nutritionists, chefs, and wellness experts are dedicated to providing you with the highest quality products and services that support your health goals while honoring your commitment to ethical living.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <Check className="h-5 w-5 text-vegan-500" />
                  </div>
                  <span className="text-vegan-800">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-vegan-500 hover:bg-vegan-600">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
