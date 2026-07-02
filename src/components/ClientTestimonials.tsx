import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  author: string;
  role: string;
  location: string;
  quote: string;
  propertyType: string;
  transactionValue: string;
}

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      author: 'Marcus & Elizabeth Vance',
      role: 'Family Office Trustees',
      location: 'Point Piper Waterfront',
      quote: 'Thomas executed our transaction with absolute, flawless precision. Having previously dealt with traditional agencies, his high-touch, confidential syndication process was refreshing. Not a single rumor leaked to the press, yet we achieved an unprecedented outcome.',
      propertyType: 'Off-Market Deep Waterfront',
      transactionValue: 'Strictly Confidential Acquisition'
    },
    {
      id: 2,
      author: 'Sir David Sterling, KBE',
      role: 'Chairman, Sterling Capital',
      location: 'Bellevue Hill Estate',
      quote: 'His appreciation for architectural narrative sets Thomas apart. He did not simply list our heritage mansion; he structured an elegant, museum-grade curation that attracted the precise buyer cohort. A true masterclass in representation.',
      propertyType: 'Sandstone Heritage Mansion',
      transactionValue: 'Record Bellevue Hill Clearance'
    },
    {
      id: 3,
      author: 'Dr. Evelyn Lin',
      role: 'Biotech Founder',
      location: 'Darling Point Penthouse',
      quote: 'The Custom Campaign Blueprint was spectacular. The cinematic short film Thomas directed felt like a luxury editorial rather than marketing. Every single high-net-worth contact he brought through was vetted, qualified, and motivated.',
      propertyType: 'Triplex Panoramic Penthouse',
      transactionValue: 'Sub-Penthouse Benchmark'
    }
  ];

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="bg-charcoal-900/30 border border-charcoal-850 rounded-3xl p-8 sm:p-12 relative overflow-hidden backdrop-blur-md">
      {/* Visual background atmospheric gold blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Quote symbol */}
        <div className="w-12 h-12 rounded-full border border-gold-500/20 bg-charcoal-950/80 flex items-center justify-center mb-8 text-gold-400">
          <Quote size={20} className="fill-gold-400/10" />
        </div>

        {/* Headline / Section identifier */}
        <span className="text-[10px] tracking-[0.3em] text-gold-400 font-bold uppercase mb-4 block">
          Private Recommendations
        </span>
        
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-wide mb-8">
          The Verdict of Our Peers
        </h3>

        {/* Interactive Carousel Body with Soft Cross-fade */}
        <div className="min-h-[220px] sm:min-h-[180px] flex items-center justify-center w-full px-2 sm:px-12 relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -5 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <p className="font-serif text-base sm:text-lg lg:text-xl text-charcoal-200 leading-relaxed font-light italic px-1">
                "{current.quote}"
              </p>

              {/* Author Info */}
              <div className="space-y-1">
                <h4 className="font-serif text-sm sm:text-base font-bold text-white tracking-wide">
                  {current.author}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-gold-400 font-bold">
                  {current.role} • {current.location}
                </p>
              </div>

              {/* Verified Property Detail Badge */}
              <div className="inline-flex items-center gap-2 bg-charcoal-950/80 border border-charcoal-800/80 rounded-full px-4 py-1.5 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] uppercase tracking-wider text-charcoal-400 font-medium">
                  {current.propertyType} // {current.transactionValue}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Carousel controls: Arrows & Dot Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-12 pt-8 border-t border-charcoal-800/60 gap-6">
          
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex p-2.5 rounded-full border border-charcoal-800 hover:border-gold-500/30 hover:bg-charcoal-850 text-charcoal-400 hover:text-white transition-all cursor-pointer items-center justify-center"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-350 cursor-pointer ${
                  currentIndex === idx 
                    ? 'w-6 bg-gold-400' 
                    : 'w-1.5 bg-charcoal-800 hover:bg-charcoal-700'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="hidden sm:flex p-2.5 rounded-full border border-charcoal-800 hover:border-gold-500/30 hover:bg-charcoal-850 text-charcoal-400 hover:text-white transition-all cursor-pointer items-center justify-center"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={16} />
          </button>

          {/* Mobile direct navigation helper */}
          <div className="flex sm:hidden items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-charcoal-800 text-charcoal-400 hover:text-white"
            >
              <ChevronLeft size={14} />
            </button>
            <span className="text-[10px] text-charcoal-500 uppercase font-mono">
              0{currentIndex + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-charcoal-800 text-charcoal-400 hover:text-white"
            >
              <ChevronRight size={14} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
