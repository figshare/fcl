import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgRedo = (props) => (
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
      d="M14.112 5.30429V7.30681C14.112 7.50868 14.3637 7.61517 14.5216 7.48012L17.8646 4.62158C18.0451 4.46721 18.0451 4.19823 17.8646 4.04385L14.5216 1.18532C14.3637 1.05027 14.112 1.15676 14.112 1.35863V3.36115H7.5673C3.38799 3.36115 0 6.58005 0 10.5508C0 14.5215 3.38799 17.7404 7.5673 17.7404H15.2573C15.5284 17.7404 15.7482 17.5316 15.7482 17.274V16.2636C15.7482 16.006 15.5284 15.7972 15.2573 15.7972H7.5673C4.51754 15.7972 2.04522 13.4483 2.04522 10.5508C2.04522 7.65322 4.51754 5.30429 7.5673 5.30429H14.112Z"
      fill={props.color}
    />
  </svg>
);
SvgRedo.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgRedo.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgRedo.displayName = "SvgRedo";
const Memo = memo(SvgRedo);
export default Memo;
