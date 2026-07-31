const STEPS = [
  {
    step: "Step 1",
    title: "Tell Us About Your Project",
    description:
      "Share your location, water requirements, and project details so we can understand what you need.",
  },
  {
    step: "Step 2",
    title: "Receive Expert Recommendations",
    description:
      "We'll assess your situation and recommend the most appropriate next step, whether that's a hydrogeological survey, borehole drilling, rehabilitation, inspection, or another groundwater solution.",
  },
  {
    step: "Step 3",
    title: "Move Forward with Confidence",
    description:
      "We'll arrange the appropriate assessment, site visit, or project planning so you can proceed with clarity and confidence.",
  },
];

const ContactProcess = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-bold text-[#1B1F5C] sm:text-3xl">
          What Happens After You Contact Us?
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((item, index) => (
            <div key={item.title} className="relative text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1B1F5C] text-lg font-bold text-white">
                {index + 1}
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#0F9E9E]">
                {item.step}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-[#1B1F5C]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>

              {/* connecting line between steps on larger screens */}
              {index < STEPS.length - 1 && (
                <span className="absolute -right-4 top-6 hidden h-px w-8 bg-gray-300 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactProcess;