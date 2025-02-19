import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDoubleChevronUp = (props) => (
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
      d="M14.2955 8.66805C14.7348 8.22856 14.7348 7.516 14.2955 7.07651L9.80345 2.58292C9.35974 2.13906 8.64031 2.139 8.19655 2.58292L3.70451 7.07651C3.26517 7.516 3.26517 8.22856 3.70451 8.66805C4.14385 9.10754 4.85616 9.10754 5.2955 8.66805L9 4.96227L12.7045 8.66805C13.1438 9.10754 13.8562 9.10754 14.2955 8.66805Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.2955 15.4204C14.7348 14.9809 14.7348 14.2683 14.2955 13.8288L9.80345 9.33525C9.35975 8.89139 8.64031 8.89133 8.19655 9.33525L3.70451 13.8288C3.26517 14.2683 3.26517 14.9809 3.70451 15.4204C4.14385 15.8599 4.85616 15.8599 5.2955 15.4204L9 11.7146L12.7045 15.4204C13.1438 15.8599 13.8562 15.8599 14.2955 15.4204Z"
      fill={props.color}
    />
  </svg>
);
SvgDoubleChevronUp.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgDoubleChevronUp.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgDoubleChevronUp.displayName = "SvgDoubleChevronUp";
const Memo = memo(SvgDoubleChevronUp);
export default Memo;
