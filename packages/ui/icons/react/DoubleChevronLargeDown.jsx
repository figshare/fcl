import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgDoubleChevronLargeDown = (props) => (
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
      d="M16.5455 1.4546C16.9848 1.89407 16.9848 2.60659 16.5455 3.04606L9.80345 9.79011C9.35976 10.2339 8.64033 10.234 8.19655 9.79011L1.45451 3.04606C1.01517 2.60659 1.01517 1.89407 1.45451 1.4546C1.89385 1.01513 2.60616 1.01513 3.0455 1.4546L9 7.41087L14.9545 1.4546C15.3938 1.01513 16.1062 1.01513 16.5455 1.4546Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5455 8.2066C16.9848 8.64607 16.9848 9.35859 16.5455 9.79806L9.80345 16.5421C9.35976 16.9859 8.64033 16.986 8.19655 16.5421L1.45451 9.79806C1.01517 9.35859 1.01517 8.64607 1.45451 8.2066C1.89385 7.76713 2.60616 7.76713 3.0455 8.2066L9 14.1629L14.9545 8.2066C15.3938 7.76713 16.1062 7.76713 16.5455 8.2066Z"
      fill={props.color}
    />
  </svg>
);
SvgDoubleChevronLargeDown.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDoubleChevronLargeDown.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgDoubleChevronLargeDown.displayName = "SvgDoubleChevronLargeDown";
const Memo = memo(SvgDoubleChevronLargeDown);
export default Memo;
