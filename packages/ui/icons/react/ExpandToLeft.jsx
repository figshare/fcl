import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgExpandToLeft = (props) => (
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
    <g clipPath="url(#clip0_12864_34046)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.71465 3.10714C7.71465 2.63376 8.09841 2.25 8.57179 2.25H17.1432C17.6166 2.25 18.0004 2.63376 18.0004 3.10714V15.1071C18.0004 15.5805 17.6166 15.9643 17.1432 15.9643H8.57179C8.09841 15.9643 7.71465 15.5805 7.71465 15.1071V3.10714ZM16.2861 3.10714C16.7595 3.10714 17.1432 3.4909 17.1432 3.96429V14.25C17.1432 14.7234 16.7595 15.1071 16.2861 15.1071H9.42894C8.95555 15.1071 8.57179 14.7234 8.57179 14.25V3.96429C8.57179 3.4909 8.95555 3.10714 9.42894 3.10714H16.2861Z"
        fill={props.color}
      />
      <path
        d="M4.07673 12.3349C3.79759 12.6027 3.34502 12.6027 3.06588 12.3349L0.211814 9.59687C-0.0700986 9.32642 -0.070134 8.8879 0.211814 8.61742L3.06588 5.87941C3.34502 5.61162 3.79759 5.61162 4.07673 5.87941C4.35587 6.1472 4.35587 6.58137 4.07673 6.84916L2.39314 8.46429H5.35751C5.71255 8.46429 6.00037 8.7521 6.00037 9.10714C6.00037 9.46218 5.71255 9.75 5.35751 9.75H2.39314L4.07673 11.3651C4.35587 11.6329 4.35587 12.0671 4.07673 12.3349Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_34046">
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
SvgExpandToLeft.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgExpandToLeft.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgExpandToLeft.displayName = "SvgExpandToLeft";
const Memo = memo(SvgExpandToLeft);
export default Memo;
