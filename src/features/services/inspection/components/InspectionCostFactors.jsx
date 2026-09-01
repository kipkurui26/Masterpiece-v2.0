import { costFactors } from "../data";

function InspectionCostFactors() {
  return (
    <section className="bg-gray-50 py-14 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B1F5C]">
          How Much Does Borehole Inspection Cost in Kenya?
        </h2>
        <p className="mt-4 text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
          There is no single inspection price for every borehole. The cost depends on the
          borehole, the site and the inspection required. Factors that may affect the cost
          include:
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {costFactors.map((factor) => (
            <div
              key={factor.id}
              className="bg-white border border-gray-200 rounded-lg p-5 font-medium text-[#1B1F5C] text-sm md:text-base"
            >
              {factor.label}
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Because these factors vary from one site to another, we prepare a quotation based on
          your specific borehole and what you need to establish.
        </p>
      </div>
    </section>
  );
}

export default InspectionCostFactors;