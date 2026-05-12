import { Search, MapPin, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    step: 1,
    Icon: Search,
    title: 'Choose What To Do',
    description: 'Browse through thousands of listings and find exactly what you need',
  },
  {
    id: 2,
    step: 2,
    Icon: MapPin,
    title: 'Find What You Want',
    description: 'Use our advanced filters to narrow down your search by location',
  },
  {
    id: 3,
    step: 3,
    Icon: CheckCircle,
    title: 'Explore Amazing Places',
    description: 'Discover the best places and start your adventure today',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 text-4xl md:text-5xl mb-4">
            Find Your Dream Place
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Three simple steps to discover and explore amazing places around you
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connector Line - Hidden on mobile, visible on md+ */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-gray-300 z-0"></div>
              )}

              {/* Step Card */}
              <div className="text-center relative z-10">
                {/* Circle with Number */}
                <div className="bg-orange-500 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg relative">
                  <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-20"></div>
                  <span className="text-3xl font-bold relative z-10">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <step.Icon className="text-orange-500" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
