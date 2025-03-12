import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgChevronLargeRight1 = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.8656 9L3.7002 3.16244C3.2666 2.75189 3.2666 2.07517 3.7002 1.66463L5.1444 0.297226C5.56295 -0.0990749 6.23068 -0.0990754 6.64924 0.297225L15.0498 8.25109C15.4834 8.66164 15.4834 9.33836 15.0498 9.74891L6.64924 17.7028C6.23068 18.0991 5.56295 18.0991 5.1444 17.7028L3.7002 16.3354C3.2666 15.9248 3.2666 15.2481 3.7002 14.8376L9.8656 9Z"
      fill={props.color}
    />
  </svg>
);
SvgChevronLargeRight1.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronLargeRight1.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgChevronLargeRight1.displayName = "SvgChevronLargeRight1";
const Memo = memo(SvgChevronLargeRight1);
export default Memo;
