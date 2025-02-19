import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgTimer = (props) => (
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
      d="M9.30682 16.3636C12.9218 16.3636 15.8523 13.4331 15.8523 9.81818C15.8523 6.20323 12.9218 3.27273 9.30682 3.27273C5.69186 3.27273 2.76136 6.20323 2.76136 9.81818C2.76136 13.4331 5.69186 16.3636 9.30682 16.3636ZM9.30682 18C13.8255 18 17.4886 14.3369 17.4886 9.81818C17.4886 5.29949 13.8255 1.63636 9.30682 1.63636C4.78812 1.63636 1.125 5.29949 1.125 9.81818C1.125 14.3369 4.78812 18 9.30682 18Z"
      fill={props.color}
    />
    <path
      d="M4.39773 0.818182C4.39773 0.366313 4.76404 0 5.21591 0H13.3977C13.8496 0 14.2159 0.366313 14.2159 0.818182C14.2159 1.27005 13.8496 1.63636 13.3977 1.63636H5.21591C4.76404 1.63636 4.39773 1.27005 4.39773 0.818182Z"
      fill={props.color}
    />
    <path
      d="M10.5628 7.124C10.8823 6.80448 11.4004 6.80448 11.7199 7.124C12.0394 7.44352 12.0394 7.96156 11.7199 8.28108L9.40571 10.5952C9.08619 10.9148 8.56815 10.9148 8.24863 10.5952C7.92911 10.2757 7.92911 9.75768 8.24863 9.43816L10.5628 7.124Z"
      fill={props.color}
    />
  </svg>
);
SvgTimer.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgTimer.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgTimer.displayName = "SvgTimer";
const Memo = memo(SvgTimer);
export default Memo;
