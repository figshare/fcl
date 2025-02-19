import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgSortDownSolid = (props) => (
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
      d="M9.70625 15.7063C9.31563 16.0969 8.68125 16.0969 8.29063 15.7063L4.29063 11.7063C4.00313 11.4188 3.91875 10.9906 4.075 10.6156C4.23125 10.2406 4.59375 9.99689 5 9.99689H13C13.4031 9.99689 13.7688 10.2406 13.925 10.6156C14.0813 10.9906 13.9938 11.4188 13.7094 11.7063L9.70938 15.7063H9.70625Z"
      fill={props.color}
    />
  </svg>
);
SvgSortDownSolid.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgSortDownSolid.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgSortDownSolid.displayName = "SvgSortDownSolid";
const Memo = memo(SvgSortDownSolid);
export default Memo;
