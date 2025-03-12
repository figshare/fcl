import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgLock = (props) => (
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
      d="M3.33456 6.54545H4.15809V4.90909C4.15809 2.19787 6.37033 0 9.09926 0C11.8282 0 14.0404 2.19788 14.0404 4.90909V6.54545H14.864C15.7736 6.54545 16.511 7.27808 16.511 8.18182V16.3636C16.511 17.2674 15.7736 18 14.864 18H3.33456C2.42491 18 1.6875 17.2674 1.6875 16.3636V8.18182C1.6875 7.27808 2.42491 6.54545 3.33456 6.54545ZM11.9816 4.90909V6.54545H6.21691V4.90909C6.21691 3.32755 7.50739 2.04545 9.09926 2.04545C10.6911 2.04545 11.9816 3.32755 11.9816 4.90909ZM9.09926 14.7273C10.4637 14.7273 11.5699 13.6283 11.5699 12.2727C11.5699 10.9171 10.4637 9.81818 9.09926 9.81818C7.7348 9.81818 6.62868 10.9171 6.62868 12.2727C6.62868 13.6283 7.7348 14.7273 9.09926 14.7273Z"
      fill={props.color}
    />
  </svg>
);
SvgLock.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgLock.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgLock.displayName = "SvgLock";
const Memo = memo(SvgLock);
export default Memo;
