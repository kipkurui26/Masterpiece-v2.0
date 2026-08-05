// features/services/components/ServiceHero.jsx
import CTAButton from "./CTAButton";
import MediaPlaceholder from "./MediaPlaceholder";

const ServiceHero = ({ hero }) => {
  if (!hero) return null;
  const { eyebrow, headline, intro, primaryCTA, secondaryCTA, media } = hero;

  return (
    <section className="bg-[#1B1F5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {eyebrow && (
              <span className="inline-block text-[#5DD9D9] font-semibold tracking-wide uppercase text-sm mb-4">
                {eyebrow}
              </span>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {headline}
            </h1>

            {intro && (
              <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                {intro}
              </p>
            )}

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <CTAButton {...primaryCTA} variant="primary" />
              <CTAButton {...secondaryCTA} variant="secondary" />
            </div>
          </div>

          {/* Media */}
          {media && (
            <div className="w-full">
              <MediaPlaceholder
                type={media.type || "image"}
                src={media.src}
                poster={media.poster}
                alt={media.alt}
                caption={media.caption}
                aspect="wide"
                className="border border-white/20"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
