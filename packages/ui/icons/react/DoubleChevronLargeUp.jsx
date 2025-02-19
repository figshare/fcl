import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDoubleChevronLargeUp = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.4545 16.5454C1.01517 16.1059 1.01517 15.3934 1.4545 14.9539L8.19655 8.2099C8.64024 7.76608 9.35967 7.76599 9.80345 8.2099L16.5455 14.9539C16.9848 15.3934 16.9848 16.1059 16.5455 16.5454C16.1062 16.9849 15.3938 16.9849 14.9545 16.5454L9 10.5891L3.0455 16.5454C2.60616 16.9849 1.89384 16.9849 1.4545 16.5454Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.4545 9.7934C1.01517 9.35393 1.01517 8.64141 1.4545 8.20194L8.19655 1.4579C8.64024 1.01408 9.35967 1.01399 9.80345 1.4579L16.5455 8.20194C16.9848 8.64141 16.9848 9.35393 16.5455 9.7934C16.1062 10.2329 15.3938 10.2329 14.9545 9.7934L9 3.83713L3.0455 9.7934C2.60616 10.2329 1.89384 10.2329 1.4545 9.7934Z"
      fill={props.color}
    />
  </svg>
);
SvgDoubleChevronLargeUp.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgDoubleChevronLargeUp.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgDoubleChevronLargeUp.displayName = "SvgDoubleChevronLargeUp";
const Memo = memo(SvgDoubleChevronLargeUp);
export default Memo;
