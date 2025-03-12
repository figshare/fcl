import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgGrid12 = (props) => (
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
      d="M1.63636 5.53378C2.5401 5.53378 3.27273 4.79868 3.27273 3.89189C3.27273 2.9851 2.5401 2.25 1.63636 2.25C0.732625 2.25 0 2.9851 0 3.89189C0 4.79868 0.732625 5.53378 1.63636 5.53378Z"
      fill={props.color}
    />
    <path
      d="M6.54545 5.53378C7.44919 5.53378 8.18182 4.79868 8.18182 3.89189C8.18182 2.9851 7.44919 2.25 6.54545 2.25C5.64172 2.25 4.90909 2.9851 4.90909 3.89189C4.90909 4.79868 5.64172 5.53378 6.54545 5.53378Z"
      fill={props.color}
    />
    <path
      d="M13.0909 3.89189C13.0909 4.79868 12.3583 5.53378 11.4545 5.53378C10.5508 5.53378 9.81818 4.79868 9.81818 3.89189C9.81818 2.9851 10.5508 2.25 11.4545 2.25C12.3583 2.25 13.0909 2.9851 13.0909 3.89189Z"
      fill={props.color}
    />
    <path
      d="M16.3636 5.53378C17.2674 5.53378 18 4.79868 18 3.89189C18 2.9851 17.2674 2.25 16.3636 2.25C15.4599 2.25 14.7273 2.9851 14.7273 3.89189C14.7273 4.79868 15.4599 5.53378 16.3636 5.53378Z"
      fill={props.color}
    />
    <path
      d="M3.27273 8.81757C3.27273 9.72436 2.5401 10.4595 1.63636 10.4595C0.732625 10.4595 0 9.72436 0 8.81757C0 7.91078 0.732625 7.17568 1.63636 7.17568C2.5401 7.17568 3.27273 7.91078 3.27273 8.81757Z"
      fill={props.color}
    />
    <path
      d="M6.54545 10.4595C7.44919 10.4595 8.18182 9.72436 8.18182 8.81757C8.18182 7.91078 7.44919 7.17568 6.54545 7.17568C5.64172 7.17568 4.90909 7.91078 4.90909 8.81757C4.90909 9.72436 5.64172 10.4595 6.54545 10.4595Z"
      fill={props.color}
    />
    <path
      d="M13.0909 8.81757C13.0909 9.72436 12.3583 10.4595 11.4545 10.4595C10.5508 10.4595 9.81818 9.72436 9.81818 8.81757C9.81818 7.91078 10.5508 7.17568 11.4545 7.17568C12.3583 7.17568 13.0909 7.91078 13.0909 8.81757Z"
      fill={props.color}
    />
    <path
      d="M16.3636 10.4595C17.2674 10.4595 18 9.72436 18 8.81757C18 7.91078 17.2674 7.17568 16.3636 7.17568C15.4599 7.17568 14.7273 7.91078 14.7273 8.81757C14.7273 9.72436 15.4599 10.4595 16.3636 10.4595Z"
      fill={props.color}
    />
    <path
      d="M3.27273 13.7432C3.27273 14.65 2.5401 15.3851 1.63636 15.3851C0.732625 15.3851 0 14.65 0 13.7432C0 12.8365 0.732625 12.1014 1.63636 12.1014C2.5401 12.1014 3.27273 12.8365 3.27273 13.7432Z"
      fill={props.color}
    />
    <path
      d="M6.54545 15.3851C7.44919 15.3851 8.18182 14.65 8.18182 13.7432C8.18182 12.8365 7.44919 12.1014 6.54545 12.1014C5.64172 12.1014 4.90909 12.8365 4.90909 13.7432C4.90909 14.65 5.64172 15.3851 6.54545 15.3851Z"
      fill={props.color}
    />
    <path
      d="M13.0909 13.7432C13.0909 14.65 12.3583 15.3851 11.4545 15.3851C10.5508 15.3851 9.81818 14.65 9.81818 13.7432C9.81818 12.8365 10.5508 12.1014 11.4545 12.1014C12.3583 12.1014 13.0909 12.8365 13.0909 13.7432Z"
      fill={props.color}
    />
    <path
      d="M16.3636 15.3851C17.2674 15.3851 18 14.65 18 13.7432C18 12.8365 17.2674 12.1014 16.3636 12.1014C15.4599 12.1014 14.7273 12.8365 14.7273 13.7432C14.7273 14.65 15.4599 15.3851 16.3636 15.3851Z"
      fill={props.color}
    />
  </svg>
);
SvgGrid12.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgGrid12.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgGrid12.displayName = "SvgGrid12";
const Memo = memo(SvgGrid12);
export default Memo;
