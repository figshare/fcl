import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgSortSolid = (props) => (
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
      d="M8.29375 2.29376C8.68437 1.90314 9.31875 1.90314 9.70937 2.29376L13.7094 6.29376C13.9969 6.58126 14.0813 7.00939 13.925 7.38439C13.7688 7.75939 13.4062 8.00314 13 8.00314H5C4.59688 8.00314 4.23125 7.75939 4.075 7.38439C3.91875 7.00939 4.00625 6.58126 4.29063 6.29376L8.29063 2.29376H8.29375ZM8.29375 15.7094L4.29375 11.7094C4.00625 11.4219 3.92188 10.9938 4.07813 10.6188C4.23438 10.2438 4.59688 10 5.00313 10H13C13.4031 10 13.7688 10.2438 13.925 10.6188C14.0813 10.9938 13.9938 11.4219 13.7094 11.7094L9.70937 15.7094C9.31875 16.1 8.68437 16.1 8.29375 15.7094Z"
      fill={props.color}
    />
  </svg>
);
SvgSortSolid.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgSortSolid.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgSortSolid.displayName = "SvgSortSolid";
const Memo = memo(SvgSortSolid);
export default Memo;
