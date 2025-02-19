import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDrawPolygon = (props) => (
  <svg
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    width={props.width ?? props.inline ? "1em" : "100%"}
    focusable={false}
    aria-hidden={true}
    role="img"
    alt={props.title}
    {...props}
  >
    <g clipPath="url(#clip0_19990_3781)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2C0 0.895431 0.895431 0 2 0C2.93192 0 3.71497 0.637386 3.93699 1.5H14.063C14.285 0.637386 15.0681 0 16 0C17.1046 0 18 0.895431 18 2C18 3.10457 17.1046 4 16 4C15.7308 4 15.474 3.9468 15.2395 3.85034L11.1933 9L15.2395 14.1497C15.474 14.0532 15.7308 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C15.0681 18 14.285 17.3626 14.063 16.5H3.93699C3.71497 17.3626 2.93192 18 2 18C0.895431 18 0 17.1046 0 16C0 15.0681 0.637386 14.285 1.5 14.063V3.93699C0.637386 3.71497 0 2.93192 0 2ZM3 3.73244V14.2676C3.30363 14.4432 3.5568 14.6964 3.73244 15H14L9.28571 9L14 3H3.73244C3.5568 3.30363 3.30363 3.5568 3 3.73244Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_19990_3781">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgDrawPolygon.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgDrawPolygon.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgDrawPolygon.displayName = "SvgDrawPolygon";
const Memo = memo(SvgDrawPolygon);
export default Memo;
