import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCircleRegular = (props) => (
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
    <g clipPath="url(#clip0_19343_185)">
      <path
        d="M16.3125 9C16.3125 7.0606 15.5421 5.20064 14.1707 3.82928C12.7994 2.45792 10.9394 1.6875 9 1.6875C7.0606 1.6875 5.20064 2.45792 3.82928 3.82928C2.45792 5.20064 1.6875 7.0606 1.6875 9C1.6875 10.9394 2.45792 12.7994 3.82928 14.1707C5.20064 15.5421 7.0606 16.3125 9 16.3125C10.9394 16.3125 12.7994 15.5421 14.1707 14.1707C15.5421 12.7994 16.3125 10.9394 16.3125 9ZM0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_19343_185">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgCircleRegular.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgCircleRegular.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgCircleRegular.displayName = "SvgCircleRegular";
const Memo = memo(SvgCircleRegular);
export default Memo;
