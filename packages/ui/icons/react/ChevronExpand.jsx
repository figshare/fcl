import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgChevronExpand = (props) => (
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
    <g clipPath="url(#clip0_12864_33099)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9428 11.4139C17.2639 11.8634 17.1598 12.4881 16.7103 12.8092L9.71431 17.8063C9.36306 18.0572 8.89119 18.0572 8.53991 17.8063L1.54395 12.8092C1.09442 12.4881 0.990301 11.8634 1.31139 11.4139C1.63248 10.9644 2.25719 10.8602 2.70672 11.1813L9.12711 15.7673L15.5475 11.1813C15.997 10.8602 16.6217 10.9644 16.9428 11.4139Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9428 6.57513C17.2639 6.1256 17.1598 5.50089 16.7103 5.1798L9.71431 0.182684C9.36306 -0.0682117 8.89119 -0.068226 8.53991 0.182684L1.54395 5.1798C1.09442 5.50089 0.990301 6.1256 1.31139 6.57513C1.63248 7.02466 2.25719 7.12878 2.70672 6.80768L9.12711 2.22169L15.5475 6.80768C15.997 7.12877 16.6217 7.02466 16.9428 6.57513Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33099">
        <rect width={18.0002} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgChevronExpand.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronExpand.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgChevronExpand.displayName = "SvgChevronExpand";
const Memo = memo(SvgChevronExpand);
export default Memo;
