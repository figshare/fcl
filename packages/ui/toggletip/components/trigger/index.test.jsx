import React from "react";
import { mount } from "enzyme";

import { Trigger as PopupTrigger } from "../../../popup";
import { Button, GenericButton, IconButton } from "../../../button";
import Info from "../../../icons/info/medium";

import Trigger from "./index";


const baselineProps = {
  triggerId: "triggerId",
  contentId: "contentId",
};

const triggeredEvent = { isDefaultPrevented: () => false };
const disabledEvent = { isDefaultPrevented: () => true };

const mountComponent = (props) => mount(
  <Trigger {...baselineProps} {...props}>
    My trigger
  </Trigger>
);

describe("<Trigger />", () => {
  it("renders", () => {
    const testedComponent = mountComponent({ displayedAs: "genericButton" });
    expect(testedComponent.find(GenericButton)).toHaveLength(1);
    testedComponent.setProps({ displayedAs: "button" });
    expect(testedComponent.find(Button)).toHaveLength(1);
    testedComponent.setProps({ displayedAs: "iconButton", Icon: Info });
    expect(testedComponent.find(IconButton)).toHaveLength(1);
  });

  it("sets correct ariaDescribedby", () => {
    const testedComponent = mountComponent({ isVisible: false });
    expect(testedComponent.find(PopupTrigger).props()["aria-describedby"]).toEqual(undefined);
    testedComponent.setProps({ isVisible: true });
    expect(testedComponent.find(PopupTrigger).props()["aria-describedby"]).toEqual("contentId");
  });

  it("correctly trigger onClick", () => {
    const onClick = jest.fn();
    const onToggle = jest.fn();
    const testedComponent = mountComponent({ onClick, onToggle });

    testedComponent.instance().onClick(disabledEvent);
    expect(onClick).not.toHaveBeenCalled();
    expect(onToggle).not.toHaveBeenCalled();
    onClick.mockClear();
    onToggle.mockClear();

    testedComponent.instance().onClick(triggeredEvent);
    expect(onClick).toHaveBeenCalled();
    expect(onToggle).toHaveBeenCalled();
    onClick.mockClear();
    onToggle.mockClear();
  });

  it("correctly trigger onKeyDown", () => {
    const onKeyDown = jest.fn();
    const onToggle = jest.fn();
    const testedComponent = mountComponent({ isVisible: false, onKeyDown, onToggle });

    testedComponent.instance().onKeyDown({ preventDefault: () => undefined, key: "not escape" });
    expect(onToggle).not.toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalled();
    onToggle.mockClear();
    onKeyDown.mockClear();

    testedComponent.instance().onKeyDown({ preventDefault: () => undefined, key: "Escape" });
    expect(onToggle).not.toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalled();
    onToggle.mockClear();
    onKeyDown.mockClear();

    testedComponent.setProps({ isVisible: true });
    testedComponent.instance().onKeyDown({ preventDefault: () => undefined, key: "Escape" });
    expect(onToggle).toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalled();
    onToggle.mockClear();
    onKeyDown.mockClear();
  });
});
