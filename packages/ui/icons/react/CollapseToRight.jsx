import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCollapseToRight = (props) => (
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
    <g clipPath="url(#clip0_12864_34044)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.71465 3.10714C7.71465 2.63376 8.09841 2.25 8.57179 2.25H17.1432C17.6166 2.25 18.0004 2.63376 18.0004 3.10714V15.1071C18.0004 15.5805 17.6166 15.9643 17.1432 15.9643H8.57179C8.09841 15.9643 7.71465 15.5805 7.71465 15.1071V3.10714ZM16.2861 3.10714C16.7595 3.10714 17.1432 3.4909 17.1432 3.96429V14.25C17.1432 14.7234 16.7595 15.1071 16.2861 15.1071H9.42894C8.95555 15.1071 8.57179 14.7234 8.57179 14.25V3.96429C8.57179 3.4909 8.95555 3.10714 9.42894 3.10714H16.2861Z"
        fill={props.color}
      />
      <path
        d="M1.92401 12.3349C2.20314 12.6027 2.65572 12.6027 2.93486 12.3349L5.78892 9.59687C6.07083 9.32642 6.07087 8.8879 5.78892 8.61742L2.93486 5.87941C2.65572 5.61162 2.20314 5.61162 1.92401 5.87941C1.64487 6.1472 1.64487 6.58137 1.92401 6.84916L3.60759 8.46429H0.643223C0.288183 8.46429 0.000366211 8.7521 0.000366211 9.10714C0.000366211 9.46218 0.288183 9.75 0.643223 9.75H3.60759L1.92401 11.3651C1.64487 11.6329 1.64487 12.0671 1.92401 12.3349Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_34044">
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
SvgCollapseToRight.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgCollapseToRight.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgCollapseToRight.displayName = "SvgCollapseToRight";
const Memo = memo(SvgCollapseToRight);
export default Memo;
