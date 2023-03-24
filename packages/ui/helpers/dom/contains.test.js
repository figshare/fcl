import contains from "./contains";


const DOCUMENT_POSITION_CONTAINED_BY = 16;

describe("DOM contains", () => {
  it("returns false for missing needle or haystack", () => {
    expect(contains()).toEqual(false);
    expect(contains(null, {})).toEqual(false);
    expect(contains({}, null)).toEqual(false);
  });

  it("uses Node.contains when available", () => {
    const sibling = { id: 1 };
    const parent = { contains: jest.fn((n) => n === sibling) };

    expect(contains(sibling, parent)).toEqual(true);
    expect(parent.contains).toHaveBeenLastCalledWith(sibling);

    const tempNode = { id: 2 };

    expect(contains(tempNode, parent)).toEqual(false);
    expect(parent.contains).toHaveBeenLastCalledWith(tempNode);
  });

  it("uses Node.compareDocumentPosition when available", () => {
    const sibling = { id: 1 };
    const parent = {
      compareDocumentPosition: jest.fn((n) => {
        if (n === sibling) {
          return DOCUMENT_POSITION_CONTAINED_BY;
        }

        return 2;
      }),
    };

    expect(contains(parent, parent)).toEqual(true);

    expect(contains(sibling, parent)).toEqual(true);
    expect(parent.compareDocumentPosition).toHaveBeenLastCalledWith(sibling);

    const tempNode = { id: 2 };

    expect(contains(tempNode, parent)).toEqual(false);
    expect(parent.compareDocumentPosition).toHaveBeenLastCalledWith(tempNode);
  });

  it("uses parentNode fallback", () => {
    const parent = { };
    const sibling = { id: 1, parentNode: { parentNode: parent } };

    expect(contains(parent, parent)).toEqual(true);
    expect(contains(sibling, parent)).toEqual(true);

    const tempNode = { id: 2 };

    expect(contains(tempNode, parent)).toEqual(false);
  });
});
