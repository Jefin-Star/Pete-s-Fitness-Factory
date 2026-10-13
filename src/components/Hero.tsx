import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Dumbbell, Sparkles } from 'lucide-react';
import { PetesLogo } from './PetesLogo';
import heroBgImage from '../assets/images/hero_gym_ambience_1791791349828.jpg';

interface HeroProps {
  onJoinClick: () => void;
  onViewPlansClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onJoinClick,
  onViewPlansClick,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-zinc-950">
      {/* Background Photography with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={heroBgImage}
          alt="Pete's Fitness Factory Iron & Strength Arena"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
        />
        {/* Multilayered cinematic dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-zinc-950/60 to-zinc-950/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Heritage Kicker (No pills, clean unboxed typographic metadata) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold">
              <span>Established 1998</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Kochi Premier Strength Sanctuary</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>24/7 Access</span>
            </div>

            {/* Gym Name & Hero Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.05] text-balance">
                Pete's Fitness Factory
              </h1>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-wide text-amber-400/95 uppercase">
                Build Your Strength. Transform Your Life.
              </p>
            </div>

            {/* Core Value Statement */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal">
              Experience Kochi's definitive 24-hour fitness destination. Engineered with precision Olympic iron, elite functional conditioning, certified coach guidance, and a supportive, family-friendly culture built on discipline and authentic progress.
            </p>

            {/* Actions: Join Now + View Membership Plans */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onJoinClick}
                className="px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-md shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewPlansClick}
                className="px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-amber-400/50 rounded-md backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>View Membership Plans</span>
              </button>
            </div>

            {/* Quick Pricing Teaser */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Monthly Membership from <strong className="text-white font-medium">₹1,500/mo</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Personal Training + Diet Plan at <strong className="text-white font-medium">₹6,000/mo</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Ladies-Only Hours: <strong className="text-white font-medium">2:30 PM – 4:30 PM</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Heritage Crest Locked Permanently */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md text-center max-w-sm w-full shadow-2xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-widest rounded shadow">
                Official Logo
              </div>

              <div className="my-3 flex justify-center items-center">
                <PetesLogo size={220} variant="badge" />
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-800 text-left space-y-2 text-xs text-zinc-400">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Motto:</span>
                  <span className="font-semibold text-zinc-200">"Choose It Wisely"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Facility Hours:</span>
                  <span className="font-semibold text-emerald-400">24 Hours / 7 Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Ladies Exclusive:</span>
                  <span className="font-semibold text-amber-400">Daily 2:30 PM – 4:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Item Feature & Trust Anchor Bar */}
      <div className="relative z-10 w-full border-y border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/60">
            <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:pr-4">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display uppercase text-sm font-bold text-white tracking-wide">24 Hours Access</h4>
                <p className="text-xs text-zinc-400 mt-0.5">Train anytime, day or night</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-4">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400 shrink-0">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display uppercase text-sm font-bold text-white tracking-wide">Trainer Guidance</h4>
                <p className="text-xs text-zinc-400 mt-0.5">6am–12pm & 5pm–11pm floor support</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-4">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display uppercase text-sm font-bold text-white tracking-wide">Ladies Only Time</h4>
                <p className="text-xs text-zinc-400 mt-0.5">2:30 PM to 4:30 PM dedicated privacy</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:pl-4">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display uppercase text-sm font-bold text-white tracking-wide">Est. 1998 Legacy</h4>
                <p className="text-xs text-zinc-400 mt-0.5">28+ years of authentic fitness culture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
