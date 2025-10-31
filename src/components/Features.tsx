const features = [
  {
    title: "Proactive Intelligence",
    description: "COSOS doesn't wait for you to ask. Every morning, it analyzes your business, identifies what matters, and tells you exactly where to focus—before you even open your laptop.",
    image: "/placeholder-feature-1.jpg",
    imagePosition: "right" as const,
  },
  {
    title: "Strategic Command, Not Task Management",
    description: "Track business progress, not just tasks. COSOS shows you if you're winning—revenue trends, customer momentum, and strategic priorities—all in one place.",
    image: "/placeholder-feature-2.jpg",
    imagePosition: "left" as const,
  },
  {
    title: "Day-0 Value",
    description: "Connect your tools and get insights immediately. No setup, no training, no waiting. COSOS starts working for you from the moment you sync your first integration.",
    image: "/placeholder-feature-3.jpg",
    imagePosition: "right" as const,
  },
];

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFCF1' }}>
      <div className="max-w-7xl mx-auto space-y-32">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              feature.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-12 lg:gap-16 items-center`}
          >
            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-heading">
                {feature.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                {/* Placeholder for now - you can replace with actual images */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-sm">Feature Screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

