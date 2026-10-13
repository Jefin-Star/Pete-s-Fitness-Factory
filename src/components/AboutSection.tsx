import React from 'react';
import { Target, Users, Flame, HeartHandshake, CheckCircle2 } from 'lucide-react';
import strengthImg from '../assets/images/strength_equipment_area_1791791361733.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
            About Our Gym · Established 1998
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight text-balance">
            Where Raw Iron Meets Unwavering Dedication
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Founded with a passion for true physical transformation, Pete's Fitness Factory is more than just a gym. It is an institution forged on discipline, scientific strength training, and an inclusive family atmosphere where every lifter feels welcomed, respected, and empowered.
          </p>
        </div>

        {/* 2-Column Split: Editorial Story + Facility Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Visual with caption */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 group h-full min-h-[380px]">
              <img
                src={strengthImg}
                alt="Pete's Fitness Factory Olympic barbell and dumbbell station"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800">
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  The Pete's Standard
                </p>
                <p className="text-sm font-medium text-white mt-1">
                  Calibrated Olympic barbells, commercial-grade power racks, and precision dumbbells built for real progressive overload.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Principles & Core Offerings */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-2xl uppercase font-bold text-white tracking-wide">
                Built For Serious Results. Designed For Real People.
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Whether you are stepping into a gym for the first time or looking to smash personal lifting records, Pete's Fitness Factory provides the exact environment you need. We eliminate unnecessary gimmicks and focus on what truly drives results: proper biomechanics, progressive strength, structured nutrition, and continuous trainer accountability.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                  True Strength Training
                </h4>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  Full complement of free weights, heavy iron plates, ergonomic cable stacks, and functional turf for comprehensive athleticism.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                  Family Fitness Culture
                </h4>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  A non-intimidating, supportive environment where members uplift one another. Everyone trains with dignity and mutual encouragement.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                  Certified Trainer Presence
                </h4>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  Active trainer presence during peak mornings (6 AM–12 PM) and evenings (5 PM–11 PM) ensuring safe execution and progressive cues.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                  Dedicated Ladies Hours
                </h4>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  Daily afternoon exclusive window from 2:30 PM to 4:30 PM providing dedicated privacy, comfort, and an empowering atmosphere.
                </p>
              </div>
            </div>

            {/* Checklist highlights */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero overcrowding through smart layout</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Clean, sanitized locker rooms & shower</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Continuous ventilation & climate control</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
