import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgGrid9 = (props) => (
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
    <g clipPath="url(#clip0_12864_33413)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.125C0 1.57272 0.447715 1.125 1 1.125H2.6C3.15228 1.125 3.6 1.57272 3.6 2.125V3.725C3.6 4.27728 3.15228 4.725 2.6 4.725H1C0.447716 4.725 0 4.27728 0 3.725L0 2.125ZM7.2 2.125C7.2 1.57272 7.64772 1.125 8.2 1.125H9.8C10.3523 1.125 10.8 1.57272 10.8 2.125V3.725C10.8 4.27728 10.3523 4.725 9.8 4.725H8.2C7.64772 4.725 7.2 4.27728 7.2 3.725V2.125ZM15.4 1.125C14.8477 1.125 14.4 1.57272 14.4 2.125V3.725C14.4 4.27728 14.8477 4.725 15.4 4.725H17C17.5523 4.725 18 4.27728 18 3.725V2.125C18 1.57272 17.5523 1.125 17 1.125H15.4ZM0 8.425C0 7.87272 0.447715 7.425 1 7.425H2.6C3.15228 7.425 3.6 7.87271 3.6 8.425V10.025C3.6 10.5773 3.15228 11.025 2.6 11.025H1C0.447716 11.025 0 10.5773 0 10.025L0 8.425ZM8.2 7.425C7.64772 7.425 7.2 7.87272 7.2 8.425V10.025C7.2 10.5773 7.64772 11.025 8.2 11.025H9.8C10.3523 11.025 10.8 10.5773 10.8 10.025V8.425C10.8 7.87271 10.3523 7.425 9.8 7.425H8.2ZM14.4 8.425C14.4 7.87272 14.8477 7.425 15.4 7.425H17C17.5523 7.425 18 7.87271 18 8.425V10.025C18 10.5773 17.5523 11.025 17 11.025H15.4C14.8477 11.025 14.4 10.5773 14.4 10.025V8.425ZM1 13.725C0.447715 13.725 0 14.1727 0 14.725L0 16.325C0 16.8773 0.447716 17.325 1 17.325H2.6C3.15228 17.325 3.6 16.8773 3.6 16.325V14.725C3.6 14.1727 3.15228 13.725 2.6 13.725H1ZM7.2 14.725C7.2 14.1727 7.64772 13.725 8.2 13.725H9.8C10.3523 13.725 10.8 14.1727 10.8 14.725V16.325C10.8 16.8773 10.3523 17.325 9.8 17.325H8.2C7.64772 17.325 7.2 16.8773 7.2 16.325V14.725ZM15.4 13.725C14.8477 13.725 14.4 14.1727 14.4 14.725V16.325C14.4 16.8773 14.8477 17.325 15.4 17.325H17C17.5523 17.325 18 16.8773 18 16.325V14.725C18 14.1727 17.5523 13.725 17 13.725H15.4Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33413">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgGrid9.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgGrid9.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgGrid9.displayName = "SvgGrid9";
const Memo = memo(SvgGrid9);
export default Memo;
