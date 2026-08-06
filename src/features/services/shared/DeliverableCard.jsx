const ReportIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-10 h-10  text-[#1B1F5C]">
    <path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M9 12h6M9 15.5h6M9 9h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand-teal shrink-0">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DeliverableCard = ({ heading, items = [], supportingLine }) => (
  <div className="mt-10 bg-[#5DD9D9]/20 border border-brand-teal/20 rounded-2xl shadow-md p-6 sm:p-8">
    <div className="flex items-center gap-3 mb-6">
      <span className="shrink-0 w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center">
        <ReportIcon />
      </span>
      <h3 className="text-lg sm:text-xl font-bold text-brand-navy">{heading}</h3>
    </div>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-700">
          <CheckIcon />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
    {supportingLine && (
      <p className="mt-6 pt-5 border-t border-gray-100 text-sm text-gray-500 leading-relaxed">
        {supportingLine}
      </p>
    )}
  </div>
);

export default DeliverableCard;