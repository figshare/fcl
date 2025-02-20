import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgChevronLargeLeft = (props) => (
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
      d="M13.1703 16.5455C12.7308 16.9848 12.0181 16.9848 11.5785 16.5455L4.83297 9.80345C4.38905 9.35976 4.38896 8.64033 4.83297 8.19655L11.5785 1.45451C12.0181 1.01517 12.7308 1.01517 13.1703 1.45451C13.6099 1.89385 13.6099 2.60616 13.1703 3.0455L7.21274 9L13.1703 14.9545C13.6099 15.3938 13.6099 16.1062 13.1703 16.5455Z"
      fill={props.color}
    />
  </svg>
);
SvgChevronLargeLeft.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronLargeLeft.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgChevronLargeLeft.displayName = "SvgChevronLargeLeft";
const Memo = memo(SvgChevronLargeLeft);
export default Memo;
