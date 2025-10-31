import { Shield, Lock, Eye, Server, CheckCircle2, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Secure by Design",
    description: "We never train AI on your data",
  },
  {
    icon: Server,
    title: "SOC 2",
    description: "SOC 2 Type II Certified",
  },
  {
    icon: Lock,
    title: "SAML & SSO",
    description: "Enterprise authentication and single sign-on",
  },
  {
    icon: Eye,
    title: "E2E Encrypted",
    description: "End-to-end encryption for all data",
  },
  {
    icon: CheckCircle2,
    title: "Zero Data Retention",
    description: "Complete zero data retention policy",
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "GDPR, CCPA, and HIPAA compliant",
  },
];

export function Security() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFCF1' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 font-heading">
            Built On <span style={{ color: '#0047B3' }}>Trust</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your business data deserves the highest level of protection. Enterprise-grade security from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-gray-200"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#0047B320' }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#0047B3' }} />
                </div>
                <h3 className="text-lg font-heading mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

