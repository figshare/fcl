import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgShare = (props) => (
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
      d="M14.625 5.4C16.1162 5.4 17.325 4.19117 17.325 2.7C17.325 1.20883 16.1162 0 14.625 0C13.1338 0 11.925 1.20883 11.925 2.7C11.925 2.87277 11.9412 3.04176 11.9722 3.20551L5.57039 6.93992C5.09972 6.54076 4.49048 6.3 3.825 6.3C2.33383 6.3 1.125 7.50883 1.125 9C1.125 10.4912 2.33383 11.7 3.825 11.7C4.49048 11.7 5.09972 11.4592 5.57039 11.0601L11.9722 14.7945C11.9412 14.9582 11.925 15.1272 11.925 15.3C11.925 16.7912 13.1338 18 14.625 18C16.1162 18 17.325 16.7912 17.325 15.3C17.325 13.8088 16.1162 12.6 14.625 12.6C13.9595 12.6 13.3503 12.8408 12.8796 13.2399L6.47776 9.50551C6.50877 9.34176 6.525 9.17277 6.525 9C6.525 8.82723 6.50877 8.65824 6.47776 8.49449L12.8796 4.76008C13.3503 5.15924 13.9595 5.4 14.625 5.4Z"
      fill={props.color}
    />
  </svg>
);
SvgShare.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgShare.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgShare.displayName = "SvgShare";
const Memo = memo(SvgShare);
export default Memo;
