import { useState } from "react";

const FAQS = [
  {
    question: "Do I need a hydrogeological survey before drilling?",
    answer:
      "Yes. A hydrogeological survey helps identify groundwater potential and the most suitable drilling location, reducing the risk of investing in an unsuccessful borehole.",
  },
  {
    question: "How long does a borehole project take?",
    answer:
      "Project timelines depend on factors such as site conditions, drilling depth, regulatory approvals, testing, and equipment installation. We'll guide you through every stage from assessment to completion.",
  },
  {
    question: "How much does borehole drilling cost in Kenya?",
    answer:
      "Costs vary depending on location, drilling depth, geological conditions, testing requirements, and the pumping system selected. We prepare recommendations and quotations based on your specific project.",
  },
  {
    question: "Do you provide services across Kenya?",
    answer:
      "Yes. We provide groundwater and borehole solutions for residential, agricultural, commercial, and institutional projects across Kenya.",
  },
  {
    question: "What happens after drilling is completed?",
    answer:
      "After drilling, we coordinate the next stages of your project, including test pumping, water quality analysis, borehole equipping, and commissioning. We also provide ongoing support through inspections and rehabilitation to help keep your borehole performing reliably over the long term.",
  },
];

const ChevronDownIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-semibold text-[#1B1F5C]">{question}</span>
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
        <p className="pb-5 text-sm leading-relaxed text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-2xl font-bold text-[#1B1F5C] sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <div>
          {FAQS.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;