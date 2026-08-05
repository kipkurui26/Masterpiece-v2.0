import { useState } from "react";
import { getTone } from "./sectionTone";

const ChevronDownIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const FAQItem = ({ question, answer, isOpen, onToggle, tone }) => {
  const t = getTone(tone);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className={`text-base font-semibold ${t.heading}`}>{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 shrink-0 text-[#0F9E9E] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <p className={`pb-5 text-sm leading-relaxed ${t.body}`}>{answer}</p>
      </div>
    </div>
  );
};

const ServiceFAQ = ({ faq, tone = "white" }) => {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default
  if (!faq || faq.length === 0) return null;
  const t = getTone(tone);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={t.section}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className={`mb-10 text-center text-2xl font-bold sm:text-3xl ${t.heading}`}>
          Frequently Asked Questions
        </h2>
        <div>
          {faq.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
              tone={tone}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;