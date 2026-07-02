import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      category: 'The Bespoke Standard',
      question: 'What defines the "Bespoke Model" in luxury real estate?',
      answer: 'Unlike traditional mass-market real estate brokerages that prioritize transaction volume, the Bespoke Model operates as a high-touch private practice. I limit my active representations to a select handful of premium properties at any given time. This guarantees absolute focus, creative control, museum-grade styling, cinematic narrative production, and direct double-blind access to my personal network of high-net-worth family offices.'
    },
    {
      category: 'Confidentiality',
      question: 'How do you preserve privacy for high-profile acquisitions and sales?',
      answer: 'Discretion is our highest currency. For clients requiring extreme privacy, we offer a Double-Blind Private Syndicate protocol. All marketing is conducted double-blind without public addresses or identifiable photographs, and prospective buyers are vetted thoroughly before receiving a secure digital key. Inspections are conducted under strict non-disclosure agreements (NDAs) with approved proxies if requested.'
    },
    {
      category: 'Campaign Creation',
      question: 'Do you charge extra for custom cinematic and art direction?',
      answer: 'No. Absolute curation is a non-negotiable standard of my practice, not an add-on. Every represented estate receives custom-designed atmospheric photography, cinematic property monographs directed by film specialists, and gallery-level fine art styling as part of the core representation strategy. This is how we consistently extract the maximum emotional premium from global buyers.'
    },
    {
      category: 'Syndication Basin',
      question: 'How do you target international buyers and family offices?',
      answer: 'We bypass standard listing portals. Over the past decade, I have cultivated a secure, sovereign network of over 120 key wealth managers, private bankers, and elite buyer advocates across London, Singapore, New York, Hong Kong, and Sydney. When a new private masterpiece is registered, it is strategically presented directly to these decision-makers.'
    },
    {
      category: 'Strategic Engagement',
      question: 'How do we initiate a confidential representation brief?',
      answer: 'We begin with a private, double-blind consultation. You can use our Private Portfolio Concierge tool on this page to state your core objectives and sensitivity preferences. Once submitted, we will establish a secure, offline discussion at a location of your absolute convenience to formulate your custom campaign blueprint.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-charcoal-900/20 border border-charcoal-850 rounded-3xl p-8 sm:p-12 relative overflow-hidden backdrop-blur-md">
      {/* Background glow */}
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header Block */}
        <div className="text-left mb-12">
          <span className="text-[10px] tracking-[0.3em] text-gold-400 font-bold uppercase mb-2 block">
            Information Terminal
          </span>
          <h3 className="font-serif text-2xl sm:text-3.5xl font-semibold text-white tracking-wide">
            Frequently Asked Questions
          </h3>
          <p className="text-charcoal-400 text-xs sm:text-sm font-light mt-2 max-w-2xl">
            A precise synthesis of operational procedures, client representation methodologies, and discretion levels within the Sydney private property basin.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border-b border-charcoal-800/80 pb-4 transition-all duration-300`}
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left flex items-center justify-between py-4 group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1 pr-6 flex-1">
                    <span className="text-[9px] uppercase tracking-widest text-gold-500/80 font-bold font-mono">
                      {faq.category}
                    </span>
                    <h4 className="font-serif text-sm sm:text-base font-medium text-white group-hover:text-gold-400 transition-colors duration-300 tracking-wide">
                      {faq.question}
                    </h4>
                  </div>
                  
                  {/* Plus/Minus Indicator with custom luxury rotating animation */}
                  <div className="h-7 w-7 rounded-full border border-charcoal-800 group-hover:border-gold-500/30 group-hover:bg-charcoal-900 flex items-center justify-center text-charcoal-400 group-hover:text-gold-400 transition-all duration-300 shrink-0">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                    </motion.div>
                  </div>
                </button>

                {/* Accordion Content with Height/Opacity Animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-4 text-left">
                        <p className="text-xs sm:text-sm text-charcoal-300 font-light leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer helper */}
        <div className="mt-12 pt-6 border-t border-charcoal-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-charcoal-500 uppercase tracking-wider text-left">
            Have a unique legal or commercial parameter not covered here?
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-1.5 text-gold-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
          >
            <span>Request Bespoke Consultation Brief</span>
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
