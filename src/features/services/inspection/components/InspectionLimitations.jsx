import { limitations, outcomes } from "../data";

function InspectionLimitations() {
  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="border-l-4 border-[#0F9E9E] bg-gray-50 rounded-r-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B1F5C]">
            What a Borehole Inspection Cannot Tell You
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            A borehole inspection can answer specific questions about the
            physical condition of your borehole. It cannot, on its own, answer
            every question about your water supply. For example, an inspection
            does not establish:
          </p>
          <ul className="mt-5 space-y-3">
            {limitations.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-[#1B1F5C]" />
                <span className="text-gray-800 text-sm md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-gray-700 text-sm md:text-base">These questions may require other forms of assessment.</p>
          <p className="mt-5 text-gray-700 text-sm md:text-base">
            For example: Borehole performance and available yield may require pumping tests.
            Water safety requires laboratory water quality testing. If the
            problem may involve the pump or other equipment, the pumping system
            may need to be assessed separately.
          </p>
          <p className="mt-5 text-gray-700 text-sm md:text-base">
            An inspection gives you specific information about what was observed
            inside the borehole. We use those findings to help you understand
            your options and determine whether further assessment is necessary.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl md:text-2xl font-bold text-[#1B1F5C] text-center">
            What Happens After the Inspection?
          </h3>
          <p className="mt-3 text-gray-700 text-center text-sm md:text-base max-w-2xl mx-auto">
            An inspection can lead to different outcomes depending on what is
            found. The findings may lead to:
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {outcomes.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200"
              >
                <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-[#0F9E9E]" />
                <span className="text-gray-800 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-gray-600 text-sm md:text-base italic">
            An inspection does not automatically mean that your borehole needs
            repair or rehabilitation. The appropriate response depends on the
            findings and the problem being investigated.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InspectionLimitations;
