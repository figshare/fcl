import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgChevronLargeDown = (props) => (
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
      d="M16.5455 4.82968C16.9848 5.26924 16.9848 5.98192 16.5455 6.42149L9.80345 13.167C9.35976 13.6109 8.64033 13.611 8.19655 13.167L1.4545 6.42149C1.01516 5.98192 1.01516 5.26924 1.4545 4.82967C1.89384 4.39011 2.60616 4.39011 3.0455 4.82968L9 10.7873L14.9545 4.82968C15.3938 4.39011 16.1062 4.39011 16.5455 4.82968Z"
      fill={props.color}
    />
  </svg>
);
SvgChevronLargeDown.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronLargeDown.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgChevronLargeDown.displayName = "SvgChevronLargeDown";
const Memo = memo(SvgChevronLargeDown);
export default Memo;
