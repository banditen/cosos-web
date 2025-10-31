import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { OrbAnimation } from "./OrbAnimation";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#FFFCF1' }}>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
            <Sparkles className="w-4 h-4" style={{ color: '#FFD700' }} />
            <span className="text-sm text-gray-700">Built for founders who move fast</span>
          </div>

          <h1 className="text-5xl lg:text-7xl max-w-3xl mx-auto font-heading">
            Know if you're <span style={{ color: '#0047B3' }}>winning</span>,
            <br />
            every day
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get a real-time rhythm of your business. Train your AI to know how you can win, faster and predictable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2">
              Start Building Free
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              See How It Works
            </Button>
          </div>

          {/* Orb Animation */}
          <div className="pt-12">
            <OrbAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
