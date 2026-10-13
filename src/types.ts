export interface MembershipPlan {
  id: string;
  name: string;
  badge?: string;
  joiningFee: number;
  monthlyFee: number;
  validityDays: number;
  description: string;
  isPopular?: boolean;
  features: string[];
  idealFor: string;
}

export interface RegistrationFormData {
  fullName: string;
  phone: string;
  email: string;
  planId: string;
  preferredStartDate: string;
  fitnessGoals: string;
  message: string;
}

export interface RegistrationRecord extends RegistrationFormData {
  id: string;
  createdAt: string;
  status: 'pending' | 'contacted' | 'confirmed';
}

export interface GymFacility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  specs: string[];
}

export const GYM_CONTACT_INFO = {
  name: "Pete's Fitness Factory",
  tagline: "Build Your Strength. Transform Your Life.",
  motto: "Choose It Wisely",
  established: 1998,
  email: "speter06.2004@gmail.com",
  instagram: "https://www.instagram.com/petesfitnessfactory?obrf=NmQ0NW0xc2MzOWJ1",
  whatsappUrl: "https://wa.me/?text=Hello%20Pete's%20Fitness%20Factory!%20I%20would%20like%20to%20inquire%20about%20membership.",
  address: "Pete's Fitness Factory, Kochi, Kerala, India",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.699362070234!2d76.25243909999999!3d9.9411064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b086d5270edbbd7%3A0xa6f599c63beee448!2sPete's%20Fitness%20Factory!5e1!3m2!1sen!2sin!4v1791791170355!5m2!1sen!2sin",
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "standard-membership",
    name: "General Gym Membership",
    badge: "Foundation Pass",
    joiningFee: 2000,
    monthlyFee: 1500,
    validityDays: 30,
    description: "Complete 24-hour access to the entire gym floor, free weights, and cardio machines with flexible monthly renewals.",
    isPopular: false,
    features: [
      "24 Hours unrestricted gym floor access",
      "Full access to heavy iron, power racks & dumbbells",
      "Full cardio & functional conditioning suite access",
      "Dedicated Afternoon Ladies-Only Hours (2:30 PM - 4:30 PM)",
      "Locker room & private changing spaces",
      "Initial gym equipment orientation & safety briefing"
    ],
    idealFor: "Self-driven lifters, students & consistent daily gym-goers"
  },
  {
    id: "personal-training",
    name: "Personal Training + Diet Plan",
    badge: "Elite Transformation",
    joiningFee: 0, // Explicitly specified: 6000 including gym fee and diet plan!
    monthlyFee: 6000,
    validityDays: 30,
    description: "All-inclusive flagship program: personalized 1-on-1 coaching, tailored nutritional blueprint, and full gym fee included.",
    isPopular: true,
    features: [
      "All-inclusive: Gym membership fee covered",
      "Customized, scientific macro-based diet & nutrition plan",
      "1-on-1 certified trainer floor guidance & technique coaching",
      "Morning (6 AM - 12 PM) & Evening (5 PM - 11 PM) trainer slots",
      "Weekly body composition & strength progression tracking",
      "Full 24/7 gym floor access & Ladies hours access included",
      "Direct trainer WhatsApp check-ins & habit accountability"
    ],
    idealFor: "Beginners, rapid fat loss, muscle hypertrophy & competition prep"
  }
];
