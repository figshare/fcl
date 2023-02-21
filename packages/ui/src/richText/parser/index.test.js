import { RichTextParser } from "./index";


const mdData = `
# This is a heading

\`\`\`
<div> This is a codeblock </div>
These div's will be rendered as code not interpreted by HTML
\`\`\`

In Markdown the only supported HTML tags are \`<sub>\` and \`<sup>\`
and are rendered like <sub>this</sub> or <sup>this</sup>
`;

const htmlData = `
<h1> This is a heading </h1>

<pre><code>
<div> This is a codeblock </div>
These div's will be rendered as code not interpreted by HTML
</code></pre>

# This is NOT a heading; as we are in HTML this will be rendered as is.

The tags <code><sub></code> and <code><sup></code> will be supported since HTML 1.1
and are rendered like <sub>this</sub> or <sup>this</sup>
`;


describe("RichTextParser", () => {
  it("detects when supplied data is markdown", () => {
    const richText = new RichTextParser(mdData);

    expect(richText.isMarkdown).toEqual(true);
  });

  it("detects when supplied data is html", () => {
    const richText = new RichTextParser(htmlData);

    expect(richText.isHTML).toEqual(true);
  });

  it("converts md to html", () => {
    const richText = new RichTextParser(mdData);

    const md = richText.toMD();
    expect(md).toEqual(mdData);

    const html = richText.toHTML();
    const { isHTML } = new RichTextParser(html);
    expect(isHTML).toEqual(true);
  });

  it("converts html to md", () => {
    const richText = new RichTextParser(htmlData);

    const html = richText.toHTML();
    expect(html).toEqual(htmlData);

    const md = richText.toMD();
    const { isMarkdown } = new RichTextParser(md);
    expect(isMarkdown).toEqual(true);
  });

  it("caches the conversions", () => {
    const mdText = new RichTextParser(mdData);
    expect(mdText.toMD()).toEqual(mdText.toMD());
    expect(mdText.toHTML()).toEqual(mdText.toHTML());

    const htmlText = new RichTextParser(htmlData);
    expect(htmlText.toMD()).toEqual(htmlText.toMD());
    expect(htmlText.toHTML()).toEqual(htmlText.toHTML());
  });
});
