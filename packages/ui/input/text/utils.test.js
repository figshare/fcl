import { getTextDirection } from "./utils";


describe("text input utils", () => {
  it("get text direction", () => {
    expect(getTextDirection("")).toBe(null);
    expect(getTextDirection(" ")).toBe(null);
    expect(getTextDirection("0")).toBe(null);
    expect(getTextDirection("A")).toBe("ltr");
    expect(getTextDirection("Z")).toBe("ltr");
    expect(getTextDirection("a")).toBe("ltr");
    expect(getTextDirection("z")).toBe("ltr");
    expect(getTextDirection("\u00C0")).toBe("ltr");
    expect(getTextDirection("\u00D6")).toBe("ltr");
    expect(getTextDirection("\u00D8")).toBe("ltr");
    expect(getTextDirection("\u00F6")).toBe("ltr");
    expect(getTextDirection("\u00F8")).toBe("ltr");
    expect(getTextDirection("\u02B8")).toBe("ltr");
    expect(getTextDirection("\u0300")).toBe("ltr");
    expect(getTextDirection("\u0590")).toBe("ltr");
    expect(getTextDirection("\u0800")).toBe("ltr");
    expect(getTextDirection("\u1FFF")).toBe("ltr");
    expect(getTextDirection("\u200E")).toBe("ltr");
    expect(getTextDirection("\u2C00")).toBe("ltr");
    expect(getTextDirection("\uFB1C")).toBe("ltr");
    expect(getTextDirection("\uFE00")).toBe("ltr");
    expect(getTextDirection("\uFE6F")).toBe("ltr");
    expect(getTextDirection("\uFEFD")).toBe("ltr");
    expect(getTextDirection("\uFFFF")).toBe("ltr");
    expect(getTextDirection("\u0591")).toBe("rtl");
    expect(getTextDirection("\u07FF")).toBe("rtl");
    expect(getTextDirection("\uFB1D")).toBe("rtl");
    expect(getTextDirection("\uFDFD")).toBe("rtl");
    expect(getTextDirection("\uFE70")).toBe("rtl");
    expect(getTextDirection("\uFEFC")).toBe("rtl");
  });
});
