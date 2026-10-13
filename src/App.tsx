/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MembershipPlans } from './components/MembershipPlans';
import { ScheduleSection } from './components/ScheduleSection';
import { FacilitiesBento } from './components/FacilitiesBento';
import { RegistrationForm } from './components/RegistrationForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminRegistrationsModal } from './components/AdminRegistrationsModal';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('standard-membership');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const scrollToRegistration = (planId?: string) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    const elem = document.getElementById('register');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMemberships = () => {
    const elem = document.getElementById('memberships');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-400 selection:text-black">
      {/* Fixed Top Navigation Bar */}
      <Navbar onJoinClick={() => scrollToRegistration('standard-membership')} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Permanent Official Logo */}
        <Hero
          onJoinClick={() => scrollToRegistration('standard-membership')}
          onViewPlansClick={scrollToMemberships}
        />

        {/* 2. About Our Gym */}
        <AboutSection />

        {/* 3. Membership Plans & Pricing */}
        <MembershipPlans onSelectPlan={(planId) => scrollToRegistration(planId)} />

        {/* 4. Schedule & Gym Timings */}
        <ScheduleSection />

        {/* 5. Modern Facilities & Equipment Bento */}
        <FacilitiesBento />

        {/* 6. Membership Registration Form */}
        <RegistrationForm
          selectedPlanId={selectedPlanId}
          onClearPlan={() => setSelectedPlanId('standard-membership')}
        />

        {/* 7. Contact Us & Google Maps */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer onOpenAdmin={() => setIsAdminModalOpen(true)} />

      {/* Front-desk Registrations Admin Modal */}
      <AdminRegistrationsModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />
    </div>
  );
}
