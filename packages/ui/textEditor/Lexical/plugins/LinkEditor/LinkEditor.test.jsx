import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";

import OpenLinkIcon from "./components/OpenLinkIcon";
import UnlinkIcon from "./components/UnlinkIcon";
import { LinkEditor } from "./LinkEditor";


Enzyme.configure({ adapter: new Adapter() });

describe("<LinkEditor />", () => {
  const defaultProps = {
    activeEditor: null,
    onClose: jest.fn(),
  };

  it("renders the component", () => {
    const tested = mount(<LinkEditor {...defaultProps} />);

    expect(tested.find(".modalShadow")).toHaveLength(1);
  });

  it("renders edit mode buttons when there is a set linkUrl", () => {
    const tested = mount(<LinkEditor {...defaultProps} />);

    tested.find(".input").simulate("change", { target: { value: "1234" } });
    tested.find(".buttonSave").at(0).simulate("click");

    expect(tested.find(UnlinkIcon)).toHaveLength(1);
    expect(tested.find(OpenLinkIcon)).toHaveLength(1);
  });

  it("renders no edit mode buttons when there is no set linkUrl", () => {
    const tested = mount(<LinkEditor {...defaultProps} />);

    tested.find(".input").simulate("change", { target: { value: null } });
    tested.find(".buttonSave").at(0).simulate("click");

    expect(tested.find(UnlinkIcon)).toHaveLength(0);
    expect(tested.find(OpenLinkIcon)).toHaveLength(0);
  });

  it("renders save button as disabled", () => {
    const tested = mount(<LinkEditor {...defaultProps} />);

    tested.find(".input").simulate("change", { target: { value: "12" } });

    expect(tested.find(".buttonSave").at(0).props().disabled).toBe(true);
  });

  it("renders save button as enabled", () => {
    const tested = mount(<LinkEditor {...defaultProps} />);

    tested.find(".input").simulate("change", { target: { value: "123" } });

    expect(tested.find(".buttonSave").at(0).props().disabled).toBe(false);
  });

  it("displays edited link value in input instead of link value", () => {
    const tested = mount(<LinkEditor {...defaultProps} />);

    tested.find(".input").simulate("change", { target: { value: "123" } });
    tested.find(".buttonSave").at(0).simulate("click");

    tested.find(".input").simulate("change", { target: { value: "1234" } });

    expect(tested.find(".input").props().value).toBe("1234");
  });

  it("keeps the previous value of the input to onClose", () => {
    const tested = mount(<LinkEditor {...defaultProps} />);

    tested.find(".input").simulate("change", { target: { value: "123" } });
    tested.find(".buttonSave").at(0).simulate("click");

    tested.find(".input").simulate("change", { target: { value: "1234" } });
    tested.find(".buttonCancel").at(0).simulate("click");

    expect(tested.find(".input").props().value).toBe("123");
  });

  it("calls onClose on unlink", () => {
    const tested = mount(<LinkEditor {...defaultProps} />);

    tested.find(".input").simulate("change", { target: { value: "123" } });
    tested.find(".buttonSave").at(0).simulate("click");

    tested.find(".buttonUnlink").at(0).simulate("click");

    expect(tested.props().onClose).toHaveBeenCalled();
  });

  it("monitors input interaction to onKeyDown", () => {
    const tested = mount(<LinkEditor {...defaultProps} />);

    tested.find(".input").simulate("change", { target: { value: "123" } });
    tested.find(".input").simulate("keyDown", { key: "Enter" });

    expect(tested.props().onClose).toHaveBeenCalled();
    expect(tested.find(".input").props().value).toBe("123");

    tested.find(".input").simulate("change", { target: { value: "1234" } });
    tested.find(".input").simulate("keyDown", { key: "Escape" });

    expect(tested.props().onClose).toHaveBeenCalled();
    expect(tested.find(".input").props().value).toBe("123");
  });
});
