import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgBlockquote = (props) => (
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
    <g clipPath="url(#clip0_12864_34060)">
      <path
        d="M1.28571 0C0.575634 0 0 0.575634 0 1.28571V16.7143C0 17.4244 0.575634 18 1.28571 18C1.99579 18 2.57143 17.4244 2.57143 16.7143V1.28571C2.57143 0.575634 1.99579 0 1.28571 0Z"
        fill={props.color}
      />
      <path
        d="M18 2.57143C18 1.86135 17.4244 1.28571 16.7143 1.28571L6.42857 1.28571C5.71849 1.28571 5.14286 1.86135 5.14286 2.57143C5.14286 3.28151 5.71849 3.85714 6.42857 3.85714L16.7143 3.85714C17.4244 3.85714 18 3.28151 18 2.57143Z"
        fill={props.color}
      />
      <path
        d="M14.1429 7.71429C14.8529 7.71429 15.4286 8.28992 15.4286 9C15.4286 9.71008 14.8529 10.2857 14.1429 10.2857H6.42857C5.71849 10.2857 5.14286 9.71008 5.14286 9C5.14286 8.28992 5.71849 7.71428 6.42857 7.71428L14.1429 7.71429Z"
        fill={props.color}
      />
      <path
        d="M18 15.4286C18 14.7185 17.4244 14.1429 16.7143 14.1429H6.42857C5.71849 14.1429 5.14286 14.7185 5.14286 15.4286C5.14286 16.1387 5.71849 16.7143 6.42857 16.7143H16.7143C17.4244 16.7143 18 16.1387 18 15.4286Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_34060">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgBlockquote.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgBlockquote.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgBlockquote.displayName = "SvgBlockquote";
const Memo = memo(SvgBlockquote);
export default Memo;
