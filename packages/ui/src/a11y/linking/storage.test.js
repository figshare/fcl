import { reading, mutations } from "./storage";


describe("linking.storage", () => {
  describe("mutations.add", () => {
    it("should create the identifier", () => {
      const result = mutations.add({}, "identifier", "attribute", "id");

      expect(result).toEqual({ identifier: { attribute: ["id"] } });
    });

    it("should add with a list of attributes", () => {
      const result = mutations.add({}, "identifier", ["attribute1", "attribute2"], "id");
      expect(result).toEqual({
        identifier: {
          attribute1: ["id"],
          attribute2: ["id"],
        },
      });
    });

    it("should add ids to existing attribute list", () => {
      let result = mutations.add({}, "identifier", "attribute", "id");
      result = mutations.add(result, "identifier", "attribute", "id2");

      expect(result).toEqual({ identifier: { attribute: ["id", "id2"] } });
    });

    it("should not touch other identifiers", () => {
      let result = mutations.add({}, "identifier", "attribute", "id");
      result = mutations.add(result, "identifier2", "attribute", "id");

      expect(result).toEqual({
        identifier: { attribute: ["id"] },
        identifier2: { attribute: ["id"] },
      });
    });
  });

  describe("mutations.remove", () => {
    const defaultData = { identifier1: { attribute1: ["id1", "id2"], attribute2: ["id1"] } };

    it("should remove the id from all attributes", () => {
      const result = mutations.remove(defaultData, "identifier1", "id1");
      expect(result).toEqual({ identifier1: { attribute1: ["id2"] } });
    });

    it("should not touch other identifiers", () => {
      const result = mutations.remove({
        ...defaultData,
        identifier2: { attribute1: ["id1"] },
      }, "identifier1", "id1");

      expect(result).toEqual({ identifier1: { attribute1: ["id2"] }, identifier2: { attribute1: ["id1"] } });
    });

    it("should not touch other attributes", () => {
      const result = mutations.remove(defaultData, "identifier1", "id2");

      expect(result).toEqual({ identifier1: { attribute1: ["id1"], attribute2: ["id1"] } });
    });

    it("should clean the identifier key", () => {
      let result = mutations.remove(defaultData, "identifier1", "id1");
      result = mutations.remove(result, "identifier1", "id2");
      expect(result).toEqual({});
    });

    it("should not error if identifier does not exist", () => {
      const result = mutations.remove({}, "identifier1", "id1");
      expect(result).toEqual({});
    });
  });

  describe("mutation.update", () => {
    it("should not update if identifier, id or attributes don't change", () => {
      const state = { identifier: { attribute: ["id1"], attribute2: ["id1", "id2"] } };

      let result = mutations.update(state,
        { identifier: "identifier", attributes: "attribute", id: "id" },
        { identifier: "identifier", attributes: ["attribute"], id: "id" },
      );
      expect(result).toBe(state);

      result = mutations.update(state,
        { identifier: "identifier", attributes: ["attribute", "attribute2"], id: "id" },
        { identifier: "identifier", attributes: ["attribute2", "attribute"], id: "id" },
      );
      expect(result).toBe(state);
    });

    it("should clean the empty identifiers", () => {
      const state = { identifier: { attribute: ["id1"], attribute2: ["id1"] } };
      const result = mutations.update(state,
        { identifier: "identifier", attributes: ["attribute", "attribute2"], id: "id1" },
        { identifier: "identifier2", attributes: ["attribute", "attribute2"], id: "id1" },
      );

      expect(result).toEqual({ identifier2: { attribute: ["id1"], attribute2: ["id1"] } });
    });

    it("should add the new identifier", () => {
      const state = { identifier: { attribute: ["id1"], attribute2: ["id1", "id2"] } };
      const result = mutations.update(state,
        { identifier: "identifier", attributes: ["attribute", "attribute2"], id: "id1" },
        { identifier: "identifier2", attributes: ["attribute", "attribute2"], id: "id1" },
      );

      expect(result).toEqual({
        identifier: { attribute2: ["id2"] },
        identifier2: { attribute: ["id1"], attribute2: ["id1"] },
      });
    });

    it("should add new attributes", () => {
      const state = { identifier: { attribute: ["id1", "id2"] } };
      const result = mutations.update(state,
        { identifier: "identifier", attributes: ["attribute"], id: "id1" },
        { identifier: "identifier", attributes: ["attribute", "attribute2"], id: "id1" },
      );

      expect(result).toEqual({ identifier: { attribute: ["id2", "id1"], attribute2: ["id1"] } });
    });

    it("should clean empty attributes", () => {
      const state = { identifier: { attribute: ["id1"] } };
      const result = mutations.update(state,
        { identifier: "identifier", attributes: ["attribute"], id: "id1" },
        { identifier: "identifier", attributes: ["attribute2"], id: "id1" },
      );

      expect(result).toEqual({ identifier: { attribute2: ["id1"] } });
    });

    it("should change the id", () => {
      const state = { identifier: { attribute: ["id1", "id2"], attribute2: ["id1"] } };
      const result = mutations.update(state,
        { identifier: "identifier", attributes: ["attribute", "attribute2"], id: "id1" },
        { identifier: "identifier", attributes: ["attribute", "attribute2"], id: "id3" },
      );

      expect(result).toEqual({ identifier: { attribute: ["id2", "id3"], attribute2: ["id3"] } });
    });
  });

  describe("reading.getAttributeValue", () => {
    it("should return the list concatenated", () => {
      const result = reading.getAttributeValue(
        { identifier: { attribute: ["id1", "id2"] } }
        , "identifier", "attribute"
      );

      expect(result).toEqual("id1 id2");
    });

    it("should return undefined if the attribute does not exists", () => {
      const result = reading.getAttributeValue(
        { identifier: { attribute: ["id1", "id2"] } },
        "identifier", "attribute2"
      );

      expect(result).toEqual(undefined);
    });
  });

  it("reading.getPropsForAttributes", () => {
    const result = reading.getPropsForAttributes(
      { identifier: { attribute: ["id1", "id2"], attribute2: ["id1", "id3"] } },
      "identifier", ["attribute", "attribute2", "attribute3"]
    );

    expect(result).toEqual({ attribute: "id1 id2", attribute2: "id1 id3" });
  });
});
