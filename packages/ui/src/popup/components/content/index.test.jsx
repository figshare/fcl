import React from "react";
import { mount } from "enzyme";
import { Popper } from "react-popper";

import Content from "./index";
import PortalPopper from "./portalPopper";


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
  it("render within/outside of portal", () => {
    const testedComponent = mountComponent({ renderInPortal: false });
    expect(testedComponent.find(PortalPopper)).toHaveLength(0);
    testedComponent.setProps({ renderInPortal: true });
    expect(testedComponent.find(PortalPopper)).toHaveLength(1);
  });

  it("adds popper modifiers", () => {
    const props = {
      popperModifiers: undefined,
      offset: 12,
    };

    const baselineOffset = {
      offset: {
        enabled: true,
        offset: "0, 12",
      },
    };

    const testedComponent = mountComponent(props);
    expect(testedComponent.find(Popper).props().modifiers).toEqual(baselineOffset);

    const updatedProps = {
      popperModifiers: { test: true },
      offset: 12,
    };

    const updatedModifiers = {
      ...baselineOffset,
      test: true,
    };
    testedComponent.setProps(updatedProps);
    expect(testedComponent.find(Popper).props().modifiers).toEqual(updatedModifiers);
  });
});
