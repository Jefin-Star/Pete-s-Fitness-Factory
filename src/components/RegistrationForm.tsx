import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, Calendar, User, Phone, Sparkles, RefreshCw } from 'lucide-react';
import { MEMBERSHIP_PLANS, GYM_CONTACT_INFO, RegistrationFormData, RegistrationRecord } from '../types';

interface RegistrationFormProps {
  selectedPlanId?: string;
  onClearPlan?: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  selectedPlanId,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    phone: '',
    email: '',
    planId: 'standard-membership',
    preferredStartDate: '',
    fitnessGoals: 'Muscle Building & Hypertrophy',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<RegistrationRecord | null>(null);

  // Sync selected plan from pricing card clicks
  useEffect(() => {
    if (selectedPlanId) {
      setFormData((prev) => ({ ...prev, planId: selectedPlanId }));
    }
  }, [selectedPlanId]);

  // Set default preferred start date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData((prev) => ({
      ...prev,
      preferredStartDate: prev.preferredStartDate || dateStr,
    }));
  }, []);

  const fitnessGoalOptions = [
    'Muscle Building & Hypertrophy',
    'Fat Loss & Body Recomposition',
    'Strength & Powerlifting',
    'General Physical Fitness & Stamina',
    'Ladies Exclusive Fitness & Toning',
    'Post-Rehab / Injury Recovery & Mobility',
  ];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name.';
    }

    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,14}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for WhatsApp confirmation.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (min 8 digits).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.preferredStartDate) {
      newErrors.preferredStartDate = 'Please select a preferred start date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const planObj = MEMBERSHIP_PLANS.find((p) => p.id === formData.planId);
    const planName = planObj ? planObj.name : formData.planId;

    const newRecord: RegistrationRecord = {
      ...formData,
      id: `PFF-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('petes_gym_registrations') || '[]');
      existing.unshift(newRecord);
      localStorage.setItem('petes_gym_registrations', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    setSubmittedRecord(newRecord);
    setIsSubmitted(true);
  };

  // WhatsApp quick link formatting
  const getWhatsAppMessage = () => {
    if (!submittedRecord) return '';
    const planObj = MEMBERSHIP_PLANS.find((p) => p.id === submittedRecord.planId);
    const planName = planObj ? planObj.name : submittedRecord.planId;
    const planFee = planObj
      ? planObj.id === 'personal-training'
        ? `₹${planObj.monthlyFee}/month (Including gym fee & diet plan)`
        : `Joining: ₹${planObj.joiningFee} + ₹${planObj.monthlyFee}/month`
      : '';

    const text = `*New Membership Registration - Pete's Fitness Factory* 🏋️‍♂️\n\n` +
      `*Registration ID:* ${submittedRecord.id}\n` +
      `*Full Name:* ${submittedRecord.fullName}\n` +
      `*Phone:* ${submittedRecord.phone}\n` +
      `*Email:* ${submittedRecord.email}\n` +
      `*Selected Plan:* ${planName} (${planFee})\n` +
      `*Preferred Start Date:* ${submittedRecord.preferredStartDate}\n` +
      `*Fitness Goal:* ${submittedRecord.fitnessGoals}\n` +
      (submittedRecord.message ? `*Notes:* ${submittedRecord.message}\n` : '') +
      `\nKindly confirm my enrollment and slot timings. Thank you!`;

    return encodeURIComponent(text);
  };

  const getEmailSubject = () => {
    return encodeURIComponent(`Membership Registration: ${submittedRecord?.fullName || 'New Member'}`);
  };

  const getEmailBody = () => {
    if (!submittedRecord) return '';
    const planObj = MEMBERSHIP_PLANS.find((p) => p.id === submittedRecord.planId);
    const planName = planObj ? planObj.name : submittedRecord.planId;
    return encodeURIComponent(
      `Hi Peter,\n\nI have registered for membership at Pete's Fitness Factory.\n\nRegistration ID: ${submittedRecord.id}\nName: ${submittedRecord.fullName}\nPhone: ${submittedRecord.phone}\nPlan: ${planName}\nStart Date: ${submittedRecord.preferredStartDate}\nFitness Goals: ${submittedRecord.fitnessGoals}\nMessage: ${submittedRecord.message || 'N/A'}\n\nPlease let me know the next steps!\n`
    );
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmittedRecord(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      planId: 'standard-membership',
      preferredStartDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      fitnessGoals: 'Muscle Building & Hypertrophy',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="register" className="py-24 bg-zinc-950 border-b border-zinc-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Join Pete's Fitness Factory
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight">
            Membership Registration Form
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Reserve your membership pass or personal training slot. Complete the form below to initiate enrollment with instant WhatsApp verification.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {isSubmitted && submittedRecord ? (
            /* Success State */
            <div className="py-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                  Registration Received Successfully
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                  Welcome to Pete's Fitness Factory!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                  Your registration ticket <strong className="text-amber-400 font-mono font-bold">#{submittedRecord.id}</strong> has been logged. Send your details directly to Pete on WhatsApp for instantaneous slot confirmation.
                </p>
              </div>

              {/* Registration Summary Card */}
              <div className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-left text-xs space-y-2.5 max-w-lg mx-auto">
                <div className="flex justify-between pb-2 border-b border-zinc-800/80">
                  <span className="text-zinc-500">Member Name:</span>
                  <span className="font-semibold text-white">{submittedRecord.fullName}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-800/80">
                  <span className="text-zinc-500">Selected Plan:</span>
                  <span className="font-semibold text-amber-400">
                    {MEMBERSHIP_PLANS.find((p) => p.id === submittedRecord.planId)?.name}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-800/80">
                  <span className="text-zinc-500">Start Date:</span>
                  <span className="font-semibold text-white">{submittedRecord.preferredStartDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Primary Goal:</span>
                  <span className="font-semibold text-white">{submittedRecord.fitnessGoals}</span>
                </div>
              </div>

              {/* Instant WhatsApp & Email Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>

                <a
                  href={`mailto:${GYM_CONTACT_INFO.email}?subject=${getEmailSubject()}&body=${getEmailBody()}`}
                  className="px-6 py-3.5 rounded-md font-semibold text-xs uppercase tracking-wider text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </a>

                <button
                  onClick={resetForm}
                  className="px-5 py-3.5 rounded-md text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white bg-transparent hover:bg-zinc-800 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>New Registration</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      className={`w-full pl-10 pr-4 py-3 bg-zinc-950/80 border rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all ${
                        errors.fullName ? 'border-rose-500/80' : 'border-zinc-800 focus:border-amber-400'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-rose-400">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300">
                    Phone Number (WhatsApp) <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full pl-10 pr-4 py-3 bg-zinc-950/80 border rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all ${
                        errors.phone ? 'border-rose-500/80' : 'border-zinc-800 focus:border-amber-400'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-400">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full pl-10 pr-4 py-3 bg-zinc-950/80 border rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all ${
                        errors.email ? 'border-rose-500/80' : 'border-zinc-800 focus:border-amber-400'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-rose-400">{errors.email}</p>
                  )}
                </div>

                {/* Preferred Start Date */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300">
                    Preferred Start Date <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="date"
                      value={formData.preferredStartDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredStartDate: e.target.value });
                        if (errors.preferredStartDate) setErrors({ ...errors, preferredStartDate: '' });
                      }}
                      className={`w-full pl-10 pr-4 py-3 bg-zinc-950/80 border rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all ${
                        errors.preferredStartDate ? 'border-rose-500/80' : 'border-zinc-800 focus:border-amber-400'
                      }`}
                    />
                  </div>
                  {errors.preferredStartDate && (
                    <p className="text-xs text-rose-400">{errors.preferredStartDate}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Membership Plan (Dropdown) */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300">
                    Membership Plan <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={formData.planId}
                    onChange={(e) => setFormData({ ...formData, planId: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-800 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  >
                    <option value="standard-membership">
                      General Membership (Joining ₹2,000 + Monthly ₹1,500)
                    </option>
                    <option value="personal-training">
                      Personal Training + Diet Plan (₹6,000/mo - All Inclusive)
                    </option>
                  </select>
                  <p className="text-[11px] text-zinc-500">
                    {formData.planId === 'personal-training'
                      ? '✓ Covers full gym entry fee + 1-on-1 coaching + personalized nutrition plan'
                      : '✓ 30 days validity with 24-hour access and free equipment orientation'}
                  </p>
                </div>

                {/* Primary Fitness Goal */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={formData.fitnessGoals}
                    onChange={(e) => setFormData({ ...formData, fitnessGoals: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-800 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  >
                    {fitnessGoalOptions.map((goal) => (
                      <option key={goal} value={goal}>
                        {goal}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message / Fitness Goals */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300">
                  Message / Specific Requirements <span className="text-zinc-500">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your previous gym experience, medical history, target weight, or preferred training shift (e.g. morning 6am or evening 6pm)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-950/80 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-md font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Registration</span>
                </button>
              </div>

              <div className="text-center">
                <p className="text-[11px] text-zinc-500">
                  By submitting, your details will be verified by Pete's Fitness Factory front desk. Zero spam guaranteed.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
