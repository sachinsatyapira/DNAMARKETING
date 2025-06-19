
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    id: "pricing",
    title: "Pricing & Packages",
    questions: [
      {
        question: "What makes DNA Das and Associates different from other digital marketing agencies?",
        answer: "Wespecialize exclusively in real estate marketing. Our team understands the unique challenges, buyerbehavior, and market dynamics of the real estate industry. This specialization allows us to create more effective, targeted campaigns that deliver better results for builders, brokers, and developers."
      },
      {
        question: "How long does it take to see results from digital marketing efforts?",
        answer: `Results vary depending on
 the service and market conditions. PPC campaigns can generate leads within days, while SEO typically
 shows significant results in 3-6 months. Social media marketing builds momentum over 2-3 months. We
 provide detailed timelines during our initial consultation based on your specific goals`
      },
      {
        question: "Do you work with small real estate brokers or only large developers?",
        answer: ` We work with real estate
 professionals of all sizes - from individual brokers to large development companies. Our strategies are
 scalable and can be customized to fit different budgets and business objectives`
      }
    ]
  },
  {
    id: "process",
    title: "Working Process",
    questions: [
      {
        question: "What's included in your SEO service for real estate?",
        answer: `Our real estate SEO includes local search
 optimization, property listing optimization, content creation, technical SEO, Google My Business
 optimization, review management, competitor analysis, and detailed monthly reporting with rankings and
 traffic data.`
      },
      {
        question: "Can you help with both residential and commercial real estate marketing? ",
        answer: ` Absolutely! We have
 extensive experience marketing both residential projects (apartments, villas, townships) and commercial
 properties (offices, retail spaces, warehouses). Our strategies are tailored to the specific audience and
 sales cycle of each property type.`
      },
      {
        question: "How do you measure the success of marketing campaigns?",
        answer: `We track comprehensive KPIs
 including website traffic, lead generation, cost per lead, conversion rates, search rankings, social media
 engagement, email open rates, and ultimately, sales attribution. You'll receive detailed monthly reports
 with actionable insights.`
      }
    ]
  },
  {
    id: "timeframes",
    title: "Timeframes & Results",
    questions: [
      {
        question: " Do you provide website development services?",
        answer: `Yes, we create modern, mobile-responsive
 websites specifically designed for real estate businesses. Our websites include property showcases, lead
 capture forms, search functionality, virtual tour integration, and are optimized for both user experience
 and search engines`
      },
      {
        question: "What social media platforms do you recommend for real estate marketing?",
        answer: `We typically
 recommend Facebook and Instagram for visual property showcases and community building, LinkedIn for
B2B networking and commercial properties, YouTube for property videos and virtual tours, and
 WhatsApp Business for direct customer communication.`
      },
      {
        question: " How much should I budget for real estate digital marketing?",
        answer: ` Marketing budgets vary based on
 project size, market competition, and business goals. We offer packages starting from ₹50,000 per month
 for comprehensive digital marketing services. During our consultation, we'll recommend a budget that
 aligns with your objectives and expected ROI`
      }
    ]
  }
];

const FAQ = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and results.
          </p>
        </div>
        
        <div
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {faqCategories.map((category) => (
            <div key={category.id} className="mb-10">
              <h3 className="text-xl font-bold mb-6 text-centra-blue">{category.title}</h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${category.id}-${index}`} className="bg-white rounded-lg shadow-sm">
                    <AccordionTrigger className="px-6 py-4 text-left font-medium text-lg hover:text-centra-blue">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
