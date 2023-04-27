import { uuid } from "./uuid";


describe("uuid utils", () => {
  it("uuid() returns valid unique uuid strings", () => {
    const one = uuid();
    const two = uuid();
    const three = uuid();

    expect(typeof one).toEqual("string");
    expect(typeof two).toEqual("string");
    expect(typeof three).toEqual("string");
    expect(one).not.toEqual(two);
    expect(one).not.toEqual(three);
  });
});
