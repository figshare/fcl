import React, { Component } from "react";

import isFunction from "./isFunction";


class Test extends Component {
  render() {
    return null;
  }
}


describe("isFunction", () => {
  it("should return true if is a function", () => {
    function a() {
      return undefined;
    }

    expect(isFunction(a)).toBe(true);

    const b = () => undefined;

    expect(isFunction(b)).toBe(true);
  });

  it("should return false if the parameter is not a function", () => {
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction("test")).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(<Test />)).toBe(false);
  });
});
