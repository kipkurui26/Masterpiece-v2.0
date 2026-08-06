import equippingData from "../data";

const { pumpSelection } = equippingData;

const EquippingPumpSelection = () => (
  <section className="bg-gray-50">
    <div className="max-w-3xl mx-auto px-6 py-16 lg:py-20">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-brand-navy">{pumpSelection.heading}</h2>
      <div className="space-y-4">
        {pumpSelection.paragraphs.map((p, i) => (
          <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed mt-4 font-medium">{pumpSelection.listIntro}</p>
      <ul className="mt-4 space-y-2 ml-6">
        {pumpSelection.factors.map((factor, i) => (
          <li key={i} className="text-gray-600 leading-relaxed list-disc">{factor}</li>
        ))}
      </ul>
      <p className="text-gray-600 leading-relaxed mt-6">{pumpSelection.closing}</p>
    </div>
  </section>
);

export default EquippingPumpSelection;
