import React from "react";
import { mount } from "enzyme";

import Radio from "./index";


describe("<Radio />", () => {
  it("renders", () => {
    const radio = mount(<Radio />);

    expect(radio.isEmptyRender()).toEqual(false);
  });
});
