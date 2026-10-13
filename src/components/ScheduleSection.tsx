import React, { useState, useEffect } from 'react';
import { Clock, Users, Sun, Moon, Sparkles, CheckCircle2 } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState<{
    isOpen: boolean;
    isTrainerDuty: boolean;
    isLadiesHour: boolean;
    label: string;
    subLabel: string;
    badgeColor: string;
  }>({
    isOpen: true,
    isTrainerDuty: false,
    isLadiesHour: false,
    label: 'Open 24 Hours',
    subLabel: 'General floor access active',
    badgeColor: 'emerald',
  });

  const [currentTimeStr, setCurrentTimeStr] = useState('');

  useEffect(() => {
    const evaluateStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      setCurrentTimeStr(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
      );

      // Sunday: 7:00 AM (420 min) to 8:00 PM (1200 min)
      const isSunday = day === 0;
      let open = true;
      if (isSunday) {
        open = currentMinutes >= 420 && currentMinutes < 1200;
      } else {
        open = true; // 24 hours on all other days
      }

      // Ladies Only: 2:30 PM (14:30 = 870 min) to 4:30 PM (16:30 = 990 min)
      const isLadies = currentMinutes >= 870 && currentMinutes < 990;

      // Trainer Duty: Morning 6:00 AM (360) to 12:00 PM (720) & Evening 5:00 PM (1020) to 11:00 PM (1380)
      const isTrainer =
        (currentMinutes >= 360 && currentMinutes < 720) ||
        (currentMinutes >= 1020 && currentMinutes < 1380);

      if (!open) {
        setCurrentStatus({
          isOpen: false,
          isTrainerDuty: false,
          isLadiesHour: false,
          label: 'Sunday Closed for Sanitation',
          subLabel: 'Opens Monday 12:00 AM (24/7 access)',
          badgeColor: 'rose',
        });
      } else if (isLadies) {
        setCurrentStatus({
          isOpen: true,
          isTrainerDuty: isTrainer,
          isLadiesHour: true,
          label: 'Ladies Only Time Active',
          subLabel: '2:30 PM – 4:30 PM dedicated private floor access',
          badgeColor: 'amber',
        });
      } else if (isTrainer) {
        setCurrentStatus({
          isOpen: true,
          isTrainerDuty: true,
          isLadiesHour: false,
          label: 'Trainer Floor Duty Active',
          subLabel: 'Certified coaching & spotters available right now',
          badgeColor: 'emerald',
        });
      } else {
        setCurrentStatus({
          isOpen: true,
          isTrainerDuty: false,
          isLadiesHour: false,
          label: 'Open for 24-Hour Member Training',
          subLabel: 'Self-guided workout session access',
          badgeColor: 'blue',
        });
      }
    };

    evaluateStatus();
    const interval = setInterval(evaluateStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="timings" className="py-24 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Hours of Operation & Training Shifts
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight">
              Gym Timings & Trainer Schedule
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Designed around your lifestyle: train at midnight, dawn, or after work. Dedicated personal trainer shifts and exclusive ladies-only hours daily.
            </p>
          </div>

          {/* Live Floor Status Card */}
          <div className="shrink-0 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 shadow-xl max-w-sm w-full md:w-auto">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                Live Gym Status ({currentTimeStr || 'Now'})
              </span>
              <span
                className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                  currentStatus.badgeColor === 'emerald'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : currentStatus.badgeColor === 'amber'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : currentStatus.badgeColor === 'rose'
                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                }`}
              >
                {currentStatus.isOpen ? 'Gym Open' : 'Gym Closed'}
              </span>
            </div>
            <p className="font-display text-base font-bold text-white uppercase tracking-wide">
              {currentStatus.label}
            </p>
            <p className="text-xs text-zinc-400 mt-0.5">
              {currentStatus.subLabel}
            </p>
          </div>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. 24 Hours Access */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 text-amber-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-widest">
                  Monday – Saturday
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                  24 Hours Gym
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  24/7 unrestricted entry for enrolled members. Early morning lifters, late night shifts, and night owls have full access to all equipment.
                </p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-zinc-800/80">
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Round-the-clock entry</span>
              </span>
            </div>
          </div>

          {/* 2. Trainer Timings */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 text-amber-400 flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-widest">
                  Certified Supervision
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                  Trainer Timings
                </h3>
                <div className="space-y-2.5 mt-3 text-xs text-zinc-300">
                  <div className="p-2.5 rounded-lg bg-zinc-950/70 border border-zinc-800">
                    <p className="font-semibold text-white uppercase text-[11px]">Morning Session</p>
                    <p className="font-display text-base text-amber-400 font-bold tabular-nums">6:00 AM – 12:00 PM</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-950/70 border border-zinc-800">
                    <p className="font-semibold text-white uppercase text-[11px]">Evening Session</p>
                    <p className="font-display text-base text-amber-400 font-bold tabular-nums">5:00 PM – 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-zinc-800/80">
              <span className="text-xs text-zinc-400">
                Coaches assist with form check & spotting
              </span>
            </div>
          </div>

          {/* 3. Afternoon Ladies Only Time (Special Callout) */}
          <div className="p-6 rounded-2xl bg-zinc-900/80 border-2 border-amber-500/70 shadow-lg shadow-amber-500/5 transition-all group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-wider rounded-bl-lg">
              Ladies Dedicated
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-black flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                  Daily Afternoon Window
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                  Ladies Only Time
                </h3>
                <div className="p-3 rounded-lg bg-zinc-950 border border-amber-500/30 my-3">
                  <p className="text-[10px] text-zinc-400 uppercase font-semibold">Reserved Hours</p>
                  <p className="font-display text-xl text-amber-400 font-bold tabular-nums">
                    2:30 PM – 4:30 PM
                  </p>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Dedicated, comfortable workout environment exclusively reserved for women. Full access to all floor zones, free weights, and cardio equipment.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-zinc-800">
              <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                <Users className="w-4 h-4 shrink-0" />
                <span>100% Privacy & Comfort Guaranteed</span>
              </span>
            </div>
          </div>

          {/* 4. Sunday Gym Timing */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 text-amber-400 flex items-center justify-center">
                <Moon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-widest">
                  Weekend Schedule
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                  Sunday Timings
                </h3>
                <div className="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800 my-3">
                  <p className="text-[10px] text-zinc-400 uppercase font-semibold">Sunday Opening Hours</p>
                  <p className="font-display text-xl text-white font-bold tabular-nums">
                    7:00 AM – 8:00 PM
                  </p>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Open all day on Sunday so you can crush your weekend volume before deep cleaning and gear maintenance.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-zinc-800/80">
              <span className="text-xs text-zinc-400">
                Closes 8:00 PM Sunday evening
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
