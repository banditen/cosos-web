'use client';

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, TechFlow",
    content: "COSOS transformed how I run my startup. I used to spend hours each morning trying to figure out what to prioritize. Now I get a clear brief every day that tells me exactly what needs my attention. It's like having a strategic advisor who never sleeps.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO, GrowthLabs",
    content: "The proactive intelligence is game-changing. COSOS caught a potential client issue before it became a problem. It analyzed our Slack conversations and email threads, then flagged it in my morning brief. Saved us a $50k contract.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Solo Founder, DesignKit",
    content: "I was skeptical about another 'AI tool' but COSOS is different. It doesn't just answer questions - it tells me what I should be thinking about. Yesterday it noticed a pattern in customer feedback I completely missed. Pure gold.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Founder, CloudSync",
    content: "Best investment I've made this year. The day-0 value is real - connected my tools and immediately got insights I didn't know I needed. No training, no setup hell, just instant clarity on my business.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "CEO, MarketPulse",
    content: "COSOS is like having a co-founder who's obsessed with the details. It tracks everything across Gmail, Linear, Stripe, and Notion, then surfaces what actually matters. I make better decisions faster now.",
    rating: 5,
  },
  {
    name: "James Liu",
    role: "Founder, DataStream",
    content: "The strategic command center I didn't know I needed. Instead of drowning in notifications, I get one clear brief that shows me if I'm winning or losing. It's addictive - I check it first thing every morning.",
    rating: 5,
  },
  {
    name: "Rachel Green",
    role: "Solo Founder, ContentFlow",
    content: "Finally, a tool that understands context. COSOS doesn't just track tasks - it understands my business rhythm. It knows when a delayed invoice matters vs. when it's normal. That intelligence is priceless.",
    rating: 5,
  },
  {
    name: "Tom Anderson",
    role: "CEO, BuildFast",
    content: "I've tried every productivity tool out there. COSOS is the only one that actually makes me more productive. It's not about doing more tasks - it's about doing the right things at the right time.",
    rating: 5,
  },
  {
    name: "Nina Patel",
    role: "Founder, HealthTech Co",
    content: "The proactive alerts are incredible. COSOS noticed our customer churn was creeping up before I did. It connected dots between support tickets, usage data, and billing - gave me a week's head start to fix it.",
    rating: 5,
  },
];

export function CustomerStories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFCF1' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 font-heading">
            Founders who <span style={{ color: '#0047B3' }}>command</span> their business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from solopreneurs and CEOs who use COSOS to stay ahead
          </p>
        </div>

        {/* Masonry-style layout using CSS columns */}
        <div 
          className="gap-6"
          style={{
            columnCount: 1,
            columnGap: '1.5rem',
          }}
        >
          <style jsx>{\`
            @media (min-width: 768px) {
              div[style*="columnCount"] {
                column-count: 2 !important;
              }
            }
            @media (min-width: 1024px) {
              div[style*="columnCount"] {
                column-count: 3 !important;
              }
            }
          \`}</style>
          
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 mb-6 shadow-sm hover:shadow-md transition-shadow"
              style={{
                breakInside: 'avoid',
                pageBreakInside: 'avoid',
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ color: '#FFD700' }}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
