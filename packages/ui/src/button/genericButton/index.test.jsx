import React, { createRef } from "react";
import { shallow, mount } from "enzyme";

import BaseButton from "./base";
import GenericButton from "./index";


const spyBCR = (node, rect) => jest.spyOn(node, "getBoundingClientRect").mockImplementation(() => rect);


describe("<GenericButton />", () => {
  const classNameTooltip = "tooltipClass";
  let documentElement = null;
  let addEventListener = null;
  let removeEventListener = null;

  beforeEach(() => {
    documentElement = jest.spyOn(document, "documentElement", "get").mockImplementation(() => {
      return { clientWidth: 1024 };
    });

    addEventListener = jest.spyOn(document, "addEventListener");
    removeEventListener = jest.spyOn(document, "removeEventListener");
  });

  afterEach(() => {
    documentElement.mockRestore();
    addEventListener.mockRestore();
    removeEventListener.mockRestore();
  });

  it("renders <BaseButton />", () => {
    const genericButton = shallow(<GenericButton>Click me</GenericButton>);
    expect(genericButton.find(BaseButton)).toHaveLength(1);
  });

  it("renders visually hidden tooltip", () => {
    const tooltip = "Extra info";
    const genericButton = shallow(
      <GenericButton classNameTooltip={classNameTooltip} tooltip={tooltip}>
        Click me
      </GenericButton>
    );

    expect(genericButton.find(`.${classNameTooltip}`).text()).toMatch(tooltip);
    expect(genericButton.find(`.${classNameTooltip}`).prop("aria-hidden")).toEqual(false);
    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-visible")).toEqual(false);
  });

  it("renders tooltip on mouse over and hides on mouse out", () => {
    const genericButton = mount(
      <GenericButton classNameTooltip={classNameTooltip} tooltip="Extra info" >
        Click me
      </GenericButton>
    );

    const { buttonNode, tooltipNode } = genericButton.instance();
    const buttonBCR = spyBCR(buttonNode, { x: 0, y: 0, width: 100, height: 10 });
    const tooltipBCR = spyBCR(tooltipNode, { width: 100, height: 100 });

    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-visible")).toEqual(false);

    genericButton.simulate("mouseOver");

    expect(addEventListener).toHaveBeenCalledWith("resize", expect.any(Function));
    expect(addEventListener).toHaveBeenCalledWith("scroll", expect.any(Function), true);
    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-visible")).toEqual(true);

    genericButton.simulate("mouseOut");

    expect(removeEventListener).toHaveBeenCalledWith("resize", expect.any(Function));
    expect(removeEventListener).toHaveBeenCalledWith("scroll", expect.any(Function), true);
    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-visible")).toEqual(false);

    buttonBCR.mockRestore();
    tooltipBCR.mockRestore();
  });

  it("renders tooltip on focus and hides on blur", () => {
    const genericButton = mount(
      <GenericButton classNameTooltip={classNameTooltip} tooltip="Extra info" >
        Click me
      </GenericButton>
    );

    const { buttonNode, tooltipNode } = genericButton.instance();
    const buttonBCR = spyBCR(buttonNode, { x: 0, y: 0, width: 100, height: 10 });
    const tooltipBCR = spyBCR(tooltipNode, { width: 100, height: 100 });

    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-visible")).toEqual(false);

    genericButton.simulate("focus");

    expect(addEventListener).toHaveBeenCalledWith("resize", expect.any(Function));
    expect(addEventListener).toHaveBeenCalledWith("scroll", expect.any(Function), true);
    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-visible")).toEqual(true);

    genericButton.simulate("blur");

    expect(removeEventListener).toHaveBeenCalledWith("resize", expect.any(Function));
    expect(removeEventListener).toHaveBeenCalledWith("scroll", expect.any(Function), true);
    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-visible")).toEqual(false);

    buttonBCR.mockRestore();
    tooltipBCR.mockRestore();
  });

  it("hides tooltip on click", () => {
    const genericButton = mount(
      <GenericButton classNameTooltip={classNameTooltip} tooltip="Extra info" >
        Click me
      </GenericButton>
    );

    const { buttonNode, tooltipNode } = genericButton.instance();
    const buttonBCR = spyBCR(buttonNode, { x: 0, y: 0, width: 100, height: 10 });
    const tooltipBCR = spyBCR(tooltipNode, { width: 100, height: 100 });

    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-visible")).toEqual(false);
    genericButton.simulate("focus");
    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-visible")).toEqual(true);

    genericButton.simulate("click");

    expect(removeEventListener).toHaveBeenCalledWith("resize", expect.any(Function));
    expect(removeEventListener).toHaveBeenCalledWith("scroll", expect.any(Function), true);
    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-visible")).toEqual(false);

    buttonBCR.mockRestore();
    tooltipBCR.mockRestore();
  });

  it("renders tooltip above when tooltip height fits in the upper part of the button", () => {
    const genericButton = mount(
      <GenericButton classNameTooltip={classNameTooltip} tooltip="Extra info" >
        Click me
      </GenericButton>
    );

    const { buttonNode, tooltipNode } = genericButton.instance();
    const buttonBCR = spyBCR(buttonNode, { x: 0, y: 100, width: 100, height: 10 });
    const tooltipBCR = spyBCR(tooltipNode, { width: 100, height: 100 });

    genericButton.simulate("focus");
    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-visible")).toEqual(true);
    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-below")).toEqual(false);

    buttonBCR.mockRestore();
    tooltipBCR.mockRestore();
  });

  it("renders tooltip below when tooltip height doesn't fit in the upper part of the button", () => {
    const genericButton = mount(
      <GenericButton classNameTooltip={classNameTooltip} tooltip="Extra info" >
        Click me
      </GenericButton>
    );

    const { buttonNode, tooltipNode } = genericButton.instance();
    const buttonBCR = spyBCR(buttonNode, { x: 0, y: 0, width: 100, height: 10 });
    const tooltipBCR = spyBCR(tooltipNode, { width: 100, height: 100 });

    genericButton.simulate("focus");
    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-visible")).toEqual(true);
    expect(genericButton.find(`.${classNameTooltip}`).prop("data-tooltip-below")).toEqual(true);

    buttonBCR.mockRestore();
    tooltipBCR.mockRestore();
  });

  it("sets button node when innerRef is using React.createRef", () => {
    const buttonRef = createRef();
    const genericButton = mount(<GenericButton innerRef={buttonRef}>Click me</GenericButton>);

    expect(buttonRef.current).toEqual(genericButton.instance().buttonNode);
  });

  it("sets button node when innerRef is function", () => {
    const buttonRef = jest.fn();
    const genericButton = mount(<GenericButton innerRef={buttonRef}>Click me</GenericButton>);

    expect(buttonRef).toHaveBeenCalledWith(genericButton.instance().buttonNode);
  });

  it("focuses button on long press", () => {
    jest.useFakeTimers("modern");

    const buttonRef = createRef();
    const genericButton = mount(
      <GenericButton innerRef={buttonRef}>
        Click me
      </GenericButton>,
      { attachTo: document.rootContainer }
    );

    genericButton.find(BaseButton).simulate("touchStart");
    jest.runOnlyPendingTimers();
    expect(document.activeElement).toEqual(buttonRef.current);

    jest.useRealTimers();
  });

  it("calls prop handlers", () => {
    const event = {};
    const onBlur = jest.fn();
    const onClick = jest.fn();
    const onContextMenu = jest.fn();
    const onFocus = jest.fn();
    const onLongPress = jest.fn();
    const onMouseOut = jest.fn();
    const onMouseOver = jest.fn();

    const genericButton = shallow(
      <GenericButton
        onBlur={onBlur}
        onClick={onClick}
        onContextMenu={onContextMenu}
        onFocus={onFocus}
        onLongPress={onLongPress}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
      >
        Click me
      </GenericButton>
    );

    genericButton.simulate("blur", event);
    expect(onBlur).toHaveBeenCalledWith(event);

    genericButton.simulate("click", event);
    expect(onClick).toHaveBeenCalledWith(event);

    genericButton.simulate("contextMenu", event);
    expect(onContextMenu).toHaveBeenCalledWith(event);

    genericButton.simulate("focus", event);
    expect(onFocus).toHaveBeenCalledWith(event);

    genericButton.simulate("longPress");
    expect(onLongPress).toHaveBeenCalled();

    genericButton.simulate("mouseOut", event);
    expect(onMouseOut).toHaveBeenCalledWith(event);

    genericButton.simulate("mouseOver", event);
    expect(onMouseOver).toHaveBeenCalledWith(event);
  });

  it("doesn't prevent default context menu on desktop when button is an anchor with tooltip", () => {
    const createEvent = jest.spyOn(document, "createEvent").mockImplementation(() => {
      throw Error("Desktop");
    });
    const event = { preventDefault: jest.fn() };
    const onContextMenu = jest.fn();

    const genericButton = shallow(
      <GenericButton href="#" tooltip="Extra info" onContextMenu={onContextMenu} >
        Click me
      </GenericButton>
    );

    genericButton.simulate("contextMenu", event);
    expect(onContextMenu).toHaveBeenCalledWith(event);
    expect(event.preventDefault).not.toHaveBeenCalled();

    createEvent.mockRestore();
  });

  it("prevents default context menu on mobile when button is an anchor with tooltip", () => {
    const createEvent = jest.spyOn(document, "createEvent").mockImplementation(() => undefined);
    const event = { preventDefault: jest.fn() };
    const onContextMenu = jest.fn();

    const genericButton = shallow(
      <GenericButton href="#" tooltip="Extra info" onContextMenu={onContextMenu} >
        Click me
      </GenericButton>
    );

    genericButton.simulate("contextMenu", event);
    expect(onContextMenu).toHaveBeenCalledWith(event);
    expect(event.preventDefault).toHaveBeenCalled();

    createEvent.mockRestore();
  });

  it("removes global listeners on unmount", () => {
    const genericButton = shallow(<GenericButton tooltip="Extra info">Click me</GenericButton>);

    expect(removeEventListener).not.toHaveBeenCalled();

    genericButton.unmount();
    expect(removeEventListener).toHaveBeenCalledWith("resize", expect.any(Function));
    expect(removeEventListener).toHaveBeenCalledWith("scroll", expect.any(Function), true);
  });

  it("does url normalization", () => {
    const href = "http://abcüö.com/üö";
    const normalizedHref = "http://xn--abc-una3a.com/%C3%BC%C3%B6";

    const normalLink = mount(<GenericButton href={href}>x</GenericButton>);
    expect(normalLink.find("a").first().props().href).toEqual(href);

    const normalizedLink = mount(<GenericButton href={href} normalizeHref={true}>x</GenericButton>);
    expect(normalizedLink.find("a").first().props().href).toEqual(normalizedHref);
  });
});
