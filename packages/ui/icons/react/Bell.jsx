import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgBell = (props) => (
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
      d="M15.4169 8.1V12.4383L17.325 14.3455V15.3H1.125V14.3455L3.03311 12.4383V8.1C3.03311 5.175 5.0581 2.72637 7.79414 2.07949V1.43086C7.79414 0.639844 8.4331 0 9.225 0C10.0169 0 10.6559 0.639844 10.6559 1.43086V2.07949C13.3919 2.72637 15.4169 5.175 15.4169 8.1ZM9.225 18C8.23447 18 7.43379 17.1984 7.43379 16.2088H11.0162C11.0162 17.1984 10.2146 18 9.225 18Z"
      fill={props.color}
    />
  </svg>
);
SvgBell.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgBell.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgBell.displayName = "SvgBell";
const Memo = memo(SvgBell);
export default Memo;
