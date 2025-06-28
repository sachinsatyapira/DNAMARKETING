
import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="bg-DNA-black text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/1-removebg-preview.png" 
                alt="DNA Logo" 
                className="h-30 w-auto mr-3 drop-shadow-md"
              />
              
            </div>
            
            <p className="text-gray-400 mb-6">
              Connecting brands with powerful digital voices through strategic marketing solutions.
            </p>
            
            <div className="flex space-x-4">
              <a href="tel:+918668258845" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-DNA-blue transition-colors flex items-center justify-center">
                <Phone size={18} />
              </a>
              <a href="mailto:dnamarketingpune@gmail.com" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-DNA-blue transition-colors flex items-center justify-center">
                <Mail size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-DNA-blue transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-DNA-blue transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-DNA-blue transition-colors">About Us</a></li>
              <li><a href="#" onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-DNA-blue transition-colors">Testimonials</a></li>
              <li><a href="#" onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-DNA-blue transition-colors">Blog</a></li>
              <li><a href="#" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-DNA-blue transition-colors">Contact Us</a></li>
              <li><a href="#" onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-DNA-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-DNA-blue" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>19/2, HINJEWADI WAKAD ROAD, Hinjewadi, Pune, Maharashtra<br />412101, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-DNA-blue" />
                <span>+91 966 515 4378</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-DNA-blue" />
                <span>dnamarketingpune@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-gray-200 focus:border-DNA-blue"
              />
              <Button 
                type="submit" 
                className="bg-DNA-blue hover:bg-DNA-darkblue text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} DNA. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-gray-400 hover:text-DNA-blue transition-colors text-sm">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-DNA-blue transition-colors text-sm">Terms of Service</a>
            <a href="/cookie-policy" className="text-gray-400 hover:text-DNA-blue transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
