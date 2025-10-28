import Link from 'next/link';

export default function Home() {
  // In production, this will be https://app.cosos.xyz
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Your AI
            <span className="text-primary-600"> Chief of Staff</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            COSOS helps founders and solopreneurs focus on what matters most by intelligently 
            managing your priorities, time, and decisions.
          </p>
          
          <a
            href={appUrl}
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-3"
          >
            <span>Get Started Free</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">Daily Briefs</h3>
            <p className="text-gray-600">
              Get AI-generated daily briefs with your top priorities, time blocks, and quick wins.
            </p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Smart Prioritization</h3>
            <p className="text-gray-600">
              COSOS analyzes your emails and calendar to identify what truly matters.
            </p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Project Management</h3>
            <p className="text-gray-600">
              Track projects and initiatives with AI-powered insights and recommendations.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold mb-2">Sign In</h4>
              <p className="text-sm text-gray-600">Connect with Google</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold mb-2">Share Context</h4>
              <p className="text-sm text-gray-600">Tell us about your business</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold mb-2">Connect Tools</h4>
              <p className="text-sm text-gray-600">Link Gmail & Calendar</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="font-semibold mb-2">Get Briefs</h4>
              <p className="text-sm text-gray-600">Receive daily insights</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="card max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Focus on What Matters?</h2>
            <p className="text-gray-600 mb-6">
              Join founders who are already using COSOS to make better decisions and save time.
            </p>
            <a href={appUrl} className="btn-primary text-lg px-8 py-4">
              Start Your Free Trial
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-24 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">COSOS</h3>
              <p className="text-gray-600 text-sm">
                Your AI Chief of Staff for smarter decision-making.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href={appUrl} className="hover:text-primary-600">Dashboard</a></li>
                <li><a href={`${appUrl}/projects`} className="hover:text-primary-600">Projects</a></li>
                <li><a href="#" className="hover:text-primary-600">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary-600">About</a></li>
                <li><a href="#" className="hover:text-primary-600">Blog</a></li>
                <li><a href="#" className="hover:text-primary-600">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm border-t border-gray-200 pt-8">
            <p>&copy; 2024 COSOS. Your AI Chief of Staff.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

