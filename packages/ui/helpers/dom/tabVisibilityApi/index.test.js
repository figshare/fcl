import visApi from "./index";


describe("Tab Visibility Change", () => {
  it("return hidden key", () => {
    expect(visApi()).toEqual({ stateKey: "hidden", eventKey: "visibilitychange" });
  });

  it("active tab return undefined", () => {
    const docSpy = jest.spyOn(global, "document", "get").mockReturnValue({});

    expect(visApi()).toEqual(undefined);

    docSpy.mockRestore();
  });
});
