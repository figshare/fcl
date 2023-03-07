import uidGenerator from "./uidGenerator";


describe("`uidGenerator` for a11y ids", () => {
  const generator = uidGenerator();

  it("returns an object containing `generate` function", () => {
    expect(generator.generate).toBeInstanceOf(Function);
  });


  it("generates ids prefixed with `a11y-`", () => {
    const { generate } = generator;

    for (let i = 0; i < 100; i += 1) {
      expect(generate()).toMatch(/^a11y-*/);
    }
  });

  it("generates ids in base 36 incremental", () => {
    const { generate } = generator;

    let prev = generate();
    for (let i = 0; i < 100; i += 1) {
      const next = generate();

      expect(prev).toMatch(/-[0-9a-zA-Z]*/);
      expect(next).toMatch(/-[0-9a-zA-Z]*/);

      const parsedPrev = parseInt(prev.split("a11y-")[0], 36);
      const parsedNext = parseInt(next.split("a11y-")[0], 36);
      expect(parsedNext).toEqual(parsedPrev + 1);

      prev = next;
    }
  });

  it("generates the same ids on reset", () => {
    const firstGenerator = uidGenerator();
    const firstGeneration = [];
    for (let i = 0; i < 100; i += 1) {
      firstGeneration.push(firstGenerator.generate());
    }

    const secondGenerator = uidGenerator();
    const secondGeneration = [];
    for (let i = 0; i < 100; i += 1) {
      secondGeneration.push(secondGenerator.generate());
    }

    expect(secondGeneration).toEqual(secondGeneration);
  });
});
