import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgLocationPin = (props) => (
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
      d="M9.51875 0C5.89307 0 3.79483 3.58126 4.71666 6.57077C5.80598 10.1052 9.51875 18 9.51875 18C9.51875 18 13.1217 10.0891 14.2659 6.57077C15.2521 3.53975 13.0185 0 9.51875 0ZM9.51875 8.59234C7.57728 8.59234 6.00026 6.99784 6.00026 5.03116C6.00026 3.06448 7.57594 1.46999 9.51875 1.46999C11.4602 1.46999 13.0373 3.06448 13.0373 5.03116C13.0373 6.99784 11.4602 8.59234 9.51875 8.59234Z"
      fill={props.color}
    />
  </svg>
);
SvgLocationPin.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgLocationPin.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgLocationPin.displayName = "SvgLocationPin";
const Memo = memo(SvgLocationPin);
export default Memo;
