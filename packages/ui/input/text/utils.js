/* eslint-disable no-inline-comments */
/**
 * Decide direction by whichever script (Arabic vs Latin) appears first in the string.
 * Falls back to null if neither is present.
 */
export function getTextDirection(text) {
  // ES2018+ Unicode property escapes
  const rtlRe = /\p{Script=Arabic}/u;
  const ltrRe = /[A-Za-z]/;

  // find the index of the first match for each
  const firstRTL = text.search(rtlRe);
  const firstLTR = text.search(ltrRe);

  if (firstRTL === -1 && firstLTR === -1) {
    return null; // no strong chars at all
  }
  if (firstRTL === -1) {
    return "ltr";// only Latin found
  }
  if (firstLTR === -1) {
    return "rtl";// only Arabic found
  }

  // whichever comes earlier in the string wins
  return firstRTL < firstLTR ? "rtl" : "ltr";
}
