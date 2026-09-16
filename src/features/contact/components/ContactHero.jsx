
const scrollToEnquiryForm = () => {
  document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#1B1F5C]">
      {/* Background photo — swap src for client-provided drilling-site image.
          Overlay keeps text legible regardless of the final photo's tone. */}
      <div className="absolute inset-0">
        <img
          src="/images/contact/hero-drilling-site.jpg"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#1B1F5C] via-[#1B1F5C]/95 to-[#1B1F5C]" />
      </div>

      {/* Soft teal accent glow, consistent with the Home hero tint treatment */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#5DD9D9]/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#5DD9D9]">
          Start the Conversation
        </p>

        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Let&apos;s Discuss Your Borehole Project
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          Whether you&apos;re planning a new borehole, improving an existing one, or simply need
          guidance on the best next step, we&apos;re here to help.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-gray-300">
          You don&apos;t need to know exactly which service you need before contacting us. Tell us
          about your project, and we&apos;ll recommend the most appropriate next step based on
          your site&apos;s conditions, your water requirements, and the available evidence.
        </p>

        <div className="mt-10">
          <button
            type="button"
            onClick={scrollToEnquiryForm}
            className="inline-flex items-center justify-center rounded-lg bg-[#0F9E9E] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#0d8a8a]"
          >
            Start Your Project Enquiry
          </button>
        </div>
      </div>
    </section>
  );
}