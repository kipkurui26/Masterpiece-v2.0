import { Link } from "react-router-dom";

const HERO_BASE_PATH = "/assets/images/optimized/home/borehole-drilling-project-eldama-ravine-kenya";
const HERO_WIDTHS = [768, 1280, 1920];

const Hero = () => {
  const avifSrcSet = HERO_WIDTHS.map((w) => `${HERO_BASE_PATH}-${w}.avif ${w}w`).join(", ");
  const webpSrcSet = HERO_WIDTHS.map((w) => `${HERO_BASE_PATH}-${w}.webp ${w}w`).join(", ");
  const fallback = `${HERO_BASE_PATH}-1280.jpg`;

  return (
    <section className="bg-[#5DD9D9]/20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* Text column */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#0F9E9E]">
            Professional Groundwater &amp; Borehole Solutions in Kenya
          </p>

          <h1 className="text-3xl font-bold leading-tight text-[#1B1F5C] sm:text-4xl lg:text-5xl">
            Every Successful Borehole Begins with{" "}
            <span className="text-[#0F9E9E]">Understanding</span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-gray-700 sm:text-lg">
            Every successful borehole depends on decisions made before drilling
            begins. Understanding your site's geology and groundwater potential
            helps reduce unnecessary cost, avoid costly mistakes, and gives your
            project the strongest possible foundation.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            Whether you are planning a borehole for your home, farm, business,
            institution, or commercial development, Masterpiece Hydro-Solutions
            helps you move forward with evidence-based recommendations at every
            stage of your project.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/contact#enquiry-form"
              className="inline-block rounded-md bg-[#1B1F5C] px-6 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#141748]"
            >
              Discuss Your Project
            </Link>

            
            <a  href="#services"
              className="inline-block rounded-md border border-[#1B1F5C] px-6 py-3 text-center text-sm font-semibold text-[#1B1F5C] transition-colors duration-200 hover:bg-[#1B1F5C] hover:text-white"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        {/* Media column */}
        <div className="order-first lg:order-last">
          <div className="overflow-hidden rounded-2xl">
            <picture>
              <source type="image/avif" srcSet={avifSrcSet} sizes="(min-width: 1024px) 50vw, 100vw" />
              <source type="image/webp" srcSet={webpSrcSet} sizes="(min-width: 1024px) 50vw, 100vw" />
              <img
                src={fallback}
                alt="Borehole drilling rig operating at a project site in Eldama Ravine, Kenya"
                title="Borehole drilling rig operating at a project site in Eldama Ravine, Kenya"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                className="aspect-4/3 w-full object-cover"
              />
            </picture>

            <p className="px-4 py-3 text-sm italic text-gray-600 text-center">
              A borehole drilling project in Eldama Ravine, Kenya, documented on
              site as drilling was underway.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;