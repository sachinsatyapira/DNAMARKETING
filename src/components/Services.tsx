import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { FaSearch, FaBullhorn, FaDollarSign, FaPenNib, FaGlobe, FaPalette, FaEnvelope, FaShieldAlt, FaVideo } from 'react-icons/fa';

const services = [
  {
    icon: <FaSearch className="text-3xl text-DNA-blue" />,
    title: 'Search Engine Optimization (SEO)',
    description: 'Boost your website’s visibility and rank higher on Google to attract more qualified leads.',
  },
  {
    icon: <FaBullhorn className="text-3xl text-DNA-blue" />,
    title: 'Social Media Marketing',
    description: 'Create engagement and build your brand presence across platforms like Instagram, Facebook & LinkedIn.',
  },
  {
    icon: <FaDollarSign className="text-3xl text-DNA-blue" />,
    title: 'PPC / Paid Advertising',
    description: 'Drive instant traffic and leads through Google Ads, Meta Ads, and strategic paid campaigns.',
  },
  {
    icon: <FaPenNib className="text-3xl text-DNA-blue" />,
    title: 'Content Marketing',
    description: 'Deliver powerful content that informs, educates, and builds trust with your target audience.',
  },
  {
    icon: <FaGlobe className="text-3xl text-DNA-blue" />,
    title: 'Web Design & Development',
    description: 'Get high-performance, modern websites tailored for user experience and conversions.',
  },
  {
    icon: <FaPalette className="text-3xl text-DNA-blue" />,
    title: 'Branding',
    description: 'We build memorable brands — from logos to complete visual identity systems.',
  },
  {
    icon: <FaEnvelope className="text-3xl text-DNA-blue" />,
    title: 'Email Marketing',
    description: 'Reach your audience directly with custom campaigns, newsletters, and automation.',
  },
  {
    icon: <FaShieldAlt className="text-3xl text-DNA-blue" />,
    title: 'Online Reputation Management (ORM)',
    description: 'Protect and improve your brand’s online presence with strategic reputation control.',
  },
  {
    icon: <FaVideo className="text-3xl text-DNA-blue" />,
    title: 'Video Production',
    description: 'Engage audiences with storytelling through professional video ads, reels, and explainers.',
  },
];

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer end-to-end digital marketing solutions to help your business grow online with measurable results.
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
