import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgCollapseToLeft = (props) => (
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
    <g clipPath="url(#clip0_12864_34043)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2861 3.10714C10.2861 2.63376 9.90232 2.25 9.42894 2.25H0.85751C0.384121 2.25 0.000366211 2.63376 0.000366211 3.10714V15.1071C0.000366211 15.5805 0.384123 15.9643 0.85751 15.9643H9.42894C9.90232 15.9643 10.2861 15.5805 10.2861 15.1071V3.10714ZM1.71465 3.10714C1.24127 3.10714 0.85751 3.4909 0.85751 3.96429V14.25C0.85751 14.7234 1.24126 15.1071 1.71465 15.1071H8.57179C9.04518 15.1071 9.42894 14.7234 9.42894 14.25V3.96429C9.42894 3.4909 9.04518 3.10714 8.57179 3.10714H1.71465Z"
        fill={props.color}
      />
      <path
        d="M16.0767 12.3349C15.7976 12.6027 15.345 12.6027 15.0659 12.3349L12.2118 9.59687C11.9299 9.32642 11.9299 8.8879 12.2118 8.61742L15.0659 5.87941C15.345 5.61162 15.7976 5.61162 16.0767 5.87941C16.3559 6.1472 16.3559 6.58137 16.0767 6.84916L14.3931 8.46429H17.3575C17.7125 8.46429 18.0004 8.7521 18.0004 9.10714C18.0004 9.46218 17.7125 9.75 17.3575 9.75H14.3931L16.0767 11.3651C16.3559 11.6329 16.3559 12.0671 16.0767 12.3349Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_34043">
        <rect
          width={18}
          height={18}
          fill="white"
          transform="translate(0.000366211)"
        />
      </clipPath>
    </defs>
  </svg>
);
SvgCollapseToLeft.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgCollapseToLeft.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgCollapseToLeft.displayName = "SvgCollapseToLeft";
const Memo = memo(SvgCollapseToLeft);
export default Memo;
