import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, Users, Sparkles, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface BlueprintPhase {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  narrative: string;
  particulars: string[];
  exclusiveFact: string;
  visualBg: string;
}

export default function CampaignBlueprint() {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases: BlueprintPhase[] = [
    {
      id: 0,
      title: 'Symphonic Production',
      subtitle: 'Cinematic Narrative Creation',
      icon: Film,
      narrative: 'We do not capture real estate photos; we produce cinematic property monographs. I coordinate award-winning directors and lighting specialists to document your property across the golden hours, setting it to a custom-orchestrated private viewing score.',
      particulars: [
        'Time-lapse sunset atmospheric capture and twilight elevation studies',
        'Direct-to-screen storytelling focus, minimizing wide-angle distortion',
        'Bespoke physical hardcover presentation monograph for select buyers',
        'Ambient sensory design: custom architectural soundscapes for inspections'
      ],
      exclusiveFact: 'Typically generates 4x higher average digital engagement from global family offices.',
      visualBg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 1,
      title: 'Sovereign Syndicate',
      subtitle: 'Private High-Net-Worth Channels',
      icon: Users,
      narrative: 'A premium campaign transcends public portals. I maintain an active, secure digital handshake with 120+ active private family office managers, wealth advisors, and elite buyer syndicates spanning London, New York, Singapore, and Sydney.',
      particulars: [
        'Direct, double-blind invitation to vetted, off-market buyer circles',
        'Exclusive briefing sessions hosted inside premium Sydney private clubs',
        'Targeted secure database matching based on specific lifestyle acquisitions',
        'Zero public price guidance decay: absolute narrative control'
      ],
      exclusiveFact: '60% of our ultra-prestige Sydney transactions occur without ever launching publicly.',
      visualBg: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      title: 'Museum-Grade Curation',
      subtitle: 'Fine Art & Interior Directorship',
      icon: Sparkles,
      narrative: 'Your residence is an architectural artwork. Rather than using standard furniture hire packages, I partner with Sydney’s finest gallery directors and premium antique dealers to curate museum-grade fine art and custom collectors’ furniture.',
      particulars: [
        'Curated selection of original Australian modernist and contemporary art',
        'Placement of collectors-grade mid-century furniture and bespoke rugs',
        'Scent curation: custom room perfumes engineered specifically for your suburb',
        'Custom flora styling: minimal structural greenery selected by botanical designers'
      ],
      exclusiveFact: 'Propels high-profile properties to record-breaking emotional valuations.',
      visualBg: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <div className="bg-charcoal-950 text-white rounded-3xl border border-charcoal-800/80 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Editorial Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="text-left max-w-xl">
          <span className="text-[10px] tracking-[0.3em] text-gold-400 font-bold uppercase mb-2 block">
            The Bespoke Standard
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl font-semibold text-white tracking-wide">
            The Campaign Masterclass
          </h3>
          <p className="text-charcoal-400 text-xs sm:text-sm font-light mt-2">
            An uncompromising sequence of narrative creation, strategic placement, and high-net-worth distribution tailored directly to the elite class.
          </p>
        </div>

        {/* Phase Selectors Indicator */}
        <div className="flex items-center gap-1.5 border border-charcoal-800 p-1 rounded-full bg-charcoal-900/40">
          {phases.map((p, idx) => {
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setActivePhase(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activePhase === idx 
                    ? 'bg-gold-500 text-charcoal-950 font-bold shadow-lg' 
                    : 'text-charcoal-400 hover:text-white hover:bg-charcoal-800/40'
                }`}
              >
                <Icon size={12} />
                <span className="hidden sm:inline">Phase 0{idx + 1}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Showcase Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col justify-between text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest text-gold-400 font-bold uppercase">
                  Phase 0{phases[activePhase].id + 1} // {phases[activePhase].subtitle}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                  {phases[activePhase].title}
                </h4>
              </div>

              <p className="text-charcoal-300 text-xs sm:text-sm font-light leading-relaxed">
                {phases[activePhase].narrative}
              </p>

              {/* Checklists */}
              <div className="space-y-3.5 pt-2">
                {phases[activePhase].particulars.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-gold-400 mt-1 shrink-0" />
                    <span className="text-charcoal-200 text-xs font-light">{item}</span>
                  </div>
                ))}
              </div>

              {/* Exclusive Fact Block */}
              <div className="bg-charcoal-900/60 border border-charcoal-800 p-4 rounded-xl flex items-center gap-3">
                <span className="text-gold-400 text-xs">✨</span>
                <p className="text-[11px] font-medium text-gold-300 italic">
                  <strong>Stat:</strong> {phases[activePhase].exclusiveFact}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-charcoal-800">
            <div className="text-left">
              <p className="text-[10px] text-charcoal-500 uppercase tracking-widest">Active Campaign Status</p>
              <p className="text-xs font-semibold text-white">Full integration included with exclusive representations.</p>
            </div>
            
            <button 
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ml-auto group/btn inline-flex items-center gap-2 border border-gold-500/30 hover:border-gold-500 bg-gold-500/5 hover:bg-gold-500 text-gold-400 hover:text-charcoal-950 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
            >
              <span>Design My Strategy</span>
              <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Right Side Visual Immersive Card */}
        <div className="lg:col-span-5 relative h-[320px] lg:h-auto rounded-2xl overflow-hidden border border-charcoal-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${phases[activePhase].visualBg}')` }}
            >
              {/* Luxury gold filter overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
              
              {/* Quote or details overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-charcoal-950/80 backdrop-blur-md border border-charcoal-800/80 text-left">
                <span className="text-[9px] uppercase tracking-wider text-gold-400 font-bold block mb-1">
                  EXCLUSIVE ARCHIVE // SYDNEY
                </span>
                <span className="text-xs font-light text-charcoal-100 italic">
                  "The highest values are extracted when buyers feel a deep emotional alignment to a unique, highly targeted narrative."
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
