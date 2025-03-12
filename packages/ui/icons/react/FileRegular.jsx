import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgFileRegular = (props) => (
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
      d="M13.5 16.3125C13.8094 16.3125 14.0625 16.0594 14.0625 15.75V5.625H11.25C10.6277 5.625 10.125 5.12227 10.125 4.5V1.6875H4.5C4.19062 1.6875 3.9375 1.94062 3.9375 2.25V15.75C3.9375 16.0594 4.19062 16.3125 4.5 16.3125H13.5ZM2.25 2.25C2.25 1.00898 3.25898 0 4.5 0H10.3184C10.916 0 11.4891 0.235547 11.9109 0.657422L15.0926 3.83906C15.5145 4.26094 15.75 4.83398 15.75 5.43164V15.75C15.75 16.991 14.741 18 13.5 18H4.5C3.25898 18 2.25 16.991 2.25 15.75V2.25Z"
      fill={props.color}
    />
  </svg>
);
SvgFileRegular.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgFileRegular.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgFileRegular.displayName = "SvgFileRegular";
const Memo = memo(SvgFileRegular);
export default Memo;
