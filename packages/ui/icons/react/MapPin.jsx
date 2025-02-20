import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgMapPin = (props) => (
  <svg
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 19"
    focusable={false}
    aria-hidden={true}
    role="img"
    alt={props.title}
    {...props}
  >
    <path
      d="M4 5.78125C4 4.51318 4.52678 3.29705 5.46447 2.4004C6.40215 1.50374 7.67392 1 9 1C10.3261 1 11.5979 1.50374 12.5355 2.4004C13.4732 3.29705 14 4.51318 14 5.78125C14 7.04932 13.4732 8.26545 12.5355 9.1621C11.5979 10.0588 10.3261 10.5625 9 10.5625C7.67392 10.5625 6.40215 10.0588 5.46447 9.1621C4.52678 8.26545 4 7.04932 4 5.78125ZM9 3.65625C9.30556 3.65625 9.55556 3.41719 9.55556 3.125C9.55556 2.83281 9.30556 2.59375 9 2.59375C7.15972 2.59375 5.66667 4.02148 5.66667 5.78125C5.66667 6.07344 5.91667 6.3125 6.22222 6.3125C6.52778 6.3125 6.77778 6.07344 6.77778 5.78125C6.77778 4.60918 7.77431 3.65625 9 3.65625ZM7.88889 16.9375V11.5287C8.25 11.5918 8.62153 11.625 9 11.625C9.37847 11.625 9.75 11.5918 10.1111 11.5287V16.9375C10.1111 17.5252 9.61458 18 9 18C8.38542 18 7.88889 17.5252 7.88889 16.9375Z"
      fill={props.color}
    />
  </svg>
);
SvgMapPin.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgMapPin.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgMapPin.displayName = "SvgMapPin";
const Memo = memo(SvgMapPin);
export default Memo;
