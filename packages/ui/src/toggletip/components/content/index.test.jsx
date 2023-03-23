import React from "react";
import { mount } from "enzyme";
import FocusTrap from "@figshare/fcl/helpers/focusTrap";
import { Content as PopupContent } from "@figshare/fcl/popup";
import Cancel from "@figshare/fcl/icons/cancel/small";

import Content from "./index";


const baselineProps = {
  contentId: "contentId",
  triggerId: "triggerId",
};

const mountComponent = (props) => mount(
  <Content {...baselineProps} {...props}>
    <span>My content</span>
  </Content>
);

describe("<Content />", () => {
  it("render", () => {
    const testedComponent = mountComponent({ isVisible: false });
    expect(testedComponent.isEmptyRender()).toEqual(true);

    testedComponent.setProps({ isVisible: true });
    expect(testedComponent.find(FocusTrap)).toHaveLength(1);
    expect(testedComponent.find(PopupContent)).toHaveLength(1);
  });

  it("renders close button", () => {
    const testedComponent = mountComponent({ isVisible: true });
    expect(testedComponent.find(Cancel)).toHaveLength(1);

    testedComponent.setProps({ renderCloseButton: () => <span className="test" /> });
    expect(testedComponent.find("span.test")).toHaveLength(1);
  });

  it("triggers onKeyDown", () => {
    const onKeyDown = jest.fn();
    const onToggle = jest.fn();
    const testedComponent = mountComponent({ onKeyDown, onToggle });

    testedComponent.instance().onKeyDown({ key: "not escape" });
    expect(onToggle).not.toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalled();
    onToggle.mockClear();
    onKeyDown.mockClear();

    testedComponent.setProps({ isVisible: true });
    testedComponent.instance().onKeyDown({ key: "Escape" });
    expect(onToggle).toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalled();
    onToggle.mockClear();
    onKeyDown.mockClear();
  });
});
