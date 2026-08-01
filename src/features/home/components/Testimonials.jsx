import { useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Masterpiece conducted a hydrogeological survey on our property and identified a reliable groundwater source, giving us confidence to proceed with drilling. The borehole yielded 49m³ of water.",
    name: "Kahome Ndeithi",
    service: "Hydrogeological Survey",
    location: "Nanyuki",
  },
  {
    quote:
      "You delivered to our expectations and we are happy with the service.",
    name: "Edith",
    service: "Borehole Flushing",
    location: "Royal Gates Estate, Kitengela",
  },
  {
    quote:
      "From the hydrogeological survey to successful borehole drilling, Masterpiece delivered a complete solution. We now have a reliable water source for our property.",
    name: "Victor Muli",
    service: "Hydrogeological Survey & Borehole Drilling",
    location: "Mashuru, Kajiado",
  },
  {
    quote:
      "I highly recommend Masterpiece Hydro-Solutions for borehole camera inspection services. Their technical expertise and attention to detail gave us a clear understanding of our borehole's condition.",
    name: "Gideon Mbugua",
    service: "Borehole Inspection",
    location: "Mbaruk, Nakuru",
  },
  {
    quote:
      "We had a good experience working with Masterpiece Hydro-Solutions. The drilling was done professionally, communication was clear throughout the project, and we are happy with the final outcome. I would confidently recommend them.",
    name: "Rose",
    service: "Borehole Drilling",
    location: "Kisaju, Kajiado",
  },
];

const ChevronIcon = ({ direction = "left", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline
      points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"}
    />
  </svg>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const goTo = (newIndex) => {
    const total = TESTIMONIALS.length;
    setIndex(((newIndex % total) + total) % total); // wraps in both directions
  };

  const current = TESTIMONIALS[index];

  return (
    <section className="bg-[#5DD9D9]/10 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#1B1F5C] sm:text-3xl">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-base text-gray-600">
          Hear from property owners, farmers, businesses, and institutions who
          have trusted us with their groundwater projects.
        </p>

        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm sm:p-10">
          <p className="text-lg italic leading-relaxed text-gray-700">
            "{current.quote}"
          </p>
          <p className="mt-6 text-sm font-semibold text-[#1B1F5C]">
            {current.name}
            <span className="mx-2 text-gray-400">•</span>
            <span className="font-normal text-gray-600">{current.service}</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="font-normal text-gray-600">
              {current.location}
            </span>
          </p>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-[#1B1F5C] transition-colors duration-200 hover:border-[#1B1F5C]"
          >
            <ChevronIcon direction="left" className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                  i === index ? "bg-[#1B1F5C]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-[#1B1F5C] transition-colors duration-200 hover:border-[#1B1F5C]"
          >
            <ChevronIcon direction="right" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
