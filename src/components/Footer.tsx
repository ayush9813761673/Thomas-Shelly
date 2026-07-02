import React from 'react';
import { Shield, ArrowUp, Phone, Mail, Award, MapPin } from 'lucide-react';

interface FooterProps {
  onScrollTo: (elementId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-850 pt-16 pb-12 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 mb-12 border-b border-charcoal-900">
          
          {/* Brand block */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-serif text-xl tracking-[0.25em] text-white font-bold block">
                THOMAS SKELLY
              </span>
              <span className="text-[10px] tracking-[0.35em] text-gold-400 font-semibold uppercase mt-1 block">
                Sydney Bespoke Real Estate
              </span>
              <p className="text-charcoal-400 text-xs font-light leading-relaxed mt-4 max-w-sm">
                Limiting operational focus to a maximum of five properties at any one time to yield uncompromised principal attention, elite marketing, and strategic outperformance for Sydney’s finest estates.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-[10px] text-charcoal-500 font-medium tracking-wide">
              <Shield size={12} className="text-gold-500/80" />
              <span>REINSW Member • Fully Licensed Agency • Sydney Elite Registry</span>
            </div>
          </div>

          {/* Nav Links column */}
          <div className="md:col-span-3">
            <span className="text-[10px] tracking-widest text-gold-400 font-bold uppercase block mb-4">
              Sections
            </span>
            <ul className="space-y-2.5">
              {[
                { label: 'Overview & Ethos', id: 'hero' },
                { label: 'The Bespoke Philosophy', id: 'about' },
                { label: 'Success Campaign Portfolio', id: 'listings' },
                { label: 'Focus Potential Calculator', id: 'calculator' },
                { label: 'Consultation Inquiry', id: 'contact' },
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => onScrollTo(link.id)}
                    className="text-xs text-charcoal-400 hover:text-white hover:underline transition-all font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Suburbs Specializations column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-widest text-gold-400 font-bold uppercase block mb-4">
                Exclusive Suburb Expertise
              </span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-charcoal-400 font-light">
                <span>Darling Point</span>
                <span>Bellevue Hill</span>
                <span>Point Piper</span>
                <span>Double Bay</span>
                <span>Vaucluse</span>
                <span>Mosman</span>
                <span>Paddington</span>
                <span>Bronte Beach</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-charcoal-900 md:border-t-0 md:pt-0">
              <button
                onClick={() => onScrollTo('hero')}
                className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-charcoal-400 hover:text-gold-400 transition-colors font-semibold"
              >
                <span>Back to Top</span>
                <ArrowUp size={11} className="text-gold-500" />
              </button>
            </div>
          </div>

        </div>

        {/* Copy & Fine Credentials */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-charcoal-500 font-mono">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <span>© {currentYear} Thomas Skelly Real Estate. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-charcoal-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-charcoal-300 transition-colors cursor-pointer">Confidentiality Terms</span>
            <span>•</span>
            <span className="hover:text-charcoal-300 transition-colors cursor-pointer">Sydney Luxury Brokerage</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
