
import React from 'react';
import { Sprout, Salad, Utensils, ShoppingBag, Heart, BookOpen } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Sprout,
      title: 'Vegan Consultation',
      description: 'Personalized guidance for transitioning to a plant-based lifestyle with expert nutritional advice.'
    },
    {
      icon: Salad,
      title: 'Meal Planning',
      description: 'Custom meal plans designed around your nutritional needs, taste preferences, and health goals.'
    },
    {
      icon: Utensils,
      title: 'Cooking Classes',
      description: 'Learn to prepare delicious vegan meals with our interactive online and in-person cooking workshops.'
    },
    {
      icon: ShoppingBag,
      title: 'Vegan Products',
      description: 'Premium selection of plant-based products, from specialty foods to eco-friendly home essentials.'
    },
    {
      icon: Heart,
      title: 'Health Coaching',
      description: 'Holistic approach to wellness through plant-based nutrition, exercise, and mindfulness practices.'
    },
    {
      icon: BookOpen,
      title: 'Educational Resources',
      description: 'Comprehensive guides, recipes, and scientific information on the benefits of vegan living.'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-vegan-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-vegan-900 mb-4">Our Premium Vegan Services</h2>
          <p className="paragraph">
            Discover our comprehensive range of services designed to support your vegan journey,
            from nutrition guidance to culinary education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
