const clientTypes = [
  {
    label: "Homeowners & Residential Developments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5V21a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V9.5z" />
      </svg>
    ),
  },
  {
    label: "Farms & Agricultural Businesses",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Commercial & Industrial Properties",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M6 21V7l6-4 6 4v14M9 21v-6h6v6M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
      </svg>
    ),
  },
  {
    label: "Schools, Hospitals & Institutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10.5V16c0 1 3 3 7 3s7-2 7-3v-5.5" />
      </svg>
    ),
  },
  {
    label: "Property Developers & Construction Projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h20M4 20V10l4-2v12M12 20V6l4 2v12M4 10l8-5 8 5" />
      </svg>
    ),
  },
  {
    label: "Community & Public Water Supply Projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <circle cx="7" cy="8" r="2.5" />
        <circle cx="17" cy="8" r="2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 20c0-3 2.5-5 5-5s5 2 5 5M12 20c0-3 2.5-5 5-5s5 2 5 5" />
      </svg>
    ),
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="bg-[#1B1F5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Who We Work With
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Whether you are planning a private borehole, managing an
            agricultural project, developing commercial property, or
            delivering a public water project, we tailor our
            recommendations to your site's conditions and your project's
            requirements.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client) => (
            <div
              key={client.label}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#5DD9D9]/15 text-[#5DD9D9] flex items-center justify-center">
                {client.icon}
              </div>
              <p className="text-white font-medium leading-snug pt-2">
                {client.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-300 max-w-2xl mx-auto">
          Whatever the size of your project, our approach remains the same:
          understand the available evidence before recommending the next
          step.
        </p>
      </div>
    </section>
  );
}