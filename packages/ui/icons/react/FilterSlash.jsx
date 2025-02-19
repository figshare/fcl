import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgFilterSlash = (props) => (
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
    <g clipPath="url(#clip0_12864_33426)">
      <path
        d="M17.7919 0.208099C17.5144 -0.0693662 17.0646 -0.0693662 16.7871 0.208099L0.208099 16.7871C-0.0693662 17.0646 -0.0693662 17.5144 0.208099 17.7919C0.485563 18.0694 0.935423 18.0694 1.21289 17.7919L10.3169 8.68815C10.3168 8.6881 10.3169 8.6882 10.3169 8.68815L12.8242 6.18081C12.8241 6.18078 12.8242 6.18083 12.8242 6.18081L16.3767 2.62834C16.3766 2.62832 16.3767 2.62837 16.3767 2.62834L17.7919 1.21289C18.0694 0.935423 18.0694 0.485563 17.7919 0.208099Z"
        fill={props.color}
      />
      <path
        d="M5.39014 0.416197C4.99774 0.416197 4.67964 0.734296 4.67964 1.12669V2.54768H1.83767C1.44528 2.54768 1.12718 2.86577 1.12718 3.25817C1.12718 3.65056 1.44528 3.96866 1.83767 3.96866H4.67964V5.38965C4.67964 5.78204 4.99774 6.10014 5.39014 6.10014C5.78253 6.10014 6.10063 5.78204 6.10063 5.38965V1.12669C6.10063 0.734296 5.78253 0.416197 5.39014 0.416197Z"
        fill={props.color}
      />
      <path
        d="M8.23211 2.54768H12.4382L11.0172 3.96866H8.23211C7.83972 3.96866 7.52162 3.65056 7.52162 3.25817C7.52162 2.86577 7.83972 2.54768 8.23211 2.54768Z"
        fill={props.color}
      />
      <path
        d="M1.83767 8.23162H6.75423L5.33324 9.65261H1.83767C1.44528 9.65261 1.12718 9.33451 1.12718 8.94211C1.12718 8.54972 1.44528 8.23162 1.83767 8.23162Z"
        fill={props.color}
      />
      <path
        d="M4.67964 16.3349V16.7575C4.67964 17.1499 4.99774 17.468 5.39014 17.468C5.78253 17.468 6.10063 17.1499 6.10063 16.7575V14.914L4.67964 16.3349Z"
        fill={props.color}
      />
      <path
        d="M11.7846 11.0736V9.23001L13.2056 7.80902V8.23162H16.0475C16.4399 8.23162 16.758 8.54972 16.758 8.94211C16.758 9.33451 16.4399 9.65261 16.0475 9.65261H13.2056V11.0736C13.2056 11.466 12.8875 11.7841 12.4951 11.7841C12.1027 11.7841 11.7846 11.466 11.7846 11.0736Z"
        fill={props.color}
      />
      <path
        d="M8.23211 13.9156C7.83972 13.9156 7.52162 14.2337 7.52162 14.6261C7.52162 15.0185 7.83972 15.3365 8.23211 15.3365H16.0475C16.4399 15.3365 16.758 15.0185 16.758 14.6261C16.758 14.2337 16.4399 13.9156 16.0475 13.9156H8.23211Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33426">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgFilterSlash.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgFilterSlash.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgFilterSlash.displayName = "SvgFilterSlash";
const Memo = memo(SvgFilterSlash);
export default Memo;
