const services = [
  "Hydrogeological Surveys",
  "Borehole Drilling",
  "Borehole Equipping",
  "Borehole Solarisation",
  "Borehole Rehabilitation",
  "Borehole Inspection",
  "Test Pumping",
  "Water Quality Analysis",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0 text-white"
      aria-hidden="true"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesWeHelpWith() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#1B1F5C] sm:text-4xl">
            Not Sure Where to Start?
          </h2>

          <p className="mt-4 text-gray-600">
            Many clients contact us before they know exactly what they need. Some are deciding
            whether to drill. Others want to improve an existing borehole, investigate a problem,
            or understand the most suitable pumping solution.
          </p>

          <p className="mt-4 text-gray-600">
            Whatever stage your project has reached, we&apos;ll help you identify the most
            appropriate next step before you invest further.
          </p>
        </div>

        <p className="mt-12 text-center text-sm font-semibold uppercase tracking-widest text-[#0F9E9E]">
          We can help whether your project involves
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 rounded-lg bg-[#1B1F5C] px-4 py-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0F9E9E]">
                <CheckIcon />
              </span>
              <span className="text-sm font-medium text-white">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}