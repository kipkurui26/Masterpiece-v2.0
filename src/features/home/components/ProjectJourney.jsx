import { Link } from "react-router-dom";

const JOURNEY_STAGES = [
  "Project Discussion",
  "Hydrogeological Survey",
  "Project Planning & Regulatory Guidance",
  "Borehole Drilling",
  "Test Pumping",
  "Water Quality Analysis",
  "Borehole Equipping",
  "Commissioning",
  "Ongoing Support",
];

const ProjectJourney = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#1B1F5C] sm:text-3xl">
            Your Borehole Project Journey
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Once you've identified the right starting point, your project progresses through a
            series of connected stages, with each stage building on the decisions made before
            it.
          </p>
        </div>

        {/* Stepper — vertical on mobile, horizontal-wrapped on larger screens */}
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-9">
          {JOURNEY_STAGES.map((stage, index) => (
            <li key={stage} className="flex items-start gap-3 sm:flex-col sm:items-center sm:text-center lg:items-center">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1B1F5C] text-sm font-bold text-white">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-gray-700 sm:mt-2">{stage}</span>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <p className="mb-3 text-base text-gray-600">
            Whether you are just getting started or ready to move forward, we'll help you
            understand the right next step.
          </p>
          <Link
            to="/services/hydrogeological-surveys"
            className="text-sm font-semibold text-[#0F9E9E] transition-colors duration-200 hover:text-[#1B1F5C]"
          >
            See How the Borehole Process Works →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectJourney;