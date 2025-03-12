import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgAudioMute = (props) => (
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
      d="M1.45335 5.81205C0.484451 5.81205 0 6.2965 0 7.2654V10.1721C0 11.141 0.484451 11.6255 1.45335 11.6255H3.87561L8.24786 15.1233C8.43818 15.2755 8.72011 15.14 8.72011 14.8963V2.54122C8.72011 2.29749 8.43818 2.16198 8.24786 2.31424L3.87561 5.81205H1.45335Z"
      fill={props.color}
    />
    <path
      d="M14.9081 11.4199C15.0216 11.5334 15.2056 11.5334 15.3192 11.4199L15.7813 10.9577C15.8949 10.8442 15.8949 10.6602 15.7813 10.5467L13.9534 8.71875L15.7813 6.89083C15.8949 6.77732 15.8949 6.59328 15.7813 6.47976L15.3192 6.01758C15.2056 5.90407 15.0216 5.90407 14.9081 6.01758L13.0802 7.8455L11.2523 6.01758C11.1387 5.90407 10.9547 5.90407 10.8412 6.01758L10.379 6.47976C10.2655 6.59328 10.2655 6.77732 10.379 6.89083L12.2069 8.71875L10.379 10.5467C10.2655 10.6602 10.2655 10.8442 10.379 10.9577L10.8412 11.4199C10.9547 11.5334 11.1387 11.5334 11.2523 11.4199L13.0802 9.592L14.9081 11.4199Z"
      fill={props.color}
    />
  </svg>
);
SvgAudioMute.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgAudioMute.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgAudioMute.displayName = "SvgAudioMute";
const Memo = memo(SvgAudioMute);
export default Memo;
