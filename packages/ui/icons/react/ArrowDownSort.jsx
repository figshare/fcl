import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgArrowDownSort = (props) => (
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
    <path
      d="M8.38828 14.5828L4.28697 12.0024C4.02306 11.8363 3.67054 11.896 3.48136 12.1388L3.11966 12.603C2.91402 12.8669 2.98043 13.2428 3.26512 13.4265L8.65324 16.9025C8.85428 17.0322 9.11671 17.0325 9.31804 16.9032L14.7338 13.4261C15.0193 13.2428 15.0863 12.8662 14.8803 12.6019L14.5186 12.1377C14.3298 11.8954 13.9781 11.8354 13.7143 12.0005L9.58431 14.5848V1.34536C9.58431 1.15462 9.42366 1 9.2255 1H8.74709C8.54892 1 8.38828 1.15462 8.38828 1.34536V14.5828Z"
      fill={props.color}
    />
  </svg>
);
SvgArrowDownSort.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgArrowDownSort.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgArrowDownSort.displayName = "SvgArrowDownSort";
const Memo = memo(SvgArrowDownSort);
export default Memo;
