import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgLocationCrosshairs = (props) => (
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
    <g clipPath="url(#clip0_19987_3765)">
      <path
        d="M9 0C9.62227 0 10.125 0.502734 10.125 1.125V2.34492C12.9516 2.81602 15.184 5.04844 15.6551 7.875H16.875C17.4973 7.875 18 8.37773 18 9C18 9.62227 17.4973 10.125 16.875 10.125H15.6551C15.184 12.9516 12.9516 15.184 10.125 15.6551V16.875C10.125 17.4973 9.62227 18 9 18C8.37773 18 7.875 17.4973 7.875 16.875V15.6551C5.04844 15.184 2.81602 12.9516 2.34492 10.125H1.125C0.502734 10.125 0 9.62227 0 9C0 8.37773 0.502734 7.875 1.125 7.875H2.34492C2.81602 5.04844 5.04844 2.81602 7.875 2.34492V1.125C7.875 0.502734 8.37773 0 9 0ZM4.5 9C4.5 10.1935 4.97411 11.3381 5.81802 12.182C6.66193 13.0259 7.80653 13.5 9 13.5C10.1935 13.5 11.3381 13.0259 12.182 12.182C13.0259 11.3381 13.5 10.1935 13.5 9C13.5 7.80653 13.0259 6.66193 12.182 5.81802C11.3381 4.97411 10.1935 4.5 9 4.5C7.80653 4.5 6.66193 4.97411 5.81802 5.81802C4.97411 6.66193 4.5 7.80653 4.5 9ZM9 6.1875C9.74592 6.1875 10.4613 6.48382 10.9887 7.01126C11.5162 7.53871 11.8125 8.25408 11.8125 9C11.8125 9.74592 11.5162 10.4613 10.9887 10.9887C10.4613 11.5162 9.74592 11.8125 9 11.8125C8.25408 11.8125 7.53871 11.5162 7.01126 10.9887C6.48382 10.4613 6.1875 9.74592 6.1875 9C6.1875 8.25408 6.48382 7.53871 7.01126 7.01126C7.53871 6.48382 8.25408 6.1875 9 6.1875Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_19987_3765">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgLocationCrosshairs.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgLocationCrosshairs.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgLocationCrosshairs.displayName = "SvgLocationCrosshairs";
const Memo = memo(SvgLocationCrosshairs);
export default Memo;
