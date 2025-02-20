import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgClose = (props) => (
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
      d="M3.795 2.30799C3.38437 1.89734 2.71861 1.89734 2.30797 2.30799C1.89734 2.71865 1.89734 3.38445 2.30797 3.7951L7.51297 9.00039L2.30876 14.2049C1.89813 14.6156 1.89813 15.2814 2.30876 15.692C2.71939 16.1027 3.38515 16.1027 3.79579 15.692L9 10.4875L14.2042 15.692C14.6148 16.1027 15.2806 16.1027 15.6912 15.692C16.1019 15.2814 16.1019 14.6156 15.6912 14.2049L10.487 9.00039L15.692 3.7951C16.1027 3.38445 16.1027 2.71865 15.692 2.30799C15.2814 1.89734 14.6156 1.89734 14.205 2.30799L9 7.51328L3.795 2.30799Z"
      fill={props.color}
    />
  </svg>
);
SvgClose.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgClose.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgClose.displayName = "SvgClose";
const Memo = memo(SvgClose);
export default Memo;
