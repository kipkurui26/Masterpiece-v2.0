import aboutImagePreview from '../../../assets/about-page-preview.jpeg'

export default function OurPhilosophy() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-4/3 bg-gray-200">
              <img
                src={aboutImagePreview}
                alt="Better Decisions Leads to Better Borehole"
                title="Better Decisions Leads to Better Borehole"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B1F5C]">
              Better Decisions Lead to a Better Borehole
            </h2>

            <div className="mt-6 space-y-1 text-lg">
              <p className="text-gray-500 decoration-2">
                Many borehole projects begin with drilling.
              </p>
              <p className="text-[#0F9E9E] font-semibold">
                We believe they should begin with understanding.
              </p>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Your borehole's success starts with understanding the geology,
              groundwater potential, and the available evidence before
              important decisions are made. This reduces uncertainty and
              allows every stage of your project to be planned with greater
              confidence.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              This approach has guided hundreds of groundwater projects
              across Kenya and continues to shape the recommendations we
              make today.
            </p>

            <div className="mt-6 border-l-4 border-[#0F9E9E] pl-4 py-1">
              <p className="text-[#1B1F5C] font-medium">
                Across every service we provide, our recommendations are
                guided by diagnosis before recommendation and evidence
                before assumptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}