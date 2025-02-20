import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgDocument2 = (props) => (
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
      d="M4.125 4.6C4.125 4.54477 4.16977 4.5 4.225 4.5H13.025C13.0802 4.5 13.125 4.54477 13.125 4.6V5.4C13.125 5.45523 13.0802 5.5 13.025 5.5H4.225C4.16977 5.5 4.125 5.45523 4.125 5.4V4.6Z"
      fill={props.color}
    />
    <path
      d="M4.125 6.6C4.125 6.54477 4.16977 6.5 4.225 6.5H13.025C13.0802 6.5 13.125 6.54477 13.125 6.6V7.4C13.125 7.45523 13.0802 7.5 13.025 7.5H4.225C4.16977 7.5 4.125 7.45523 4.125 7.4V6.6Z"
      fill={props.color}
    />
    <path
      d="M4.225 8.5C4.16977 8.5 4.125 8.54477 4.125 8.6V9.4C4.125 9.45523 4.16977 9.5 4.225 9.5H13.025C13.0802 9.5 13.125 9.45523 13.125 9.4V8.6C13.125 8.54477 13.0802 8.5 13.025 8.5H4.225Z"
      fill={props.color}
    />
    <path
      d="M4.125 10.6C4.125 10.5448 4.16977 10.5 4.225 10.5H13.025C13.0802 10.5 13.125 10.5448 13.125 10.6V11.4C13.125 11.4552 13.0802 11.5 13.025 11.5H4.225C4.16977 11.5 4.125 11.4552 4.125 11.4V10.6Z"
      fill={props.color}
    />
    <path
      d="M4.225 12.5C4.16977 12.5 4.125 12.5448 4.125 12.6V13.4C4.125 13.4552 4.16977 13.5 4.225 13.5H13.025C13.0802 13.5 13.125 13.4552 13.125 13.4V12.6C13.125 12.5448 13.0802 12.5 13.025 12.5H4.225Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.125 1C1.125 0.447716 1.57272 0 2.125 0H15.125C15.6773 0 16.125 0.447715 16.125 1V17C16.125 17.5523 15.6773 18 15.125 18H2.125C1.57272 18 1.125 17.5523 1.125 17V1ZM14.625 1C14.9011 1 15.125 1.22386 15.125 1.5V16.5C15.125 16.7761 14.9011 17 14.625 17H2.625C2.34886 17 2.125 16.7761 2.125 16.5L2.125 1.5C2.125 1.22386 2.34886 1 2.625 1H14.625Z"
      fill={props.color}
    />
  </svg>
);
SvgDocument2.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDocument2.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgDocument2.displayName = "SvgDocument2";
const Memo = memo(SvgDocument2);
export default Memo;
