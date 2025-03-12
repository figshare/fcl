import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgRetry = (props) => (
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
      d="M15.4883 2.50978C15.6774 2.32135 16 2.45532 16 2.72232V6.43944V7.2798C16 7.76135 15.6081 8.15143 15.125 8.15143H14.2499V8.15612H10.5492C10.2817 8.15612 10.1479 7.83246 10.3374 7.64362L12.6708 5.31844C11.7239 4.38584 10.4367 3.7972 9.00039 3.7972C6.10047 3.7972 3.7501 6.13848 3.7501 9.02697C3.7501 11.9147 6.10126 14.2567 9.00039 14.2567C10.5437 14.2567 11.9292 13.5905 12.89 12.5337C13.0104 12.4012 13.2186 12.3892 13.345 12.5161L14.1527 13.3265C14.2628 13.437 14.2704 13.6139 14.165 13.7288C12.8852 15.1234 11.0461 16 9.00039 16C5.1341 16 2 12.8778 2 9.02697C2 5.17539 5.13488 2.05316 9.00039 2.05316C10.9199 2.05316 12.6528 2.82863 13.9158 4.07627L15.4883 2.50978Z"
      fill={props.color}
    />
  </svg>
);
SvgRetry.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgRetry.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgRetry.displayName = "SvgRetry";
const Memo = memo(SvgRetry);
export default Memo;
