import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgChevronLargeLeft1 = (props) => (
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
      d="M8.1344 9L14.2998 3.16244C14.7334 2.75189 14.7334 2.07517 14.2998 1.66463L12.8556 0.297226C12.437 -0.0990749 11.7693 -0.0990754 11.3508 0.297225L2.9502 8.25109C2.5166 8.66164 2.5166 9.33836 2.9502 9.74891L11.3508 17.7028C11.7693 18.0991 12.437 18.0991 12.8556 17.7028L14.2998 16.3354C14.7334 15.9248 14.7334 15.2481 14.2998 14.8376L8.1344 9Z"
      fill={props.color}
    />
  </svg>
);
SvgChevronLargeLeft1.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronLargeLeft1.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgChevronLargeLeft1.displayName = "SvgChevronLargeLeft1";
const Memo = memo(SvgChevronLargeLeft1);
export default Memo;
