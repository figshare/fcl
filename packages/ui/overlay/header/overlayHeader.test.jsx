import React from "react";
import { shallow, mount } from "enzyme";

import { IconButton } from "../../button";
import { OverlayContext } from "../overlay";

import OverlayHeader from "./overlayHeader";


describe("<OverlayHeader />", () => {
  it("renders component", () => {
    const overlayHeader = shallow(
      <OverlayHeader
        description="Description"
        title="Title"
      >
        Test
      </OverlayHeader>);

    expect(overlayHeader.isEmptyRender()).toEqual(false);
    expect(overlayHeader.find("div h1")).toHaveLength(1);
    expect(overlayHeader.find("div p")).toHaveLength(1);
  });

  it("sets correct aria ids for title and description based on context", () => {
    const overlayHeader = mount(
      <OverlayContext.Provider value={ { id: "test" } }>
        <OverlayHeader
          description="Description"
          title="Title"
        />)
      </OverlayContext.Provider>);

    expect(overlayHeader.find("#dialog-test-title")).toHaveLength(1);
    expect(overlayHeader.find("#dialog-test-description")).toHaveLength(1);
  });

  it("sets correct classname for header based on context", () => {
    const overlayHeader = mount(
      <OverlayContext.Provider value={ { id: "test", background: "warning" } }>
        <OverlayHeader
          description="Description"
          title="Title"
        />)
      </OverlayContext.Provider>);

    expect(overlayHeader.find(".confirmation")).toHaveLength(1);
  });

  it("accepts custom className", () => {
    const component = shallow(
      <OverlayHeader className="test">
        <button>Close</button>
      </OverlayHeader>);

    expect(component.isEmptyRender()).toEqual(false);
    expect(component.find(".test")).toHaveLength(1);
  });

  it("accepts a prop to style it as part of OverlayContent", () => {
    const component = shallow(
      <OverlayHeader isPartOfContent={true}>
        <button>Close</button>
      </OverlayHeader>);

    expect(component.isEmptyRender()).toEqual(false);
    expect(component.find(".partOfContent")).toHaveLength(1);
  });

  it("should render the icon button", () => {
    const component = shallow(
      <OverlayHeader
        description="Description"
        title="Title"
      />);

    expect(component.find(IconButton)).toHaveLength(1);
    component.unmount();
  });

  it("should call the onClose function", () => {
    const onClose = jest.fn();
    const component = shallow(
      <OverlayHeader
        description="Description"
        title="Title"
        onClose={onClose}
      />);

    expect(component.find(IconButton)).toHaveLength(1);
    component.find(IconButton).simulate("click");
    expect(onClose).toHaveBeenCalled();
    component.unmount();
  });
});
