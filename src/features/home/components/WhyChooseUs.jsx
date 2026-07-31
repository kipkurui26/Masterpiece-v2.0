const REASONS = [
  "Make informed decisions based on evidence rather than assumptions.",
  "Recommendations tailored to your site's conditions and project requirements.",
  "Technical standards applied throughout every stage of your project.",
  "Honest advice, even when it means recommending an alternative approach.",
  "Long-term thinking that considers the whole life of your borehole, not just the drilling stage.",
];

// Simple checkmark icon — consistent with the inline-SVG approach used across the site
const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#1B1F5C] sm:text-3xl">
            Why Clients Choose Masterpiece Hydro-Solutions
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Choosing a borehole partner is about more than completing the work. It's about
            making informed decisions before investing and having confidence in every stage
            that follows.
          </p>
        </div>

        <ul className="space-y-5">
          {REASONS.map((reason) => (
            <li key={reason} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5DD9D9]/25 text-[#0F9E9E]">
                <CheckIcon className="h-4 w-4" />
              </span>
              <span className="text-base leading-relaxed text-gray-700">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;