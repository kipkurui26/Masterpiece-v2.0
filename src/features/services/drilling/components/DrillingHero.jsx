import CTAButton from "../../shared/CTAButton";
import MediaPlaceholder from "../../shared/MediaPlaceholder";
import drillingData from "../data";

const { hero } = drillingData;

const DrillingHero = () => (
  <section className="bg-[#1B1F5C] text-white">
    <div className="mx-auto px-4 md:px-12 lg:px-20 py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-block text-[#5DD9D9] font-semibold tracking-wide uppercase text-sm mb-4">
            {hero.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {hero.headline}
          </h1>
          <div className="mt-6 space-y-3">
            {hero.intro.map((p, i) => (
              <p key={i} className="text-lg text-gray-200 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
            <CTAButton {...hero.primaryCTA} variant="primary" />
            <CTAButton {...hero.secondaryCTA} variant="secondary" />
          </div>
        </div>
        <div className="w-full">
          <MediaPlaceholder
            type={hero.media.type}
            src={hero.media.src}
            caption={hero.media.caption}
            title={hero.media.title}
            alt={hero.media.alt}
            aspect="wide"
            className="border border-white/20"
          />
          <p className="px-4 py-3 text-sm italic text-gray-100 text-center">
            {hero.media.caption}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default DrillingHero;
