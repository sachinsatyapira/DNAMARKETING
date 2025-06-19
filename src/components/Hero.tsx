
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselItems = [
  {
    id: 1,
    title: "Connecting Brands with Powerful Digital Voices",
    subtitle: "Strategic Digital Marketing Solutions",
    backgroundUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Next-Generation Influencer Marketing",
    subtitle: "Leveraging Social Media Influence",
    backgroundUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Elevating Real Estate Marketing",
    subtitle: "Reach More Potential Buyers",
    backgroundUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1973&auto=format&fit=crop"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCarouselInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      goToNextSlide();
    }, 5000);
  };

  useEffect(() => {
    startCarouselInterval();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
    startCarouselInterval();
  };

  const goToNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
    startCarouselInterval();
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            'absolute inset-0 w-full h-full transition-opacity duration-1000',
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${item.backgroundUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'transition-all duration-700 absolute w-full left-0 right-0',
                index === currentSlide 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              )}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {item.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 z-10">
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors"
          onClick={goToPrevSlide}
          disabled={isTransitioning}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={cn(
                'w-2.5 h-2.5 rounded-full transition-colors',
                index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
              )}
              onClick={() => {
                if (isTransitioning || index === currentSlide) return;
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
                startCarouselInterval();
              }}
            />
          ))}
        </div>
        
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors"
          onClick={goToNextSlide}
          disabled={isTransitioning}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
