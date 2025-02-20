import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgDoubleChevronRight = (props) => (
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
      d="M9.33195 3.7045C9.77144 3.26517 10.484 3.26517 10.9235 3.7045L15.4171 8.19655C15.8609 8.64025 15.861 9.35969 15.4171 9.80345L10.9235 14.2955C10.484 14.7348 9.77144 14.7348 9.33195 14.2955C8.89246 13.8562 8.89246 13.1438 9.33195 12.7045L13.0377 9L9.33195 5.2955C8.89246 4.85616 8.89246 4.14384 9.33195 3.7045Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.57962 3.7045C3.01911 3.26517 3.73167 3.26517 4.17116 3.7045L8.66475 8.19655C9.10861 8.64025 9.10867 9.35969 8.66475 9.80345L4.17116 14.2955C3.73167 14.7348 3.01911 14.7348 2.57962 14.2955C2.14013 13.8562 2.14013 13.1438 2.57962 12.7045L6.2854 9L2.57962 5.2955C2.14013 4.85616 2.14013 4.14384 2.57962 3.7045Z"
      fill={props.color}
    />
  </svg>
);
SvgDoubleChevronRight.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDoubleChevronRight.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgDoubleChevronRight.displayName = "SvgDoubleChevronRight";
const Memo = memo(SvgDoubleChevronRight);
export default Memo;
