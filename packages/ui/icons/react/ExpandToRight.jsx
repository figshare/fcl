import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgExpandToRight = (props) => (
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
    <g clipPath="url(#clip0_12864_34045)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2861 3.10714C10.2861 2.63376 9.90232 2.25 9.42894 2.25H0.85751C0.384123 2.25 0.000366211 2.63376 0.000366211 3.10714V15.1071C0.000366211 15.5805 0.384123 15.9643 0.85751 15.9643H9.42894C9.90232 15.9643 10.2861 15.5805 10.2861 15.1071V3.10714ZM1.71465 3.10714C1.24126 3.10714 0.85751 3.4909 0.85751 3.96429V14.25C0.85751 14.7234 1.24126 15.1071 1.71465 15.1071H8.57179C9.04518 15.1071 9.42894 14.7234 9.42894 14.25V3.96429C9.42894 3.4909 9.04518 3.10714 8.57179 3.10714H1.71465Z"
        fill={props.color}
      />
      <path
        d="M13.924 12.3349C14.2031 12.6027 14.6557 12.6027 14.9349 12.3349L17.7889 9.59687C18.0708 9.32642 18.0709 8.8879 17.7889 8.61742L14.9349 5.87941C14.6557 5.61162 14.2031 5.61162 13.924 5.87941C13.6449 6.1472 13.6449 6.58137 13.924 6.84916L15.6076 8.46429H12.6432C12.2882 8.46429 12.0004 8.7521 12.0004 9.10714C12.0004 9.46218 12.2882 9.75 12.6432 9.75H15.6076L13.924 11.3651C13.6449 11.6329 13.6449 12.0671 13.924 12.3349Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_34045">
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
SvgExpandToRight.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgExpandToRight.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgExpandToRight.displayName = "SvgExpandToRight";
const Memo = memo(SvgExpandToRight);
export default Memo;
