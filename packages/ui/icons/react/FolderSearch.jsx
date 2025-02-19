import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgFolderSearch = (props) => (
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
      d="M0 2.825C0 1.88612 0.732625 1.125 1.63636 1.125H4.60781C4.97938 1.125 5.33989 1.25638 5.63004 1.49752L7.90909 3.39167H16.3636C17.2674 3.39167 18 4.15278 18 5.09167V14.725C18 15.6639 17.2674 16.425 16.3636 16.425H1.63636C0.732625 16.425 0 15.6639 0 14.725V2.825ZM11.4744 10.5193L12.7581 11.8026C12.8461 11.8902 12.8461 12.0337 12.7585 12.1217L12.1211 12.7592C12.0339 12.8464 11.89 12.8464 11.8028 12.7592L10.5191 11.4751C10.0284 11.7894 9.4047 11.918 8.77815 11.918C7.03636 11.918 5.62412 10.5487 5.62412 8.80643C5.62412 7.06458 7.03636 5.62416 8.77815 5.62456C10.5203 5.62456 11.9177 7.03685 11.9177 8.7783C11.9177 9.40487 11.7891 10.0286 11.4744 10.5193ZM6.52556 8.76423C6.52556 10.0061 7.53631 11.0314 8.77815 11.0314C10.0204 11.0314 11.0311 10.0061 11.0311 8.76423C11.0311 7.52275 10.0208 6.51156 8.77815 6.51156C7.53671 6.51156 6.52556 7.52275 6.52556 8.76423Z"
      fill={props.color}
    />
  </svg>
);
SvgFolderSearch.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgFolderSearch.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgFolderSearch.displayName = "SvgFolderSearch";
const Memo = memo(SvgFolderSearch);
export default Memo;
