import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgMapPins = (props) => (
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
    <g clipPath="url(#clip0_19994_3844)">
      <path
        d="M0 7.09375C0 6.27324 0.316071 5.48633 0.87868 4.90614C1.44129 4.32595 2.20435 4 3 4C3.79565 4 4.55871 4.32595 5.12132 4.90614C5.68393 5.48633 6 6.27324 6 7.09375C6 7.91426 5.68393 8.70117 5.12132 9.28136C4.55871 9.86155 3.79565 10.1875 3 10.1875C2.20435 10.1875 1.44129 9.86155 0.87868 9.28136C0.316071 8.70117 0 7.91426 0 7.09375ZM3 5.71875C3.18333 5.71875 3.33333 5.56406 3.33333 5.375C3.33333 5.18594 3.18333 5.03125 3 5.03125C1.89583 5.03125 1 5.95508 1 7.09375C1 7.28281 1.15 7.4375 1.33333 7.4375C1.51667 7.4375 1.66667 7.28281 1.66667 7.09375C1.66667 6.33535 2.26458 5.71875 3 5.71875ZM2.33333 14.3125V10.8127C2.55 10.8535 2.77292 10.875 3 10.875C3.22708 10.875 3.45 10.8535 3.66667 10.8127V14.3125C3.66667 14.6928 3.36875 15 3 15C2.63125 15 2.33333 14.6928 2.33333 14.3125Z"
        fill={props.color}
      />
      <path
        d="M6 3.09375C6 2.27324 6.31607 1.48633 6.87868 0.906138C7.44129 0.325948 8.20435 0 9 0C9.79565 0 10.5587 0.325948 11.1213 0.906138C11.6839 1.48633 12 2.27324 12 3.09375C12 3.91426 11.6839 4.70117 11.1213 5.28136C10.5587 5.86155 9.79565 6.1875 9 6.1875C8.20435 6.1875 7.44129 5.86155 6.87868 5.28136C6.31607 4.70117 6 3.91426 6 3.09375ZM9 1.71875C9.18333 1.71875 9.33333 1.56406 9.33333 1.375C9.33333 1.18594 9.18333 1.03125 9 1.03125C7.89583 1.03125 7 1.95508 7 3.09375C7 3.28281 7.15 3.4375 7.33333 3.4375C7.51667 3.4375 7.66667 3.28281 7.66667 3.09375C7.66667 2.33535 8.26458 1.71875 9 1.71875ZM8.33333 10.3125V6.8127C8.55 6.85352 8.77292 6.875 9 6.875C9.22708 6.875 9.45 6.85352 9.66667 6.8127V10.3125C9.66667 10.6928 9.36875 11 9 11C8.63125 11 8.33333 10.6928 8.33333 10.3125Z"
        fill={props.color}
      />
      <path
        d="M12 10.0938C12 9.27324 12.3161 8.48633 12.8787 7.90614C13.4413 7.32595 14.2044 7 15 7C15.7956 7 16.5587 7.32595 17.1213 7.90614C17.6839 8.48633 18 9.27324 18 10.0938C18 10.9143 17.6839 11.7012 17.1213 12.2814C16.5587 12.8616 15.7956 13.1875 15 13.1875C14.2044 13.1875 13.4413 12.8616 12.8787 12.2814C12.3161 11.7012 12 10.9143 12 10.0938ZM15 8.71875C15.1833 8.71875 15.3333 8.56406 15.3333 8.375C15.3333 8.18594 15.1833 8.03125 15 8.03125C13.8958 8.03125 13 8.95508 13 10.0938C13 10.2828 13.15 10.4375 13.3333 10.4375C13.5167 10.4375 13.6667 10.2828 13.6667 10.0938C13.6667 9.33535 14.2646 8.71875 15 8.71875ZM14.3333 17.3125V13.8127C14.55 13.8535 14.7729 13.875 15 13.875C15.2271 13.875 15.45 13.8535 15.6667 13.8127V17.3125C15.6667 17.6928 15.3688 18 15 18C14.6313 18 14.3333 17.6928 14.3333 17.3125Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_19994_3844">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgMapPins.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgMapPins.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgMapPins.displayName = "SvgMapPins";
const Memo = memo(SvgMapPins);
export default Memo;
