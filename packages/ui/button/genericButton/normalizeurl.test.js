import { normalizeUrl } from "./normalizeurl";


describe("normalizeURL", () => {
  it("works for ascii", () => {
    const asciiUrls = [
      "file:///bin/bash",
      "ftp://my.long.domain.example.com",
      "https://my.example.com/my/path?query=string&more=True&number=0#hash+code",
    ];
    for (const url of asciiUrls) {
      expect(normalizeUrl(url)).toEqual(url);
    }
  });

  it("works for unicode", () => {
    const unicodeUrls = [
      ["file:///tüst", "file:///t%C3%BCst"],
      ["ftp://ab.cöm", "ftp://ab.xn--cm-fka"],
      ["https://ab.cöm/", "https://ab.xn--cm-fka/"],
      ["http://ñóǹäŝçíìHuáyǔ.com", "http://xn--huy-flams9ah7au18i93bqn.com"],
      ["https://ab.cöm/mÿ/spaß", "https://ab.xn--cm-fka/m%C3%BF/spa%C3%9F"],
      ["http://ab.cöm/mÿ/spaß?querÿ=string&more=True&n=º#haƒ+code©",
        "http://ab.xn--cm-fka/m%C3%BF/spa%C3%9F?quer%C3%BF=string&more=True&n=%C2%BA#ha%C6%92+code%C2%A9"],
      ["https://sub.ñóǹäŝçíìHuáyǔ.example.إختبار/my/subبار/ath?querÿ=string&more=True&n=º#haƒ+code©",
        "https://sub.xn--huy-flams9ah7au18i93bqn.example.xn--kgbechtv/my/" +
        "sub%D8%A8%D8%A7%D8%B1/ath?quer%C3%BF=string&more=True&n=%C2%BA#ha%C6%92+code%C2%A9"],
    ];
    for (const [unicode, ascii] of unicodeUrls) {
      expect(normalizeUrl(unicode)).toEqual(ascii);
    }
  });

  it("preserves non-urls or bad urls", () => {
    const nonUrlsOrBadUrls = [
      "notascheme://my.long.domain.example.com",
      "this is not a url 🤪 and contäins ünicode 文字",
    ];
    for (const url of nonUrlsOrBadUrls) {
      expect(normalizeUrl(url)).toEqual(url);
    }
  });
});
