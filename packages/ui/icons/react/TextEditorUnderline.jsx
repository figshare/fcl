import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgTextEditorUnderline = (props) => (
  <svg
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    focusable={false}
    aria-hidden={true}
    role="img"
    alt={props.title}
    {...props}
  >
    <path
      d="M14.2634 2.25H12.6815V9.23803C12.6815 10.7579 12.4341 11.7849 11.9394 12.319C11.4448 12.8532 10.6158 13.1203 9.45242 13.1203C8.7729 13.1203 8.19667 12.9854 7.72373 12.7155C7.25622 12.4457 6.92462 12.063 6.72892 11.5674C6.53865 11.0663 6.44352 10.2898 6.44352 9.23803V2.25H4.86161V9.24629C4.86161 10.5294 5.01382 11.5426 5.31824 12.286C5.62267 13.0239 6.13094 13.5883 6.84308 13.9793C7.55521 14.3703 8.4712 14.5658 9.59104 14.5658C10.7435 14.5658 11.6731 14.3428 12.3798 13.8967C13.0919 13.4452 13.5839 12.8615 13.8557 12.1456C14.1275 11.4297 14.2634 10.4633 14.2634 9.24629V2.25Z"
      fill={props.color}
    />
    <path d="M16.875 15.5921H2.25V16.875H16.875V15.5921Z" fill={props.color} />
  </svg>
);
SvgTextEditorUnderline.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgTextEditorUnderline.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgTextEditorUnderline.displayName = "SvgTextEditorUnderline";
const Memo = memo(SvgTextEditorUnderline);
export default Memo;
