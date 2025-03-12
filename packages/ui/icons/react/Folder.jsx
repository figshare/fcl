import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgFolder = (props) => (
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
      d="M1.63636 1.125C0.732625 1.125 0 1.85461 0 2.75463V14.162C0 15.0621 0.732625 15.7917 1.63636 15.7917H16.3636C17.2674 15.7917 18 15.0621 18 14.162V4.92747C18 4.02745 17.2674 3.29784 16.3636 3.29784H7.90909L5.63004 1.4821C5.33989 1.25094 4.97938 1.125 4.60781 1.125H1.63636Z"
      fill={props.color}
    />
  </svg>
);
SvgFolder.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgFolder.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgFolder.displayName = "SvgFolder";
const Memo = memo(SvgFolder);
export default Memo;
