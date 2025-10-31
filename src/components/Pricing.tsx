"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

const pricingPlans = [
  {
    name: "Trial",
    price: "Free",
    description: "Starting at",
    image: "/pricing-trial.png", // Placeholder - will need actual image
    features: [
      "5 agent runs",
      "Automatic daily briefs",
      "All integrations",
      "Customer support"
    ],
    cta: "Start Free",
    credits: "Includes 1000 free credits"
  },
  {
    name: "Pro",
    price: "$49.99",
    priceUnit: "/ month",
    description: "Starting at",
    image: "/pricing-pro.png", // Placeholder - will need actual image
    features: [
      "Everything from Trial",
      "Full access to run agents",
      "Priority customer support",
      "Request new integrations"
    ],
    cta: "Start Free Trial",
    credits: "Includes 1000 credits / month"
  }
];

type PricingCardProps = {
  plan: typeof pricingPlans[0];
};

function PricingCard({ plan }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (!isHovered) return;

    const handleGlobalMouseMove = (e: globalThis.MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (isInside) {
          setMousePosition({ x: e.clientX, y: e.clientY });
        } else {
          setIsHovered(false);
        }
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [isHovered]);

  return (
    <>
      <div
        ref={cardRef}
        className={`bg-white rounded-3xl border-2 overflow-hidden transition-all flex flex-col relative ${
          isHovered
            ? 'border-blue-500 shadow-2xl scale-[1.02]'
            : 'border-gray-200 hover:shadow-lg'
        }`}
        style={{ cursor: isHovered ? 'none' : 'default' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Plan Name */}
        <div className="p-6 pb-4">
          <h3 className="text-lg text-gray-500 mb-2 font-heading">{plan.name}</h3>
        </div>

        {/* Image Placeholder */}
        <div className="px-6 pb-4">
          <div className="w-full aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              {plan.name}
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="px-6 pb-4">
          <p className="text-sm text-gray-500 mb-1">{plan.description}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-normal">{plan.price}</span>
            {plan.priceUnit && <span className="text-gray-500">{plan.priceUnit}</span>}
          </div>
        </div>

        {/* Features */}
        <div className="px-6 pb-6 flex-1">
          <div className="space-y-3">
            {plan.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Credits Info */}
        <div className="px-6 pb-6">
          <p className="text-sm text-gray-500">{plan.credits}</p>
        </div>
      </div>

      {/* Custom Cursor Button - Outside card to avoid overflow-hidden */}
      <a
        href="https://app.cosos.xyz"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed w-[120px] h-[50px] flex items-center justify-center gap-2 rounded-full bg-black text-white transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          zIndex: 9999,
          pointerEvents: 'none', // Make button not interfere with mouse events
        }}
      >
        <span className="text-sm font-medium">Select</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFCF1' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 font-heading">
            Start commanding your business today
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your operating tempo.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
