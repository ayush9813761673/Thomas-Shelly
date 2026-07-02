import React, { useState, useEffect } from 'react';
import { 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  Briefcase, 
  ArrowRight, 
  Sparkles, 
  Lock, 
  HelpCircle, 
  ChevronRight, 
  CheckCircle2, 
  Plus, 
  Eye, 
  PhoneCall,
  Clock,
  MapPin,
  Check
} from 'lucide-react';
import Navbar from './components/Navbar';
import ListingCard from './components/ListingCard';
import ListingCalculator from './components/ListingCalculator';
import OffMarketUnlock from './components/OffMarketUnlock';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MarketPulse from './components/MarketPulse';
import CampaignBlueprint from './components/CampaignBlueprint';
import PortfolioConcierge from './components/PortfolioConcierge';
import GoldDustCanvas from './components/GoldDustCanvas';
import CustomCursor from './components/CustomCursor';
import ClientTestimonials from './components/ClientTestimonials';
import FAQAccordion from './components/FAQAccordion';
import ExitIntentModal from './components/ExitIntentModal';
import ParallaxBackground from './components/ParallaxBackground';
import { SYDNEY_LISTINGS } from './data';
import thomasPortrait from './thomas-shelly.jpg';
import { Listing } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [prepopulatedSubject, setPrepopulatedSubject] = useState<string>('');
  const [unlockedEmail, setUnlockedEmail] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'sold' | 'active'>('all');
  const [clientSlotsLeft, setClientSlotsLeft] = useState<number>(1);
  const [showEthosDeepDive, setShowEthosDeepDive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Triggering booking inquiry from any listing
  const handleInquireProperty = (propertyTitle: string) => {
    setPrepopulatedSubject(`Listing Details for: ${propertyTitle}`);
    handleScrollTo('contact');
  };

  // Triggering off-market inquiry
  const handleInquireOffMarket = (code: string, suburb: string) => {
    setPrepopulatedSubject(`Confidential Off-Market Listing (Code: ${code}, Suburb: ${suburb})`);
    handleScrollTo('contact');
  };

  // Triggering inquiries from the calculator outperformance estimate
  const handleCalculateInquire = (summaryText: string) => {
    setPrepopulatedSubject(summaryText);
    handleScrollTo('contact');
  };

  // Filter listings
  const filteredListings = SYDNEY_LISTINGS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'sold') return item.status.startsWith('sold');
    if (activeFilter === 'active') return item.status === 'active';
    return true;
  });

  return (
    <div className="min-h-screen bg-charcoal-950 text-charcoal-100 flex flex-col selection:bg-gold-500 selection:text-charcoal-950">
      
      {/* Luxury Modern Gold Cursor Custom Vector shape */}
      <CustomCursor />
      
      {/* Elegant Ambient Gold Dust Particle Trail */}
      <GoldDustCanvas />
      
      {/* Lead Capture Exit Intent Modal (Triggers on cursor exiting viewport top) */}
      <ExitIntentModal />
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="luxury-curtain-loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              y: "-100%",
              transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 bg-charcoal-950 z-[9999] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center max-w-md px-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-16 h-16 border border-gold-500/30 rounded-full flex items-center justify-center mb-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 to-transparent" />
                <span className="font-serif text-lg font-black tracking-widest text-gold-400">TS</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.4em" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-xl sm:text-2xl font-black text-white uppercase tracking-[0.4em] mb-2 mr-[-0.4em]"
              >
                Thomas Skelly
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-[9px] uppercase tracking-[0.25em] text-gold-400 font-bold mb-8 mr-[-0.25em]"
              >
                Sydney Bespoke Practice
              </motion.p>

              <div className="w-48 bg-charcoal-900 h-[1px] relative overflow-hidden rounded">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sleek Floating Glassmorphic Navigation */}
      <Navbar 
        onScrollTo={handleScrollTo} 
        onRequestConsultation={() => handleScrollTo('contact')}
        clientSlotsLeft={clientSlotsLeft}
      />

      {/* 1. Hero / Editorial Entrance Section */}
      <header id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-lines">
        {/* Subtle geometric framing */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-950/40 to-charcoal-950 z-10" />
        
        {/* Ambient background decoration */}
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 right-1/4 w-[35rem] h-[35rem] bg-charcoal-800/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Faint luxury background architectural texture with interactive parallax */}
        <ParallaxBackground 
          imageUrl="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80" 
          opacity={0.12} 
          speed={-0.2} 
        />

        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          animate={isLoading ? {} : { opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }} 
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20 w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Core copy block */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-charcoal-900/80 border border-charcoal-800 px-4 py-2 rounded-full mb-6 animate-fade-in">
                <Award size={13} className="text-gold-400" />
                <span className="text-[10px] tracking-widest text-gold-300 font-bold uppercase">
                  Sydney’s Premier Bespoke Practice
                </span>
              </div>

              {/* Majestic Serif Headline */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Thomas Skelly
              </h1>

              {/* The Tagline */}
              <h2 className="font-serif text-xl sm:text-3xl text-gold-400 font-medium tracking-wide mb-6">
                Fewer Clients. Higher Quality. Focused On You.
              </h2>

              {/* Narrative description */}
              <p className="text-charcoal-300 text-xs sm:text-sm font-light leading-relaxed max-w-xl mb-8">
                I do not run a rapid, high-volume franchise where your property is handed off to junior associates. I limit my partnerships to <strong className="text-white font-medium">just 5 active listings</strong>. Each listing receives my undivided, uncompromised attention, refined luxury marketing, and strategic negotiation leverage.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="bg-gold-500 hover:bg-gold-600 text-charcoal-950 text-xs tracking-widest uppercase font-bold py-4 px-8 rounded transition-all duration-300 shadow-lg hover:shadow-gold-500/20 text-center cursor-pointer"
                >
                  Schedule Private Consultation
                </button>
                <button
                  onClick={() => handleScrollTo('off-market-registry')}
                  className="bg-transparent hover:bg-charcoal-900 border border-charcoal-800 hover:border-charcoal-650 text-white text-xs tracking-widest uppercase py-4 px-8 rounded transition-all duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Lock size={12} className="text-gold-400" />
                  <span>Decrypt Private Registry</span>
                </button>
              </div>
            </div>

            {/* Right Side Card Vitals Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-charcoal-900/60 border border-charcoal-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
                <span className="text-gold-400 font-serif text-2xl sm:text-3xl font-black block mb-1">
                  14 Days
                </span>
                <span className="text-[10px] uppercase tracking-widest text-charcoal-400 block font-semibold mb-2">
                  Average Days on Market
                </span>
                <p className="text-[11px] text-charcoal-300 font-light leading-relaxed">
                  Sydney premium average is 34 days. Single-focus marketing sells twice as fast.
                </p>
              </div>

              <div className="bg-charcoal-900/60 border border-charcoal-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
                <span className="text-gold-400 font-serif text-2xl sm:text-3xl font-black block mb-1">
                  94%
                </span>
                <span className="text-[10px] uppercase tracking-widest text-charcoal-400 block font-semibold mb-2">
                  Auction Success Rate
                </span>
                <p className="text-[11px] text-charcoal-300 font-light leading-relaxed">
                  Absolute outperformance driven by meticulous vetting and direct principal negotiation.
                </p>
              </div>

              <div className="bg-charcoal-900/60 border border-charcoal-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl col-span-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-charcoal-400 font-semibold">
                    Client Limit Status
                  </span>
                  <span className="bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-[8px] tracking-widest uppercase py-0.5 px-2 font-bold rounded">
                    Bespoke Priority
                  </span>
                </div>
                <div className="flex items-end justify-between mb-2">
                  <span className="text-white font-serif text-xl sm:text-2xl font-black block">
                    4 of 5 Vetted Slots Active
                  </span>
                  <span className="text-gold-400 font-bold text-xs tracking-wider mb-1">
                    1 Slot Left Q3 2026
                  </span>
                </div>
                <div className="w-full bg-charcoal-950 h-1.5 rounded-full overflow-hidden flex">
                  <div className="w-4/5 bg-gold-500 h-full" />
                  <div className="w-1/5 bg-charcoal-800 h-full" />
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </header>

      {/* Live Market Pulse Section */}
      <MarketPulse />

      {/* 2. Ethos & Philosophy Section */}
      <section id="about" className="py-24 sm:py-32 bg-charcoal-950 relative border-t border-charcoal-900">
        <ParallaxBackground 
          imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" 
          opacity={0.08} 
          speed={-0.15} 
        />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-[10px] tracking-[0.3em] text-gold-400 font-bold uppercase mb-2 block">
              The Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide mb-4">
              A Bespoke Strategy for Sydney's Finest Real Estate
            </h2>
            <div className="w-16 h-[1px] bg-gold-500/40 mx-auto mt-6 mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* The core bio details */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="space-y-6 text-charcoal-300 font-light text-xs sm:text-sm leading-relaxed"
            >
              <h3 className="font-serif text-lg sm:text-xl text-white font-semibold tracking-wide">
                Why standard high-volume agency franchises fail elite sellers.
              </h3>
              
              <p>
                In the modern real estate landscape, traditional franchise networks measure success in transaction counts. Agents sign 30, 40, or 50 active listings, immediately delegating key client contact, database follow-ups, and active property showings to junior associates who lack deep negotiating instincts.
              </p>
              
              <p>
                <strong>Thomas Skelly represents the alternative.</strong> Driven by an unwavering commitment to outperformance, I accept no more than <strong className="text-white font-medium">five listings at any one time</strong>. 
              </p>
              
              <p>
                This self-imposed restriction is not about lifestyle; it is about pure tactical superiority. It means I personally show your home, return every buyer call, host every private viewing, and lead every high-stakes auction bidding strategy myself. 
              </p>

              <blockquote className="border-l border-gold-500/60 pl-4 py-1 my-4 italic text-gold-300/90 text-sm">
                "Your property is not a trophy on my agency wall. It represents your lifetime's finest capital equity. It deserves the uncompromised focus of a dedicated partner."
              </blockquote>

              <button
                onClick={() => setShowEthosDeepDive(!showEthosDeepDive)}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 hover:text-white transition-colors font-semibold mt-2 cursor-pointer"
              >
                <span>{showEthosDeepDive ? 'Hide Focus Model Comparison' : 'View Focus Model Comparison'}</span>
                <ChevronRight size={14} className={`transition-transform duration-300 ${showEthosDeepDive ? 'rotate-90' : ''}`} />
              </button>
            </motion.div>

            {/* Premium Interactive Quote block / Profile block */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="bg-charcoal-900 border border-charcoal-800 rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between h-full relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl" />
              
              <div className="flex items-center space-x-5 mb-6">
                {/* Agent Avatar Frame */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-gold-400 bg-charcoal-950 shrink-0 shadow-xl shadow-gold-500/10">
                  <img
                    src={thomasPortrait}
                    alt="Thomas Skelly Portrait"
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:brightness-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-white">Thomas Skelly</h4>
                  <span className="text-[11px] sm:text-xs tracking-wider uppercase text-gold-400 font-semibold block mt-1">Principal Partner</span>
                  <span className="text-[10px] sm:text-xs text-charcoal-500 font-mono mt-1 block">License Number: L8450123</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 size={14} className="text-gold-500 shrink-0 mt-0.5" />
                  <p className="text-charcoal-200"><strong className="text-white font-medium">Sydney-wide Vetting:</strong> Historic sales totaling over $450M in luxury Eastern Suburbs and Middle Harbour properties.</p>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 size={14} className="text-gold-500 shrink-0 mt-0.5" />
                  <p className="text-charcoal-200"><strong className="text-white font-medium">Bespoke Negotiation:</strong> Master strategist trained in competitive high-stakes auction representation.</p>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 size={14} className="text-gold-500 shrink-0 mt-0.5" />
                  <p className="text-charcoal-200"><strong className="text-white font-medium">Strict Privacy Vow:</strong> Total confidentiality for executive buyers and off-market sellers.</p>
                </div>
              </div>

              <div className="p-4 bg-charcoal-950 rounded-xl border border-charcoal-850 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-charcoal-500 block">Direct Line</span>
                  <span className="text-sm font-serif font-bold text-white tracking-wide">0408 263 016</span>
                </div>
                <a
                  href="tel:0408263016"
                  className="bg-gold-500/10 hover:bg-gold-500 text-gold-400 hover:text-charcoal-950 border border-gold-500/20 text-xs uppercase font-bold px-3 py-2 rounded transition-all duration-300"
                >
                  Call Direct
                </a>
              </div>
            </motion.div>

          </div>

          {/* Hidden/Toggled Deep-Dive Comparison */}
          {showEthosDeepDive && (
            <div className="mt-12 bg-charcoal-900 border border-charcoal-800 rounded-xl overflow-hidden animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-charcoal-850">
                
                {/* Thomas Skelly model */}
                <div className="p-8">
                  <span className="bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[9px] tracking-widest uppercase py-1 px-3 rounded font-bold">
                    Thomas Skelly Bespoke Model
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white mt-4 mb-6">
                    A Max Cap of 5 Active Listings
                  </h4>
                  <ul className="space-y-4 text-xs font-light text-charcoal-300">
                    <li className="flex items-start space-x-3">
                      <Check className="text-gold-400 shrink-0 mt-0.5" size={14} />
                      <span><strong>Sole Representative:</strong> Principal handles all bidder communications and buyer vetting personally.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="text-gold-400 shrink-0 mt-0.5" size={14} />
                      <span><strong>42 Hours/Week:</strong> Dedicated focus time directly spent analyzing, optimizing, and advancing your campaign.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="text-gold-400 shrink-0 mt-0.5" size={14} />
                      <span><strong>Premium Custom Materials:</strong> Architectural narratives and curated photographic styling bespoke to each property.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="text-gold-400 shrink-0 mt-0.5" size={14} />
                      <span><strong>Maximum Leverage:</strong> Direct access to vetted private portfolios and our off-market pocket registry database.</span>
                    </li>
                  </ul>
                </div>

                {/* Legacy high-volume model */}
                <div className="p-8 bg-charcoal-950/40">
                  <span className="bg-charcoal-800 text-charcoal-400 text-[9px] tracking-widest uppercase py-1 px-3 rounded font-bold">
                    High-Volume Legacy Agency
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-charcoal-300 mt-4 mb-6">
                    30+ Listings Juggled Simultaneously
                  </h4>
                  <ul className="space-y-4 text-xs font-light text-charcoal-400">
                    <li className="flex items-start space-x-3">
                      <span className="text-charcoal-700 font-bold shrink-0 mt-0.5 text-xs">✕</span>
                      <span><strong>Junior Associates:</strong> Inexperienced assistants handle buyer calls, private viewings, and crucial updates.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-charcoal-700 font-bold shrink-0 mt-0.5 text-xs">✕</span>
                      <span><strong>4 Hours/Week:</strong> Fragmented time spent on your property, rushing the sale to hit team targets.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-charcoal-700 font-bold shrink-0 mt-0.5 text-xs">✕</span>
                      <span><strong>Template Assets:</strong> Standard agency-wide styling and template copywriting that blends into standard listings.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-charcoal-700 font-bold shrink-0 mt-0.5 text-xs">✕</span>
                      <span><strong>Unstructured Blast:</strong> Blasting listings onto general aggregator websites without filtering qualified interest.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          )}

        </div>
      </section>

      {/* Dynamic Campaign Blueprint Section */}
      <section id="blueprint" className="py-24 sm:py-32 bg-charcoal-900/10 border-t border-charcoal-900 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <CampaignBlueprint />
          </motion.div>
        </div>
      </section>

      {/* 3. Success Portfolio & Featured Campaign Listings */}
      <section id="listings" className="py-24 sm:py-32 bg-charcoal-900/40 border-t border-charcoal-900 relative">
        <ParallaxBackground 
          imageUrl="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80" 
          opacity={0.06} 
          speed={-0.18} 
        />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Header row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          >
            <div>
              <span className="text-[10px] tracking-[0.3em] text-gold-400 font-bold uppercase mb-2 block animate-fade-in">
                Active & Historic Successes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
                Sydney Campaign Portfolio
              </h2>
            </div>

            {/* Custom filters with glassmorphic backing */}
            <div className="mt-6 md:mt-0 bg-charcoal-950 p-1.5 rounded-lg border border-charcoal-800 flex items-center space-x-2">
              {[
                { label: 'All Campaigns', key: 'all' },
                { label: 'Auction Successes', key: 'sold' },
                { label: 'Active Portfolios', key: 'active' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveFilter(item.key as any)}
                  className={`text-[10px] tracking-wider uppercase font-semibold py-2 px-4 rounded transition-all duration-300 ${
                    activeFilter === item.key
                      ? 'bg-gold-500 text-charcoal-950'
                      : 'text-charcoal-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Property listings grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredListings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onInquire={handleInquireProperty}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Potential Estimate Calculator Section */}
      <section id="calculator" className="py-24 sm:py-32 bg-charcoal-950 border-t border-charcoal-900">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        >
          <ListingCalculator onCalculateInquire={handleCalculateInquire} />
        </motion.div>
      </section>

      {/* 5. Off-Market Private Vault Registry Section */}
      <section id="off-market-registry" className="py-24 sm:py-32 bg-charcoal-900/40 border-t border-charcoal-900">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        >
          <OffMarketUnlock
            unlockedEmail={unlockedEmail}
            onUnlockSuccess={(email) => setUnlockedEmail(email)}
            onInquireOffMarket={handleInquireOffMarket}
          />
        </motion.div>
      </section>

      {/* Client Testimonials Section */}
      <section id="testimonials" className="py-24 sm:py-32 bg-charcoal-950 border-t border-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ClientTestimonials />
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-24 sm:py-32 bg-charcoal-900/20 border-t border-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <FAQAccordion />
          </motion.div>
        </div>
      </section>

      {/* Interactive Portfolio Concierge Section */}
      <section id="concierge" className="py-24 sm:py-32 bg-charcoal-900/40 border-t border-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <PortfolioConcierge onFormSubmit={(subject) => setPrepopulatedSubject(subject)} />
          </motion.div>
        </div>
      </section>

      {/* 6. Direct Line and Consultation Booking form */}
      <section id="contact" className="py-24 sm:py-32 bg-charcoal-950 border-t border-charcoal-900 relative">
        <ParallaxBackground 
          imageUrl="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80" 
          opacity={0.08} 
          speed={-0.15} 
        />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        >
          <ContactForm
            prepopulatedSubject={prepopulatedSubject}
            onClearSubject={() => setPrepopulatedSubject('')}
            clientSlotsLeft={clientSlotsLeft}
          />
        </motion.div>
      </section>

      {/* Elegant licensing & copyright Footer */}
      <Footer onScrollTo={handleScrollTo} />

    </div>
  );
}
