import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgDelete = (props) => (
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
      d="M6.975 8.1C6.72647 8.1 6.525 8.30147 6.525 8.55V13.95C6.525 14.1985 6.72647 14.4 6.975 14.4C7.22353 14.4 7.425 14.1985 7.425 13.95V8.55C7.425 8.30147 7.22353 8.1 6.975 8.1Z"
      fill={props.color}
    />
    <path
      d="M8.775 8.55C8.775 8.30147 8.97647 8.1 9.225 8.1C9.47353 8.1 9.675 8.30147 9.675 8.55V13.95C9.675 14.1985 9.47353 14.4 9.225 14.4C8.97647 14.4 8.775 14.1985 8.775 13.95V8.55Z"
      fill={props.color}
    />
    <path
      d="M11.475 8.1C11.2265 8.1 11.025 8.30147 11.025 8.55V13.95C11.025 14.1985 11.2265 14.4 11.475 14.4C11.7235 14.4 11.925 14.1985 11.925 13.95V8.55C11.925 8.30147 11.7235 8.1 11.475 8.1Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.025 4.5C1.52794 4.5 1.125 4.90294 1.125 5.4C1.125 5.89706 1.52794 6.3 2.025 6.3H2.925V16.2C2.925 17.1941 3.73089 18 4.725 18H13.725C14.7191 18 15.525 17.1941 15.525 16.2V6.3H16.425C16.9221 6.3 17.325 5.89706 17.325 5.4C17.325 4.90294 16.9221 4.5 16.425 4.5H2.025ZM13.725 6.3H4.725V16.2H13.725V6.3Z"
      fill={props.color}
    />
    <path
      d="M7.425 1.35H11.025C11.7706 1.35 12.375 1.95442 12.375 2.7H13.725C13.725 1.20883 12.5162 0 11.025 0H7.425C5.93383 0 4.725 1.20883 4.725 2.7H6.075C6.075 1.95442 6.67942 1.35 7.425 1.35Z"
      fill={props.color}
    />
  </svg>
);
SvgDelete.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDelete.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgDelete.displayName = "SvgDelete";
const Memo = memo(SvgDelete);
export default Memo;
