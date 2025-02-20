import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgDownload = (props) => (
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
    <g clipPath="url(#clip0_12864_33416)">
      <path
        d="M16.75 12.375C16.1977 12.375 15.75 12.8227 15.75 13.375V15.25C15.75 15.5261 15.5261 15.75 15.25 15.75H2.75C2.47386 15.75 2.25 15.5261 2.25 15.25V13.375C2.25 12.8227 1.80228 12.375 1.25 12.375H1C0.447715 12.375 0 12.8227 0 13.375V15.75C0 16.9875 1.0125 18 2.25 18H15.75C16.9875 18 18 16.9875 18 15.75V13.375C18 12.8227 17.5523 12.375 17 12.375H16.75ZM13.9179 8.58211C14.3084 8.19158 14.3084 7.55842 13.9179 7.16789L13.7445 6.99449C13.3545 6.6045 12.7224 6.60389 12.3316 6.99312L10.125 9.19125V1C10.125 0.447715 9.67729 0 9.125 0H8.875C8.32271 0 7.875 0.447715 7.875 1V9.19125L5.66835 6.99312C5.27761 6.60389 4.6455 6.6045 4.25551 6.99449L4.08211 7.16789C3.69158 7.55842 3.69158 8.19158 4.08211 8.58211L9 13.5L13.9179 8.58211Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33416">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgDownload.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDownload.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgDownload.displayName = "SvgDownload";
const Memo = memo(SvgDownload);
export default Memo;
