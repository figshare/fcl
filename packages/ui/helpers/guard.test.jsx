import { guard } from "./";


describe("Global guard", () => {
  it("should guard against undefined (global) variables", () => {
    const result = guard(() => {
      window.testing.doSomething();
    });

    expect(result).toBe(undefined);
  });
});
