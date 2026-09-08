import { useState } from "react";
import { Link } from "react-router-dom";
import { Maximize2, X } from "lucide-react";

import featuredHydrosurvey from "../../../assets/hydrogeological-survey-inkiito-isinya-kajiado-kenya.jpeg";
import featuredCameraInspection from "../../../assets/featured-camera-alternative.jpeg";
import featuredBoreholeDrilling from "../../../assets/featured-borehole-drilling.jpeg";


const FEATURED_PROJECTS = [
  {
    title: "Hydrogeological Survey",
    location: "Inkiito, Isinya",
    tagline: "Finding the right drilling point before drilling begins",
    description:
      "A hydrogeological survey conducted in Inkiito, Isinya to assess the area's groundwater potential and identify a suitable location for borehole development.",
    image: featuredHydrosurvey,
    alt: "Hydrogeological survey in Inkiito, Isinya, Kajiado County, Kenya",
    imageTitle: "Hydrogeological Survey in Inkiito, Isinya, Kajiado County",
  },
  {
    title: "Borehole Camera Inspection",
    location: "Loloitikosh, Kajiado",
    tagline: "Seeing what's happening inside the borehole",
    description:
      "An existing borehole in Loloitikosh, Kajiado, was inspected using downhole camera technology to investigate its internal condition. The inspection provided visual evidence of the borehole and casing condition, helping identify potential problems and determine whether rehabilitation or further investigation was appropriate.",
    image: featuredCameraInspection,
    alt: "Borehole camera inspection in Loloitikosh, Kajiado County",
    imageTitle: "Borehole Camera Inspection in Loloitikosh, Kajiado County",
  },
  {
    title: "Borehole Drilling",
    location: "Joska, Machakos",
    tagline: "Turning groundwater potential into a reliable water source",
    description:
      "A borehole drilling project in Joska, Machakos, professionally supervised from drilling through borehole construction, development and test pumping. The project reflects our approach to borehole development • using hydrogeological information and drilling observations to guide decisions and establish a reliable groundwater source.",
    image: featuredBoreholeDrilling,
    alt: "Borehole drilling project in Joska Area, Machakos",
    imageTitle: "Borehole Drilling in Joska Area, Machakos",
  },
];

const FeaturedProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[#1B1F5C] sm:text-3xl">
              Featured Projects
            </h2>

            <p className="mt-3 text-base text-gray-600">
              See how we've helped homeowners, farmers, businesses, and
              institutions develop reliable groundwater solutions across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={project.title + project.location}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* Image */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.alt}
                    title={project.imageTitle}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Zoom Button */}
                  <button
                    type="button"
                    onClick={() => openImage(project)}
                    aria-label={`View full image of ${project.title}`}
                    className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1B1F5C] shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white"
                  >
                    <Maximize2 size={20} strokeWidth={2} />
                  </button>
                </div>

                {/* Project Details */}
                <Link to="/projects" className="block p-5">
                  <h3 className="text-base font-semibold text-[#1B1F5C]">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {project.location}
                  </p>

                  {project.tagline && (
                    <p className="mt-3 text-sm font-medium text-[#0F9E9E]">
                      {project.tagline}
                    </p>
                  )}

                  {project.description && (
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {project.description}
                    </p>
                  )}
                </Link>
              </div>
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

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeImage}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeImage}
            aria-label="Close enlarged image"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white"
          >
            <X size={24} strokeWidth={2} />
          </button>

          {/* Enlarged Image */}
          <img
            src={selectedImage.image}
            alt={selectedImage.alt}
            title={selectedImage.imageTitle}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default FeaturedProjects;
