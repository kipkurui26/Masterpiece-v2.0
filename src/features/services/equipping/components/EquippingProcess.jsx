import MediaPlaceholder from "../../shared/MediaPlaceholder";
import equippingData from "../data";

const { process } = equippingData;

const EquippingProcess = () => (
  <section className="bg-gray-50">
    <div className="mx-auto px-2 md:px-12 lg:px-20 py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-brand-navy">{process.heading}</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">{process.intro}</p>
          <div className="space-y-4">
            {process.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
        <MediaPlaceholder
          type={process.media.type}
          src={process.media.src}
          caption={process.media.caption}
          aspect="wide"
          className="lg:sticky lg:top-24"
        />
      </div>
      <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="font-semibold text-brand-navy mb-3">{process.deliverable.heading}</h3>
        <ul className="space-y-2">
          {process.deliverable.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-gray-600">
              <span className="text-brand-teal">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default EquippingProcess;
