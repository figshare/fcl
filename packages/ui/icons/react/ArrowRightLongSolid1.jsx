import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgArrowRightLongSolid1 = (props) => (
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
      d="M17.6695 9.79453C18.109 9.35508 18.109 8.6414 17.6695 8.20195L13.1695 3.70195C12.7301 3.2625 12.0164 3.2625 11.577 3.70195C11.1375 4.1414 11.1375 4.85508 11.577 5.29453L14.1574 7.875H1.125C0.502734 7.875 0 8.37773 0 9C0 9.62226 0.502734 10.125 1.125 10.125H14.1574L11.577 12.7055C11.1375 13.1449 11.1375 13.8586 11.577 14.298C12.0164 14.7375 12.7301 14.7375 13.1695 14.298L17.6695 9.79804V9.79453Z"
      fill={props.color}
    />
  </svg>
);
SvgArrowRightLongSolid1.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgArrowRightLongSolid1.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgArrowRightLongSolid1.displayName = "SvgArrowRightLongSolid1";
const Memo = memo(SvgArrowRightLongSolid1);
export default Memo;
