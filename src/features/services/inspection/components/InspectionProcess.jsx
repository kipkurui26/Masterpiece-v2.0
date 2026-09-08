import { process, processMedia } from "../data";
import MediaPlaceholder from "../../shared/MediaPlaceholder";

function InspectionProcess() {
  return (
    <section className="bg-gray-50 py-14 px-6">
      <div className="mx-auto px-4 md:px-12 lg:px-20 py-16 lg:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B1F5C] text-center">
          How Our Borehole Inspection Works
        </h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <MediaPlaceholder
              type={processMedia.type}
              src={processMedia.src}
              title={processMedia.title}
              alt={processMedia.alt}
              caption={processMedia.caption}
              objectFit="contain"
              aspect="wide"
            />
          </div>

          <div className="space-y-6">
            {process.map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-full bg-[#0F9E9E] text-white flex items-center justify-center font-semibold text-sm">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-[#1B1F5C]">{item.title}</h3>
                  <p className="mt-1 text-gray-700 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InspectionProcess;
