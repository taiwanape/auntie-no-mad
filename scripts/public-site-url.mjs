const defaultPublicSiteUrl = "http://auntienomad.com/";
const defaultPublicImageBaseUrl = "https://raw.githubusercontent.com/taiwanape/auntie-no-mad/main/";

export function ensureTrailingSlash(value = "") {
  return value.endsWith("/") ? value : `${value}/`;
}

export function normalizePath(value = "") {
  return String(value).replaceAll("\\", "/");
}

export function getPublicSiteUrl() {
  const configured =
    process.env.PUBLIC_SITE_URL ||
    process.env.AUNTIE_SITE_URL ||
    process.env.SITE_URL ||
    defaultPublicSiteUrl;
  return ensureTrailingSlash(configured);
}

export const publicSiteUrl = getPublicSiteUrl();
export const publicImageBaseUrl = ensureTrailingSlash(
  process.env.PUBLIC_IMAGE_BASE_URL || defaultPublicImageBaseUrl
);

export function publicUrl(href = "") {
  if (!href || href === "#") return publicSiteUrl;
  if (/^https?:\/\//.test(href)) return href;
  return new URL(normalizePath(href).replace(/^\//, ""), publicSiteUrl).href;
}

export function publicImageUrl(href = "") {
  if (!href) return publicUrl("assets/auntie-hero.jpg");
  if (/^https:\/\//.test(href)) return href;
  if (/^http:\/\//.test(href)) {
    const url = new URL(href);
    return new URL(normalizePath(url.pathname).replace(/^\//, ""), publicImageBaseUrl).href;
  }
  return new URL(normalizePath(href).replace(/^\//, ""), publicImageBaseUrl).href;
}
