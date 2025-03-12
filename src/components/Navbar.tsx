
import React, { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-vegan-500" />
            <span className="text-xl font-bold text-vegan-900">VegansHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="nav-link font-medium">Services</button>
            <button onClick={() => scrollToSection('about')} className="nav-link font-medium">About</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link font-medium">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link font-medium">Contact</button>
            <Button onClick={() => scrollToSection('contact')} className="bg-vegan-500 hover:bg-vegan-600">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          <button onClick={() => scrollToSection('services')} className="py-2 px-4 text-left hover:bg-secondary rounded-md">Services</button>
          <button onClick={() => scrollToSection('about')} className="py-2 px-4 text-left hover:bg-secondary rounded-md">About</button>
          <button onClick={() => scrollToSection('testimonials')} className="py-2 px-4 text-left hover:bg-secondary rounded-md">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="py-2 px-4 text-left hover:bg-secondary rounded-md">Contact</button>
          <Button onClick={() => scrollToSection('contact')} className="bg-vegan-500 hover:bg-vegan-600 w-full mt-2">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
