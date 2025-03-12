import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDoubleChevronLeft = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.66805 3.7045C8.22856 3.26516 7.516 3.26516 7.07651 3.7045L2.58292 8.19655C2.13906 8.64026 2.139 9.35969 2.58292 9.80345L7.07651 14.2955C7.516 14.7348 8.22856 14.7348 8.66805 14.2955C9.10754 13.8562 9.10754 13.1438 8.66805 12.7045L4.96227 9L8.66805 5.2955C9.10754 4.85616 9.10754 4.14384 8.66805 3.7045Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.4204 3.7045C14.9809 3.26516 14.2683 3.26516 13.8288 3.7045L9.33525 8.19655C8.89139 8.64026 8.89133 9.35969 9.33525 9.80345L13.8288 14.2955C14.2683 14.7348 14.9809 14.7348 15.4204 14.2955C15.8599 13.8562 15.8599 13.1438 15.4204 12.7045L11.7146 9L15.4204 5.2955C15.8599 4.85616 15.8599 4.14384 15.4204 3.7045Z"
      fill={props.color}
    />
  </svg>
);
SvgDoubleChevronLeft.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDoubleChevronLeft.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgDoubleChevronLeft.displayName = "SvgDoubleChevronLeft";
const Memo = memo(SvgDoubleChevronLeft);
export default Memo;
