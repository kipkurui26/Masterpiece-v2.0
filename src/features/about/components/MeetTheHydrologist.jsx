import snapshotOkelo from '../../../assets/okelo-snapshot.jpeg'

export default function MeetTheHydrogeologist() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B1F5C]">
            Meet the Hydrogeologist Behind Our Recommendations
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-[240px_1fr] gap-8 items-center bg-gray-50 rounded-2xl p-8 lg:p-10">
          {/* Headshot */}
          <div className="mx-auto sm:mx-0">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 shadow-md">
              <img
                src={snapshotOkelo}
                alt="Valentine Okelo, Lead Hydrogeologist and Director"
                title="Valentine Okelo, Lead Hydrogeologist and Director"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-[#1B1F5C]">
              Valentine Okelo
            </h3>
            <p className="text-[#0F9E9E] font-semibold mt-1">
              Lead Hydrogeologist &amp; Director, Masterpiece Hydro-Solutions
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Every hydrogeological survey and the technical recommendations
              that guide your project are led by Valentine. With experience
              across hundreds of groundwater projects in different geological
              settings, he oversees hydrogeological investigations, interprets
              survey findings, and helps ensure every recommendation is guided
              by evidence and professional standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
