import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgZoomOut = (props) => (
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
    <g clipPath="url(#clip0_12864_33412)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8348 15.4452L14.6258 12.237C15.4125 11.0101 15.734 9.45076 15.734 7.88434C15.734 3.53072 12.2405 2.10208e-07 7.88507 2.10208e-07C3.5306 -0.00100455 0 3.60005 0 7.95467C0 12.3103 3.5306 15.7335 7.88507 15.7335C9.45144 15.7335 11.0108 15.412 12.2375 14.6263L15.4466 17.8365C15.6646 18.0545 16.0243 18.0545 16.2424 17.8365L17.8359 16.2429C18.0549 16.0229 18.0549 15.6642 17.8348 15.4452ZM7.88507 13.517C4.78048 13.517 2.25359 10.9539 2.25359 7.84917C2.25359 4.74548 4.78148 2.2175 7.88507 2.2175C10.9917 2.2175 13.5176 4.74548 13.5176 7.84917C13.5176 10.9539 10.9907 13.517 7.88507 13.517Z"
        fill={props.color}
      />
      <path
        d="M11.5 7C11.7761 7 12 7.22386 12 7.5V8.5C12 8.77614 11.7761 9 11.5 9H4.5C4.22386 9 4 8.77614 4 8.5V7.5C4 7.22386 4.22386 7 4.5 7L11.5 7Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33412">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgZoomOut.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgZoomOut.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgZoomOut.displayName = "SvgZoomOut";
const Memo = memo(SvgZoomOut);
export default Memo;
