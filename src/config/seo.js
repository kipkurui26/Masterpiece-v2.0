export const SITE_NAME = "Masterpiece Hydro-Solutions";
export const SITE_URL = "https://www.masterpiecehydrosolutions.co.ke";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/display-image.jpeg`;


const og = (file) => `${SITE_URL}/og/${file}`;

export const PAGE_SEO = {
  home: {
    title: "Hydrological Survey & Borehole Services in Kenya",
    description:
      "Hydrogeological surveys, drilling, equipping, solarisation and rehabilitation across Kenya. Call or WhatsApp 0721577588",
    path: "/",
  },
  about: {
    title: "About Us",
    description:
      "Learn about Masterpiece Hydro-Solutions and how we approach borehole projects in Kenya, using site-specific assessment to guide groundwater and water decisions.",
    path: "/about",
    image: og("about.jpg"),
    imageAlt: "The Masterpiece Hydro-Solutions team on a borehole project",
  },
  contact: {
    title: "Contact Us",
    description:
      "Planning a borehole in Kenya? Contact Masterpiece Hydro-Solutions for surveys, drilling, equipping, solarisation and rehabilitation services.",
    path: "/contact",
    image: og("contact.jpg"),
    imageAlt: "Contact Masterpiece Hydro-Solutions for your borehole project",
  },
  resourceCentre: {
    title: "Resource Centre",
    description:
      "Practical guides on boreholes, groundwater, water systems and borehole ownership in Kenya from Masterpiece Hydro-Solutions.",
    path: "/resource-centre",
  },
  projects: {
    title: "Our Projects",
    description:
      "Explore Masterpiece Hydro-Solutions projects across Kenya, including hydrogeological surveys, borehole drilling, equipping and rehabilitation work.",
    path: "/projects",
  },
  survey: {
    title: "Hydrogeological Surveys in Kenya",
    description:
      "Hydrogeological surveys in Kenya to assess groundwater potential and guide drilling decisions before you invest. Request a survey.",
    path: "/services/hydrogeological-surveys",
    image: og("hydrogeological-surveys.jpg"),
    imageAlt: "Hydrogeological survey being carried out on site in Kenya",
  },
  drilling: {
    title: "Borehole Drilling in Kenya",
    description:
      "Borehole drilling services in Kenya guided by hydrogeological assessment and your site's water requirements. Request a drilling quote.",
    path: "/services/borehole-drilling",
    image: og("borehole-drilling.jpg"),
    imageAlt: "Borehole drilling rig in operation in Kenya",
  },
  equipping: {
    title: "Borehole Equipping in Kenya",
    description:
      "Borehole equipping in Kenya with pumps and equipment selected for your borehole's depth, yield and water needs. Request an equipping quote.",
    path: "/services/borehole-equipping",
    image: og("borehole-equipping.jpg"),
    imageAlt: "Borehole pump and equipment being installed",
  },
  solarisation: {
    title: "Borehole Solarisation in Kenya",
    description:
      "Borehole solarisation in Kenya with a solar pumping system sized to your borehole, water needs and site. Request a solarisation quote.",
    path: "/services/borehole-solarisation",
    image: og("borehole-solarisation.jpg"),
    imageAlt: "Solar panels powering a borehole pumping system in Kenya",
  },
  rehabilitation: {
    title: "Borehole Rehabilitation in Kenya",
    description:
      "Restore a failing or underperforming borehole in Kenya. We assess the cause before recommending rehabilitation. Talk to Masterpiece.",
    path: "/services/borehole-rehabilitation",
    image: og("borehole-rehabilitation.jpg"),
    imageAlt: "Borehole rehabilitation work being carried out on an existing borehole",
  },
  inspection: {
    title: "Borehole Camera Inspection in Kenya",
    description:
      "Borehole inspection in Kenya before purchase, rehabilitation or continued use. Assess an existing borehole's condition before spending more on it.",
    path: "/services/borehole-inspection",
    image: og("borehole-inspection.jpg"),
    imageAlt: "Borehole inspection with a downhole camera",
  },
  notFound: {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist.",
    path: null,
    // No image: falls back to DEFAULT_OG_IMAGE
  },
};