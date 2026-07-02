import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Compass, MapPin, EyeOff, Layers, Sparkles, Send, ArrowRight, CornerDownRight } from 'lucide-react';

interface PortfolioConciergeProps {
  onFormSubmit: (subject: string) => void;
}

export default function PortfolioConcierge({ onFormSubmit }: PortfolioConciergeProps) {
  const [step, setStep] = useState<number>(1);
  const [role, setRole] = useState<'selling' | 'buying' | null>(null);
  const [suburb, setSuburb] = useState<string>('');
  const [budgetRange, setBudgetRange] = useState<string>('');
  const [vibe, setVibe] = useState<string>('');
  const [discretion, setDiscretion] = useState<string>('');
  const [summaryGenerated, setSummaryGenerated] = useState<boolean>(false);

  const startBriefing = () => {
    setStep(1);
    setRole(null);
    setSuburb('');
    setBudgetRange('');
    setVibe('');
    setDiscretion('');
    setSummaryGenerated(false);
  };

  const nextStep = () => {
    if (step === 1 && !role) return;
    if (step === 2 && !suburb) return;
    if (step === 3 && !budgetRange) return;
    if (step === 4 && !vibe) return;
    if (step === 5 && !discretion) return;

    if (step < 5) {
      setStep(step + 1);
    } else {
      setSummaryGenerated(true);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleApplyBriefing = () => {
    const roleVerb = role === 'selling' ? 'Confidential Sale' : 'Exclusive Acquisition';
    const finalSubject = `Bespoke Briefing: ${roleVerb} in ${suburb} (${budgetRange}) - ${discretion} discretion`;
    onFormSubmit(finalSubject);
    
    // Smooth scroll to contact
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-b from-charcoal-900 to-charcoal-950 border border-charcoal-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl" />
      
      {/* Title */}
      <div className="text-left mb-8 pb-6 border-b border-charcoal-800/80">
        <span className="text-[10px] tracking-[0.3em] text-gold-400 font-bold uppercase mb-2 block">
          Client Services
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
          Private Portfolio Concierge
        </h3>
        <p className="text-charcoal-400 text-xs font-light mt-1">
          Initiate a structured, secure briefing outlining your exact buying parameters or listing discretion levels.
        </p>
      </div>

      {!summaryGenerated ? (
        <div>
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <div 
                  key={num} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    step >= num 
                      ? 'w-6 bg-gold-500' 
                      : 'w-2 bg-charcoal-800'
                  }`} 
                />
              ))}
            </div>
            <span className="text-[10px] tracking-widest text-charcoal-400 uppercase font-semibold">
              Step {step} of 5
            </span>
          </div>

          <div className="min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-4 text-left"
                >
                  <label className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
                    01 // What is your primary objective?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => setRole('selling')}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 relative group cursor-pointer ${
                        role === 'selling'
                          ? 'border-gold-500 bg-gold-500/5 text-white'
                          : 'border-charcoal-800 bg-charcoal-900/60 text-charcoal-300 hover:border-charcoal-700'
                      }`}
                    >
                      <Layers size={18} className={`mb-3 ${role === 'selling' ? 'text-gold-400' : 'text-charcoal-400'}`} />
                      <h4 className="text-xs uppercase tracking-wider font-bold mb-1">I Wish to Sell</h4>
                      <p className="text-[11px] text-charcoal-400 font-light">Explore a highly-targeted private representation campaign with strict market controls.</p>
                      {role === 'selling' && <span className="absolute top-4 right-4 text-gold-400 text-xs">●</span>}
                    </button>

                    <button
                      onClick={() => setRole('buying')}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 relative group cursor-pointer ${
                        role === 'buying'
                          ? 'border-gold-500 bg-gold-500/5 text-white'
                          : 'border-charcoal-800 bg-charcoal-900/60 text-charcoal-300 hover:border-charcoal-700'
                      }`}
                    >
                      <Compass size={18} className={`mb-3 ${role === 'buying' ? 'text-gold-400' : 'text-charcoal-400'}`} />
                      <h4 className="text-xs uppercase tracking-wider font-bold mb-1">I Wish to Acquire</h4>
                      <p className="text-[11px] text-charcoal-400 font-light">Join the private register to unlock premium off-market estates and cliffside sanctuaries.</p>
                      {role === 'buying' && <span className="absolute top-4 right-4 text-gold-400 text-xs">●</span>}
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-4 text-left"
                >
                  <label className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
                    02 // Target Suburb or Region
                  </label>
                  <p className="text-[11px] text-charcoal-400 font-light mb-2">Select your primary geography of interest within the Sydney elite basin.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {['Point Piper', 'Bellevue Hill', 'Darling Point', 'Mosman Peninsula', 'Vaucluse / Rose Bay', 'Eastern Beaches'].map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setSuburb(sub)}
                        className={`py-3 px-4 rounded-xl border text-center transition-all duration-300 text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                          suburb === sub
                            ? 'border-gold-500 bg-gold-500/5 text-gold-300'
                            : 'border-charcoal-800 bg-charcoal-900/40 text-charcoal-400 hover:border-charcoal-700 hover:text-white'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-4 text-left"
                >
                  <label className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
                    03 // Asset Value Bracket
                  </label>
                  <p className="text-[11px] text-charcoal-400 font-light mb-2">Identify the financial tier corresponding to your transaction profile.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['$5,000,000 – $8,000,000', '$8,000,000 – $15,000,000', '$15,000,000 – $30,000,000+'].map((bracket) => (
                      <button
                        key={bracket}
                        onClick={() => setBudgetRange(bracket)}
                        className={`p-4 rounded-xl border text-center transition-all duration-300 text-xs font-semibold cursor-pointer ${
                          budgetRange === bracket
                            ? 'border-gold-500 bg-gold-500/5 text-gold-300'
                            : 'border-charcoal-800 bg-charcoal-900/40 text-charcoal-400 hover:border-charcoal-700 hover:text-white'
                        }`}
                      >
                        {bracket}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-4 text-left"
                >
                  <label className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
                    04 // Architecture & Lifestyle Vibe
                  </label>
                  <p className="text-[11px] text-charcoal-400 font-light mb-2">Select the signature lifestyle aesthetic that best captures your aspirations.</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Deep Waterfront with Jetty', val: 'Waterfront Jetty' },
                      { label: 'Panoramic Penthouse Estate', val: 'Panoramic Penthouse' },
                      { label: 'Sandstone Heritage Classic', val: 'Heritage Sandstone' },
                      { label: 'Modernist Raw Cliff-House', val: 'Modernist Cliffside' }
                    ].map((item) => (
                      <button
                        key={item.val}
                        onClick={() => setVibe(item.val)}
                        className={`p-4 rounded-xl border text-left transition-all duration-300 text-xs cursor-pointer ${
                          vibe === item.val
                            ? 'border-gold-500 bg-gold-500/5 text-gold-300 font-bold'
                            : 'border-charcoal-800 bg-charcoal-900/40 text-charcoal-400 hover:border-charcoal-700 hover:text-white'
                        }`}
                      >
                        <span className="block font-semibold uppercase tracking-wider">{item.val}</span>
                        <span className="block text-[10px] text-charcoal-500 mt-0.5">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-4 text-left"
                >
                  <label className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
                    05 // Requested Level of Discretion
                  </label>
                  <p className="text-[11px] text-charcoal-400 font-light mb-2">Determine the procedural sensitivity required for subsequent discussions.</p>
                  <div className="space-y-3">
                    {[
                      { title: 'Standard Luxury Presentation', subtitle: 'Normal bespoke listing with public branding but limited inspections.', id: 'Standard' },
                      { title: 'Confidential Registry Placement', subtitle: 'Off-market listing only unlocked via verified secure portal logins.', id: 'Confidential' },
                      { title: 'Double-Blind Private Syndicate', subtitle: 'Complete identity concealment. Inspections conducted via proxies under strict NDA.', id: 'Double-Blind' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setDiscretion(item.id)}
                        className={`w-full p-4 rounded-xl border text-left transition-all duration-300 relative cursor-pointer ${
                          discretion === item.id
                            ? 'border-gold-500 bg-gold-500/5 text-white'
                            : 'border-charcoal-800 bg-charcoal-900/40 text-charcoal-300 hover:border-charcoal-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <EyeOff size={13} className={discretion === item.id ? 'text-gold-400' : 'text-charcoal-500'} />
                          <h5 className="text-xs uppercase tracking-wider font-bold">{item.title}</h5>
                        </div>
                        <p className="text-[10px] text-charcoal-500 font-light mt-1 ml-5">{item.subtitle}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Back & Forward Button Row */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-charcoal-800/60">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className={`text-[10px] uppercase tracking-widest font-bold transition-all ${
                  step === 1 
                    ? 'text-charcoal-600 cursor-not-allowed' 
                    : 'text-charcoal-400 hover:text-white cursor-pointer'
                }`}
              >
                ← Prev Step
              </button>

              <button
                onClick={nextStep}
                className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-charcoal-950 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer"
              >
                <span>{step === 5 ? 'Generate Strategy Profile' : 'Next Question'}</span>
                <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          key="summary"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6 text-left"
        >
          {/* Compiled Editorial Certificate */}
          <div className="bg-charcoal-950 border border-gold-500/20 p-6 rounded-2xl relative overflow-hidden bg-grid-lines">
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gold-500/10 border border-gold-500/20 px-2.5 py-1 rounded-full">
              <ShieldCheck size={11} className="text-gold-400" />
              <span className="text-[8px] font-bold text-gold-400 tracking-wider uppercase">CONFIDENTIAL RECORD</span>
            </div>

            <span className="font-serif text-xs font-black text-white/40 tracking-widest uppercase block mb-3">
              Thomas Skelly // Client Brief
            </span>

            <h4 className="font-serif text-lg font-bold text-white tracking-wide mb-4">
              Bespoke {role === 'selling' ? 'Sale Configuration' : 'Acquisition Strategy'}
            </h4>

            <div className="space-y-3.5 border-t border-charcoal-900 pt-4">
              <div className="flex items-baseline justify-between text-xs pb-1.5 border-b border-charcoal-900/60">
                <span className="text-charcoal-500 uppercase tracking-widest text-[9px]">Aesthetic Category</span>
                <span className="text-gold-400 font-semibold">{vibe}</span>
              </div>
              <div className="flex items-baseline justify-between text-xs pb-1.5 border-b border-charcoal-900/60">
                <span className="text-charcoal-500 uppercase tracking-widest text-[9px]">Target Suburb basin</span>
                <span className="text-white font-medium">{suburb}</span>
              </div>
              <div className="flex items-baseline justify-between text-xs pb-1.5 border-b border-charcoal-900/60">
                <span className="text-charcoal-500 uppercase tracking-widest text-[9px]">Allocated Capital Tier</span>
                <span className="text-white font-medium">{budgetRange}</span>
              </div>
              <div className="flex items-baseline justify-between text-xs pb-1.5 border-b border-charcoal-900/60">
                <span className="text-charcoal-500 uppercase tracking-widest text-[9px]">Requested Sensitivity</span>
                <span className="text-emerald-400 font-bold">{discretion} Discretion</span>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-2.5">
              <CornerDownRight size={14} className="text-gold-500 mt-0.5 shrink-0" />
              <p className="text-[10px] text-charcoal-400 leading-relaxed font-light">
                <strong>Next Step:</strong> Apply this compiled configuration profile to the inquiry terminal below to establish an offline workspace strategy directly with Thomas.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-between pt-2">
            <button
              onClick={startBriefing}
              className="text-[10px] uppercase tracking-widest text-charcoal-400 hover:text-white font-bold cursor-pointer"
            >
              ← Reset Profile parameters
            </button>

            <button
              onClick={handleApplyBriefing}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-black uppercase tracking-widest px-7 py-3 rounded-full text-xs shadow-xl shadow-gold-500/10 cursor-pointer"
            >
              <Send size={12} />
              <span>Apply & Book Consultation</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
