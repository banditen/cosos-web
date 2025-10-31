"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How is COSOS different from other productivity tools?",
    answer: "COSOS is proactive, not reactive. Instead of waiting for you to ask questions or check dashboards, COSOS analyzes your business every morning and tells you what matters. It tracks business progress—revenue, customer momentum, strategic priorities—not just tasks."
  },
  {
    question: "What are credits and how do they work?",
    answer: "Credits power COSOS's proactive intelligence. Each morning brief, analysis, and integration sync uses credits. Your plan includes a monthly allocation, and you can purchase additional credits as needed. The Trial plan includes 1000 free credits to get started."
  },
  {
    question: "Do I need to set anything up?",
    answer: "No. COSOS delivers day-0 value. Connect your tools (Gmail, Calendar, Stripe, etc.) and you'll get your first strategic brief immediately. No configuration, no training, no waiting."
  },
  {
    question: "What integrations are included?",
    answer: "All plans include Gmail, Google Calendar, Linear, Stripe, Attio, Google Docs, Google Sheets, and Slack. We're constantly adding new integrations based on user feedback. Request new integrations anytime."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel anytime. You'll keep access to your paid plan until the end of your current billing period, then you'll move to the free Trial plan."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. All data is encrypted in transit and at rest. We're SOC 2 Type II certified and never train AI models on your data. We offer enterprise features like SSO and SAML for additional security."
  },
  {
    question: "What happens if I run out of credits?",
    answer: "On the Pro plan, you'll be charged for overage credits at $4 per 100 credits. On the Trial plan, your daily briefs will pause until the next month when your credits reset. You can upgrade anytime to get more credits."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan anytime. Upgrades are prorated for the current billing period. Downgrades take effect at the start of your next billing period."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFCF1' }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about COSOS
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-heading text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Contact our team →
          </a>
        </div>
      </div>
    </section>
  );
}

