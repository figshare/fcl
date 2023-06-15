import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

import Editor from "./";


const wait = (delay = 100) => new Promise((resolve) => setTimeout(resolve, delay));

const fixtures = {
  expectOnChangeValue: (value = "") => expect.objectContaining(
    { target: expect.objectContaining({ value }) }
  ),
  focusOnEditor: ({ component }) => {
    const editor = component.find({ "data-id": "editor-content-editable" });

    editor.simulate("focus");
  },
  typeIn: ({ text, component }) => {
    const editor = component.find({ "data-id": "editor-content-editable" });

    for (let i = 0; i < text.length; i += 1) {
      editor.simulate("keydown", { key: text.charAt(i) });
    }
  },
};

describe("Lexical Text Editor", () => {
  const props = {
    value: "<p><b><sub>sub-bold</sub></b><i>italic</i><strong>strong</strong>" +
    "<em>emphasis</em><s>strikethrough</s><u>underline</u></p>",
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("renders and updates with initial value", async() => {
    let component = null;

    await act(async() => {
      component = mount(<Editor {...props} />);

      await wait();
    });

    await act(async() => {
      fixtures.focusOnEditor({ component });
      fixtures.typeIn({ text: "hello", component });

      await wait();
    });

    expect(props.onChange).toHaveBeenCalledWith(
      fixtures.expectOnChangeValue(
        "<p dir=\"ltr\"><sub><strong>sub-bold</strong></sub><em>italic</em>" +
        "<strong>strong</strong><em>emphasis</em><s>strikethrough</s><u>underline</u></p>"
      )
    );
  });

  it("updates as user types in the editor", async() => {
    let component = null;

    await act(async() => {
      component = mount(<Editor {...props} />);

      await wait();
    });

    await act(async() => {
      fixtures.focusOnEditor({ component });
      fixtures.typeIn({ text: "hello", component });

      await wait();
    });

    expect(props.onChange).toHaveBeenCalledWith(
      fixtures.expectOnChangeValue(
        "<p dir=\"ltr\"><sub><strong>sub-bold</strong></sub><em>italic</em>" +
        "<strong>strong</strong><em>emphasis</em><s>strikethrough</s><u>underline</u></p>"
      )
    );
  });
});

