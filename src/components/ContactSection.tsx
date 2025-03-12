
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, ExternalLink, Tag } from 'lucide-react';

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
                  <p className="text-muted-foreground">info@veganshub.com</p>
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
                  <p className="text-muted-foreground">(555) XXX-XXXX</p>
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
            
            {/* Domain for sale callout */}
            <div className="mt-8 bg-vegan-50 p-4 rounded-lg border border-vegan-200">
              <div className="flex items-center">
                <Tag className="h-6 w-6 text-vegan-600 mr-2" />
                <h3 className="font-semibold text-vegan-800">Premium Domain For Sale</h3>
              </div>
              <p className="text-vegan-700 my-2">
                The VegansHub.com domain is available for purchase at a special rate for a limited time.
              </p>
              <a 
                href="https://www.atom.com/payments/pay/ORgbU7hKDU" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 font-medium"
              >
                Purchase Domain <ExternalLink className="ml-1 h-4 w-4" />
              </a>
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
                    disabled
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
                    disabled
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
                  disabled
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
                  disabled
                />
              </div>
              
              <Button 
                type="button" 
                className="w-full bg-vegan-500 hover:bg-vegan-600 cursor-not-allowed opacity-80"
                disabled
              >
                Send Message
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                * This form is currently disabled for demonstration purposes
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
