import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgDoubleChevronLargeRight = (props) => (
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
      d="M1.4546 1.4545C1.89407 1.01517 2.60659 1.01517 3.04606 1.4545L9.7901 8.19655C10.2339 8.64024 10.234 9.35967 9.7901 9.80345L3.04606 16.5455C2.60659 16.9848 1.89407 16.9848 1.4546 16.5455C1.01513 16.1062 1.01513 15.3938 1.4546 14.9545L7.41087 9L1.4546 3.0455C1.01513 2.60616 1.01513 1.89384 1.4546 1.4545Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.2066 1.4545C8.64607 1.01517 9.35859 1.01517 9.79806 1.4545L16.5421 8.19655C16.9859 8.64024 16.986 9.35967 16.5421 9.80345L9.79806 16.5455C9.35859 16.9848 8.64607 16.9848 8.2066 16.5455C7.76713 16.1062 7.76713 15.3938 8.2066 14.9545L14.1629 9L8.2066 3.0455C7.76713 2.60616 7.76713 1.89384 8.2066 1.4545Z"
      fill={props.color}
    />
  </svg>
);
SvgDoubleChevronLargeRight.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDoubleChevronLargeRight.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgDoubleChevronLargeRight.displayName = "SvgDoubleChevronLargeRight";
const Memo = memo(SvgDoubleChevronLargeRight);
export default Memo;
