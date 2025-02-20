import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgUsers = (props) => (
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
      d="M2.7 5.85C2.7 4.89522 3.07928 3.97955 3.75442 3.30442C4.42955 2.62928 5.34522 2.25 6.3 2.25C7.25478 2.25 8.17045 2.62928 8.84558 3.30442C9.52072 3.97955 9.9 4.89522 9.9 5.85C9.9 6.80478 9.52072 7.72045 8.84558 8.39559C8.17045 9.07072 7.25478 9.45 6.3 9.45C5.34522 9.45 4.42955 9.07072 3.75442 8.39559C3.07928 7.72045 2.7 6.80478 2.7 5.85ZM0 15.8147C0 13.0444 2.24437 10.8 5.01469 10.8H7.58531C10.3556 10.8 12.6 13.0444 12.6 15.8147C12.6 16.2759 12.2259 16.65 11.7647 16.65H0.835312C0.374063 16.65 0 16.2759 0 15.8147ZM17.1366 16.65H13.2581C13.41 16.3856 13.5 16.0791 13.5 15.75V15.525C13.5 13.8178 12.7378 12.285 11.5369 11.2556C11.6044 11.2528 11.6691 11.25 11.7366 11.25H13.4634C15.9694 11.25 18 13.2806 18 15.7866C18 16.2647 17.6119 16.65 17.1366 16.65ZM12.15 9.45C11.2781 9.45 10.4906 9.09563 9.91969 8.52469C10.4738 7.77656 10.8 6.85125 10.8 5.85C10.8 5.09625 10.6144 4.38469 10.2853 3.76031C10.8084 3.37781 11.4525 3.15 12.15 3.15C13.8909 3.15 15.3 4.55906 15.3 6.3C15.3 8.04094 13.8909 9.45 12.15 9.45Z"
      fill={props.color}
    />
  </svg>
);
SvgUsers.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgUsers.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgUsers.displayName = "SvgUsers";
const Memo = memo(SvgUsers);
export default Memo;
