import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDrawLine = (props) => (
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
    <g clipPath="url(#clip0_20236_7476)">
      <circle cx={16} cy={2} r={2} fill={props.color} />
      <circle cx={2} cy={16} r={2} fill={props.color} />
      <line
        x1={16.7071}
        y1={1.20711}
        x2={1.70711}
        y2={16.2071}
        stroke={props.color}
        strokeWidth={2}
      />
    </g>
    <defs>
      <clipPath id="clip0_20236_7476">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgDrawLine.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgDrawLine.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgDrawLine.displayName = "SvgDrawLine";
const Memo = memo(SvgDrawLine);
export default Memo;
