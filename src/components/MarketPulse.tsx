import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, RefreshCw, BarChart2, DollarSign, Eye } from 'lucide-react';

interface MarketIndex {
  suburb: string;
  metric: string;
  value: string;
  change: string;
  isPositive: boolean;
  activityLevel: 'High' | 'Extremely High' | 'Strictly Exclusive';
  sparklineData: number[];
}

export default function MarketPulse() {
  const [lastUpdated, setLastUpdated] = useState<string>('Just now');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedSub, setSelectedSub] = useState<number>(0);

  const marketData: MarketIndex[] = [
    {
      suburb: 'Point Piper',
      metric: 'Waterfront Median Value',
      value: '$34,800,000',
      change: '+4.2%',
      isPositive: true,
      activityLevel: 'Strictly Exclusive',
      sparklineData: [45, 47, 46, 49, 52, 51, 55]
    },
    {
      suburb: 'Darling Point',
      metric: 'Premium Penthouse Rate/sqm',
      value: '$38,500',
      change: '+2.8%',
      isPositive: true,
      activityLevel: 'High',
      sparklineData: [32, 33, 35, 34, 36, 37, 38.5]
    },
    {
      suburb: 'Bellevue Hill',
      metric: 'Acreage Estate Volume',
      value: '$185,000,000',
      change: '+12.4%',
      isPositive: true,
      activityLevel: 'Extremely High',
      sparklineData: [120, 130, 145, 150, 165, 175, 185]
    },
    {
      suburb: 'Mosman Peninsula',
      metric: 'Waterfront Clearance Rate',
      value: '91.3%',
      change: '+1.5%',
      isPositive: true,
      activityLevel: 'High',
      sparklineData: [88, 89, 90, 87, 89, 90.5, 91.3]
    }
  ];

  const refreshPulse = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      const time = new Date().toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLastUpdated(`at ${time}`);
    }, 900);
  };

  return (
    <div id="market-pulse" className="border-y border-charcoal-800/60 bg-charcoal-900/40 backdrop-blur-md py-6 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Ticker Header Info */}
        <div className="flex items-center justify-between lg:justify-start gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            <div>
              <p className="text-[10px] tracking-[0.2em] font-bold text-gold-400 uppercase">Live Pulse</p>
              <h4 className="font-serif text-sm font-semibold text-white tracking-wide">Sydney Luxury Market Index</h4>
            </div>
          </div>
          
          <button 
            onClick={refreshPulse}
            disabled={isRefreshing}
            className="p-1.5 rounded-full border border-charcoal-800 hover:border-gold-500/30 hover:bg-charcoal-800/50 text-charcoal-400 hover:text-gold-400 transition-all cursor-pointer flex items-center justify-center"
            title="Refresh Live Metrics"
          >
            <RefreshCw size={12} className={`${isRefreshing ? 'animate-spin text-gold-400' : ''}`} />
          </button>
        </div>

        {/* Selected suburb detail block & mini tabs */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 lg:gap-8 flex-1 justify-end">
          
          {/* Tabs */}
          <div className="grid grid-cols-2 sm:flex items-center gap-1.5 border border-charcoal-800/80 p-1 rounded-lg bg-charcoal-950/60">
            {marketData.map((data, idx) => (
              <button
                key={data.suburb}
                onClick={() => setSelectedSub(idx)}
                className={`px-3 py-1.5 text-[10px] sm:text-xs font-medium tracking-wide rounded-md transition-all uppercase duration-300 ${
                  selectedSub === idx 
                    ? 'bg-gold-500 text-charcoal-950 shadow-lg font-bold' 
                    : 'text-charcoal-400 hover:text-white hover:bg-charcoal-900'
                }`}
              >
                {data.suburb}
              </button>
            ))}
          </div>

          {/* Detailed Metric Showcase with Sparkline */}
          <motion.div 
            key={selectedSub}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between md:justify-end gap-6 bg-charcoal-900/80 border border-charcoal-800/80 rounded-xl px-4 py-3 sm:py-2.5 flex-1 max-w-md ml-auto lg:ml-0"
          >
            <div className="text-left">
              <span className="text-[9px] uppercase tracking-wider text-charcoal-400 block font-light">
                {marketData[selectedSub].metric}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-lg font-bold text-white tracking-tight">
                  {marketData[selectedSub].value}
                </span>
                <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-0.5">
                  <TrendingUp size={10} />
                  {marketData[selectedSub].change}
                </span>
              </div>
            </div>

            {/* Micro Custom Sparkline */}
            <div className="flex items-center gap-4">
              <div className="h-8 w-20 flex items-end gap-[2px]">
                {marketData[selectedSub].sparklineData.map((val, i) => {
                  const max = Math.max(...marketData[selectedSub].sparklineData);
                  const min = Math.min(...marketData[selectedSub].sparklineData);
                  const pct = ((val - min) / (max - min || 1)) * 100;
                  const height = Math.max(10, pct);
                  return (
                    <div 
                      key={i} 
                      className="w-2 bg-gradient-to-t from-gold-500/20 to-gold-400/80 rounded-t-[1px]" 
                      style={{ height: `${height}%` }}
                      title={`Value point: ${val}`}
                    />
                  );
                })}
              </div>
              <div className="hidden sm:block text-right border-l border-charcoal-800 pl-4">
                <span className="text-[8px] uppercase tracking-widest text-charcoal-500 block">Activity</span>
                <span className="text-[10px] text-gold-300 font-bold tracking-wide block">
                  {marketData[selectedSub].activityLevel}
                </span>
              </div>
            </div>

          </motion.div>

        </div>
        
      </div>
    </div>
  );
}
