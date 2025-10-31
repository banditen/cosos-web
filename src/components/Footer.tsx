import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// X (Twitter) icon as SVG component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="text-gray-300 py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/cosos_logo_white.png"
              alt="COSOS"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://twitter.com/cosos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <XIcon className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/cosos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-sm">
          <p>© 2025 COSOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
