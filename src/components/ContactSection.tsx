
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <h2 className="heading-lg text-vegan-900 mb-4">Get In Touch</h2>
            <p className="paragraph mb-8">
              Have questions about our services or ready to start your vegan journey? 
              Reach out to us today and our team will be happy to assist you.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-vegan-100 rounded-full">
                    <Mail className="h-5 w-5 text-vegan-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-vegan-900 mb-1">Email Us</h3>
                  <p className="text-muted-foreground">info@greenleaf.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-vegan-100 rounded-full">
                    <Phone className="h-5 w-5 text-vegan-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-vegan-900 mb-1">Call Us</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-vegan-100 rounded-full">
                    <MapPin className="h-5 w-5 text-vegan-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-vegan-900 mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Green Street, Plant City<br />
                    CA 12345, United States
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 animate-fade-in">
            <h3 className="heading-md text-vegan-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-vegan-900">
                    Full Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="border-vegan-200 focus-visible:ring-vegan-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-vegan-900">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="border-vegan-200 focus-visible:ring-vegan-400"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-vegan-900">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="Subject" 
                  className="border-vegan-200 focus-visible:ring-vegan-400"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-vegan-900">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message..." 
                  className="border-vegan-200 focus-visible:ring-vegan-400 min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full bg-vegan-500 hover:bg-vegan-600">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
