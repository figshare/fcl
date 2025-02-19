import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgUnlock = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2C7.61875 2 6.5 3.11875 6.5 4.5V6H14C15.1031 6 16 6.89687 16 8V14C16 15.1031 15.1031 16 14 16H4C2.89688 16 2 15.1031 2 14V8C2 6.89687 2.89688 6 4 6H4.5V4.5C4.5 2.01562 6.51562 0 9 0C10.7969 0 12.3438 1.05313 13.0656 2.57188C13.3031 3.06875 13.0875 3.66563 12.5906 3.90313C12.0938 4.14062 11.4969 3.92812 11.2594 3.42812C10.8562 2.58125 9.99687 2 9 2ZM9 13C10.1046 13 11 12.1046 11 11C11 9.89543 10.1046 9 9 9C7.89543 9 7 9.89543 7 11C7 12.1046 7.89543 13 9 13Z"
      fill={props.color}
    />
  </svg>
);
SvgUnlock.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgUnlock.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgUnlock.displayName = "SvgUnlock";
const Memo = memo(SvgUnlock);
export default Memo;
