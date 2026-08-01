const PHONE_DISPLAY = "0721 577 588";
const PHONE_TEL = "+254721577588";

const scrollToEnquiryForm = () => {
  document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function ContactFinalCTA() {
  return (
    <section className="bg-linear-to-r from-[#1B1F5C] to-[#0F9E9E] py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Start the Conversation?
        </h2>

        <p className="mt-4 text-lg text-gray-100">
          Tell us about your project today, and we&apos;ll help you identify the most appropriate
          next step before you invest further.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={scrollToEnquiryForm}
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1B1F5C] shadow-lg transition hover:bg-gray-100"
          >
            Discuss Your Project
          </button>

          
            <a href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center rounded-lg border border-white/60 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Call Us — {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}