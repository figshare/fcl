import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgSortUpSolid = (props) => (
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
      d="M9.70625 2.29376C9.31563 1.90314 8.68125 1.90314 8.29063 2.29376L4.29063 6.29376C4.00313 6.58126 3.91875 7.00939 4.075 7.38439C4.23125 7.75939 4.59375 8.00314 5 8.00314H13C13.4031 8.00314 13.7688 7.75939 13.925 7.38439C14.0813 7.00939 13.9938 6.58126 13.7094 6.29376L9.70938 2.29376H9.70625Z"
      fill={props.color}
    />
  </svg>
);
SvgSortUpSolid.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgSortUpSolid.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgSortUpSolid.displayName = "SvgSortUpSolid";
const Memo = memo(SvgSortUpSolid);
export default Memo;
