// Functions to normalize URLs
const asciiRegEx = /^[\x00-\x7F]*$/; // eslint-disable-line no-control-regex

export function normalizeUrl(urlString) {
  if (asciiRegEx.test(urlString)) {
    // fast test, avoid memory allocations
    return urlString;
  }

  try {
    // if the url is not ascii, return the encoded representation
    // this converts unicode domain to punycode (com -> xn--cm-fka)
    // and the rest of the url to percent-encoded (ü -> %C3%BC)
    // see https://url.spec.whatwg.org/
    const url = new URL(urlString).href;
    const trimLastSlash = url.endsWith("/") && !urlString.endsWith("/");

    return trimLastSlash ? url.slice(0, -1) : url;
  } catch (e) {
    // the url is not valid
    return urlString;
  }
}
