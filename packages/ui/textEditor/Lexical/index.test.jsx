import React from "react";
import { mount } from "enzyme";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { act } from "react-dom/test-utils";

import Editor from "./";


jest.mock("@lexical/html", () => {
  const actualHtmlModule = jest.requireActual("@lexical/html");

  return { ...actualHtmlModule, $generateHtmlFromNodes: () => "<div>testerino</div>" };
});

describe("Lexical Text Editor", () => {
  const props = { value: "<div><sub>testerino</sub></div>", onChange: jest.fn() };

  it("renders the text editor", () => {
    const component = mount(<Editor {...props} />);

    expect(component.find({ "data-id": "editor-content-editable" })).toHaveLength(1);
  });

  it("calls onChange correctly", () => {
    const component = mount(<Editor {...props} />);
    const changePlugin = component.find(OnChangePlugin);
    const handleChangeMock = changePlugin.prop("onChange");

    const editorStateMock = {
      read: jest.fn((callback) => {
        callback();
      }),
    };

    act(() => {
      handleChangeMock(editorStateMock);
    });

    expect(props.onChange).toBeCalled();
  });
});
