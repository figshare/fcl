import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgSquareSolid = (props) => (
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
      d="M1 3.25C1 2.00898 2.00898 1 3.25 1H14.5C15.741 1 16.75 2.00898 16.75 3.25V14.5C16.75 15.741 15.741 16.75 14.5 16.75H3.25C2.00898 16.75 1 15.741 1 14.5V3.25Z"
      fill={props.color}
    />
  </svg>
);
SvgSquareSolid.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgSquareSolid.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgSquareSolid.displayName = "SvgSquareSolid";
const Memo = memo(SvgSquareSolid);
export default Memo;
