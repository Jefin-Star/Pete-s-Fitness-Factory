import React from 'react';
import strengthImg from '../assets/images/strength_equipment_area_1791791361733.jpg';
import cardioImg from '../assets/images/cardio_conditioning_suite_1791791374253.jpg';
import ptImg from '../assets/images/personal_training_coaching_1791791386033.jpg';
import ladiesImg from '../assets/images/dedicated_ladies_fitness_space_1791791397754.jpg';

export const FacilitiesBento: React.FC = () => {
  const facilities = [
    {
      title: "Heavy Iron & Olympic Platforms",
      category: "Pure Strength",
      image: strengthImg,
      description: "Equipped with heavy-duty power racks, calibrated competition plates, Olympic barbells, dumbbell racks up to heavy poundages, and safety spotter pins.",
      specs: ["Commercial Racks", "Olympic Barbells", "Deadlift Platforms"],
      className: "lg:col-span-7",
    },
    {
      title: "Cardio & Functional Turf Zone",
      category: "Conditioning & Stamina",
      image: cardioImg,
      description: "Engineered for aerobic endurance, agility, and high-intensity conditioning. High-tech rowers, assault bikes, turf sprint tracks, and sled pushes.",
      specs: ["Turf Sled Track", "Concept2 Rowers", "Assault Bikes"],
      className: "lg:col-span-5",
    },
    {
      title: "1-on-1 Personal Training Suite",
      category: "Coaching & Nutrition",
      image: ptImg,
      description: "Dedicated coaching with experienced strength trainers. Direct form correction, progressive overload tracking, and tailored nutritional blueprints.",
      specs: ["Macro Diet Plans", "Form Biomechanics", "Weekly Check-ins"],
      className: "lg:col-span-5",
    },
    {
      title: "Dedicated Ladies Training Floor",
      category: "Privacy & Empowerment",
      image: ladiesImg,
      description: "A bright, private environment during our 2:30 PM to 4:30 PM window. Full access to kettlebells, resistance bands, mats, free weights, and cardio equipment.",
      specs: ["100% Female Privacy", "Daily 2:30–4:30 PM", "Boutique Comfort"],
      className: "lg:col-span-7",
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
            World-Class Facilities · Built to Perform
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight">
            Engineered For Serious Training
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Every square foot of Pete's Fitness Factory is organized with purpose. High-grade steel, smooth pulleys, clean rubber flooring, and zero clutter.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 flex flex-col justify-end min-h-[360px] sm:min-h-[420px] transition-all duration-300 hover:border-zinc-700 shadow-xl ${fac.className}`}
            >
              {/* Image with fallback */}
              <img
                src={fac.image}
                alt={fac.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

              {/* Content overlay */}
              <div className="relative z-10 p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                  <span>{fac.category}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                  {fac.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
                  {fac.description}
                </p>

                {/* Spec badges without pills - clean subtle borders */}
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-zinc-300">
                  {fac.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-zinc-950/80 border border-zinc-800 backdrop-blur-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
