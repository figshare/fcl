import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgMore = (props) => (
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
      d="M3.6 8.55C3.6 9.54411 2.79411 10.35 1.8 10.35C0.805887 10.35 0 9.54411 0 8.55C0 7.55589 0.805887 6.75 1.8 6.75C2.79411 6.75 3.6 7.55589 3.6 8.55Z"
      fill={props.color}
    />
    <path
      d="M10.8 8.55C10.8 9.54411 9.99411 10.35 9 10.35C8.00589 10.35 7.2 9.54411 7.2 8.55C7.2 7.55589 8.00589 6.75 9 6.75C9.99411 6.75 10.8 7.55589 10.8 8.55Z"
      fill={props.color}
    />
    <path
      d="M16.2 10.35C17.1941 10.35 18 9.54411 18 8.55C18 7.55589 17.1941 6.75 16.2 6.75C15.2059 6.75 14.4 7.55589 14.4 8.55C14.4 9.54411 15.2059 10.35 16.2 10.35Z"
      fill={props.color}
    />
  </svg>
);
SvgMore.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgMore.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgMore.displayName = "SvgMore";
const Memo = memo(SvgMore);
export default Memo;
