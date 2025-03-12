import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgLineSeparator = (props) => (
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
      d="M12.5 3.375C12.7761 3.375 13 3.59886 13 3.875C13 4.15114 12.7761 4.375 12.5 4.375L5.5 4.375C5.22386 4.375 5 4.15114 5 3.875C5 3.59886 5.22386 3.375 5.5 3.375L12.5 3.375Z"
      fill={props.color}
    />
    <path
      d="M17 8.375C17.5523 8.375 18 8.82272 18 9.375C18 9.92729 17.5523 10.375 17 10.375L1 10.375C0.447716 10.375 0 9.92728 0 9.375C0 8.82271 0.447716 8.375 1 8.375L17 8.375Z"
      fill={props.color}
    />
    <path
      d="M13 5.875C13 5.59886 12.7761 5.375 12.5 5.375L5.5 5.375C5.22386 5.375 5 5.59886 5 5.875C5 6.15114 5.22386 6.375 5.5 6.375L12.5 6.375C12.7761 6.375 13 6.15114 13 5.875Z"
      fill={props.color}
    />
    <path
      d="M12.5 12.375C12.7761 12.375 13 12.5989 13 12.875C13 13.1511 12.7761 13.375 12.5 13.375H5.5C5.22386 13.375 5 13.1511 5 12.875C5 12.5989 5.22386 12.375 5.5 12.375H12.5Z"
      fill={props.color}
    />
    <path
      d="M13 14.875C13 14.5989 12.7761 14.375 12.5 14.375H5.5C5.22386 14.375 5 14.5989 5 14.875C5 15.1511 5.22386 15.375 5.5 15.375H12.5C12.7761 15.375 13 15.1511 13 14.875Z"
      fill={props.color}
    />
  </svg>
);
SvgLineSeparator.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgLineSeparator.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgLineSeparator.displayName = "SvgLineSeparator";
const Memo = memo(SvgLineSeparator);
export default Memo;
