import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgFileShield = (props) => (
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
    <g clipPath="url(#clip0_14904_103960)">
      <path
        d="M0 2.25C0 1.00898 0.896875 0 2 0H7V4.5C7 5.12227 7.44688 5.625 8 5.625H12V7.27734L9.1 8.58164C8.43438 8.88047 8 9.60469 8 10.4098C8 12.3996 8.59063 15.6129 10.9438 17.7328C10.6625 17.9016 10.3406 18 10 18H2C0.896875 18 0 16.991 0 15.75V2.25ZM12 4.5H8V0L12 4.5ZM13.2219 7.93477C13.4 7.85391 13.6 7.85391 13.7781 7.93477L17.5281 9.62227C17.8125 9.75234 18 10.0617 18 10.4062C18 12.6316 17.1906 16.3406 13.7875 17.9367C13.6031 18.0246 13.3938 18.0246 13.2094 17.9367C9.80938 16.3406 9 12.6316 9 10.4062C9 10.0617 9.1875 9.75234 9.47188 9.62227L13.2219 7.93477ZM16.4813 10.9688L13.5 9.62578V16.2316C15.6313 15.0715 16.3594 12.7512 16.4813 10.9688Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_14904_103960">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgFileShield.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgFileShield.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgFileShield.displayName = "SvgFileShield";
const Memo = memo(SvgFileShield);
export default Memo;
