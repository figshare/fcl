import React from "react";
import { shallow } from "enzyme";
import { Button } from "@figshare/ui/button";

import Trigger from "./index";


const baselineProps = { triggerId: "triggerId" };

const mountComponent = (props) => shallow(
  <Trigger {...baselineProps} {...props}>
    My trigger
  </Trigger>
);

describe("<Trigger />", () => {
  it("renders", () => {
    const testedComponent = mountComponent();
    expect(testedComponent.find("button")).toHaveLength(1);
    testedComponent.setProps({ displayedAs: Button });
    expect(testedComponent.find(Button)).toHaveLength(1);
  });
});
