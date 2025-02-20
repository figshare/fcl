import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgChevronRight = (props) => (
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
      d="M5.95473 3.7045C6.39438 3.26517 7.10718 3.26517 7.54682 3.7045L12.042 8.19655C12.486 8.64025 12.486 9.35969 12.042 9.80345L7.54682 14.2955C7.10718 14.7348 6.39438 14.7348 5.95473 14.2955C5.51509 13.8562 5.51509 13.1438 5.95473 12.7045L9.6618 9L5.95473 5.2955C5.51509 4.85616 5.51509 4.14384 5.95473 3.7045Z"
      fill={props.color}
    />
  </svg>
);
SvgChevronRight.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronRight.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgChevronRight.displayName = "SvgChevronRight";
const Memo = memo(SvgChevronRight);
export default Memo;
