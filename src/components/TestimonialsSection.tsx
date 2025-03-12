
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Wellness Coach',
      quote: 'GreenLeaf transformed my approach to nutrition. Their meal planning service has made it so easy to maintain a balanced vegan diet while managing my busy schedule.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Restaurant Owner',
      quote: 'The cooking workshops changed the way I approach plant-based cuisine. I've incorporated many of their techniques into my restaurant's menu with amazing feedback.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Yoga Instructor',
      quote: 'Their holistic approach to wellness aligns perfectly with my yoga practice. The personalized consultation helped me optimize my nutrition for better performance.',
      rating: 4
    },
    {
      name: 'David Thompson',
      role: 'New to Vegan Living',
      quote: 'As someone new to veganism, their resources and support made the transition smooth and enjoyable. I don't feel like I'm missing out on anything!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-vegan-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-vegan-900 mb-4">What Our Community Says</h2>
          <p className="paragraph">
            Hear from our clients who have experienced the transformative benefits of our vegan services and products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              rating={testimonial.rating}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
