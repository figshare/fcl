import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgEye = (props) => (
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
      d="M18 8.74363C18 9.57496 15.0417 14.175 9 14.175C3.51432 14.175 0 9.55444 0 8.74363C0 8.02029 3.43701 3.375 8.94846 3.375C14.8484 3.375 18 8.02029 18 8.74363ZM13.6018 8.78827C13.6018 6.39565 11.5306 4.45609 8.97552 4.45609C6.42047 4.45609 4.34925 6.39565 4.34925 8.78827C4.34925 11.1809 6.42047 13.1205 8.97552 13.1205C11.5306 13.1205 13.6018 11.1809 13.6018 8.78827ZM8.97552 5.26388C6.89656 5.26388 5.21124 6.84208 5.21124 8.78888C5.21124 10.7357 6.89656 12.3139 8.97552 12.3139C11.0545 12.3139 12.7398 10.7357 12.7398 8.78888C12.7398 6.84208 11.0538 5.26388 8.97552 5.26388Z"
      fill={props.color}
    />
  </svg>
);
SvgEye.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgEye.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgEye.displayName = "SvgEye";
const Memo = memo(SvgEye);
export default Memo;
