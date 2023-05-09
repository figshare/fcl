import styles from "./theme.css";


const defaultTheme = {
  ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  // paragraph: "editor-paragraph",
  quote: "editor-quote",
  heading: {
    h1: "editor-heading-h1",
    h2: "editor-heading-h2",
    h3: "editor-heading-h3",
    h4: "editor-heading-h4",
    h5: "editor-heading-h5",
  },
  list: {
    // nested: { listitem: "editor-nested-listitem" },
    ol: styles.ol,
    ul: styles.ul,
    // listitem: "editor-listitem",
  },
  image: "editor-image",
  link: "editor-link",
  text: {
    bold: styles.bold,
    italic: styles.italic,
    // overflowed: "editor-text-overflowed",
    // hashtag: "editor-text-hashtag",
    underline: styles.underline,
    strikethrough: styles.strikethrough,
    underlineStrikethrough: styles.underlineStrikethrough,
  },
};

export default defaultTheme;
