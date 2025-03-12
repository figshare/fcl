import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgChevronLargeUp = (props) => (
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
      d="M1.4545 13.1703C1.01516 12.7308 1.01516 12.0181 1.4545 11.5785L8.19655 4.83297C8.64024 4.38905 9.35967 4.38896 9.80345 4.83297L16.5455 11.5785C16.9848 12.0181 16.9848 12.7308 16.5455 13.1703C16.1062 13.6099 15.3938 13.6099 14.9545 13.1703L9 7.21274L3.0455 13.1703C2.60616 13.6099 1.89384 13.6099 1.4545 13.1703Z"
      fill={props.color}
    />
  </svg>
);
SvgChevronLargeUp.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronLargeUp.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgChevronLargeUp.displayName = "SvgChevronLargeUp";
const Memo = memo(SvgChevronLargeUp);
export default Memo;
