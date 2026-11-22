import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DOMAIN = "https://protonpowerinfra.com";

/**
 * SEO Component
 * Updates document title, meta tags, OpenGraph, Twitter cards, canonical link,
 * and JSON-LD structured data on route changes.
 * Compatible with React 19 (uses both native tag hoisting and direct DOM synchronization).
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage = `${DOMAIN}/logo.webp`,
  ogType = "website",
  schema,
  noindex = false,
}) {
  const location = useLocation();
  const canonicalUrl = canonical || `${DOMAIN}${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper to get or create a meta tag
    const setMetaTag = (attribute, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attribute, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 2. Standard Meta Tags
    if (description) {
      setMetaTag("name", "description", description);
    }
    setMetaTag("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");

    // 3. Open Graph Tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:site_name", "Proton Power Infra");

    // 4. Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalUrl);

    // 6. JSON-LD Structured Data
    const scriptId = "json-ld-schema";
    let scriptEl = document.getElementById(scriptId);
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = scriptId;
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [title, description, canonicalUrl, ogImage, ogType, schema, noindex]);

  return (
    <>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}
