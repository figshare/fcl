import { TextNode, $createTextNode, $isTextNode } from "lexical";


function wrapElementWith(element, tag) {
  if (element.tagName === "SPAN") {
    const el = document.createElement(tag);

    el.innerHTML = element.innerHTML;

    return el;
  }

  const el = document.createElement(tag);
  el.appendChild(element);

  return el;
}

function wrapContentWith(element, tag) {
  if (element.tagName === "SPAN") {
    const el = document.createElement(tag);

    el.innerHTML = element.innerHTML;

    return el;
  }

  const el = element.cloneNode(false);

  const inner = document.createElement(tag);

  inner.innerHTML = element.innerHTML;

  el.appendChild(inner);

  return el;
}

function replaceWith(element, tag) {
  const el = document.createElement(tag);

  Array.prototype.forEach.call(element.childNodes, (child) => {
    el.appendChild(child);
  });

  return el;
}

export class CustomTextNode extends TextNode {

  static getType() {
    return "custom-text";
  }

  static clone(node) {
    return new CustomTextNode(node.__text);
  }

  static importJSON(serializedNode) {
    const node = $createTextNode(serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);

    return node;
  }

  exportJSON() {
    return {
      detail: this.getDetail(),
      format: this.getFormat(),
      mode: this.getMode(),
      style: this.getStyle(),
      text: this.getTextContent(),
      type: "custom-text",
      version: 1,
    };
  }


  // This improves Lexical's basic text output in copy+paste plus
  // for headless mode where people might use Lexical to generate
  // HTML content and not have the ability to use CSS classes.
  exportDOM(editor) {

    let element = super.createDOM(editor._config, editor);

    // This is the only way to properly add support for most clients,
    // even if it's semantically incorrect to have to resort to using
    // <b>, <u>, <s>, <i> elements.

    element.removeAttribute("class");

    Array.prototype.forEach.call(element.children, (child) => {
      child?.removeAttribute?.("class");
    });

    if (element !== null) {
      if (this.hasFormat("strikethrough")) {
        element = wrapContentWith(element, "del");
      }
      if (this.hasFormat("underline")) {
        element = wrapContentWith(element, "u");
      }

      if (["STRONG", "BOLD", "B"].includes(element.tagName)) {
        element = replaceWith(element, "b");
      }

      if (["EM", "ITALIC", "I"].includes(element.tagName)) {
        element = replaceWith(element, "i");
      }

      if (this.hasFormat("italic") && this.hasFormat("bold")) {
        element = wrapElementWith(element, "i");
      }
    }

    return { element };
  }

  static importDOM() {
    const result = TextNode.importDOM();

    return {
      ...result,
      del: () => {
        return {
          conversion: convertDelToStriketrough,
          priority: 0,
        };
      },
    };
  }
}

const nodeNameToTextFormat = { del: "striketrough" };

function convertDelToStriketrough(node) {
  const format = nodeNameToTextFormat[node.nodeName.toLowerCase()];

  if (format === undefined) {
    return { node: null };
  }

  return {
    forChild: (lexicalNode) => {
      if ($isTextNode(lexicalNode) && !lexicalNode.hasFormat(format)) {
        lexicalNode.setFormat(4);
      }

      return lexicalNode;
    },
    node: null,
  };
}
