export const TONES = {
  white: {
    section: "bg-white",
    heading: "text-brand-navy",
    body: "text-gray-600",
  },
  gray: {
    section: "bg-gray-50",
    heading: "text-brand-navy",
    body: "text-gray-600",
  },
  navy: {
    section: "bg-brand-navy",
    heading: "text-white",
    body: "text-gray-300",
    accent: "text-brand-teal-light",
  },
  gradient: {
    section: "bg-gradient-to-r from-[#1B1F5C] to-[#0F9E9E]",
    heading: "text-white",
    body: "text-gray-100",
  },
};

export const getTone = (tone = "white") => TONES[tone] || TONES.white;