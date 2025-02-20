import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgAddCircle = (props) => (
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
    <circle cx={9} cy={9} r={8.5} stroke={props.color} />
    <path
      d="M8.625 4.5C8.41789 4.5 8.25 4.66789 8.25 4.875V8.25H4.875C4.66789 8.25 4.5 8.41789 4.5 8.625V9.375C4.5 9.58211 4.66789 9.75 4.875 9.75H8.25V13.125C8.25 13.3321 8.41789 13.5 8.625 13.5H9.375C9.58211 13.5 9.75 13.3321 9.75 13.125V9.75H13.125C13.3321 9.75 13.5 9.58211 13.5 9.375V8.625C13.5 8.41789 13.3321 8.25 13.125 8.25H9.75V4.875C9.75 4.66789 9.58211 4.5 9.375 4.5H8.625Z"
      fill={props.color}
    />
  </svg>
);
SvgAddCircle.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgAddCircle.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgAddCircle.displayName = "SvgAddCircle";
const Memo = memo(SvgAddCircle);
export default Memo;
