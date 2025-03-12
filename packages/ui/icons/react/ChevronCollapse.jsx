import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgChevronCollapse = (props) => (
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
      d="M16.7067 1.81433C17.1561 1.49323 17.2602 0.8685 16.9392 0.418959C16.6182 -0.0305819 15.9936 -0.134703 15.5442 0.186397L9.12538 4.77254L2.70652 0.186397C2.2571 -0.134703 1.63254 -0.0305818 1.31153 0.418959C0.990516 0.8685 1.09461 1.49323 1.54403 1.81433L8.53832 6.8116C8.88951 7.06252 9.36127 7.06251 9.71243 6.8116L16.7067 1.81433Z"
      fill={props.color}
    />
    <path
      d="M16.7067 16.1857C17.1561 16.5068 17.2602 17.1315 16.9392 17.581C16.6182 18.0306 15.9936 18.1347 15.5442 17.8136L9.12538 13.2275L2.70652 17.8136C2.2571 18.1347 1.63254 18.0306 1.31153 17.581C0.990516 17.1315 1.09461 16.5068 1.54403 16.1857L8.53832 11.1884C8.88951 10.9375 9.36127 10.9375 9.71243 11.1884L16.7067 16.1857Z"
      fill={props.color}
    />
  </svg>
);
SvgChevronCollapse.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronCollapse.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgChevronCollapse.displayName = "SvgChevronCollapse";
const Memo = memo(SvgChevronCollapse);
export default Memo;
