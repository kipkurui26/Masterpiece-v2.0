const steps = [
  {
    number: "1",
    title: "We Review Your Project",
    description:
      "We review the information you've provided to understand your project's current stage, your objectives, and any challenges you're experiencing.",
  },
  {
    number: "2",
    title: "We Contact You",
    description:
      "We'll get in touch using your preferred contact method to discuss your project, answer your questions, and gather any additional information required.",
  },
  {
    number: "3",
    title: "We Recommend the Next Step",
    description:
      "Based on your project's requirements, we'll recommend the most appropriate next step. This may involve arranging a hydrogeological survey, discussing drilling, assessing an existing borehole, or advising on another suitable groundwater solution.",
  },
];

export default function ContactProcessSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#1B1F5C] sm:text-4xl">
            What Happens After You Contact Us?
          </h2>
          <p className="mt-4 text-gray-600">
            Every recommendation starts with understanding. Our advice is guided by evidence
            rather than assumptions, helping you make informed decisions before investing
            further in your borehole project.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1B1F5C] text-xl font-bold text-[#5DD9D9]">
                {step.number}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#1B1F5C]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}