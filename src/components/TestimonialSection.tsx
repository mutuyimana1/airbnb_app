import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/travelData";
import { testimonialBg } from "../assets/images";

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const testimonial = testimonials[current];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={testimonialBg}
          alt="Testimonial background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(25,30,37,0.78)]" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-4 md:px-8 text-center">
        {/* Label */}
        <div className="flex flex-col items-center mb-8">
          <span
            className="text-[#f84525] text-3xl md:text-4xl capitalize mb-2"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 400 }}
          >
            About Us
          </span>
          <h2
            className="text-white capitalize"
            style={{
              fontFamily: "'Wix Madefor Display', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          >
            See What Our Clients Say About Us
          </h2>
        </div>

        {/* Big quote mark */}
        <div
          className="text-[#f84525] mb-4 leading-none select-none"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "5rem",
            opacity: 0.85,
          }}
        >
          &#8220;
        </div>

        {/* Quote Text */}
        <p
          key={current}
          className="text-white/90 text-base md:text-lg leading-relaxed mb-10"
          style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
        >
          {testimonial.quote}
        </p>

        {/* Avatar and author */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#f84525] shadow-lg"
          />
          <div>
            <p
              className="text-white font-semibold text-base"
              style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
            >
              {testimonial.author}
            </p>
            <p
              className="text-white/60 text-sm"
              style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
            >
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/30 hover:border-[#f84525] hover:bg-[#f84525] text-white transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "bg-[#f84525] w-6 h-2"
                    : "bg-white/40 hover:bg-white/60 w-2 h-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/30 hover:border-[#f84525] hover:bg-[#f84525] text-white transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
