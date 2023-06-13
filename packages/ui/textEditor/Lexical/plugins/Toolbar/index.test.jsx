import React from "react";
import { mount } from "enzyme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { act } from "react-dom/test-utils";

import { DefaultToolbarConfig } from "../../constants";
import DefaultTheme from "../../themes/DefaultTheme";

import ToolbarPlugin from "./";


const defaultConfig = {
  // The editor theme
  theme: DefaultTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },

};


describe("Toolbar Plugin", () => {
  const defaultProps = { config: DefaultToolbarConfig };
  const mountComponent = (props = defaultProps) => mount(
    <LexicalComposer initialConfig={defaultConfig}>
      <ToolbarPlugin {...props} />
    </LexicalComposer>
  );

  it("renders the toolbar", () => {
    const component = mountComponent();

    expect(component.find(".toolbar")).toHaveLength(1);
    component.unmount();
  });

  it("onBlockClick enables the correct block", () => {
    const component = mountComponent();

    const toolbarButtonGroup = component.find({ "data-control-group": "editor-toolbar-button" });
    const orderedListButton = toolbarButtonGroup.find({ "aria-label": "H2" });

    act(() => {
      orderedListButton.prop("onClick")("h2");
    });


    component.update();
    const updatedToolbarButton = component.find({ "aria-label": "H2" });
    expect(updatedToolbarButton.find(".active")).toHaveLength(1);
    component.unmount();
  });

  it("onListClick enables the correct", () => {
    const component = mountComponent();

    const toolbarButtonGroup = component.find({ "data-control-group": "editor-toolbar-button" });
    const orderedListButton = toolbarButtonGroup.find({ "aria-label": "H2" });

    act(() => {
      orderedListButton.prop("onClick")("h2");
    });


    component.update();
    const updatedToolbarButton = component.find({ "aria-label": "H2" });
    expect(updatedToolbarButton.find(".active")).toHaveLength(1);
    component.unmount();
  });

});
