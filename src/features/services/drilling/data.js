import drillingImage from "../../../assets/hero-image.jpg";
import drillingVideo from "../../../assets/video-survey.mp4";
import surveyImage1 from "../../../assets/hero-image.jpg";
import surveyVideo1 from "../../../assets/video-survey.mp4";
import surveyImage2 from "../../../assets/image2.jpg";
import surveyVideo2 from "../../../assets/video2.mp4";
import surveyImage3 from "../../../assets/image3.jpg";
import surveyVideo3 from "../../../assets/video3.mp4";

const drillingData = {
  hero: {
    eyebrow: "Professional Borehole Drilling in Kenya",
    headline: "Finding Water Is Only Part of a Successful Borehole",
    intro: [
      "Finding water is an important milestone, but it does not determine how well your borehole will perform over time. A successful borehole depends on much more than simply reaching water during drilling.",
      "Every stage of the drilling process affects your borehole's long-term performance. At Masterpiece Hydro-Solutions, we manage every drilling project to the required technical standards, so your borehole is built to perform for many years.",
    ],
    primaryCTA: {
      label: "Request a Borehole Drilling Quote",
      href: "/contact#enquiry-form",
    },
    secondaryCTA: {
      label: "Have Questions? Talk to Our Team",
      href: "https://wa.me/254721577588",
    },
    media: {
      type: "image",
      src: drillingImage,
      caption: "Borehole drilling rig on site",
    },
  },

  whyItMatters: {
    heading: "Why What Happens After Finding Water Matters",
    paragraphs: [
      "Once your site has been assessed and a drilling location confirmed, the next decision is who drills your borehole and how.",
      "What happens after water is found has a lasting impact on how your borehole performs, how long it lasts, and the maintenance it may require over time.",
      "A borehole can produce water immediately after drilling and still develop problems later if it is not drilled and completed to the required technical standards. Problems such as reduced water yield, sand intrusion, or poor long-term performance may only become apparent long after the rig has left.",
      "That's why every stage of the drilling process matters. From drilling through to borehole construction and development, each stage influences how your borehole performs over the long term.",
      "Understanding the drilling process helps you know what to expect and why every step matters.",
    ],
  },

  process: {
    heading: "What Happens During Borehole Drilling?",
    intro:
      "Once your drilling location has been confirmed, drilling begins. From there, the project follows a series of carefully managed stages, each carried out for a specific purpose before the borehole is ready for use.",
    stages: [
      {
        title: "Drilling to Recommended Depth",
        description:
          "Drilling is carried out to the depth recommended by the hydrogeological survey. Where the geological conditions encountered require adjustments, these are made as the work continues. Throughout the process, the geological formations encountered, including the water-bearing zones, are carefully recorded.",
      },
      {
        title: "Borehole Construction",
        description:
          "Once water is reached, the borehole still needs to be built, not just drilled. Suitable casing and screens are installed to support the borehole, allow groundwater to enter, and help keep out sand and sediment. Where required, the borehole is sealed to help protect it from surface contamination, and gravel packing is used to improve the movement of groundwater into the borehole.",
      },
      {
        title: "Development & Test Pumping",
        description:
          "The borehole is then developed to remove fine particles introduced during drilling and improve its performance before test pumping is carried out. Test pumping helps determine how much water the borehole can reliably produce.",
      },
    ],
    media: {
      type: "video",
      src: drillingVideo,
      caption: "Casing and borehole construction in progress",
    },
    deliverable: {
      heading: "Your Drilling Completion Report Includes",
      items: [
        "The actual depth obtained.",
        "The geological formation (logs) encountered.",
        "The casing profile - if cased.",
        "A test pumping report.",
        "Water chemical analysis from the lab.",
        "Any other information required to support the next stages of your borehole project.",
      ],
    },
  },

  costFactors: {
    heading: "What Affects the Cost of Borehole Drilling?",
    intro:
      "No two borehole projects are exactly the same, so drilling costs can vary from one site to another. Rather than offer a single figure that may not reflect your project, here are the factors that influence cost.",
    factors: [
      {
        title: "Drilling Depth",
        description:
          "The deeper the borehole, the more drilling, casing, and time it requires. Your hydrogeological survey provides a recommended drilling depth, but the actual depth may vary depending on the geological conditions encountered during drilling.",
      },
      {
        title: "Ground Conditions",
        description:
          "Some ground is straightforward to drill through. Other conditions, such as hard rock or unstable formations, require more time, different drilling methods, or additional material to complete the borehole safely and to the required technical standards.",
      },
      {
        title: "Casing and Borehole Construction",
        description:
          "The type of casing required depends on the geological formations encountered during drilling and the depth achieved. These conditions influence the casing needed to protect the borehole and support its long-term performance.",
      },
      {
        title: "Site Access",
        description:
          "The location and accessibility of your site can also influence drilling costs. Difficult terrain, long travel distances, or limited access for heavy equipment may affect the time and resources required to mobilise the drilling rig and supporting equipment.",
      },
      {
        title: "Additional Services",
        description:
          "Depending on your project, you may also require services such as test pumping, water quality analysis, borehole equipping, or solarisation. These are separate from drilling but are often planned together as part of the same borehole project.",
      },
    ],
    closing:
      "Once your hydrogeological survey has been completed, we can prepare a quotation based on your site's conditions and the work required to complete your project. This ensures the quote you receive reflects your actual project requirements rather than a generic estimate.",
  },

  specialInsight: {
    heading: "Why the Recommended Drilling Depth May Change",
    paragraphs: [
      "Your hydrogeological survey provides a recommended drilling depth based on the geological conditions identified at your site. This recommendation provides the starting point for the drilling process, based on the best available evidence before drilling begins.",
      "However, the final drilling depth can only be confirmed once drilling is underway. Geological conditions beneath the surface are not always uniform, even within a small area, and the formations encountered during drilling may differ from those expected during the survey.",
      "Throughout the drilling process, the geological formations encountered and the depth at which water-bearing zones are reached are carefully monitored and recorded. Where the conditions encountered require adjustments to the recommended drilling depth, we'll explain the reasons before proceeding.",
      "This approach ensures your borehole is drilled according to the conditions encountered beneath your site rather than to a fixed depth decided before drilling began.",
    ],
  },

  gallery: [
    {
      type: "image",
      src: surveyImage1,
      caption: "Field assessment in progress",
    },
    {
      type: "video",
      src: surveyVideo1,
      caption: "Geophysical survey walkthrough",
    },
    { type: "image", src: surveyImage2, caption: "On-site data collection" },
    {
      type: "video",
      src: surveyVideo2,
      caption: "Equipment setup and readings",
    },
    { type: "image", src: surveyImage3, caption: "Survey report handover" },
    { type: "video", src: surveyVideo3, caption: "Findings explained on site" },
  ],

  faq: [
    {
      question: "Can you guarantee that drilling will produce water?",
      answer:
        "A hydrogeological survey helps reduce the risk of drilling in the wrong location by identifying the most suitable drilling point based on the available evidence. While no company can responsibly guarantee that drilling will produce water before work begins, a hydrogeological survey provides the information needed to make an informed drilling decision. Water quantity and quality can only be confirmed after drilling has been completed and the necessary testing has been carried out.",
    },
    {
      question:
        "What happens if you don't find water at the recommended depth?",
      answer:
        "If water isn't found at the recommended depth, we'll assess the geological conditions encountered and discuss the options available, which may include drilling deeper. We'll explain the reasons behind any recommendation before proceeding, so you can make an informed decision.",
    },
    {
      question:
        "Do I need a hydrogeological survey before drilling, or can I go straight to drilling?",
      answer:
        "We recommend carrying out a hydrogeological survey before drilling. It significantly reduces the risk of drilling in an unsuitable location and provides evidence-based recommendations to guide your project. Drilling without a survey increases the risk of a low-yielding or unsuccessful borehole.",
    },
    {
      question: "Will the borehole produce enough water for my needs?",
      answer:
        "The amount of water a borehole can produce depends on the geological conditions beneath your site. Your hydrogeological survey provides an indication of the groundwater potential beneath your site, while test pumping carried out after drilling confirms the borehole's sustainable yield.",
    },
  ],

  finalCTA: {
    heading: "Ready to Start Your Borehole Project?",
    body: "Whether you're ready to drill, still confirming your drilling location, or have questions about the process, our team is here to help. Discuss your project with us and get a clear plan for moving forward with confidence.",
    primaryCTA: {
      label: "Request a Borehole Drilling Quote",
      href: "/contact?service=borehole-drilling",
    },
    secondaryOptions: ["Call", "WhatsApp", "Email"],
  },
};

export default drillingData;
