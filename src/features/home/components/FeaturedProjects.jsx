import { Link } from "react-router-dom";
import sampleImage from "../../../assets/hero-image.jpg";

// Placeholder data — swap image paths/titles once real project photos are provided.
// Structure anticipates each project having a location + service type, matching
// the testimonial format ("Client • Service • Location") used elsewhere on the page.
const FEATURED_PROJECTS = [
  {
    title: "Hydrogeological Survey & Borehole Drilling",
    location: "Mashuru, Kajiado",
    image: sampleImage,
  },
  {
    title: "Borehole Camera Inspection",
    location: "Mbaruk, Nakuru",
    image: sampleImage,
  },
  {
    title: "Borehole Drilling",
    location: "Kisaju, Kajiado",
    image: sampleImage,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#1B1F5C] sm:text-3xl">Featured Projects</h2>
          <p className="mt-3 text-base text-gray-600">
            See how we've helped homeowners, farmers, businesses, and institutions develop
            reliable groundwater solutions across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <Link
              key={project.title + project.location}
              to="/projects"
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="aspect-4/3 w-full overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={`${project.title} in ${project.location}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-[#1B1F5C]">{project.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="text-sm font-semibold text-[#0F9E9E] transition-colors duration-200 hover:text-[#1B1F5C]"
          >
            View Our Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;