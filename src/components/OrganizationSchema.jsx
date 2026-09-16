import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL } from "../config/seo";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/og/default-og.jpg`,
    telephone: "+254721577588",
    email: "info@masterpiecehydrosolutions.co.ke",
    address: {
      "@type": "PostalAddress",
      addressCountry: "KE",
    },
    areaServed: [
      "Nairobi",
      "Kiambu",
      "Machakos",
      "Kajiado",
      "Makueni",
      "Nakuru",
      "Narok",
      "Kisumu",
      "Bomet",
    ],
    priceRange: "$$",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+254721577588",
        contactType: "sales",
        email: "sales@masterpiecehydrosolutions.co.ke",
        areaServed: "KE",
      },
      {
        "@type": "ContactPoint",
        telephone: "+254721577588",
        contactType: "customer service",
        email: "info@masterpiecehydrosolutions.co.ke",
        areaServed: "KE",
      },
    ],
    sameAs: [
      "https://www.facebook.com/masterpiecedrill",
      "https://www.tiktok.com/@masterpiece_solutions",
      "https://youtube.com/@geol.okelo1",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
