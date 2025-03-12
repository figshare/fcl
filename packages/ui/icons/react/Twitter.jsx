import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgTwitter = (props) => (
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
    <g clipPath="url(#clip0_16130_3891)">
      <path
        d="M2.57143 0C1.15313 0 0 1.15313 0 2.57143V15.4286C0 16.8469 1.15313 18 2.57143 18H15.4286C16.8469 18 18 16.8469 18 15.4286V2.57143C18 1.15313 16.8469 0 15.4286 0H2.57143ZM14.5085 3.375L10.3379 8.14018L15.2437 14.625H11.4027L8.39732 10.6915L4.95402 14.625H3.04554L7.50536 9.52634L2.80045 3.375H6.73795L9.45804 6.97098L12.6 3.375H14.5085ZM12.9897 13.4839L6.16339 4.4558H5.02634L11.929 13.4839H12.9857H12.9897Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_16130_3891">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgTwitter.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgTwitter.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgTwitter.displayName = "SvgTwitter";
const Memo = memo(SvgTwitter);
export default Memo;
