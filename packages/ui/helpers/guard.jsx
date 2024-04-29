export function guard(fn) {
  try {
    if (typeof fn === "function") {
      return fn();
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
}
