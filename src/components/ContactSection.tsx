import React from 'react';
import { Mail, Instagram, MapPin, MessageSquare, PhoneCall, ExternalLink, Clock } from 'lucide-react';
import { GYM_CONTACT_INFO } from '../types';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Reach Out · Visit Pete's Fitness Factory
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight">
            Contact & Facility Location
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Have questions about personalized training, gym equipment, or our ladies-only hours? Drop by the gym or message Pete directly.
          </p>
        </div>

        {/* 2-Column Grid: Contact Cards + Google Map Iframe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* WhatsApp Link Card */}
            <a
              href={GYM_CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/90 hover:border-emerald-500/50 hover:bg-zinc-900/90 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    WhatsApp / Direct Inquiry
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <p className="font-display text-lg font-bold text-white uppercase mt-0.5 group-hover:text-emerald-400 transition-colors">
                  Chat with Pete
                </p>
                <p className="text-xs text-zinc-400 mt-1 truncate">
                  Instant membership registration & schedule queries
                </p>
              </div>
            </a>

            {/* Email Address Card */}
            <a
              href={`mailto:${GYM_CONTACT_INFO.email}?subject=Inquiry%20regarding%20Pete's%20Fitness%20Factory`}
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/90 hover:border-amber-500/50 hover:bg-zinc-900/90 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    Official Email
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <p className="font-display text-lg font-bold text-white uppercase mt-0.5 group-hover:text-amber-400 transition-colors truncate">
                  {GYM_CONTACT_INFO.email}
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Send official inquiries & training agreements
                </p>
              </div>
            </a>

            {/* Instagram Link Card */}
            <a
              href={GYM_CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/90 hover:border-pink-500/50 hover:bg-zinc-900/90 transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    Official Instagram
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-pink-400 transition-colors" />
                </div>
                <p className="font-display text-lg font-bold text-white uppercase mt-0.5 group-hover:text-pink-400 transition-colors">
                  @petesfitnessfactory
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Workout reels, member transformations & gym updates
                </p>
              </div>
            </a>

            {/* Address & Quick Summary */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-white block uppercase tracking-wide">
                    Facility Location
                  </span>
                  <span className="text-zinc-400 leading-relaxed block mt-0.5">
                    Pete's Fitness Factory, Kochi, Kerala, India (Refer to interactive map)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-zinc-800/80">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-white block uppercase tracking-wide">
                    Quick Hours Reference
                  </span>
                  <span className="text-zinc-400 block mt-0.5">
                    24/7 Floor Access · Trainer: 6am–12pm & 5pm–11pm · Ladies: 2:30pm–4:30pm · Sun: 7am–8pm
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl h-full min-h-[420px] flex flex-col">
              <div className="p-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-display text-xs uppercase font-bold tracking-wider text-zinc-200">
                    Live Google Map Navigation · Pete's Fitness Factory
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Pete's+Fitness+Factory+Kochi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Exact Google Map Iframe from user prompt */}
              <div className="relative flex-1 w-full min-h-[380px] bg-zinc-950">
                <iframe
                  src={GYM_CONTACT_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Pete's Fitness Factory Google Maps Location"
                  className="w-full h-full filter invert-[0.9] hue-rotate-180 contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
