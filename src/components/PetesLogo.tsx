import React from 'react';
import petesLogoImage from '../assets/images/petes_logo.png';

interface PetesLogoProps {
  className?: string;
  size?: number;
  variant?: 'badge' | 'inline' | 'icon';
  showEst?: boolean;
}

export const PetesLogo: React.FC<PetesLogoProps> = ({
  className = '',
  size = 48,
  variant = 'badge',
  showEst = true,
}) => {
  // 1. INLINE VARIANT (Used in Navbar header and Footer brand lockup)
  if (variant === 'inline') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative flex items-center justify-center shrink-0 w-11 h-11 rounded-full bg-white border border-amber-500/50 overflow-hidden shadow-md p-0.5">
          <img
            src={petesLogoImage}
            alt="Pete's Fitness Factory Official Emblem"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col">
          <span className="font-display text-lg tracking-wider font-bold text-white uppercase leading-none">
            Pete's Fitness Factory
          </span>
          {showEst && (
            <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-medium mt-0.5">
              Est. 1998 · Family Fitness
            </span>
          )}
        </div>
      </div>
    );
  }

  // 2. ICON ONLY VARIANT
  if (variant === 'icon') {
    return (
      <div
        style={{ width: size, height: size }}
        className={`relative flex items-center justify-center rounded-full bg-white border border-zinc-800 overflow-hidden shadow-md p-1 ${className}`}
      >
        <img
          src={petesLogoImage}
          alt="Pete's Fitness Factory Logo"
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // 3. BADGE VARIANT (Hero Official Crest card)
  return (
    <div
      style={{ width: size, height: size * 1.1 }}
      className={`relative inline-flex items-center justify-center p-2 rounded-2xl bg-white border-2 border-zinc-200 shadow-2xl overflow-hidden group select-none ${className}`}
    >
      <img
        src={petesLogoImage}
        alt="Pete's Fitness Factory Official Emblem"
        className="w-full h-full object-contain filter contrast-105"
      />
    </div>
  );
};
