import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCheckmark2 = (props) => (
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
      d="M17.6234 2.62663C18.1255 3.12881 18.1255 3.94434 17.6234 4.44652L7.3388 14.7311C6.83663 15.2333 6.02109 15.2333 5.51892 14.7311L0.376632 9.5888C-0.125544 9.08663 -0.125544 8.27109 0.376632 7.76892C0.878808 7.26674 1.69434 7.26674 2.19652 7.76892L6.43087 11.9992L15.8075 2.62663C16.3097 2.12446 17.1252 2.12446 17.6274 2.62663H17.6234Z"
      fill={props.color}
    />
  </svg>
);
SvgCheckmark2.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgCheckmark2.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgCheckmark2.displayName = "SvgCheckmark2";
const Memo = memo(SvgCheckmark2);
export default Memo;
