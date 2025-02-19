import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgRectangle = (props) => (
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
      d="M0 1.575C0 1.32647 0.201472 1.125 0.45 1.125H17.55C17.7985 1.125 18 1.32647 18 1.575V16.875C18 17.1235 17.7985 17.325 17.55 17.325H0.45C0.201472 17.325 0 17.1235 0 16.875V1.575ZM1.8 2.475C1.55147 2.475 1.35 2.67647 1.35 2.925V15.525C1.35 15.7735 1.55147 15.975 1.8 15.975H16.2C16.4485 15.975 16.65 15.7735 16.65 15.525V2.925C16.65 2.67647 16.4485 2.475 16.2 2.475H1.8Z"
      fill={props.color}
    />
  </svg>
);
SvgRectangle.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgRectangle.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgRectangle.displayName = "SvgRectangle";
const Memo = memo(SvgRectangle);
export default Memo;
