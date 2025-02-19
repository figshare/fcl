import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgChevronUp = (props) => (
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
      d="M14.2955 12.0453C14.7348 11.6056 14.7348 10.8928 14.2955 10.4532L9.80345 5.95803C9.35974 5.51402 8.64031 5.51396 8.19655 5.95803L3.7045 10.4532C3.26516 10.8928 3.26516 11.6056 3.7045 12.0453C4.14384 12.4849 4.85616 12.4849 5.2955 12.0453L9 8.3382L12.7045 12.0453C13.1438 12.4849 13.8562 12.4849 14.2955 12.0453Z"
      fill={props.color}
    />
  </svg>
);
SvgChevronUp.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronUp.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgChevronUp.displayName = "SvgChevronUp";
const Memo = memo(SvgChevronUp);
export default Memo;
