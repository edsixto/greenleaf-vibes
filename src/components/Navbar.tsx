
import React, { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
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
      <div className="container-custom py-2 px-2 sm:px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <Leaf className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-vegan-500" />
            <span className="text-base sm:text-lg md:text-xl font-bold text-vegan-900">VegansHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button onClick={() => scrollToSection('services')} className="nav-link font-medium text-sm lg:text-base">Services</button>
            <button onClick={() => scrollToSection('about')} className="nav-link font-medium text-sm lg:text-base">About</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link font-medium text-sm lg:text-base">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link font-medium text-sm lg:text-base">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
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
        <div className="container-custom py-2 flex flex-col space-y-1">
          <button onClick={() => scrollToSection('services')} className="py-2 px-3 text-left hover:bg-secondary rounded-md text-sm">Services</button>
          <button onClick={() => scrollToSection('about')} className="py-2 px-3 text-left hover:bg-secondary rounded-md text-sm">About</button>
          <button onClick={() => scrollToSection('testimonials')} className="py-2 px-3 text-left hover:bg-secondary rounded-md text-sm">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="py-2 px-3 text-left hover:bg-secondary rounded-md text-sm">Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
