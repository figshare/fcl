import React from "react";
import { mount } from "enzyme";

import Toggletip, { UncontrolledToggletip } from "./index";


const baselineProps = {
  isVisible: false,
  onToggle: jest.fn(),
};

const mountComponent = (props) => mount(
  <UncontrolledToggletip {...baselineProps} {...props}>
    {() => <span>Irelevant for now</span>}
  </UncontrolledToggletip>
);

describe("<UncontrolledToggletip />", () => {
  it("applies correct props", () => {
    const testedComponent = mountComponent();
    const dropdown = testedComponent.find(Toggletip);
    const { isVisible, onToggle } = dropdown.props();

    expect(isVisible).toEqual(testedComponent.state().isVisible);
    expect(onToggle).toEqual(testedComponent.instance().onToggle);
  });

  it("correctly calls onToggle", () => {
    const onToggle = jest.fn();
    const testedComponent = mountComponent({ onToggle, isVisible: false });

    expect(testedComponent.state().isVisible).toEqual(false);
    const event = { target: true };
    testedComponent.instance().onToggle(event);
    expect(testedComponent.state().isVisible).toEqual(true);
    expect(onToggle).toHaveBeenCalledWith(event, testedComponent.state().isVisible);
    testedComponent.instance().onToggle(event);
    expect(testedComponent.state().isVisible).toEqual(false);
  });
});
