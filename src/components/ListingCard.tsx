import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Listing } from '../types';
import { BedDouble, Bath, Car, ArrowUpRight, CheckCircle2, MapPin, Tag } from 'lucide-react';

interface ListingCardProps {
  key?: string;
  listing: Listing;
  onInquire: (address: string) => void;
}

export default function ListingCard({ listing, onInquire }: ListingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusBadge = () => {
    switch (listing.status) {
      case 'sold-auction':
        return (
          <span className="bg-red-950/80 text-red-300 border border-red-800 text-[10px] tracking-widest uppercase px-3 py-1 font-bold rounded-full">
            Auction Success
          </span>
        );
      case 'sold-private':
        return (
          <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-800 text-[10px] tracking-widest uppercase px-3 py-1 font-bold rounded-full">
            Sold Prior to Auction
          </span>
        );
      case 'active':
        return (
          <span className="bg-gold-950/80 text-gold-300 border border-gold-800 text-[10px] tracking-widest uppercase px-3 py-1 font-bold rounded-full animate-pulse">
            Active Campaign
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      id={`listing-${listing.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-charcoal-900 border border-charcoal-800 rounded-lg overflow-hidden flex flex-col group hover:border-gold-500/40 transition-all duration-500 shadow-2xl hover:shadow-gold-500/5 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Property Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-950 border-b border-charcoal-800/80 group-hover:border-gold-500/20 transition-all duration-500">
        <img
          src={listing.imageUrl}
          alt={listing.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-[1.06] group-hover:brightness-110"
        />
        
        {/* Subtle radial luxury gold glowing spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.24)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none mix-blend-screen" />
        
        {/* Soft luxury gold tint wash overlay */}
        <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none mix-blend-color-dodge" />

        {/* Gradients & Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent" />
        
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
          {getStatusBadge()}
        </div>

        {/* Price / Suburb Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
          <div className="flex flex-col">
            <span className="flex items-center space-x-1 text-gold-400 text-xs font-semibold tracking-wider uppercase">
              <MapPin size={12} className="inline mr-0.5" />
              {listing.suburb}
            </span>
            <h3 className="font-serif text-lg font-bold text-white tracking-wide mt-0.5">
              {listing.title}
            </h3>
          </div>
          
          <div className="text-right">
            {listing.soldPrice ? (
              <div className="flex flex-col items-end">
                <span className="text-[9px] uppercase tracking-widest text-charcoal-400">Sold Price</span>
                <span className="font-serif text-lg font-bold text-white text-gold-300">
                  {listing.soldPrice}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-end">
                <span className="text-[9px] uppercase tracking-widest text-charcoal-400">Price Guide</span>
                <span className="font-serif text-base font-bold text-gold-400">
                  {listing.priceGuide}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        {/* Core specs */}
        <div className="flex items-center space-x-6 text-charcoal-300 text-xs tracking-wider pb-4 mb-4 border-b border-charcoal-800">
          <span className="flex items-center space-x-2">
            <BedDouble size={14} className="text-gold-400/80" />
            <span className="font-medium text-white">{listing.beds}</span>
            <span className="text-charcoal-400 text-[10px]">Beds</span>
          </span>
          <span className="flex items-center space-x-2">
            <Bath size={14} className="text-gold-400/80" />
            <span className="font-medium text-white">{listing.baths}</span>
            <span className="text-charcoal-400 text-[10px]">Baths</span>
          </span>
          <span className="flex items-center space-x-2">
            <Car size={14} className="text-gold-400/80" />
            <span className="font-medium text-white">{listing.cars}</span>
            <span className="text-charcoal-400 text-[10px]">Car</span>
          </span>
        </div>

        {/* Narrative Description */}
        <p className="text-charcoal-300 text-xs leading-relaxed mb-6 flex-grow font-light">
          {listing.description}
        </p>

        {/* Curated Highlights */}
        <div className="mb-6">
          <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-gold-400 block mb-3">
            Architectural Curations
          </span>
          <ul className="space-y-2">
            {listing.highlights.slice(0, 3).map((hl, i) => (
              <li key={i} className="flex items-start text-xs text-charcoal-200">
                <CheckCircle2 size={12} className="text-gold-500/80 mr-2 mt-0.5 shrink-0" />
                <span className="font-light leading-snug">{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA to inquire */}
        <button
          onClick={() => onInquire(`${listing.title}, ${listing.suburb}`)}
          className="mt-auto w-full group/btn flex items-center justify-between text-xs tracking-widest uppercase border border-charcoal-800 hover:border-gold-500/40 hover:bg-gold-500/5 text-charcoal-200 hover:text-white py-3 px-4 rounded transition-all duration-300 font-medium"
        >
          <span>
            {listing.status.startsWith('sold') ? 'Inquire For Similar' : 'Inquire Regarding Listing'}
          </span>
          <ArrowUpRight size={14} className="text-gold-400 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
}
