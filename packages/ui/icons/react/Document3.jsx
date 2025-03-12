import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDocument3 = (props) => (
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
      d="M3.42974 18L3.375 0H12.1712L15.375 3V18H3.42974ZM14.375 4.5H10.875V1H4.37506V17H14.3751L14.375 4.5Z"
      fill={props.color}
    />
  </svg>
);
SvgDocument3.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDocument3.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgDocument3.displayName = "SvgDocument3";
const Memo = memo(SvgDocument3);
export default Memo;
