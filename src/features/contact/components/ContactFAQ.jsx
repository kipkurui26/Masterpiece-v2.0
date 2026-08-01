import { useState } from "react";

const faqs = [
  {
    question: "I'm not sure which service I need. Can I still contact you?",
    answer:
      "Yes. Many clients contact us before they know exactly which service they require. Tell us about your project, and we'll recommend the most appropriate next step.",
  },
  {
    question: "How quickly will someone respond?",
    answer:
      "We aim to respond to all enquiries as promptly as possible during normal business hours.",
  },
  {
    question: "Can I send my location or existing borehole reports?",
    answer:
      "Yes. Sharing your location, photographs, or previous reports helps us better understand your project before we speak.",
  },
];

function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-5 w-5 shrink-0 text-[#0F9E9E] transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-base font-semibold text-[#1B1F5C]">{faq.question}</span>
        <ChevronIcon open={isOpen} />
      </button>

      {isOpen && (
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
      )}
    </div>
  );
}

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1B1F5C] sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}