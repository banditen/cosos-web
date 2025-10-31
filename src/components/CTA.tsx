"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";
import Image from "next/image";

export function CTA() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const orbRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Only update position if we're hovering over the orb
    if (isHovered) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Track global mouse movement only when hovering
  useEffect(() => {
    if (!isHovered) return;

    const handleGlobalMouseMove = (e: globalThis.MouseEvent) => {
      if (orbRef.current) {
        const rect = orbRef.current.getBoundingClientRect();
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#F8F8F8' }}>
      <div className="max-w-7xl mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Interactive Orb */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div
              ref={orbRef}
              className="relative w-[400px] h-[400px] flex items-center justify-center transition-none"
              style={{ cursor: isHovered ? 'none' : 'default' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              {/* Background Image */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="/CTA_image.png"
                  alt="COSOS Command Center"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Custom Cursor Circle that replaces the cursor */}
              <a
                href="https://app.cosos.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className={`fixed w-[180px] h-[180px] flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm z-50 ${
                  isHovered
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-75 pointer-events-none'
                }`}
                style={{
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: isHovered ? '0 10px 40px rgba(0, 71, 179, 0.15)' : 'none',
                  pointerEvents: isHovered ? 'auto' : 'none',
                  transition: isHovered ? 'none' : 'opacity 0s, transform 0s',
                }}
              >
                <div className="text-center">
                  <div className="text-xl mb-1" style={{ color: '#000' }}>
                    Try
                  </div>
                  <div className="text-2xl font-semibold" style={{ color: '#000' }}>
                    COSOS
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl mb-6 font-heading">
              Set up your command center <span style={{ color: '#0047B3' }}>today</span>
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Start making better decisions in less than 5 minutes. Connect your tools and get your first strategic brief.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
