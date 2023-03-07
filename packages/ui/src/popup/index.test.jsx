import React from "react";
import { shallow } from "enzyme";

import Popup from "./index";


const onAfterOpen = jest.fn();
const onAfterClose = jest.fn();

const baselineProps = {
  contentId: "contentId",
  triggerId: "triggerId",
  isVisible: false,
  onAfterOpen,
  onAfterClose,
};

const mountComponent = (props) => shallow(
  <Popup {...baselineProps} {...props}>
    {() => <span>Irelevant for now</span>}
  </Popup>
);

describe("<Popup />", () => {
  it("triggers onAfterOpen and onAfterClose", () => {
    const testedComponent = mountComponent({ isVisible: false });

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
