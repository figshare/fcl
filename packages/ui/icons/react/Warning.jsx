import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgWarning = (props) => (
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
      d="M0.159737 15.6421L8.25268 1.59319C8.61228 0.968936 9.38772 0.968936 9.74732 1.59319L17.8403 15.6421C18.2515 16.3559 17.8211 17.325 17.0929 17.325H0.907059C0.178884 17.325 -0.251452 16.3559 0.159737 15.6421ZM9 5.75357C8.37868 5.75357 7.875 6.27164 7.875 6.91071V10.9607C7.875 11.5998 8.37868 12.1179 9 12.1179C9.62132 12.1179 10.125 11.5998 10.125 10.9607V6.91071C10.125 6.27164 9.62132 5.75357 9 5.75357ZM9 15.5893C9.62132 15.5893 10.125 15.0712 10.125 14.4321C10.125 13.7931 9.62132 13.275 9 13.275C8.37868 13.275 7.875 13.7931 7.875 14.4321C7.875 15.0712 8.37868 15.5893 9 15.5893Z"
      fill={props.color}
    />
  </svg>
);
SvgWarning.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgWarning.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgWarning.displayName = "SvgWarning";
const Memo = memo(SvgWarning);
export default Memo;
