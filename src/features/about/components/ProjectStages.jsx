const coreServices = [
  {
    title: "Hydrogeological Surveys",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Borehole Drilling",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v14M9 6l3-4 3 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 16h12l-1.5 5a1 1 0 01-1 .8H8.5a1 1 0 01-1-.8L6 16z" />
      </svg>
    ),
  },
  {
    title: "Borehole Equipping",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Borehole Solarisation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: "Borehole Rehabilitation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 0115.36-6.36M21 3v6h-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-15.36 6.36M3 21v-6h6" />
      </svg>
    ),
  },
];

const supportingActivities = [
  "Test Pumping",
  "Water Quality Analysis",
  "Borehole Inspection",
];

export default function ProjectStages() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B1F5C]">
            Supporting Every Stage of Your Borehole Project
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Finding water is only one stage of your borehole project. It
            progresses through a series of connected stages, and each one
            influences how well your water supply performs over the long
            term.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreServices.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-[#0F9E9E]/10 text-[#0F9E9E] flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-[#1B1F5C] text-sm">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            Depending on your project's requirements, we also carry out
            supporting activities such as{" "}
            {supportingActivities.map((activity, i) => (
              <span key={activity} className="font-semibold text-[#1B1F5C]">
                {activity}
                {i < supportingActivities.length - 1 ? ", " : ""}
              </span>
            ))}{" "}
            where these are needed to guide the next stage of your project.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            By considering every stage together rather than in isolation, we
            help ensure each decision supports the long-term performance of
            your water supply.
          </p>
        </div>
      </div>
    </section>
  );
}