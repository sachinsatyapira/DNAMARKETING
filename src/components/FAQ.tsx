
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
        question: "How much do your services cost?",
        answer: "Our pricing is customized based on your specific needs and goals. We offer packages starting from ₹1,80,000 per month, but we recommend scheduling a consultation call to discuss your requirements and get a precise quote."
      },
      {
        question: "Do you require long-term contracts?",
        answer: "We typically work with clients on a minimum 3-month engagement to ensure we can deliver measurable results. After the initial period, we offer flexible month-to-month options as well as discounted rates for annual commitments."
      },
      {
        question: "What's included in your basic package?",
        answer: "Our basic package includes strategy development, campaign setup, influencer outreach to 5-10 relevant creators, content review, and monthly performance reporting. Additional services like custom content creation or paid amplification can be added as needed."
      }
    ]
  },
  {
    id: "process",
    title: "Working Process",
    questions: [
      {
        question: "How do you select influencers for campaigns?",
        answer: "We use a proprietary vetting process that evaluates influencers based on audience demographics, engagement rates, content quality, and brand alignment. We prioritize authentic engagement over follower count and ensure all potential influencers match your brand values."
      },
      {
        question: "How long does a typical campaign take to launch?",
        answer: "After our initial consultation and strategy development, most campaigns can launch within 2-3 weeks. This includes influencer selection, outreach, negotiation, and content briefing. More complex, large-scale campaigns may require additional preparation time."
      },
      {
        question: "Do you handle all communication with influencers?",
        answer: "Yes, our team manages all aspects of influencer relations from initial outreach to briefing, content approval, payment processing, and performance tracking. You'll have visibility into the process, but we handle the day-to-day management."
      }
    ]
  },
  {
    id: "timeframes",
    title: "Timeframes & Results",
    questions: [
      {
        question: "How quickly will I see results from digital marketing?",
        answer: "Initial results often appear within the first 30 days, but meaningful improvements typically develop over 2-3 months as campaigns optimize and gain momentum. We provide monthly reports showing key metrics and progress toward your goals."
      },
      {
        question: "What metrics do you track to measure success?",
        answer: "We customize metrics based on your objectives, but typically track engagement rates, reach, impressions, click-through rates, lead generation, conversion rates, and ROI. For influencer campaigns, we also measure audience sentiment and brand lift when applicable."
      },
      {
        question: "Can you guarantee specific results?",
        answer: "While we can't guarantee specific numbers due to the many variables in digital marketing, we set realistic targets based on industry benchmarks and our past experience. We're committed to transparency and will provide regular updates on campaign performance."
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
