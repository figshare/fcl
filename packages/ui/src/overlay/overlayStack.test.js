import { OverlayStack } from "./overlayStack";


describe("OverlayStack", () => {
  it("should be able to add or remove overlay info to an internal list", () => {
    expect(OverlayStack.list()).toHaveLength(0);

    OverlayStack.push({ id: 1 });
    OverlayStack.push({ id: 2 });
    OverlayStack.push({ id: 1 });

    expect(OverlayStack.list()).toHaveLength(2);

    OverlayStack.pop(1);
    OverlayStack.pop(3);
    OverlayStack.pop(2);

    expect(OverlayStack.list()).toHaveLength(0);
  });

  it("should expose some useful methods", () => {
    expect(OverlayStack.list()).toHaveLength(0);

    OverlayStack.push({ id: 1 });
    OverlayStack.push({ id: 2 });

    expect(OverlayStack.isLast(2)).toEqual(true);
    expect(OverlayStack.isLast(1)).toEqual(false);
    expect(OverlayStack.getZIndex(1)).toEqual(2);
    expect(OverlayStack.getZIndex(2)).toEqual(3);

    OverlayStack.pop(1);
    OverlayStack.pop(2);

    expect(OverlayStack.list()).toHaveLength(0);

    expect(OverlayStack.isLast(1)).toEqual(true);
    expect(OverlayStack.isLast(3)).toEqual(true);
    expect(OverlayStack.getZIndex(1)).toEqual(2);
  });
});
