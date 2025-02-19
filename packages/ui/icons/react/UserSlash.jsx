import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgUserSlash = (props) => (
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
      d="M1.97012 3.12764C1.71013 2.92264 1.33263 2.97014 1.12764 3.23014C0.922642 3.49013 0.970141 3.86763 1.23014 4.07262L16.0299 15.6724C16.2899 15.8774 16.6674 15.8299 16.8724 15.5699C17.0774 15.3099 17.0299 14.9324 16.7699 14.7274L9.83249 9.29003C11.1975 8.92504 12.1999 7.68006 12.1999 6.20008C12.1999 4.43262 10.7675 3.00014 9 3.00014C7.25503 3.00014 5.83756 4.39512 5.80006 6.13009L1.97012 3.12764ZM7.60752 10.6075C5.26257 10.735 3.4001 12.68 3.4001 15.0574C3.4001 15.4674 3.73259 15.7999 4.14259 15.7999H13.8574C13.9549 15.7999 14.0474 15.7824 14.1324 15.7474L7.60752 10.6075Z"
      fill={props.color}
    />
  </svg>
);
SvgUserSlash.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgUserSlash.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgUserSlash.displayName = "SvgUserSlash";
const Memo = memo(SvgUserSlash);
export default Memo;
