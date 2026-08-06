const ChevronDownIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button type="button" onClick={onToggle} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 py-5 text-left">
      <span className="text-base font-semibold text-brand-navy">{question}</span>
      <ChevronDownIcon className={`h-5 w-5 shrink-0 text-[#0F9E9E] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
    </button>
    <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-64" : "max-h-0"}`}>
      <p className="pb-5 text-sm leading-relaxed text-gray-600">{answer}</p>
    </div>
  </div>
);

export default FAQItem;