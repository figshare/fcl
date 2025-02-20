import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgPause = (props) => (
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.375 0C3.82272 0 3.375 0.447716 3.375 1V17C3.375 17.5523 3.82272 18 4.375 18H7.375C7.92728 18 8.375 17.5523 8.375 17V1C8.375 0.447715 7.92728 0 7.375 0H4.375ZM11.375 0C10.8227 0 10.375 0.447716 10.375 1V17C10.375 17.5523 10.8227 18 11.375 18H14.375C14.9273 18 15.375 17.5523 15.375 17V1C15.375 0.447715 14.9273 0 14.375 0H11.375Z"
      fill={props.color}
    />
  </svg>
);
SvgPause.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgPause.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgPause.displayName = "SvgPause";
const Memo = memo(SvgPause);
export default Memo;
