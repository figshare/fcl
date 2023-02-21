import React from "react";
import { shallow } from "enzyme";

import WindowInjection from "./windowInjection";


describe("`<WindowInjection />`", () => {
  const data = { foo: 1, bar: "foobar" };
  const globalName = "__test__";

  it("renders null when required props are falsy", () => {
    const consoleSpy = jest.spyOn(console, "error");
    consoleSpy.mockImplementation(() => undefined);

    let wrapper = shallow(<WindowInjection />);
    expect(wrapper.isEmptyRender()).toEqual(true);

    wrapper = shallow(<WindowInjection data={null} />);
    expect(wrapper.isEmptyRender()).toEqual(true);

    wrapper = shallow(<WindowInjection data={data} />);
    expect(wrapper.isEmptyRender()).toEqual(true);

    wrapper = shallow(<WindowInjection globalName="" />);
    expect(wrapper.isEmptyRender()).toEqual(true);

    wrapper = shallow(<WindowInjection globalName={globalName} />);
    expect(wrapper.isEmptyRender()).toEqual(true);

    wrapper = shallow(<WindowInjection data={data} globalName="" />);
    expect(wrapper.isEmptyRender()).toEqual(true);

    wrapper = shallow(<WindowInjection data={null} globalName={globalName} />);
    expect(wrapper.isEmptyRender()).toEqual(true);

    consoleSpy.mockRestore();
  });

  it("renders a script tag", () => {
    const wrapper = shallow(<WindowInjection data={data} globalName={globalName} />);

    expect(wrapper.type()).toEqual("script");
  });

  it("injects data in window", () => {
    const wrapper = shallow(<WindowInjection data={data} globalName={globalName} />);

    /* eslint-disable-next-line no-eval */
    const dataInjection = eval(wrapper.find("script").render().html());

    expect(dataInjection).toBeUndefined();
    expect(window).toHaveProperty(globalName, data);
  });
});
