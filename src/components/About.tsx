
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Move } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: founderRef, inView: foundersInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={ref}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About DNA</h2>
              <p className="text-lg text-gray-700 mb-4">
                 DNA Das and Associates is your dedicated digital marketing partner in the real estate industry. We
 understand the unique challenges builders, brokers, and developers face in today's competitive market.
 Our specialized approach combines industry expertise with cutting-edge digital strategies to drive
 qualified leads, increase brand visibility, and accelerate sales.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                 With years of experience exclusively serving the real estate sector, we've helped hundreds of projects
 achieve remarkable growth through targeted digital campaigns. From luxury residential developments to
 commercial complexes, we know what works in real estate marketing.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-centra-blue/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-centra-blue">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Global Reach</h4>
                    <p className="text-gray-600">Connecting brands worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-centra-blue/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-centra-blue">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Fast Results</h4>
                    <p className="text-gray-600">Quick turnaround time</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-centra-blue/10 flex items-center justify-center mr-4">
                    <TrendingUp className="text-centra-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Data Driven</h4>
                    <p className="text-gray-600">Insights-based strategies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-centra-blue/10 flex items-center justify-center mr-4">
                    <Users className="text-centra-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Fresh Ideas</h4>
                    <p className="text-gray-600">Young, innovative team</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-centra-blue/10 rounded-lg"></div>
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-centra-blue/10 rounded-lg"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/urban-traffic-with-cityscape.jpg" 
                    alt="Centra Team" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div 
            ref={founderRef}
            className={cn(
              "mt-20 transition-all duration-1000",
              foundersInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Meet Our Leadership</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className={cn(
                "overflow-hidden transition-all duration-500 hover:shadow-lg",
                foundersInView ? "animate-fade-in" : ""
              )} style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="mb-4">
                    <div className="w-32 h-32 rounded-full bg-centra-blue/10 flex items-center justify-center relative">
                      <div className="absolute w-32 h-32 rounded-full bg-white border-4 border-white shadow-lg overflow-hidden">
                        <img 
                          src="/lovable-uploads/0c687343-fd1c-4320-a014-230c4cd1766a.png" 
                          alt="Founder & CEO"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute -right-2 -bottom-2 w-10 h-10 rounded-full bg-centra-blue/20"></div>
                      <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-centra-blue/20"></div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold">Kunal Dubey</h4>
                  <p className="text-centra-blue font-medium">Founder & CEO</p>
                  <p className="text-gray-600 mt-4 text-center">
                    Innovative young entrepreneur with a passion for creating cutting-edge digital marketing solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className={cn(
                "overflow-hidden transition-all duration-500 hover:shadow-lg",
                foundersInView ? "animate-fade-in" : ""
              )}>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="mb-4">
                    <div className="w-32 h-32 rounded-full bg-centra-blue/10 flex items-center justify-center relative">
                      <div className="absolute w-32 h-32 rounded-full bg-white border-4 border-white shadow-lg overflow-hidden">
                        <img 
                          src="/lovable-uploads/38264ea6-00b8-4bdd-8e71-2fe220c69097.png" 
                          alt="Managing Director"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute -right-2 -bottom-2 w-10 h-10 rounded-full bg-centra-blue/20"></div>
                      <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-centra-blue/20"></div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold">Sai Sankar Jena</h4>
                  <p className="text-centra-blue font-medium">Managing Director</p>
                  <p className="text-gray-600 mt-4 text-center">
                    Young entrepreneur with a fresh perspective on digital marketing and business strategy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div> */}

          <div className="mt-16 text-center">
            <div className={cn(
              "inline-flex flex-col items-center gap-4 transition-all hover:translate-y-2 duration-300",
              foundersInView ? "animate-fade-in" : ""
            )} style={{ animationDelay: "0.5s" }}>
              <span className="font-semibold text-xl text-centra-blue">Learn more about our approach</span>
              <Move className="h-5 w-5 text-centra-blue" />
              <div className="mt-4 max-w-2xl mx-auto text-gray-600">
                <p className="mb-3">At DNA digital marketing agency, we believe in the power of meaningful real estate connections. Our approach blends time-tested property marketing strategies with cutting-edge digital innovations designed specifically for the Indian real estate sector.</p>
                <p className="mb-3">We focus on understanding your property goals and ideal buyer personas before building customized campaigns that generate real leads. Our team of dynamic, tech-driven experts stays ahead of real estate trends and digital tools to ensure your listings gain maximum visibility in a competitive marketplace.</p>
                <p>We don’t just promise leads; we collaborate with you to achieve them—delivering transparent performance reporting and continuous optimization throughout our partnership.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
