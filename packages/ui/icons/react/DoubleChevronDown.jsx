import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDoubleChevronDown = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.2955 9.33195C14.7348 9.77144 14.7348 10.484 14.2955 10.9235L9.80345 15.4171C9.35974 15.8609 8.64031 15.861 8.19655 15.4171L3.70451 10.9235C3.26517 10.484 3.26517 9.77144 3.70451 9.33195C4.14385 8.89246 4.85616 8.89246 5.2955 9.33195L9 13.0377L12.7045 9.33195C13.1438 8.89246 13.8562 8.89246 14.2955 9.33195Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.2955 2.57962C14.7348 3.01911 14.7348 3.73167 14.2955 4.17116L9.80345 8.66475C9.35975 9.10861 8.64031 9.10867 8.19655 8.66475L3.70451 4.17116C3.26517 3.73167 3.26517 3.01911 3.70451 2.57962C4.14385 2.14013 4.85616 2.14013 5.2955 2.57962L9 6.2854L12.7045 2.57962C13.1438 2.14013 13.8562 2.14013 14.2955 2.57962Z"
      fill={props.color}
    />
  </svg>
);
SvgDoubleChevronDown.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgDoubleChevronDown.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgDoubleChevronDown.displayName = "SvgDoubleChevronDown";
const Memo = memo(SvgDoubleChevronDown);
export default Memo;
