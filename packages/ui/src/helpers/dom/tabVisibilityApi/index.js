export default function() {
  const keys = {
    hidden: "visibilitychange",
    webkitHidden: "webkitvisibilitychange",
    mozHidden: "mozvisibilitychange",
    msHidden: "msvisibilitychange",
  };

  const stateKey = Object.keys(keys).find((key) => key in window.document);

  if (!stateKey) {
    return undefined;
  }

  return { stateKey, eventKey: keys[stateKey] };
}
