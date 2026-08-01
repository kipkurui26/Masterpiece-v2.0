const counties = [
  "Nairobi",
  "Kiambu",
  "Machakos",
  "Kajiado",
  "Makueni",
  "Nakuru",
  "Narok",
  "Kisumu",
  "Bomet",
];

export default function ServiceAreas() {
  return (
    <section className="bg-[#1B1F5C] py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#5DD9D9]">
          Working Across Kenya
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Serving Projects Nationwide
        </h2>

        <p className="mt-6 text-gray-300">
          We support residential, agricultural, commercial, institutional, and public water
          projects throughout Kenya. Our work regularly takes us to:
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {counties.map((county) => (
            <span
              key={county}
              className="rounded-full border border-[#5DD9D9]/40 px-4 py-2 text-sm font-medium text-white"
            >
              {county}
            </span>
          ))}
          <span className="rounded-full border border-[#5DD9D9]/40 px-4 py-2 text-sm font-medium text-[#5DD9D9]">
            + many more
          </span>
        </div>

        <p className="mt-8 text-sm text-gray-300">
          If you&apos;re unsure whether we cover your area, contact us and we&apos;ll be happy to
          advise.
        </p>
      </div>
    </section>
  );
}