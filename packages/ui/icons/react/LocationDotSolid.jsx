import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgLocationDotSolid = (props) => (
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
      d="M9.86406 17.5955C11.7344 15.3326 16 9.84814 16 6.76751C16 3.03128 12.8646 0 9 0C5.13542 0 2 3.03128 2 6.76751C2 9.84814 6.26562 15.3326 8.13594 17.5955C8.58437 18.1348 9.41562 18.1348 9.86406 17.5955ZM9 4.51168C9.61884 4.51168 10.2123 4.74934 10.6499 5.17239C11.0875 5.59545 11.3333 6.16923 11.3333 6.76751C11.3333 7.3658 11.0875 7.93958 10.6499 8.36263C10.2123 8.78568 9.61884 9.02335 9 9.02335C8.38116 9.02335 7.78767 8.78568 7.35008 8.36263C6.9125 7.93958 6.66667 7.3658 6.66667 6.76751C6.66667 6.16923 6.9125 5.59545 7.35008 5.17239C7.78767 4.74934 8.38116 4.51168 9 4.51168Z"
      fill={props.color}
    />
  </svg>
);
SvgLocationDotSolid.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgLocationDotSolid.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgLocationDotSolid.displayName = "SvgLocationDotSolid";
const Memo = memo(SvgLocationDotSolid);
export default Memo;
