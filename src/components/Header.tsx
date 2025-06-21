
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-black/10 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center ">
          <a href="/" className="flex items-center">
            <img 
              src={"/lovable-uploads/image-removebg-preview.png"} 
              alt="DNA Logo" 
              className="h-10 w-auto drop-shadow-md"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button 
            variant="ghost" 
            className={cn(
              'font-medium hover:bg-transparent',
              isScrolled ? 'text-DNA-black hover:text-DNA-blue' : 'text-white hover:text-white/80'
            )}
            onClick={() => scrollToSection('about')}
          >
            About Us
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className={cn(
                  'font-medium hover:bg-transparent flex items-center',
                  isScrolled ? 'text-DNA-black hover:text-DNA-blue' : 'text-white hover:text-white/80'
                )}
              >
                More <ChevronDown className="ml-1 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 bg-white">
              <DropdownMenuItem onClick={() => scrollToSection('testimonials')}>
                Testimonials
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('blog')}>
                Blog / Resources
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('contact')}>
                Contact Us
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection('faq')}>
                FAQ
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={cn(
            'w-6 h-0.5 mb-1.5 transition-all duration-300',
            isScrolled ? 'bg-DNA-black' : 'bg-white',
            mobileMenuOpen && 'transform rotate-45 translate-y-2'
          )}></div>
          <div className={cn(
            'w-6 h-0.5 mb-1.5 transition-all duration-300',
            isScrolled ? 'bg-DNA-black' : 'bg-white',
            mobileMenuOpen && 'opacity-0'
          )}></div>
          <div className={cn(
            'w-6 h-0.5 transition-all duration-300',
            isScrolled ? 'bg-DNA-black' : 'bg-white',
            mobileMenuOpen && 'transform -rotate-45 -translate-y-2'
          )}></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        'fixed inset-0 bg-white z-40 pt-20 px-4 transform transition-transform duration-300 ease-in-out md:hidden',
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="flex flex-col space-y-4">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-lg font-medium hover:bg-gray-100 hover:text-DNA-blue"
            onClick={() => scrollToSection('about')}
          >
            About Us
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-lg font-medium hover:bg-gray-100 hover:text-DNA-blue"
            onClick={() => scrollToSection('testimonials')}
          >
            Testimonials
          </Button>
          <Button 
            variant="ghost"
            className="w-full justify-start text-lg font-medium hover:bg-gray-100 hover:text-DNA-blue"
            onClick={() => scrollToSection('blog')}
          >
            Blog / Resources
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-lg font-medium hover:bg-gray-100 hover:text-DNA-blue"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-lg font-medium hover:bg-gray-100 hover:text-DNA-blue"
            onClick={() => scrollToSection('faq')}
          >
            FAQ
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

