import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgShieldExclamation = (props) => (
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
    <g clipPath="url(#clip0_14904_103928)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.47111 0.137109C9.32345 0.0703125 9.16174 0.0351562 9.00002 0.0351562C8.8383 0.0351562 8.67658 0.0703125 8.53244 0.137109L1.909 2.94609C1.13556 3.27305 0.559 4.03594 0.562516 4.95703C0.580094 8.44453 2.01447 14.8254 8.07189 17.7258C8.659 18.007 9.34103 18.007 9.92814 17.7258C15.9856 14.8254 17.4199 8.44453 17.4375 4.95703C17.441 4.03594 16.8645 3.27305 16.091 2.94609L9.47111 0.137109ZM8.87946 3.375C9.32394 3.375 9.68303 3.7341 9.68303 4.17857V10.6071C9.68303 11.0516 9.32394 11.4107 8.87946 11.4107C8.43499 11.4107 8.07589 11.0516 8.07589 10.6071V4.17857C8.07589 3.7341 8.43499 3.375 8.87946 3.375ZM9.58973 14.3308C9.40135 14.5192 9.14586 14.625 8.87946 14.625C8.61306 14.625 8.35757 14.5192 8.1692 14.3308C7.98083 14.1424 7.875 13.8869 7.875 13.6205C7.875 13.3541 7.98083 13.0986 8.1692 12.9103C8.35757 12.7219 8.61306 12.6161 8.87946 12.6161C9.14586 12.6161 9.40135 12.7219 9.58973 12.9103C9.7781 13.0986 9.88393 13.3541 9.88393 13.6205C9.88393 13.8869 9.7781 14.1424 9.58973 14.3308Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_14904_103928">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgShieldExclamation.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgShieldExclamation.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgShieldExclamation.displayName = "SvgShieldExclamation";
const Memo = memo(SvgShieldExclamation);
export default Memo;
