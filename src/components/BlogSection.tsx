import { Calendar } from "lucide-react";
import { articles, type Article } from "../data/travelData";

interface BlogCardProps {
  article: Article;
}

function BlogCard({ article }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      {/* Image */}
      <div className="relative overflow-hidden h-[220px]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="bg-[#f84525] text-white text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
          >
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Meta info */}
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <img
              src={article.authorAvatar}
              alt={article.author}
              className="w-5 h-5 rounded-full object-cover"
            />
            <span style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}>
              {article.author}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Calendar size={12} />
            <span style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}>
              {article.date}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-gray-800 mb-3 hover:text-[#f84525] transition-colors cursor-pointer line-clamp-2"
          style={{
            fontFamily: "'Wix Madefor Display', sans-serif",
            fontWeight: 600,
            fontSize: "1.05rem",
            lineHeight: 1.5,
          }}
        >
          {article.title}
        </h3>

        {/* Read more */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#f84525] text-sm font-semibold hover:gap-3 transition-all duration-200"
          style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
        >
          Read More
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}

export function BlogSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span
            className="text-[#f84525] text-3xl md:text-4xl capitalize mb-2"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 400 }}
          >
            Our Latest
          </span>
          <h2
            className="text-[#212529] capitalize"
            style={{
              fontFamily: "'Wix Madefor Display', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
            }}
          >
            Discover Our Latest News And Articles
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className={`transition-all duration-300 rounded-full ${
                i === 0
                  ? "bg-[#f84525] w-6 h-2"
                  : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
