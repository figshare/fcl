import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgDoubleChevronLargeLeft = (props) => (
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
      d="M16.5454 16.5455C16.1059 16.9848 15.3934 16.9848 14.9539 16.5455L8.2099 9.80345C7.76608 9.35976 7.76599 8.64033 8.2099 8.19655L14.9539 1.4545C15.3934 1.01516 16.1059 1.01516 16.5454 1.4545C16.9849 1.89384 16.9849 2.60615 16.5454 3.04549L10.5891 9L16.5454 14.9545C16.9849 15.3938 16.9849 16.1062 16.5454 16.5455Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.7934 16.5455C9.35393 16.9848 8.64141 16.9848 8.20194 16.5455L1.4579 9.80345C1.01408 9.35976 1.01399 8.64033 1.4579 8.19655L8.20194 1.4545C8.64141 1.01516 9.35393 1.01516 9.7934 1.4545C10.2329 1.89384 10.2329 2.60616 9.7934 3.04549L3.83713 9L9.7934 14.9545C10.2329 15.3938 10.2329 16.1062 9.7934 16.5455Z"
      fill={props.color}
    />
  </svg>
);
SvgDoubleChevronLargeLeft.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDoubleChevronLargeLeft.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgDoubleChevronLargeLeft.displayName = "SvgDoubleChevronLargeLeft";
const Memo = memo(SvgDoubleChevronLargeLeft);
export default Memo;
