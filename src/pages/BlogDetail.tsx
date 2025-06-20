
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (id) {
      const foundPost = blogPosts.find(post => post.id === parseInt(id, 10));
      if (foundPost) {
        setPost(foundPost);
      }
      setLoading(false);
    }
  }, [id]);

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/#blog" className="inline-flex items-center text-DNA-blue hover:text-DNA-darkblue mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all resources
          </Link>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-DNA-blue"></div>
            </div>
          ) : post ? (
            <div
              ref={ref}
              className={cn(
                "transition-all duration-1000",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <div className="mb-6 flex items-center">
                <span className="text-sm font-semibold bg-DNA-blue/10 text-DNA-blue px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 ml-3">{post.date}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">{post.title}</h1>
              
              <div className="mb-10 rounded-lg overflow-hidden h-64 md:h-96">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">{post.excerpt}</p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
                <p className="mb-6">
                  {post.content?.introduction || 
                  "In today's rapidly evolving landscape, businesses must adapt their strategies to stay competitive and relevant. This article explores key insights and practical approaches that can help organizations thrive in their respective industries."}
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Key Insights</h2>
                <p className="mb-6">
                  {post.content?.insights || 
                  "Understanding your audience and leveraging data-driven decision making are crucial elements for success. By analyzing market trends and consumer behavior, businesses can develop more targeted and effective campaigns that resonate with their ideal customers."}
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Strategies</h2>
                <p className="mb-6">
                  {post.content?.strategies || 
                  "Implementing these insights requires a systematic approach. Start by establishing clear goals, identifying key performance indicators, and developing a timeline for execution. Regular monitoring and adjustments will help ensure optimal results."}
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p className="mb-6">
                  {post.content?.conclusion || 
                  "By adopting these approaches and remaining adaptable to change, organizations can position themselves for sustainable growth and success in their respective markets. The key is to maintain focus on adding value to customers while continuously refining strategies based on performance data."}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
              <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
              <Button asChild>
                <Link to="/#blog">Return to Blog</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
