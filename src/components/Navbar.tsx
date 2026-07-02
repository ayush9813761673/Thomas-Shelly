import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield } from 'lucide-react';

interface NavbarProps {
  onScrollTo: (elementId: string) => void;
  onRequestConsultation: () => void;
  clientSlotsLeft: number;
}

export default function Navbar({ onScrollTo, onRequestConsultation, clientSlotsLeft }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section highlights
      const sections = ['hero', 'about', 'blueprint', 'listings', 'calculator', 'testimonials', 'faq', 'concierge', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', id: 'hero' },
    { label: 'Philosophy', id: 'about' },
    { label: 'Masterclass', id: 'blueprint' },
    { label: 'Portfolio', id: 'listings' },
    { label: 'Valuation', id: 'calculator' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Concierge', id: 'concierge' },
    { label: 'Inquire', id: 'contact' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal-950/85 backdrop-blur-md border-b border-charcoal-800 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            onClick={() => onScrollTo('hero')}
            className="cursor-pointer group flex flex-col items-start"
          >
            <span className="font-serif text-lg tracking-[0.25em] text-white font-bold transition-all duration-300 group-hover:text-gold-300">
              THOMAS SKELLY
            </span>
            <span className="text-[9px] tracking-[0.35em] text-gold-400 font-medium uppercase mt-0.5">
              Sydney Bespoke Real Estate
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onScrollTo(item.id);
                  setActiveSection(item.id);
                }}
                className={`text-xs tracking-widest uppercase transition-colors duration-300 relative py-1 hover:text-gold-300 ${
                  activeSection === item.id ? 'text-gold-400 font-medium' : 'text-charcoal-300'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-400" />
                )}
              </button>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:0408263016"
              className="flex items-center space-x-2 text-xs tracking-wider text-charcoal-300 hover:text-white transition-colors py-2 px-3 rounded border border-charcoal-800 hover:border-charcoal-600 bg-charcoal-900/40"
            >
              <Phone size={13} className="text-gold-400" />
              <span>0408 263 016</span>
            </a>

            <button
              onClick={onRequestConsultation}
              className="relative overflow-hidden group bg-gold-500 hover:bg-gold-600 text-charcoal-950 text-xs tracking-widest uppercase font-semibold px-4 py-2.5 rounded transition-all duration-300 shadow-md hover:shadow-gold-500/10 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center space-x-1">
                <span>Book Meeting</span>
                <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full animate-ping ml-1" />
              </span>
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a
              href="tel:0408263016"
              className="p-2 text-charcoal-300 hover:text-white bg-charcoal-900/60 rounded border border-charcoal-800"
            >
              <Phone size={16} className="text-gold-400" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-charcoal-300 hover:text-white bg-charcoal-900/60 rounded border border-charcoal-800"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-charcoal-950/95 border-b border-charcoal-800 backdrop-blur-lg animate-fade-in py-6 px-6 shadow-2xl">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onScrollTo(item.id);
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-xs tracking-widest uppercase py-2 hover:text-gold-300 transition-colors ${
                  activeSection === item.id ? 'text-gold-400 border-l-2 border-gold-400 pl-2' : 'text-charcoal-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-charcoal-800 flex flex-col space-y-3">
              <a
                href="tel:0408263016"
                className="flex items-center justify-center space-x-2 text-xs tracking-wider text-charcoal-100 py-3 rounded border border-charcoal-800 bg-charcoal-900"
              >
                <Phone size={14} className="text-gold-400" />
                <span>0408 263 016</span>
              </a>
              <button
                onClick={() => {
                  onRequestConsultation();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gold-500 hover:bg-gold-600 text-charcoal-950 text-xs tracking-widest uppercase font-semibold py-3 rounded text-center transition-colors"
              >
                Schedule Private Consultation
              </button>
              <p className="text-[10px] text-center text-charcoal-500 flex items-center justify-center space-x-1">
                <Shield size={10} className="text-gold-500/80" />
                <span>Currently {clientSlotsLeft} slots left at 5-client capacity.</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
