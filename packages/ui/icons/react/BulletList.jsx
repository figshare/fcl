import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgBulletList = (props) => (
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
      d="M3 5.25C3 4.83579 3.33579 4.5 3.75 4.5H17.25C17.6642 4.5 18 4.83579 18 5.25C18 5.66421 17.6642 6 17.25 6H3.75C3.33579 6 3 5.66421 3 5.25Z"
      fill={props.color}
    />
    <path
      d="M3 9C3 8.58579 3.33579 8.25 3.75 8.25H17.25C17.6642 8.25 18 8.58579 18 9C18 9.41421 17.6642 9.75 17.25 9.75H3.75C3.33579 9.75 3 9.41421 3 9Z"
      fill={props.color}
    />
    <path
      d="M3.75 12C3.33579 12 3 12.3358 3 12.75C3 13.1642 3.33579 13.5 3.75 13.5H17.25C17.6642 13.5 18 13.1642 18 12.75C18 12.3358 17.6642 12 17.25 12H3.75Z"
      fill={props.color}
    />
    <path
      d="M0 5.25C0 4.83579 0.335786 4.5 0.75 4.5C1.16421 4.5 1.5 4.83579 1.5 5.25C1.5 5.66421 1.16421 6 0.75 6C0.335786 6 0 5.66421 0 5.25Z"
      fill={props.color}
    />
    <path
      d="M0 9C0 8.58579 0.335786 8.25 0.75 8.25C1.16421 8.25 1.5 8.58579 1.5 9C1.5 9.41421 1.16421 9.75 0.75 9.75C0.335786 9.75 0 9.41421 0 9Z"
      fill={props.color}
    />
    <path
      d="M0.75 12C0.335786 12 0 12.3358 0 12.75C0 13.1642 0.335786 13.5 0.75 13.5C1.16421 13.5 1.5 13.1642 1.5 12.75C1.5 12.3358 1.16421 12 0.75 12Z"
      fill={props.color}
    />
  </svg>
);
SvgBulletList.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgBulletList.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgBulletList.displayName = "SvgBulletList";
const Memo = memo(SvgBulletList);
export default Memo;
