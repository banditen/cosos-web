import { Mail, Calendar, FileText, Slack, FileSpreadsheet, CreditCard, Users } from "lucide-react";

const integrations = [
  { icon: Mail, name: "Gmail", color: "#EA4335" },
  { icon: Calendar, name: "Google Calendar", color: "#4285F4" },
  { icon: Users, name: "Linear", color: "#5E6AD2" },
  { icon: CreditCard, name: "Stripe", color: "#635BFF" },
  { icon: Users, name: "Attio", color: "#FF6B6B" },
  { icon: FileText, name: "Google Docs", color: "#4285F4" },
  { icon: FileSpreadsheet, name: "Google Sheets", color: "#0F9D58" },
  { icon: Slack, name: "Slack", color: "#4A154B" },
];

export function Integrations() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFCF1' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4 font-heading">
            Connect the tools you already use
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={index}
                className="aspect-square rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all hover:shadow-md flex items-center justify-center group relative"
                title={integration.name}
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" style={{ color: integration.color }} />
                {/* Tooltip on hover */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {integration.name}
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          We're adding more all the time
        </p>
      </div>
    </section>
  );
}

