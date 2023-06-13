import React from "react";
import { mount } from "enzyme";

import { WarningPlugin } from "./";


describe("Warning component", () => {
  const props = { contentLength: 5230 };
  it("renders to correct text", () => {
    const component = mount(<WarningPlugin {...props} />);

    expect(component.find(".editorTextLength")).toHaveLength(1);
  });
});
