import { useCases } from "../data";

function InspectionUseCases() {
  return (
    <section className="bg-gray-50 py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B1F5C] text-center">
          What You Might Need to Establish About Your Borehole
        </h2>
        <p className="mt-4 text-gray-700 text-center text-sm md:text-base">
          Sometimes you need to verify something about an existing borehole that cannot be
          confirmed from the surface or available records. You may need an inspection if you
          are asking:
        </p>
        <ul className="mt-8 space-y-4">
          {useCases.map((question, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-[#0F9E9E]" />
              <span className="text-gray-800 text-sm md:text-base">{question}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-gray-600 text-sm md:text-base italic">
          The inspection is guided by the question you need answered.
        </p>
      </div>
    </section>
  );
}

export default InspectionUseCases;