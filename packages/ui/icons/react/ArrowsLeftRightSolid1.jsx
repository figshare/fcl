import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgArrowsLeftRightSolid1 = (props) => (
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
    <g clipPath="url(#clip0_20403_22304)">
      <path
        d="M14.2945 13.1695L17.6695 9.79454C18.109 9.35509 18.109 8.64142 17.6695 8.20197L14.2945 4.82697C13.8551 4.38751 13.1414 4.38751 12.702 4.82697C12.2625 5.26642 12.2625 5.98009 12.702 6.41954L14.1574 7.87501H3.83907L5.29454 6.41954C5.734 5.98009 5.734 5.26642 5.29454 4.82697C4.85509 4.38751 4.14142 4.38751 3.70197 4.82697L0.326965 8.20197C-0.112488 8.64142 -0.112488 9.35509 0.326965 9.79454L3.70197 13.1695C4.14142 13.609 4.85509 13.609 5.29454 13.1695C5.734 12.7301 5.734 12.0164 5.29454 11.577L3.84259 10.125H14.1609L12.7055 11.5805C12.266 12.0199 12.266 12.7336 12.7055 13.1731C13.1449 13.6125 13.8586 13.6125 14.2981 13.1731L14.2945 13.1695Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_20403_22304">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgArrowsLeftRightSolid1.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgArrowsLeftRightSolid1.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgArrowsLeftRightSolid1.displayName = "SvgArrowsLeftRightSolid1";
const Memo = memo(SvgArrowsLeftRightSolid1);
export default Memo;
