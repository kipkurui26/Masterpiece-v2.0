import surveyVideo from "../../../assets/video-survey.mp4";
import surveyImageWithClients from "../../../assets/hydrosurvey-with-clients.jpeg";

import surveyGalleryOne from "../../../assets/consultations-sondu-kisumu.jpeg"
import surveyGalleryTwo from "../../../assets/video2.mp4";
import surveyImage2 from "../../../assets/image2.jpg";
import surveyImage3 from "../../../assets/image3.jpg";
import surveyVideo3 from "../../../assets/video3.mp4";

const surveyData = {
  hero: {
    eyebrow: "Professional Hydrogeological Survey in Kenya",
    headline: "Every Successful Borehole Begins Before Drilling",
    intro: [
      "The first decision in a successful borehole project isn't where to drill.",
      "It's understanding your site's groundwater potential.",
      "Groundwater isn't found evenly beneath every property, and geological conditions can vary significantly, even between neighbouring sites.",
      "A hydrogeological survey helps you understand those conditions before you invest in drilling.",
    ],
    primaryCTA: {
      label: "Request a Hydrogeological Survey",
      href: "/contact#enquiry-form",
    },
    secondaryCTA: {
      label: "Have Questions? Talk to a Hydrogeologist",
      href: "https://wa.me/254721577588",
    },
    media: {
      type: "video",
      src: surveyVideo,
      alt: "Alt text",
      title: "Title text",
      caption: "Hydrogeological survey field assessment",
    },
  },

  whyItMatters: {
    heading: "Why a Hydrogeological Survey Matters",
    paragraphs: [
      "Once you've decided to invest in a borehole, every decision that follows depends on how well you understand your site.",
      "Without that understanding, you're left making important decisions based on assumptions about your site's geological conditions and groundwater potential.",
      "Hydrogeological survey findings help you choose the most suitable drilling location and provide practical recommendations to guide the next stages of your borehole project.",
      "The value of the survey is not simply that it collects information — it's that the information helps you make better decisions before investing in drilling.",
    ],
  },

  process: {
    heading: "What Happens During a Hydrogeological Survey?",
    intro:
      "Before you invest in drilling, there's one important question that needs to be answered: where is the most suitable place to drill, based on the conditions of your site?",
    stages: [
      {
        title: "On-Site Assessment",
        description:
          "Our hydrogeologist visits your site and carries out a detailed assessment using specialised equipment to understand your site's geological conditions and groundwater potential.",
      },
      {
        title: "Reviewing Nearby Borehole Data",
        description:
          "We don't rely on what we find at your site alone. We also review information from nearby boreholes, including their depths, water yields, and locations, together with other relevant geological information about the area, to build a clearer picture.",
      },
      {
        title: "Analysis & Recommendation",
        description:
          "Before recommending a drilling location, we carefully review and compare all the information we've gathered. This helps us identify the most suitable drilling location and recommended depth for your site.",
      },
      {
        title: "On-Site Findings Review",
        description:
          "Where possible, we'll explain our findings on site so you understand what we found and what the next steps are.",
      },
    ],
    // Pulled out of the step list — this is a caveat, not a process step.
    // Candidate for a HighlightStatement/callout component instead.
    limitation:
      "A hydrogeological survey helps identify the most suitable drilling location and recommended depth based on the available evidence. However, the quantity and quality of water can only be confirmed after drilling is complete and the necessary water quality tests have been carried out.",
    media: {
      type: "image",
      src: surveyImageWithClients,
      title: "On-site geophysical assessment",
      alt: "On-site geophysical assessment",
      caption: "On-site geophysical assessment",
    },
    deliverable: {
      heading: "Your Signed & Stamped Survey Report Includes",
      items: [
        "A recommended drilling point with GPS coordinates",
        "A recommended drilling depth",
        "The survey findings and the reasons behind our recommendations",
        "Guidance on the permits required before drilling begins",
      ],
      supportingLine:
        "Prepared by a registered hydrogeologist to guide your drilling decision and support the next stage of your borehole project.",
    },
  },

  specialInsight: {
    heading: "What Guides Every Recommendation We Make",
    paragraphs: [
      "Every recommendation we make is guided by one objective: helping you make an informed drilling decision. That means considering more than one source of information — we combine field data, desktop research, nearby borehole records, and careful interpretation before recommending a drilling location and depth.",
      "Experience also matters. With more than six years of hydrogeological surveying experience and over 455 surveys completed, we've developed the expertise to interpret survey findings and make well-informed recommendations.",
      "Just as importantly, we're committed to honest professional advice. If the findings don't support your preferred drilling location, we'll explain why and recommend the option that the evidence supports. Our role is to help you make the best possible decision, even when the recommendation is not the one you expected.",
    ],
  },

  trustStats: [
    { value: "455+", label: "Hydrogeological Surveys Completed" },
    { value: "6+", label: "Years of Surveying Experience" },
    { value: "Nationwide", label: "Projects Across Kenya" },
  ],

  gallery: [
    {
      type: "image",
      alt: "Brief Consultations with clients in Sondu Area Kisumu before field assessment",
      title: "Brief Consultations with clients in Sondu Area Kisumu before field assessment",
      src: surveyGalleryOne,
      caption: "Brief Consultations with clients in Sondu Area Kisumu before field assessment",
    },
    {
      type: "video",
      alt: "A geologist using pool finder to locate ground water",
      title: "A geologist using pool finder to locate ground water",
      src: surveyGalleryTwo,
      caption: "A geologist using pool finder to locate ground water",
    },
    {
      type: "image",
      alt: "Alt Text",
      title: "Title Text",
      src: surveyImage2,
      caption: "Geophysical survey walkthrough",
    },
    {
      type: "image",
      alt: "Alt Text",
      title: "Title Text",
      src: surveyImage2,
      caption: "On-site data collection",
    },
    {
      type: "image",
      alt: "Alt Text",
      title: "Title Text",
      src: surveyImage3,
      caption: "Survey report handover",
    },
    {
      type: "video",
      alt: "Alt Text",
      title: "Title Text",
      src: surveyVideo3,
      caption: "Findings explained on site",
    },
  ],

  faq: [
    {
      question: "Can a hydrogeological survey guarantee that I'll find water?",
      answer:
        "No. A hydrogeological survey reduces uncertainty by helping identify the most suitable drilling location and recommended depth. However, water quantity and quality can only be confirmed after drilling and the necessary water quality tests have been completed. Occasionally, a survey may indicate that a site has limited groundwater potential. When that happens, we'll explain the findings and recommend the most appropriate next step before you invest in drilling.",
    },
    {
      question:
        "There are already boreholes near my property. Do I still need a hydrogeological survey?",
      answer:
        "Yes. Nearby boreholes provide useful information, but they don't guarantee that groundwater conditions beneath your property are the same. A hydrogeological survey assesses the geological conditions and groundwater potential at your site before recommending where to drill.",
    },
    {
      question: "How accurate is a hydrogeological survey?",
      answer:
        "A hydrogeological survey uses scientific methods to identify the most suitable drilling location based on the information available. While no survey can guarantee a successful borehole, it significantly reduces uncertainty before drilling begins.",
    },
    {
      question: "How long does a hydrogeological survey take?",
      answer:
        "The time required depends on the size of the site and the survey requirements. Once you contact us, we'll advise you on the expected timeline based on your project. However, in most cases it is done within a day.",
    },
    {
      question: "Do you carry out hydrogeological surveys across Kenya?",
      answer:
        "Yes. We provide hydrogeological survey services in different parts of Kenya. Contact us to discuss your project, and we'll confirm service availability for your location.",
    },
  ],

  finalCTA: {
    heading: "Planning a Borehole Project?",
    body: "Start with a hydrogeological survey to understand your site's groundwater potential before investing in drilling. Talk to one of our hydrogeologists about your site — we'll answer your questions, explain the next steps, and help you arrange your survey.",
    primaryCTA: {
      label: "Request a Hydrogeological Survey",
      href: "/contact?service=hydrogeological-survey",
    },
    reassurance:
      "Talk to us about your site before you invest in drilling. We'll answer your questions, explain the next steps, and help you decide whether a hydrogeological survey is the right place to begin.",
  },
};

export default surveyData;
