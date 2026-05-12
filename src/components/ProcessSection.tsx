import type { ReactNode } from "react";
import { MapPin, Calendar, Star } from "lucide-react";
import { processSteps, type ProcessStep } from "../data/travelData";

const stepIcons = [
  <MapPin key="1" size={24} className="text-white" />,
  <Calendar key="2" size={24} className="text-white" />,
  <Star key="3" size={24} className="text-white" />,
];

interface StepCardProps {
  step: ProcessStep;
  icon: ReactNode;
  isLast: boolean;
}

function StepCard({ step, icon, isLast }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center relative flex-1">
      {/* Icon */}
      <div className="relative mb-4">{icon}</div>
      {/* Number circle */}
      <div className="relative mb-4">
        <div className="bg-[#f84525] w-[70px] h-[70px] rounded-full flex items-center justify-center shadow-lg shadow-[#f84525]/30">
          <span
            className="text-white"
            style={{
              fontFamily: "'Caveat', cursive",
              fontWeight: 400,
              fontSize: "2.5rem",
              lineHeight: 1,
            }}
          >
            {step.number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-6 max-w-[280px]">
        <h4
          className="text-[#212529] mb-2"
          style={{
            fontFamily: "'Wix Madefor Display', sans-serif",
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: 1.4,
          }}
        >
          {step.title}
        </h4>
        <p
          className="text-gray-500 text-sm leading-relaxed"
          style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
        >
          {step.description}
        </p>
      </div>

      {/* Dashed connector line (not on last item) */}
      {!isLast && (
        <div
          className="hidden lg:block absolute top-[35px] left-[calc(50%+50px)] right-0 h-px"
          style={{
            borderTop: "2px dashed #f84525",
            width: "calc(100% - 70px)",
            left: "calc(50% + 45px)",
          }}
        />
      )}
    </div>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-gray-200">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <span
            className="text-[#f84525] text-3xl md:text-4xl capitalize mb-2"
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 400 }}
          >
            Best Way
          </span>
          <h2
            className="text-[#212529] capitalize"
            style={{
              fontFamily: "'Wix Madefor Display', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
            }}
          >
            Find Your Dream Place The Best Way
          </h2>
          <p
            className="text-gray-600 mt-3 text-base"
            style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
          >
            Discover exciting categories.{" "}
            <span className="text-[#f84525] font-semibold">
              Find what you&apos;re looking for
            </span>
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Background dashed line for desktop */}
          <div className="hidden lg:block absolute top-[35px] left-[16.66%] right-[16.66%] h-px border-t-2 border-dashed border-[#f84525]/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative z-10">
            {processSteps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                icon={stepIcons[index]}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
