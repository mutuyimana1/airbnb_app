import { Calendar, User, ArrowRight } from 'lucide-react';
import imgBlog1 from "../../imports/1920WDefault/1cc41fa00f1051ed15a93c8c64ae34e8ce0974fe.png";
import imgBlog2 from "../../imports/1920WDefault/97891b991e869d1481efe8dfce4d7a1de85c34a4.png";
import imgBlog3 from "../../imports/1920WDefault/9f4359a0e7d18d080f9f62af7e5c828aa55d4326.png";

const blogPosts = [
  {
    id: '1',
    title: 'Top 10 Must-Visit Destinations in 2026',
    category: 'Travel Tips',
    image: imgBlog1,
    author: 'John Smith',
    date: 'May 1, 2026',
    excerpt: 'Discover the most amazing places to visit this year',
  },
  {
    id: '2',
    title: 'How to Find the Perfect Vacation Rental',
    category: 'Guides',
    image: imgBlog2,
    author: 'Sarah Miller',
    date: 'April 28, 2026',
    excerpt: 'Expert tips for choosing your ideal accommodation',
  },
  {
    id: '3',
    title: 'Hidden Gems: Undiscovered Travel Spots',
    category: 'Adventure',
    image: imgBlog3,
    author: 'David Lee',
    date: 'April 25, 2026',
    excerpt: 'Explore off-the-beaten-path destinations',
  },
];

export default function Blog() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 text-4xl md:text-5xl mb-4">
            Latest Articles
          </h2>
          <p className="text-gray-600 text-lg">
            Stay updated with travel tips, guides, and inspiring stories
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                {/* Read More Link */}
                <button className="flex items-center gap-2 text-orange-500 hover:gap-4 transition-all duration-300">
                  <span>Read More</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
