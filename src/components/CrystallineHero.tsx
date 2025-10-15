'use client';

import { useEffect, useRef } from 'react';
import { Container } from './Container';
import './CrystallineHero.css';

export function CrystallineHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      const crystals = heroRef.current.querySelectorAll('.crystal');
      crystals.forEach((crystal, index) => {
        const element = crystal as HTMLElement;
        const speed = (index + 1) * 0.5;
        const rotateX = (y - 0.5) * speed * 10;
        const rotateY = (x - 0.5) * speed * 10;
        
        element.style.transform = `
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          rotateZ(${Date.now() * 0.01 * (index + 1)}deg)
        `;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative w-screen h-[60vh] overflow-hidden bg-gradient-to-br from-[#0a0f1c] via-[#1a1f2e] to-[#0a0f1c]"
      style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
    >
      {/* Crystalline Background Elements */}
      <div className="absolute inset-0 crystal-container">
        {/* Large Background Crystal 1 */}
        <div className="crystal crystal-large crystal-bg-1">
          <div className="crystal-face face-1"></div>
          <div className="crystal-face face-2"></div>
          <div className="crystal-face face-3"></div>
          <div className="crystal-face face-4"></div>
          <div className="crystal-face face-5"></div>
          <div className="crystal-face face-6"></div>
        </div>

        {/* Medium Crystal 2 */}
        <div className="crystal crystal-medium crystal-bg-2">
          <div className="crystal-face face-1"></div>
          <div className="crystal-face face-2"></div>
          <div className="crystal-face face-3"></div>
          <div className="crystal-face face-4"></div>
          <div className="crystal-face face-5"></div>
          <div className="crystal-face face-6"></div>
        </div>

        {/* Small Crystal 3 */}
        <div className="crystal crystal-small crystal-fg-1">
          <div className="crystal-face face-1"></div>
          <div className="crystal-face face-2"></div>
          <div className="crystal-face face-3"></div>
          <div className="crystal-face face-4"></div>
        </div>

        {/* Medium Crystal 4 */}
        <div className="crystal crystal-medium crystal-bg-3">
          <div className="crystal-face face-1"></div>
          <div className="crystal-face face-2"></div>
          <div className="crystal-face face-3"></div>
          <div className="crystal-face face-4"></div>
          <div className="crystal-face face-5"></div>
          <div className="crystal-face face-6"></div>
        </div>

        {/* Small Crystal 5 */}
        <div className="crystal crystal-small crystal-fg-2">
          <div className="crystal-face face-1"></div>
          <div className="crystal-face face-2"></div>
          <div className="crystal-face face-3"></div>
          <div className="crystal-face face-4"></div>
        </div>

        {/* Large Background Crystal 6 */}
        <div className="crystal crystal-large crystal-bg-4">
          <div className="crystal-face face-1"></div>
          <div className="crystal-face face-2"></div>
          <div className="crystal-face face-3"></div>
          <div className="crystal-face face-4"></div>
          <div className="crystal-face face-5"></div>
          <div className="crystal-face face-6"></div>
        </div>

        {/* Medium Crystal 7 */}
        <div className="crystal crystal-medium crystal-fg-3">
          <div className="crystal-face face-1"></div>
          <div className="crystal-face face-2"></div>
          <div className="crystal-face face-3"></div>
          <div className="crystal-face face-4"></div>
          <div className="crystal-face face-5"></div>
          <div className="crystal-face face-6"></div>
        </div>

        {/* Small Crystal 8 */}
        <div className="crystal crystal-small crystal-bg-5">
          <div className="crystal-face face-1"></div>
          <div className="crystal-face face-2"></div>
          <div className="crystal-face face-3"></div>
          <div className="crystal-face face-4"></div>
        </div>
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <Container className="text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
            Bitcoin Treasury
            <span className="block text-transparent bg-gradient-to-r from-[#f7931a] via-[#ffb347] to-[#f7931a] bg-clip-text">
              Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-50 max-w-3xl mx-auto mb-8 leading-relaxed">
            Structured Bitcoin Learning for Australia&apos;s Professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#f7931a] to-[#ffb347] text-white font-semibold rounded-lg hover:from-[#ffb347] hover:to-[#f7931a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-secondary-50 text-secondary-50 font-semibold rounded-lg hover:bg-secondary-50 hover:text-primary-950 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
