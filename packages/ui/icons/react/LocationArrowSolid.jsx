import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgLocationArrowSolid = (props) => (
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
      d="M1.09177 2.69558C0.903296 2.2379 1.01099 1.71098 1.36101 1.36099C1.71103 1.01099 2.23799 0.903302 2.69571 1.09176L16.2349 6.63013C16.7811 6.8532 17.0888 7.43012 16.9773 8.00703C16.8658 8.58394 16.358 8.99932 15.7695 8.99932H8.99992V15.7684C8.99992 16.3569 8.58451 16.8607 8.00755 16.9761C7.43059 17.0915 6.85364 16.78 6.63055 16.2338L1.09177 2.69558Z"
      fill={props.color}
    />
  </svg>
);
SvgLocationArrowSolid.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgLocationArrowSolid.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgLocationArrowSolid.displayName = "SvgLocationArrowSolid";
const Memo = memo(SvgLocationArrowSolid);
export default Memo;
