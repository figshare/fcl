import React from "react";
import { mount } from "enzyme";
import { EditorState } from "draft-js";

import { onConvertHTMLtoDraft, controlButtons } from "../../utils";

import Toolbar from "./index.jsx";


const contentState = onConvertHTMLtoDraft("<p>test component</p>");
const props = {
  editorState: EditorState.createWithContent(contentState),
  onToggle: jest.fn(),
};

describe("<Toolbar />", () => {
  it("renders toolbar default buttons correctly", () => {
    const toolbarComponent = mount(<Toolbar {...props} />);
    const buttonsLength = controlButtons.length;

    expect(toolbarComponent.find("button")).toHaveLength(buttonsLength);
  });

  it("renders toolbar configured buttons correctly", () => {
    const toolbarComponent = mount(<Toolbar {...props} />);
    const toolbarConfig = ["p", "h2"];
    toolbarComponent.setProps({ toolbarConfig });

    expect(toolbarComponent.find("button")).toHaveLength(2);
  });
});
