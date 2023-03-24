import React from "react";
import { shallow, mount } from "enzyme";

import Toggletip, { Content, Trigger } from "./index";


const onToggle = jest.fn();

const baselineProps = {
  isVisible: false,
  onToggle,
};

const mountComponent = (props) => shallow(
  <Toggletip {...baselineProps} {...props}>
    {() => <span>Irelevant for now</span>}
  </Toggletip>
);

describe("<Popup />", () => {
  it("sets correct contentId and triggerId", () => {
    let testedComponent = mountComponent();
    let instance = testedComponent.instance();

    expect(instance.contentId).toEqual("toggletip-content-a11y-1");
    expect(instance.triggerId).toEqual("toggletip-trigger-a11y-1");

    testedComponent = mountComponent({ triggerId: "testTriggerId", contentId: "testContentId" });
    instance = testedComponent.instance();
    expect(instance.contentId).toEqual("testContentId");
    expect(instance.triggerId).toEqual("testTriggerId");
  });

  it("sets correct children", () => {
    const children = jest.fn(() => <span>Irelevant for now</span>);
    const contentId = "testContentId";
    const triggerId = "testTriggerId";
    shallow(
      <Toggletip
        {...baselineProps}
        contentId={contentId}
        isVisible={false}
        triggerId={triggerId}
        onToggle={onToggle}
      >
        {children}
      </Toggletip>
    );
    expect(children).toHaveBeenCalledWith({
      isVisible: false,
      triggerId,
      contentId,
      onToggle,
    });

    const mountedComponent = mount(
      <Toggletip
        {...baselineProps}
        contentId={contentId}
        isVisible={false}
        triggerId={triggerId}
        onToggle={onToggle}
      >
        <Trigger>trigger</Trigger>
        <Content>content</Content>
      </Toggletip>
    );
    mountedComponent.update();

    const triggerProps = mountedComponent.find(Trigger).props();
    expect(triggerProps.triggerId).toEqual(triggerId);
    expect(triggerProps.contentId).toEqual(contentId);
    expect(triggerProps.isVisible).toEqual(false);
    expect(triggerProps.onToggle).toEqual(onToggle);

    const contentProps = mountedComponent.find(Content).props();
    expect(contentProps.triggerId).toEqual(triggerId);
    expect(contentProps.contentId).toEqual(contentId);
    expect(contentProps.isVisible).toEqual(false);
    expect(contentProps.onToggle).toEqual(onToggle);
  });

  it("triggers onAfterOpen and onAfterClose", () => {
    const onAfterOpen = jest.fn();
    const onAfterClose = jest.fn();
    const testedComponent = mount(
      <Toggletip
        {...baselineProps}
        onAfterClose={onAfterClose}
        onAfterOpen={onAfterOpen}
      >
        {() => <span>Irelevant for now</span>}
      </Toggletip>
    );

    testedComponent.setProps({ isVisible: false });
    expect(onAfterOpen).not.toHaveBeenCalled();
    expect(onAfterClose).not.toHaveBeenCalled();

    testedComponent.setProps({ isVisible: true });
    expect(onAfterOpen).toHaveBeenCalled();
    onAfterOpen.mockClear();

    testedComponent.setProps({ isVisible: false });
    expect(onAfterClose).toHaveBeenCalled();
    onAfterClose.mockClear();
  });
});
