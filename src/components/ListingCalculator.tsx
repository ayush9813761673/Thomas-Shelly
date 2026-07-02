import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Clock, Hourglass, HelpCircle, ArrowRight } from 'lucide-react';

interface ListingCalculatorProps {
  onCalculateInquire: (summary: string) => void;
}

const SYDNEY_SUBURBS = [
  { name: 'Darling Point', premiumMultiplier: 1.09, avgPrice: 6500000 },
  { name: 'Bellevue Hill', premiumMultiplier: 1.10, avgPrice: 8500000 },
  { name: 'Point Piper', premiumMultiplier: 1.12, avgPrice: 12000000 },
  { name: 'Mosman', premiumMultiplier: 1.08, avgPrice: 5500000 },
  { name: 'Vaucluse', premiumMultiplier: 1.09, avgPrice: 7500000 },
  { name: 'Paddington', premiumMultiplier: 1.07, avgPrice: 3800000 },
  { name: 'Woollahra', premiumMultiplier: 1.08, avgPrice: 4800000 },
  { name: 'Bronte', premiumMultiplier: 1.08, avgPrice: 5200000 },
];

export default function ListingCalculator({ onCalculateInquire }: ListingCalculatorProps) {
  const [propertyValue, setPropertyValue] = useState<number>(5500000);
  const [selectedSuburb, setSelectedSuburb] = useState(SYDNEY_SUBURBS[3]); // Default Mosman
  const [gainedPremium, setGainedPremium] = useState<number>(0);
  const [hoursDedications, setHoursDedications] = useState({ skelly: 42, regular: 4 });

  useEffect(() => {
    // Calculate custom premium. Standard real estate agents net X, Skelly nets +7-12% higher due to bespoke single focus
    // Multiplier reflects the quality premium
    const premiumRate = (selectedSuburb.premiumMultiplier - 1) + 0.01; // e.g., 8-11%
    const computedPremium = propertyValue * premiumRate;
    setGainedPremium(computedPremium);
  }, [propertyValue, selectedSuburb]);

  const formatCurrency = (val: number) => {
    if (val >= 1000000) {
      return `$${(val / 1000000).toFixed(2)}M`;
    }
    return `$${val.toLocaleString()}`;
  };

  const handleInquireResult = () => {
    const summary = `Estimated value potential for property in ${selectedSuburb.name} worth ${formatCurrency(propertyValue)}: Thomas Skelly's focused negotiation strategy could yield an extra ${formatCurrency(gainedPremium)} and save approx 18 days on market.`;
    onCalculateInquire(summary);
  };

  return (
    <div className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
      {/* Visual background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-charcoal-950 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Interactive Input Controls */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-gold-400 font-bold uppercase mb-2 block">
              Bespoke Outperformance Model
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mb-4">
              Estimate Your Focus Premium
            </h3>
            <p className="text-charcoal-300 text-xs sm:text-sm font-light leading-relaxed mb-8">
              High-volume agents juggle 25-30 listings simultaneously, converting your largest lifetime asset into a rapid transaction. Limiting active campaigns to <strong className="text-gold-300 font-medium">just 5</strong> allows Thomas to invest 10x more hours, driving highly tailored marketing and high-leverage negotiation.
            </p>

            {/* Suburb Selector */}
            <div className="mb-8">
              <label className="text-xs uppercase tracking-widest text-charcoal-400 font-semibold mb-3 block">
                1. Select Sydney Suburb Context
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SYDNEY_SUBURBS.map((suburb) => (
                  <button
                    key={suburb.name}
                    onClick={() => {
                      setSelectedSuburb(suburb);
                      // Adjust slider base if user selects suburb with higher average
                      if (propertyValue === 5500000) {
                        setPropertyValue(suburb.avgPrice);
                      }
                    }}
                    className={`text-[11px] font-medium tracking-wide py-2.5 px-3 rounded text-center transition-all duration-300 border ${
                      selectedSuburb.name === suburb.name
                        ? 'bg-gold-500 text-charcoal-950 border-gold-500 font-semibold'
                        : 'bg-charcoal-950 text-charcoal-300 border-charcoal-800 hover:border-charcoal-700 hover:text-white'
                    }`}
                  >
                    {suburb.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider value input */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs uppercase tracking-widest text-charcoal-400 font-semibold">
                  2. Estimated Current Property Value
                </label>
                <span className="font-serif text-lg font-bold text-gold-400 bg-charcoal-950 px-3 py-1 rounded border border-charcoal-800">
                  {formatCurrency(propertyValue)}
                </span>
              </div>
              
              <input
                type="range"
                min="2000000"
                max="25000000"
                step="250000"
                value={propertyValue}
                onChange={(e) => setPropertyValue(parseInt(e.target.value))}
                className="w-full accent-gold-500 h-1.5 bg-charcoal-950 rounded-lg cursor-pointer transition-colors"
              />
              <div className="flex justify-between text-[10px] text-charcoal-500 mt-2 font-mono">
                <span>$2.0M</span>
                <span>$10.0M</span>
                <span>$18.0M</span>
                <span>$25.0M</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-charcoal-800/60 hidden sm:block">
            <span className="text-[10px] text-charcoal-400 leading-relaxed block font-light">
              *Model based on Thomas Skelly’s historic Sydney auction outperformance, average suburb price multipliers, and a strict single-focus operational campaign model.
            </span>
          </div>
        </div>

        {/* Right Output Dashboard Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="bg-charcoal-950 border border-charcoal-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
            {/* Fine decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl" />

            <div>
              <div className="flex items-center space-x-2 text-[10px] tracking-widest text-gold-400 font-bold uppercase mb-4">
                <TrendingUp size={12} />
                <span>Thomas Skelly Premium</span>
              </div>
              
              <div className="mb-2">
                <div className="text-[11px] text-charcoal-400 uppercase tracking-widest mb-1 font-medium">
                  Additional Yield Capital Secured
                </div>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-200 to-gold-400">
                  {formatCurrency(gainedPremium)}
                </div>
              </div>
              
              <div className="text-xs text-charcoal-300 font-light leading-relaxed mb-6">
                Representing an extra <span className="text-gold-300 font-medium">+{((gainedPremium / propertyValue) * 100).toFixed(1)}%</span> in liquid equity generated purely from strategic individual positioning.
              </div>
            </div>

            {/* Bento statistics */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-charcoal-900">
              <div className="bg-charcoal-900/60 p-4 rounded-lg border border-charcoal-800/40">
                <div className="flex items-center space-x-1.5 text-charcoal-400 text-[10px] uppercase tracking-wider mb-1">
                  <Clock size={11} className="text-gold-400" />
                  <span>Time Saved</span>
                </div>
                <div className="font-serif text-lg font-bold text-white">18 Days</div>
                <div className="text-[9px] text-charcoal-400">Fewer days on market</div>
              </div>

              <div className="bg-charcoal-900/60 p-4 rounded-lg border border-charcoal-800/40">
                <div className="flex items-center space-x-1.5 text-charcoal-400 text-[10px] uppercase tracking-wider mb-1">
                  <Hourglass size={11} className="text-gold-400" />
                  <span>Hours Invested</span>
                </div>
                <div className="font-serif text-lg font-bold text-gold-300">
                  {hoursDedications.skelly} hrs/wk
                </div>
                <div className="text-[9px] text-charcoal-400">Vs ~4 hrs from legacy agents</div>
              </div>
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={handleInquireResult}
            className="w-full bg-transparent hover:bg-gold-500 border border-gold-500 hover:border-gold-600 text-gold-400 hover:text-charcoal-950 font-semibold tracking-widest text-xs uppercase py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <span>Apply This Strategy To My Home</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </div>
  );
}
