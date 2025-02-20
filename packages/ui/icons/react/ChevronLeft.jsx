import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgChevronLeft = (props) => (
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
      d="M12.0453 14.2955C11.6056 14.7348 10.8928 14.7348 10.4532 14.2955L5.95803 9.80345C5.51402 9.35974 5.51396 8.64031 5.95803 8.19655L10.4532 3.70451C10.8928 3.26517 11.6056 3.26517 12.0453 3.70451C12.4849 4.14385 12.4849 4.85616 12.0453 5.2955L8.3382 9L12.0453 12.7045C12.4849 13.1438 12.4849 13.8562 12.0453 14.2955Z"
      fill={props.color}
    />
  </svg>
);
SvgChevronLeft.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronLeft.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgChevronLeft.displayName = "SvgChevronLeft";
const Memo = memo(SvgChevronLeft);
export default Memo;
