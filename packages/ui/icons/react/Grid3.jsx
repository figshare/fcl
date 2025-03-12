import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgGrid3 = (props) => (
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
      d="M0 2.025C0 1.52794 0.402944 1.125 0.9 1.125H17.1C17.5971 1.125 18 1.52794 18 2.025V3.825C18 4.32206 17.5971 4.725 17.1 4.725H0.9C0.402944 4.725 0 4.32206 0 3.825V2.025Z"
      fill={props.color}
    />
    <path
      d="M0 8.325C0 7.82794 0.402944 7.425 0.9 7.425H17.1C17.5971 7.425 18 7.82794 18 8.325V10.125C18 10.6221 17.5971 11.025 17.1 11.025H0.9C0.402944 11.025 0 10.6221 0 10.125V8.325Z"
      fill={props.color}
    />
    <path
      d="M0.9 13.725C0.402944 13.725 0 14.1279 0 14.625V16.425C0 16.9221 0.402944 17.325 0.9 17.325H17.1C17.5971 17.325 18 16.9221 18 16.425V14.625C18 14.1279 17.5971 13.725 17.1 13.725H0.9Z"
      fill={props.color}
    />
  </svg>
);
SvgGrid3.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgGrid3.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgGrid3.displayName = "SvgGrid3";
const Memo = memo(SvgGrid3);
export default Memo;
