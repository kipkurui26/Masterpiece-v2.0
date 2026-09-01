import { deliverables } from "../data";

function InspectionDeliverables() {
  return (
    <section className="bg-white py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B1F5C] text-center">
          What You Receive
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {deliverables.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-6 bg-gray-50"
            >
              <h3 className="text-lg font-semibold text-[#0F9E9E]">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-700 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Together, these give you a documented record of what was observed during the inspection.
        </p>
      </div>
    </section>
  );
}

export default InspectionDeliverables;