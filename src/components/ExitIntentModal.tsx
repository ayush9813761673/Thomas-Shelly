import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, ShieldAlert, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if the user has already seen or dismissed the exit intent modal in this session
    const hasDismissed = sessionStorage.getItem('exit_intent_dismissed');
    if (hasDismissed) return;

    // Detect touch-based mobile devices and disable exit intent (no cursor)
    const isTouchDevice = 
      window.matchMedia('(pointer: coarse)').matches || 
      'ontouchstart' in window;
    
    if (isTouchDevice) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when cursor leaves the top boundary of the viewport (approaching tabs/close)
      if (e.clientY < 20) {
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem('exit_intent_dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate premium validation & report assembly
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      sessionStorage.setItem('exit_intent_dismissed', 'true');
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
          
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="absolute inset-0 bg-charcoal-950/90 backdrop-blur-md"
            id="exit-modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-gradient-to-b from-charcoal-900 to-charcoal-950 border border-gold-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden z-10 text-left"
            id="exit-modal-container"
          >
            {/* Ambient Background Gold Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 rounded-full blur-[60px] pointer-events-none" />

            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-2 text-charcoal-400 hover:text-white rounded-full hover:bg-charcoal-800/40 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!isSubmitted ? (
              <div className="space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full w-fit">
                  <ShieldAlert size={12} className="text-gold-400" />
                  <span className="text-[9px] font-bold text-gold-400 tracking-wider uppercase">
                    CONFIDENTIAL INTELLIGENCE REGISTER
                  </span>
                </div>

                {/* Main Titles */}
                <div className="space-y-2">
                  <span className="font-serif text-xs font-black text-white/40 tracking-widest uppercase block">
                    Thomas Skelly // Exclusive Publication
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide leading-tight">
                    The Sydney Off-Market Insider Report
                  </h3>
                  <p className="text-charcoal-300 text-xs sm:text-sm font-light leading-relaxed">
                    Before you leave, secure privileged access to our mid-year private portfolio analysis. Discover strictly off-market waterfront estates, closed-bid transaction indexes, and hidden capital movements within Sydney's elite baseline.
                  </p>
                </div>

                {/* Mini Bullet Points */}
                <div className="space-y-2.5 bg-charcoal-900/60 border border-charcoal-850 p-4 rounded-xl">
                  <div className="flex items-start gap-2.5">
                    <span className="text-gold-400 text-xs mt-0.5">✦</span>
                    <p className="text-[11px] text-charcoal-200">
                      <strong>Exclusive Access:</strong> Profiles of 18 deep waterfront estates valued over $25M currently trading without public listings.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-gold-400 text-xs mt-0.5">✦</span>
                    <p className="text-[11px] text-charcoal-200">
                      <strong>Yield Intelligence:</strong> Point Piper and Bellevue Hill price trajectory forecasts for Q3/Q4 2026.
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-charcoal-950 border border-charcoal-800 hover:border-charcoal-700 focus:border-gold-500/50 rounded-xl px-4 py-3 text-xs text-white placeholder-charcoal-500 outline-none transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Secure Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-charcoal-950 border border-charcoal-800 hover:border-charcoal-700 focus:border-gold-500/50 rounded-xl px-4 py-3 text-xs text-white placeholder-charcoal-500 outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-500 to-gold-450 hover:from-gold-450 hover:to-gold-500 text-charcoal-950 font-black uppercase tracking-widest py-3.5 rounded-xl text-xs shadow-xl shadow-gold-500/10 cursor-pointer disabled:opacity-75 transition-all"
                  >
                    {isLoading ? (
                      <span className="h-4 w-4 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Download size={13} />
                        <span>Download Private Intelligence Report</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Privacy Safeguard */}
                <p className="text-[9px] text-charcoal-500 text-center font-light uppercase tracking-wider">
                  🔐 Your identity remains secure under strict double-blind data encryption.
                </p>

              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center py-6"
              >
                <div className="h-16 w-16 bg-gold-500/10 border border-gold-500/20 rounded-full flex items-center justify-center mx-auto text-gold-400">
                  <CheckCircle2 size={32} />
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                    Access Granted Successfully
                  </h4>
                  <p className="text-xs text-charcoal-300 max-w-sm mx-auto font-light leading-relaxed">
                    Thank you, <strong>{name || 'Client'}</strong>. The off-market dossier configuration is compiled. We have sent the download token directly to <strong>{email}</strong>.
                  </p>
                </div>

                {/* Simulated direct file container */}
                <div className="bg-charcoal-950 border border-charcoal-800 rounded-2xl p-4 flex items-center justify-between max-w-sm mx-auto">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gold-500/10 border border-gold-500/20 rounded-lg text-gold-400">
                      <FileText size={18} />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] text-charcoal-500 block">Dossier #99238-A</span>
                      <span className="text-xs font-bold text-white block">Sydney-OffMarket-Report.pdf</span>
                    </div>
                  </div>
                  
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Downloading 'Sydney-OffMarket-Report.pdf'...");
                    }}
                    className="p-2 text-gold-400 hover:text-white hover:bg-charcoal-900 rounded-lg transition-all"
                    title="Direct Download Link"
                  >
                    <Download size={14} />
                  </a>
                </div>

                <button
                  onClick={handleDismiss}
                  className="text-[10px] uppercase tracking-widest text-charcoal-400 hover:text-white font-bold cursor-pointer underline decoration-gold-500/30 underline-offset-4"
                >
                  Return to Portfolio
                </button>
              </motion.div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
