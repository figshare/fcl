import React from "react";
import { shallow } from "enzyme";

import OverlayFooter from "./overlayFooter";


describe("<OverlayFooter />", () => {
  it("renders component", () => {
    const component = shallow(
      <OverlayFooter>
        <button>Close</button>
        <button>Confirm</button>
      </OverlayFooter>);

    expect(component.isEmptyRender()).toEqual(false);
    expect(component.find("button")).toHaveLength(2);
  });

  it("handles single button styling", () => {
    const component = shallow(
      <OverlayFooter>
        <button>Close</button>
      </OverlayFooter>);

    expect(component.isEmptyRender()).toEqual(false);
    expect(component.find(".singleControl")).toHaveLength(1);
  });

  it("accepts custom className", () => {
    const component = shallow(
      <OverlayFooter className="test">
        <button>Close</button>
      </OverlayFooter>);

    expect(component.isEmptyRender()).toEqual(false);
    expect(component.find(".test")).toHaveLength(1);
  });
});
