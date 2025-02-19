import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgFileLinesRegular = (props) => (
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
      d="M4.5 16.3125C4.19062 16.3125 3.9375 16.0594 3.9375 15.75V2.25C3.9375 1.94062 4.19062 1.6875 4.5 1.6875H10.125V4.5C10.125 5.12227 10.6277 5.625 11.25 5.625H14.0625V15.75C14.0625 16.0594 13.8094 16.3125 13.5 16.3125H4.5ZM4.5 0C3.25898 0 2.25 1.00898 2.25 2.25V15.75C2.25 16.991 3.25898 18 4.5 18H13.5C14.741 18 15.75 16.991 15.75 15.75V5.43164C15.75 4.83398 15.5145 4.26094 15.0926 3.83906L11.9074 0.657422C11.4855 0.235547 10.916 0 10.3184 0H4.5ZM6.46875 9C6.00117 9 5.625 9.37617 5.625 9.84375C5.625 10.3113 6.00117 10.6875 6.46875 10.6875H11.5312C11.9988 10.6875 12.375 10.3113 12.375 9.84375C12.375 9.37617 11.9988 9 11.5312 9H6.46875ZM6.46875 12.375C6.00117 12.375 5.625 12.7512 5.625 13.2188C5.625 13.6863 6.00117 14.0625 6.46875 14.0625H11.5312C11.9988 14.0625 12.375 13.6863 12.375 13.2188C12.375 12.7512 11.9988 12.375 11.5312 12.375H6.46875Z"
      fill={props.color}
    />
  </svg>
);
SvgFileLinesRegular.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgFileLinesRegular.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgFileLinesRegular.displayName = "SvgFileLinesRegular";
const Memo = memo(SvgFileLinesRegular);
export default Memo;
