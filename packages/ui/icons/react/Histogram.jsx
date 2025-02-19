import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgHistogram = (props) => (
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
      d="M18 15.3409V5.52273L15.4286 7.97727L12.8571 4.70455L10.2857 5.52273L7.71429 7.97727L5.14286 3.88636L2.57143 5.52273L0 2.25V15.3409H18Z"
      fill={props.color}
    />
  </svg>
);
SvgHistogram.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgHistogram.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgHistogram.displayName = "SvgHistogram";
const Memo = memo(SvgHistogram);
export default Memo;
