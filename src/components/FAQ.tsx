
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
        answer: "Unlike general agencies, DNA Das and Associates focuses exclusively on real estate. We craft packages that are industry-specific and results-driven, helping clients get more value from every rupee they invest."
      },
      {
        question: "How long does it take to see results from digital marketing efforts?",
        answer: "Digital marketing results depend on the chosen package. SEO can take 3–6 months, while PPC and social media campaigns may show leads in a few days to weeks. We define timelines clearly in each package."
      },
      {
        question: "Do you work with small real estate brokers or only large developers?",
        answer: "Our pricing and packages are flexible. We support everyone from solo agents to big real estate firms by tailoring solutions based on their budget and growth stage."
      },
      {
        question: "Are your digital marketing packages customizable?",
        answer: "Absolutely. We understand that every real estate business has different goals, so we offer fully customizable packages based on your specific requirements, property type, and target market."
      },
      {
        question: "What services are included in your basic package?",
        answer: "Our basic package typically includes SEO setup, Google My Business optimization, 2 social media platforms, ad management for lead generation, and monthly reporting. Custom elements can be added as needed."
      },
      {
        question: "Is there a minimum contract period for your packages?",
        answer: "Yes. To ensure we deliver sustainable results, we recommend a minimum 3-month engagement. However, we also offer flexible plans based on campaign type and urgency."
      },
      {
        question: "Do you charge separately for ad spend?",
        answer: "Yes. Our package pricing covers strategy, creative, and management services. Ad spend (on platforms like Meta, Google, etc.) is billed separately as per your approved monthly media budget."
      }
    
    ]
  },
  {
    id: "process",
    title: "Working Process",
    questions: [
      {
        question: "What's included in your SEO service for real estate?",
        answer: "Our SEO process involves local listing optimization, keyword-targeted content, technical audits, backlink strategies, Google My Business setup, and regular performance reviews tailored for real estate."
      },
      {
        question: "Can you help with both residential and commercial real estate marketing?",
        answer: "Yes, our process is adapted to both segments. We understand the buying journey of a homebuyer versus a commercial investor and design separate funnels accordingly."
      },
      {
        question: "How do you measure the success of marketing campaigns?",
        answer: "Our process includes detailed KPI tracking—such as cost per lead, quality of leads, engagement rates, and conversions—to measure campaign performance and optimize continuously."
      }
    ]
  },
  {
    id: "timeframes",
    title: "Timeframes & Results",
    questions: [
      {
        question: "Do you provide website development services?",
        answer: "Yes. Our real estate websites are launched within 2–4 weeks and are built to drive results—with lead forms, virtual tours, property search filters, and SEO best practices."
      },
      {
        question: "What social media platforms do you recommend for real estate marketing?",
        answer: "To maximize results, we focus on platforms where your audience spends time: Facebook and Instagram for visuals, YouTube for property tours, LinkedIn for commercial reach, and WhatsApp for direct queries."
      },
      {
        question: "How much should I budget for real estate digital marketing?",
        answer: "Results depend on the consistency of investment. For a decent return, we recommend a minimum monthly budget of ₹50,000, which includes ads, creatives, and strategy execution tailored to your goals."
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
              <h3 className="text-xl font-bold mb-6 text-DNA-blue">{category.title}</h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${category.id}-${index}`} className="bg-white rounded-lg shadow-sm">
                    <AccordionTrigger className="px-6 py-4 text-left font-medium text-lg hover:text-DNA-blue">
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
