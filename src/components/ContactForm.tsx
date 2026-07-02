import React, { useState, useEffect, useRef } from 'react';
import { BookingInquiry } from '../types';
import { Phone, Mail, Calendar, MapPin, ShieldCheck, CheckCircle2, Award, Clock } from 'lucide-react';

interface ContactFormProps {
  prepopulatedSubject: string;
  onClearSubject: () => void;
  clientSlotsLeft: number;
}

export default function ContactForm({ prepopulatedSubject, onClearSubject, clientSlotsLeft }: ContactFormProps) {
  const [formData, setFormData] = useState<BookingInquiry>({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    estimatedValue: '$3M - $5M',
    timeline: 'immediate',
    message: '',
    preferredConsultation: 'in-person'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prepopulatedSubject) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in: ${prepopulatedSubject}. Please contact me to schedule a private discussion.`
      }));
      // Scroll to form smoothly
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [prepopulatedSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury agency processing delay
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      onClearSubject();
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyAddress: '',
      estimatedValue: '$3M - $5M',
      timeline: 'immediate',
      message: '',
      preferredConsultation: 'in-person'
    });
    setIsSubmitted(false);
  };

  return (
    <div ref={formRef} id="booking-consultation-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      
      {/* Left Contact Sidebar & Vitals */}
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div>
          <span className="text-[10px] tracking-[0.25em] text-gold-400 font-bold uppercase mb-2 block">
            Direct Connection
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mb-6">
            Initiate Your Private Discussion
          </h3>
          <p className="text-charcoal-300 text-xs sm:text-sm font-light leading-relaxed mb-8">
            Each campaign is personally managed, negotiated, and completed by Thomas Skelly. Standard agencies hand listings to junior associates; we offer direct, uncompromised principal attention. 
          </p>

          {/* Quick Info details */}
          <div className="space-y-6">
            <a
              href="tel:0408263016"
              className="group flex items-start space-x-4 p-4 rounded-xl bg-charcoal-900 border border-charcoal-800/60 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-charcoal-950 border border-charcoal-800 group-hover:bg-gold-500 transition-colors duration-300">
                <Phone size={18} className="text-gold-400 group-hover:text-charcoal-950 transition-colors duration-300" />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-charcoal-500 block mb-0.5">Direct Mobile Line</span>
                <span className="text-sm font-medium text-white group-hover:text-gold-300 transition-colors">0408 263 016</span>
                <span className="text-[10px] text-charcoal-400 block mt-0.5 font-light">Available 7 days, direct to Thomas</span>
              </div>
            </a>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-charcoal-900 border border-charcoal-800/60">
              <div className="p-3 rounded-lg bg-charcoal-950 border border-charcoal-800">
                <MapPin size={18} className="text-gold-400" />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-charcoal-500 block mb-0.5">Bespoke Suite Location</span>
                <span className="text-sm font-medium text-white">Level 2, 32 Double Bay Marina Rd</span>
                <span className="text-[10px] text-charcoal-400 block mt-0.5 font-light">Double Bay NSW 2028 (By Appointment Only)</span>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-charcoal-900 border border-charcoal-800/60">
              <div className="p-3 rounded-lg bg-charcoal-950 border border-charcoal-800">
                <Calendar size={18} className="text-gold-400" />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-charcoal-500 block mb-0.5">Principal Availability</span>
                <span className="text-sm font-medium text-white">Currently Accepting 1 New Campaign</span>
                <span className="text-[10px] text-charcoal-400 block mt-0.5 font-light">Strict cap of 5 concurrent active campaigns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Client Capacity Visual Gauge */}
        <div className="mt-10 lg:mt-0 bg-charcoal-900 border border-charcoal-800 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/5 rounded-full blur-xl" />
          
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold-400">
              Active Campaign Capacity
            </span>
            <span className="bg-gold-500 text-charcoal-950 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wide">
              {5 - clientSlotsLeft} / 5 Filled
            </span>
          </div>

          <div className="h-2 bg-charcoal-950 rounded-full overflow-hidden mb-4 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`h-full flex-grow border-r border-charcoal-950 last:border-r-0 transition-colors duration-500 ${
                  i < (5 - clientSlotsLeft) ? 'bg-gold-500' : 'bg-charcoal-800'
                }`}
              />
            ))}
          </div>

          <div className="flex items-start space-x-2 text-[10px] text-charcoal-300 leading-normal font-light">
            <ShieldCheck size={12} className="text-gold-400 shrink-0 mt-0.5" />
            <span>
              Limiting active campaigns to {5} properties protects our standard of outperformance. We are currently accepting <strong className="text-white font-medium">{clientSlotsLeft}</strong> new listing for Q3 2026.
            </span>
          </div>
        </div>
      </div>

      {/* Right Inquiry Interactive Form */}
      <div className="lg:col-span-7">
        <div className="bg-charcoal-900 border border-charcoal-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          {isSubmitted ? (
            /* Elegant Success Slate */
            <div className="py-12 px-4 text-center">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-emerald-400" size={28} />
              </div>
              <h4 className="font-serif text-2xl font-bold text-white mb-3">
                Inquiry Successfully Logged
              </h4>
              <p className="text-charcoal-300 text-xs sm:text-sm font-light max-w-md mx-auto mb-8 leading-relaxed">
                Thank you for reaching out to Sydney’s premium property partner. Thomas Skelly will review your credentials and real estate details, and contact you directly via phone within the next 2 hours.
              </p>

              <div className="bg-charcoal-950 p-5 rounded-lg border border-charcoal-850 text-left max-w-sm mx-auto mb-8">
                <div className="flex items-center space-x-3 text-xs text-charcoal-300 mb-2">
                  <Clock size={14} className="text-gold-400" />
                  <span><strong>Expected Response:</strong> Today before 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-charcoal-300">
                  <Award size={14} className="text-gold-400" />
                  <span><strong>Consultant:</strong> Thomas Skelly (Principal)</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="text-xs tracking-widest uppercase border border-charcoal-800 hover:border-gold-500/40 hover:bg-gold-500/5 text-charcoal-300 hover:text-white py-3 px-6 rounded transition-all duration-300"
              >
                Log Another Consultation
              </button>
            </div>
          ) : (
            /* The Interactive Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold mb-1.5 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g., Dr. Charlotte Sterling"
                    className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-gold-500 rounded px-3.5 py-3 text-xs text-white placeholder-charcoal-700 outline-none transition-all duration-300 font-light"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold mb-1.5 block">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="E.g., 0412 345 678"
                    className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-gold-500 rounded px-3.5 py-3 text-xs text-white placeholder-charcoal-700 outline-none transition-all duration-300 font-light"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold mb-1.5 block">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="E.g., c.sterling@executive.com"
                  className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-gold-500 rounded px-3.5 py-3 text-xs text-white placeholder-charcoal-700 outline-none transition-all duration-300 font-light"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold mb-1.5 block">
                    Property Suburb / Address
                  </label>
                  <input
                    type="text"
                    value={formData.propertyAddress}
                    onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                    placeholder="E.g., Darling Point NSW"
                    className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-gold-500 rounded px-3.5 py-3 text-xs text-white placeholder-charcoal-700 outline-none transition-all duration-300 font-light"
                  />
                </div>
                
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold mb-1.5 block">
                    Property Value Expectation
                  </label>
                  <select
                    value={formData.estimatedValue}
                    onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value })}
                    className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-gold-500 rounded px-3.5 py-3 text-xs text-white outline-none transition-all duration-300 font-light"
                  >
                    <option value="$2M - $5M">$2M - $5M</option>
                    <option value="$5M - $10M">$5M - $10M</option>
                    <option value="$10M - $20M">$10M - $20M</option>
                    <option value="$20M+">$20M+</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold mb-1.5 block">
                    Preferred Medium
                  </label>
                  <div className="flex space-x-2">
                    {['in-person', 'phone', 'virtual'].map((medium) => (
                      <button
                        key={medium}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredConsultation: medium as any })}
                        className={`flex-1 text-[10px] tracking-wider uppercase py-2.5 rounded text-center transition-all duration-300 border font-medium ${
                          formData.preferredConsultation === medium
                            ? 'bg-gold-500 text-charcoal-950 border-gold-500'
                            : 'bg-charcoal-950 text-charcoal-300 border-charcoal-800 hover:border-charcoal-700'
                        }`}
                      >
                        {medium === 'in-person' ? 'Office' : medium === 'phone' ? 'Phone' : 'Video'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold mb-1.5 block">
                    Intended Timeline
                  </label>
                  <div className="flex space-x-2">
                    {[
                      { key: 'immediate', label: 'Sell/Buy' },
                      { key: '3-6-months', label: 'Planning' },
                      { key: 'just-curious', label: 'Curious' }
                    ].map((time) => (
                      <button
                        key={time.key}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: time.key as any })}
                        className={`flex-1 text-[10px] tracking-wider uppercase py-2.5 rounded text-center transition-all duration-300 border font-medium ${
                          formData.timeline === time.key
                            ? 'bg-gold-500 text-charcoal-950 border-gold-500'
                            : 'bg-charcoal-950 text-charcoal-300 border-charcoal-800 hover:border-charcoal-700'
                        }`}
                      >
                        {time.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold mb-1.5 block">
                  Private Narrative / Details
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your property, criteria, or consultation objectives..."
                  className="w-full bg-charcoal-950 border border-charcoal-800 focus:border-gold-500 rounded px-3.5 py-3 text-xs text-white placeholder-charcoal-700 outline-none transition-all duration-300 font-light resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-charcoal-800 text-charcoal-950 text-xs tracking-widest uppercase font-bold py-4 px-6 rounded transition-colors duration-300 flex items-center justify-center space-x-2 mt-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin border-2 border-charcoal-950 border-t-transparent rounded-full w-4 h-4" />
                    <span>Booking Your Slot...</span>
                  </>
                ) : (
                  <span>Request Bespoke Campaign consultation</span>
                )}
              </button>
            </form>
          )}

        </div>
      </div>

    </div>
  );
}
