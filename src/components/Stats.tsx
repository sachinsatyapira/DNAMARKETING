
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatItemProps {
  label: string;
  value: number;
  suffix: string;
  duration?: number;
}

const StatItem = ({ label, value, suffix, duration = 2000 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const countingDone = useRef(false);

  useEffect(() => {
    let startTime: number;
    let frameId: number;

    if (inView && !countingDone.current) {
      const countUp = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * value));
        
        if (progress < 1) {
          frameId = requestAnimationFrame(countUp);
        } else {
          countingDone.current = true;
        }
      };
      
      frameId = requestAnimationFrame(countUp);
    }
    
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [inView, value, duration]);

  // Format the count with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div 
      ref={ref} 
      className="flex flex-col items-center py-6 px-4 animate-count-up"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2 text-centra-blue">
        {formattedCount}{suffix}
      </div>
      <p className="text-lg text-gray-600">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section 
      id="stats" 
      className="py-20 bg-gray-50 parallax-bg"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(https://images.unsplash.com/photo-1550305080-4e029753abcf?q=80&w=2071&auto=format&fit=crop)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver results that speak for themselves. Here's what we've achieved so far.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StatItem label="Leads Generated" value={25000} suffix="+" />
          <StatItem label="Influencers Engaged" value={3500} suffix="+" />
          <StatItem label="Social Likes" value={120} suffix="K+" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
