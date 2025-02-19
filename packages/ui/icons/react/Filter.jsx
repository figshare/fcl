import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgFilter = (props) => (
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
      d="M4.875 0.75C4.875 0.335786 5.21079 0 5.625 0C6.03921 0 6.375 0.335786 6.375 0.75V5.25C6.375 5.66421 6.03921 6 5.625 6C5.21079 6 4.875 5.66421 4.875 5.25V3.75H1.875C1.46079 3.75 1.125 3.41421 1.125 3C1.125 2.58579 1.46079 2.25 1.875 2.25H4.875V0.75Z"
      fill={props.color}
    />
    <path
      d="M7.875 3C7.875 2.58579 8.21079 2.25 8.625 2.25H16.875C17.2892 2.25 17.625 2.58579 17.625 3C17.625 3.41421 17.2892 3.75 16.875 3.75H8.625C8.21079 3.75 7.875 3.41421 7.875 3Z"
      fill={props.color}
    />
    <path
      d="M1.875 8.25C1.46079 8.25 1.125 8.58579 1.125 9C1.125 9.41421 1.46079 9.75 1.875 9.75H10.125C10.5392 9.75 10.875 9.41421 10.875 9C10.875 8.58579 10.5392 8.25 10.125 8.25H1.875Z"
      fill={props.color}
    />
    <path
      d="M13.875 8.25V6.75C13.875 6.33579 13.5392 6 13.125 6C12.7108 6 12.375 6.33579 12.375 6.75V11.25C12.375 11.6642 12.7108 12 13.125 12C13.5392 12 13.875 11.6642 13.875 11.25V9.75H16.875C17.2892 9.75 17.625 9.41421 17.625 9C17.625 8.58579 17.2892 8.25 16.875 8.25H13.875Z"
      fill={props.color}
    />
    <path
      d="M1.125 15C1.125 14.5858 1.46079 14.25 1.875 14.25H4.875V12.75C4.875 12.3358 5.21079 12 5.625 12C6.03921 12 6.375 12.3358 6.375 12.75V17.25C6.375 17.6642 6.03921 18 5.625 18C5.21079 18 4.875 17.6642 4.875 17.25V15.75H1.875C1.46079 15.75 1.125 15.4142 1.125 15Z"
      fill={props.color}
    />
    <path
      d="M8.625 14.25C8.21079 14.25 7.875 14.5858 7.875 15C7.875 15.4142 8.21079 15.75 8.625 15.75H16.875C17.2892 15.75 17.625 15.4142 17.625 15C17.625 14.5858 17.2892 14.25 16.875 14.25H8.625Z"
      fill={props.color}
    />
  </svg>
);
SvgFilter.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgFilter.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgFilter.displayName = "SvgFilter";
const Memo = memo(SvgFilter);
export default Memo;
