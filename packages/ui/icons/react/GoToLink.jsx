import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgGoToLink = (props) => (
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
    <g clipPath="url(#clip0_12864_33448)">
      <path
        d="M9 0.75C9 0.335786 9.33579 0 9.75 0H16.95C17.5299 0 18 0.470102 18 1.05V8.25C18 8.66421 17.6642 9 17.25 9C16.8358 9 16.5 8.66421 16.5 8.25V2.56077L9.53033 9.53044C9.23744 9.82334 8.76256 9.82334 8.46967 9.53044C8.17678 9.23755 8.17678 8.76268 8.46967 8.46978L15.4395 1.5H9.75C9.33579 1.5 9 1.16421 9 0.75Z"
        fill={props.color}
      />
      <path
        d="M1.5 3C0.671573 3 0 3.67157 0 4.5V16.5C0 17.3284 0.671572 18 1.5 18H13.5C14.3284 18 15 17.3284 15 16.5V12.75C15 12.3358 14.6642 12 14.25 12C13.8358 12 13.5 12.3358 13.5 12.75V16.5H1.5V4.5H5.25C5.66421 4.5 6 4.16421 6 3.75C6 3.33579 5.66421 3 5.25 3H1.5Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33448">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgGoToLink.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgGoToLink.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgGoToLink.displayName = "SvgGoToLink";
const Memo = memo(SvgGoToLink);
export default Memo;
