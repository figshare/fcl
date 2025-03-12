import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgPhoto = (props) => (
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
      d="M6.75 7.5C7.37132 7.5 7.875 6.97767 7.875 6.33333C7.875 5.689 7.37132 5.16667 6.75 5.16667C6.12868 5.16667 5.625 5.689 5.625 6.33333C5.625 6.97767 6.12868 7.5 6.75 7.5Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.125 2.25C0.50368 2.25 0 2.77233 0 3.41667V15.0833C0 15.7277 0.50368 16.25 1.125 16.25H16.875C17.4963 16.25 18 15.7277 18 15.0833V3.41667C18 2.77233 17.4963 2.25 16.875 2.25H1.125ZM16.875 4C16.875 3.67783 16.6232 3.41667 16.3125 3.41667H1.6875C1.37684 3.41667 1.125 3.67783 1.125 4V13.9167C1.35796 13.9167 1.78389 13.3163 2.28294 12.6129C2.98888 11.6179 3.84115 10.4167 4.50054 10.4167C5.0566 10.4167 5.59882 10.9862 6.14751 11.5624C6.70946 12.1527 7.2782 12.75 7.87555 12.75C8.7193 12.75 9.42242 11.2917 10.1255 9.83333C10.8287 8.375 11.5318 6.91667 12.3755 6.91667C13.4454 6.91667 14.7413 9.26122 15.69 10.9776C16.2372 11.9676 16.6689 12.7486 16.875 12.75V4Z"
      fill={props.color}
    />
  </svg>
);
SvgPhoto.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgPhoto.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgPhoto.displayName = "SvgPhoto";
const Memo = memo(SvgPhoto);
export default Memo;
