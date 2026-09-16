
import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL } from "../config/seo";

export function ServiceSchema({ name, description, path }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
    },
    areaServed: "Kenya",
    url: `${SITE_URL}${path}/`,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}