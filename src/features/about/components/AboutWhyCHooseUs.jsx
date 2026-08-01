const reasons = [
  "Make informed decisions based on hydrogeological expertise rather than guesswork.",
  "Receive recommendations supported by evidence before you invest.",
  "Benefit from technical standards applied throughout your project.",
  "Receive honest advice, even when a different approach is in your best interests.",
  "Build a water supply planned for long-term performance rather than short-term results.",
];

export default function AboutWhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B1F5C]">
            Why Clients Choose Masterpiece Hydro-Solutions
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Rather than making broad claims, here is what you can expect
            from working with us.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex items-start gap-4 bg-gray-50 rounded-lg p-5"
            >
              <div className="shrink-0 w-8 h-8 rounded-full bg-[#0F9E9E] text-white flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[#1B1F5C] font-medium leading-relaxed pt-0.5">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}