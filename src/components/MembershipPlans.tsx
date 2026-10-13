import React from 'react';
import { Check, ArrowRight, Sparkles, Shield, Dumbbell } from 'lucide-react';
import { MEMBERSHIP_PLANS, MembershipPlan } from '../types';

interface MembershipPlansProps {
  onSelectPlan: (planId: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  return (
    <section id="memberships" className="py-24 bg-zinc-950 relative border-b border-zinc-900">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Transparent Pricing · No Long-Term Lock-in
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight">
            Membership Plans & Personal Coaching
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Straightforward pricing with zero hidden surcharges. Enjoy complete 24-hour facility access, dedicated personal training, and tailored nutrition.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {MEMBERSHIP_PLANS.map((plan: MembershipPlan) => {
            const isPT = plan.id === 'personal-training';
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isPT
                    ? 'bg-zinc-900/90 border-2 border-amber-500/80 shadow-2xl shadow-amber-500/10'
                    : 'bg-zinc-900/40 border border-zinc-800/90 hover:border-zinc-700'
                }`}
              >
                {/* Popular Ribbon for PT */}
                {isPT && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Recommended · High Result</span>
                  </div>
                )}

                <div className="p-8">
                  {/* Badge & Plan Name */}
                  <div className="space-y-1 mb-6">
                    <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
                      {plan.badge}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-5 border-y border-zinc-800/80 my-6 space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl sm:text-5xl font-bold text-white tabular-nums">
                        ₹{plan.monthlyFee.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">
                        / {plan.validityDays} Days Validity
                      </span>
                    </div>

                    {/* Joining fee indicator */}
                    {plan.joiningFee > 0 ? (
                      <p className="text-xs text-zinc-300 font-medium">
                        Joining Fee: <span className="text-amber-400 font-semibold tabular-nums">₹{plan.joiningFee.toLocaleString('en-IN')}</span> (One-time at registration)
                      </p>
                    ) : (
                      <p className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5" />
                        <span>All-inclusive: <strong>Includes gym fee & diet plan</strong> (₹0 extra joining fee)</span>
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                      Plan Inclusions:
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${isPT ? 'bg-amber-400 text-black' : 'bg-zinc-800 text-amber-400'}`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-8 pt-0">
                  <div className="pt-4 border-t border-zinc-800/60 mb-5">
                    <p className="text-[11px] text-zinc-400">
                      <strong className="text-zinc-300">Best For: </strong> {plan.idealFor}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-4 px-6 rounded-md font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98 ${
                      isPT
                        ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-black hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-amber-400/40'
                    }`}
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Price Guarantee Notice */}
        <div className="mt-12 text-center text-xs text-zinc-500 max-w-xl mx-auto flex items-center justify-center gap-2">
          <Dumbbell className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Need custom training schedules or group enrollments? Speak with Pete at the front desk or via WhatsApp.</span>
        </div>
      </div>
    </section>
  );
};
