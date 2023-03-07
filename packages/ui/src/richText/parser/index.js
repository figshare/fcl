import Turndown from "turndown";
import { gfm as turndownGFM } from "@joplin/turndown-plugin-gfm";
import { marked } from "marked";


const turndownService = new Turndown({ codeBlockStyle: "fenced" });
turndownService.use(turndownGFM);
marked.setOptions({ gfm: true, headerIds: false });


export class RichTextParser {
  static allowedTags = ["sub", "sup"];

  constructor(str) {
    this.richText = str;
    this.isMarkdown = true;
    this.cache = { html: null, md: null };

    const md2html = marked.parse(this.richText, {
      walkTokens: ({ type, raw }) => {
        if (type !== "html" || !this.isMarkdown) {
          return;
        }

        const tagName = raw.replace(/(<|\/|>)/g, "").split(" ")[0];
        this.isMarkdown = RichTextParser.allowedTags.includes(tagName);
      },
    });

    this.cache.html = this.isMarkdown ? md2html : this.richText;
  }

  get isHTML() {
    return !this.isMarkdown;
  }

  toHTML = () => this.cache.html;

  toMD = () => {
    if (this.cache.md) {
      return this.cache.md;
    }

    this.cache.md = this.isMarkdown ? this.richText : turndownService.turndown(this.richText);

    return this.cache.md;
  }
}
