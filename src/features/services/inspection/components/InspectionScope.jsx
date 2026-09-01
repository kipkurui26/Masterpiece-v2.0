import { scope } from "../data";

function InspectionScope() {
  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B1F5C] text-center">
          What Does the Inspection Involve?
        </h2>
        <p className="mt-4 text-gray-700 text-center text-sm md:text-base max-w-2xl mx-auto">
          We focus on the specific question you need answered about your borehole and inspect
          the borehole accordingly. Depending on what you need to establish, the inspection may
          involve:
        </p>
        <div className="mt-10 space-y-6">
          {scope.map((item) => (
            <div key={item.step} className="flex gap-4">
              <span className="shrink-0 w-10 h-10 rounded-full bg-[#1B1F5C] text-white flex items-center justify-center font-semibold text-sm">
                {item.step}
              </span>
              <div>
                <h3 className="font-semibold text-[#1B1F5C]">{item.title}</h3>
                <p className="mt-1 text-gray-700 text-sm md:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-600 text-sm md:text-base italic">
          What we establish depends on the borehole, the inspection conditions and what you need
          to find out.
        </p>
      </div>
    </section>
  );
}

export default InspectionScope;