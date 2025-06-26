import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf0AtJIB8oBvsZF93aGH_QyGa6z-NorBHgk-h_sXASy8xUOsA/formResponse";
const ENTRY_NAME = "entry.2005620554";
const ENTRY_EMAIL = "entry.1045781291";
const ENTRY_PHONE = "entry.1166974658";
const ENTRY_MESSAGE = "entry.839337160";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append(ENTRY_NAME, name);
    formData.append(ENTRY_EMAIL, email);
    formData.append(ENTRY_PHONE, phone);
    formData.append(ENTRY_MESSAGE, message);

    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };


  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Want to talk? We'll call you. Leave your details and our team will reach out to discuss your needs.
          </p>
        </div>
        
        <div
          ref={ref}
          className={cn(
            "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              {/* Netlify form hidden input */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-DNA-blue hover:bg-DNA-darkblue text-white py-3 px-6 rounded-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
            </form>

          </div>
          
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Our Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-DNA-blue/10 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-DNA-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <p className="text-gray-600">+91 866 825 8845</p>
                    <a 
                      href="tel:+918668258845" 
                      className="text-DNA-blue hover:underline mt-1 inline-block"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-DNA-blue/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-DNA-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-gray-600">kunaldubey6969@gmail.com</p>
                    <a 
                      href="mailto:kunaldubey6969@gmail.com" 
                      className="text-DNA-blue hover:underline mt-1 inline-block"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-DNA-blue/10 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-DNA-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Address</h4>
                    <p className="text-gray-600">Pune, Maharashtra</p>
                    <p className="text-gray-600">412101, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-48 md:h-64 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2069&auto=format&fit=crop" 
                alt="DNA Office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
