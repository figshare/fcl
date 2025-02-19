import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgZoomIn = (props) => (
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
    <g clipPath="url(#clip0_12864_33411)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8348 15.4452L14.6258 12.237C15.4125 11.0101 15.734 9.45076 15.734 7.88434C15.734 3.53072 12.2405 2.10208e-07 7.88507 2.10208e-07C3.5306 -0.00100455 0 3.60005 0 7.95467C0 12.3103 3.5306 15.7335 7.88507 15.7335C9.45144 15.7335 11.0108 15.412 12.2375 14.6263L15.4466 17.8365C15.6646 18.0545 16.0243 18.0545 16.2424 17.8365L17.8359 16.2429C18.0549 16.0229 18.0549 15.6642 17.8348 15.4452ZM7.88507 13.517C4.78048 13.517 2.25359 10.9539 2.25359 7.84917C2.25359 4.74548 4.78148 2.2175 7.88507 2.2175C10.9917 2.2175 13.5176 4.74548 13.5176 7.84917C13.5176 10.9539 10.9907 13.517 7.88507 13.517Z"
        fill={props.color}
      />
      <path
        d="M7.5 4C7.22386 4 7 4.22386 7 4.5V7H4.5C4.22386 7 4 7.22386 4 7.5V8.5C4 8.77614 4.22386 9 4.5 9H7V11.5C7 11.7761 7.22386 12 7.5 12H8.5C8.77614 12 9 11.7761 9 11.5V9H11.5C11.7761 9 12 8.77614 12 8.5V7.5C12 7.22386 11.7761 7 11.5 7H9V4.5C9 4.22386 8.77614 4 8.5 4H7.5Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33411">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgZoomIn.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgZoomIn.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgZoomIn.displayName = "SvgZoomIn";
const Memo = memo(SvgZoomIn);
export default Memo;
