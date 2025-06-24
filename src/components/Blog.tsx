import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const visiblePosts = blogPosts.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex + 3 < blogPosts.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resources & Insights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, strategies, and insights in digital marketing.
          </p>
        </div>

        {/* Blog Cards with Side Arrows */}
        <div className="relative flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-[-56px] z-10 bg-DNA-blue text-white p-3 rounded-full shadow-md hover:bg-DNA-darkblue transition disabled:opacity-30"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Blog Grid */}
          <div
            ref={ref}
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {visiblePosts.map((post) => (
              <div key={post.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="overflow-hidden h-48">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-semibold bg-DNA-blue/10 text-DNA-blue px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 ml-3">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-DNA-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center text-DNA-blue font-medium group-hover:text-DNA-darkblue transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex + 3 >= blogPosts.length}
            className="absolute right-[-56px] z-10 bg-DNA-blue text-white p-3 rounded-full shadow-md hover:bg-DNA-darkblue transition disabled:opacity-30"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* View All Resources */}
        <div className="text-center mt-12">
          <Link to="/all-blogs">
            <button className="px-6 py-3 bg-transparent border border-DNA-blue text-DNA-blue rounded-md font-medium hover:bg-DNA-blue hover:text-white transition-colors">
              View All Resources
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
