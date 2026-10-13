import React from 'react';
import { PetesLogo } from './PetesLogo';
import { Mail, Instagram, MessageSquare, ArrowUp, Shield } from 'lucide-react';
import { GYM_CONTACT_INFO } from '../types';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <PetesLogo variant="inline" size={44} showEst={true} />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mt-3">
              Kochi's premier 24-hour strength and fitness center. Established in 1998 with an unwavering focus on iron discipline, elite conditioning, certified trainer guidance, and a family-first community.
            </p>
            <p className="text-xs text-amber-400/90 font-display uppercase tracking-widest font-semibold">
              "Build Your Strength. Transform Your Life."
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm uppercase font-bold text-white tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Our Gym
                </a>
              </li>
              <li>
                <a href="#memberships" className="hover:text-amber-400 transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#timings" className="hover:text-amber-400 transition-colors">
                  Gym & Trainer Schedule
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors">
                  Facilities & Equipment
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-amber-400 transition-colors">
                  Online Registration
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Map & Contact Info
                </a>
              </li>
            </ul>
          </div>

          {/* Timings Summary */}
          <div className="space-y-3">
            <h4 className="font-display text-sm uppercase font-bold text-white tracking-wider">
              Gym Timings
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p>
                <strong className="text-zinc-200">Floor Access:</strong> 24 Hours / 7 Days
              </p>
              <p>
                <strong className="text-zinc-200">Trainers:</strong> 6 AM – 12 PM & 5 PM – 11 PM
              </p>
              <p>
                <strong className="text-amber-400 font-semibold">Ladies Only:</strong> 2:30 PM – 4:30 PM
              </p>
              <p>
                <strong className="text-zinc-200">Sunday:</strong> 7:00 AM – 8:00 PM
              </p>
            </div>
          </div>

          {/* Social Links & Front Desk */}
          <div className="space-y-3">
            <h4 className="font-display text-sm uppercase font-bold text-white tracking-wider">
              Connect With Us
            </h4>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={GYM_CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-pink-400 hover:border-pink-500/40 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${GYM_CONTACT_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-500/40 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={GYM_CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/40 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-amber-500" />
                <span>Front Desk Portal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom row: copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Pete's Fitness Factory. Established 1998. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
