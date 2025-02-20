import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgArrowUpSort = (props) => (
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
      d="M8.38828 3.41721L4.28697 5.99762C4.02306 6.16367 3.67054 6.10397 3.48136 5.86119L3.11966 5.39699C2.91402 5.13309 2.98043 4.75717 3.26512 4.57351L8.65324 1.09746C8.85428 0.967771 9.11671 0.96749 9.31804 1.09675L14.7338 4.57388C15.0193 4.75721 15.0863 5.13377 14.8803 5.39807L14.5186 5.86227C14.3298 6.1046 13.9781 6.1646 13.7143 5.99949L9.58431 3.4152V16.6546C9.58431 16.8454 9.42366 17 9.2255 17H8.74709C8.54892 17 8.38828 16.8454 8.38828 16.6546V3.41721Z"
      fill={props.color}
    />
  </svg>
);
SvgArrowUpSort.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgArrowUpSort.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgArrowUpSort.displayName = "SvgArrowUpSort";
const Memo = memo(SvgArrowUpSort);
export default Memo;
