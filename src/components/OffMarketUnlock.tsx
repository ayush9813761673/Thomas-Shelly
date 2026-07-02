import React, { useState } from 'react';
import { Lock, Unlock, Mail, ShieldAlert, ArrowRight, Eye, PhoneCall, Key, CheckCircle } from 'lucide-react';
import { OFF_MARKET_PROPERTIES } from '../data';
import { OffMarketProperty } from '../types';

interface OffMarketUnlockProps {
  onInquireOffMarket: (propertyCode: string, suburb: string) => void;
  unlockedEmail: string;
  onUnlockSuccess: (email: string) => void;
}

export default function OffMarketUnlock({ onInquireOffMarket, unlockedEmail, onUnlockSuccess }: OffMarketUnlockProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [revealCodeId, setRevealCodeId] = useState<string | null>(null);

  const handleUnlockSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid private email address.');
      return;
    }
    if (!name) {
      setError('Please provide your name for credentials.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulate elite secure decryption delay
    setTimeout(() => {
      onUnlockSuccess(email);
      setIsSubmitting(false);
    }, 1200);
  };

  const formatCurrency = (val: string) => {
    return val;
  };

  return (
    <div className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
      {/* Visual luxury accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-800" />
      
      {!unlockedEmail ? (
        /* Lock Screen Interface */
        <div className="relative z-10 max-w-2xl mx-auto text-center py-6">
          <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="text-gold-400 animate-pulse" size={24} />
          </div>

          <span className="text-[10px] tracking-[0.3em] text-gold-400 font-bold uppercase mb-2 block">
            Exclusive Pocket Listings
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mb-4">
            Sydney Off-Market Private Registry
          </h3>
          <p className="text-charcoal-300 text-xs sm:text-sm font-light leading-relaxed mb-8 max-w-xl mx-auto">
            To protect the privacy of ultra-high-net-worth sellers, discrete Sydney properties in Point Piper, Vaucluse, and Bellevue Hill are held off-market. Authenticate with your contact credentials below to view price guides, private descriptions, and select photography.
          </p>

          <form onSubmit={handleUnlockSubmit} className="bg-charcoal-950 p-6 sm:p-8 rounded-xl border border-charcoal-800 text-left max-w-lg mx-auto">
            {error && (
              <div className="bg-red-950/50 border border-red-800/80 text-red-200 text-xs py-2.5 px-3 rounded mb-4 font-light">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold mb-1.5 block">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Mr. Thomas Wentworth"
                  className="w-full bg-charcoal-900 border border-charcoal-800 focus:border-gold-500 rounded px-3 py-2.5 text-xs text-white placeholder-charcoal-600 outline-none transition-all duration-300 font-light"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold mb-1.5 block">
                    Private Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@executive.com"
                    className="w-full bg-charcoal-900 border border-charcoal-800 focus:border-gold-500 rounded px-3 py-2.5 text-xs text-white placeholder-charcoal-600 outline-none transition-all duration-300 font-light"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold mb-1.5 block">
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0400 000 000"
                    className="w-full bg-charcoal-900 border border-charcoal-800 focus:border-gold-500 rounded px-3 py-2.5 text-xs text-white placeholder-charcoal-600 outline-none transition-all duration-300 font-light"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-charcoal-800 text-charcoal-950 text-xs tracking-widest uppercase font-bold py-3.5 px-6 rounded transition-colors duration-300 flex items-center justify-center space-x-2 mt-6 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin border-2 border-charcoal-950 border-t-transparent rounded-full w-3.5 h-3.5" />
                    <span>Decrypting Secure Vault...</span>
                  </>
                ) : (
                  <>
                    <Key size={14} />
                    <span>Unlock Private Registry</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-4 flex items-center space-x-2 text-[10px] text-charcoal-500">
              <ShieldAlert size={12} className="text-gold-500/80 shrink-0" />
              <span>Absolute privacy is assured. We do not sell or share registry access details.</span>
            </div>
          </form>
        </div>
      ) : (
        /* Unlocked Private Real Estate Grid */
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 mb-8 border-b border-charcoal-800">
            <div>
              <div className="flex items-center space-x-1.5 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-1">
                <Unlock size={12} className="text-gold-400" />
                <span>Private Vault Decrypted</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                Active Off-Market Portfolios
              </h3>
            </div>
            
            <div className="mt-4 sm:mt-0 flex items-center space-x-3 bg-charcoal-950 border border-charcoal-800 py-1.5 px-3 rounded">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-[10px] font-mono text-charcoal-400 tracking-wide">
                AUTHORIZED: {unlockedEmail}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFF_MARKET_PROPERTIES.map((property) => (
              <div
                key={property.id}
                className="bg-charcoal-950 border border-charcoal-850 rounded-xl overflow-hidden flex flex-col hover:border-gold-500/40 transition-all duration-300 relative group"
              >
                {/* Confidentiality Seal Watermark */}
                <div className="absolute top-3 right-3 z-20 bg-charcoal-950/90 border border-red-800 text-red-400 text-[8px] tracking-widest font-mono font-bold uppercase py-1 px-2.5 rounded-sm">
                  Confidential
                </div>

                {/* Cover visual with high blurring / overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-950">
                  <img
                    src={property.imageUrl}
                    alt={property.suburb}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/10 to-transparent" />
                  
                  {/* Location badge */}
                  <div className="absolute bottom-3 left-4">
                    <span className="text-gold-400 text-[10px] uppercase tracking-widest font-bold">
                      {property.suburb}
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Price Guide line */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[9px] uppercase tracking-widest text-charcoal-400">Price Expectation</span>
                      <span className="font-serif text-sm font-semibold text-gold-300">
                        {property.priceGuide}
                      </span>
                    </div>

                    {/* Stats layout */}
                    <div className="flex space-x-4 text-[11px] text-charcoal-300 border-b border-charcoal-800/40 pb-3 mb-3">
                      <span><strong>{property.beds}</strong> Bed</span>
                      <span className="text-charcoal-600">•</span>
                      <span><strong>{property.baths}</strong> Bath</span>
                      <span className="text-charcoal-600">•</span>
                      <span><strong>{property.cars}</strong> Car Garage</span>
                    </div>

                    {/* Exclusive briefing */}
                    <p className="text-[11px] text-charcoal-400 leading-relaxed font-light mb-6">
                      {property.exclusiveNotes}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 mt-auto">
                    <div className="bg-charcoal-900 border border-charcoal-800 p-2.5 rounded flex items-center justify-between text-[10px] font-mono text-charcoal-400">
                      <span>FILE CODE:</span>
                      <span className="text-gold-400 font-bold">{property.confidentialCode}</span>
                    </div>

                    <button
                      onClick={() => onInquireOffMarket(property.confidentialCode, property.suburb)}
                      className="w-full bg-gold-500 hover:bg-gold-600 text-charcoal-950 font-bold tracking-widest text-[10px] uppercase py-2.5 rounded transition-colors flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <PhoneCall size={11} />
                      <span>Book Private Inspection</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[11px] text-charcoal-500 font-light max-w-md mx-auto">
              Interested in marketing your home via our discrete Off-Market registry? Contact Thomas Skelly directly for a confidential overview of active buyers currently vetted.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
