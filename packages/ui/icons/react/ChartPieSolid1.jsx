import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgChartPieSolid1 = (props) => (
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
      d="M9.03439 7.96875V0.551172C9.03439 0.252344 9.26689 0 9.56582 0C13.6745 0 17.0059 3.33027 17.0059 7.4375C17.0059 7.73633 16.7535 7.96875 16.4545 7.96875H9.03439ZM0 9.03125C0 5.00371 2.99264 1.67012 6.87543 1.13887C7.18101 1.0957 7.44008 1.34141 7.44008 1.6502V9.5625L12.6382 14.7588C12.8607 14.9812 12.8441 15.3465 12.5884 15.5258C11.2863 16.4555 9.69204 17 7.97152 17C3.57058 17 0 13.434 0 9.03125ZM17.4842 9.5625C17.7931 9.5625 18.0356 9.82148 17.9957 10.127C17.7399 11.983 16.8465 13.6332 15.5411 14.8518C15.3418 15.0377 15.0296 15.0244 14.837 14.8285L9.56582 9.5625H17.4842Z"
      fill={props.color}
    />
  </svg>
);
SvgChartPieSolid1.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChartPieSolid1.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgChartPieSolid1.displayName = "SvgChartPieSolid1";
const Memo = memo(SvgChartPieSolid1);
export default Memo;
