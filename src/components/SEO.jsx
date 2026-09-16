import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "../config/seo";

export function SEO({ title, description, path, image, noindex = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonical = path
    ? `${SITE_URL}${path === "/" ? "/" : `${path}/`}`
    : null;
  const ogImage = image || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
