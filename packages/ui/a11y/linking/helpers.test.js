import { computeDynamicDefault } from "./helpers";


describe("linking.helpers", () => {
  describe("computeDynamicDefault", () => {
    it("should accept default as a value or a function", () => {
      let result = computeDynamicDefault({}, {}, "key", "test");
      expect(result).toEqual({ key: "test" });

      result = computeDynamicDefault({}, {}, "key", () => "value");
      expect(result).toEqual({ key: "value" });
    });

    it("should give priority to the props over state", () => {
      const result = computeDynamicDefault({ key: "props" }, { key: "state" }, "key", "test");
      expect(result).toEqual({ key: "props" });
    });

    it("should not change the state if the props haven't changed", () => {
      const result = computeDynamicDefault({ key: "props" }, { key: "props" }, "key", "test");
      expect(result).toEqual(null);
    });

    it("should not change the state value is already in state", () => {
      const result = computeDynamicDefault({ }, { key: "state" }, "key", "test");
      expect(result).toEqual(null);
    });
  });
});
