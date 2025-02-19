import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgTextEditorItalic = (props) => (
  <svg
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    width={props.width ?? props.inline ? "1em" : "100%"}
    focusable={false}
    aria-hidden={true}
    role="img"
    alt={props.title}
    {...props}
  >
    <path
      d="M5.90625 2.25H16.875V3.5558H12.1345L8.2283 15.5692H13.2187V16.875H2.25V15.5692H6.39834L10.3127 3.5558H5.90625V2.25Z"
      fill={props.color}
    />
  </svg>
);
SvgTextEditorItalic.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgTextEditorItalic.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgTextEditorItalic.displayName = "SvgTextEditorItalic";
const Memo = memo(SvgTextEditorItalic);
export default Memo;
