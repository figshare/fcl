import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgAudioLow = (props) => (
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
      d="M10.3568 7.04061C10.705 7.478 10.8994 8.08044 10.8994 8.71902C10.8994 9.3576 10.705 9.96004 10.3568 10.3974C10.2569 10.523 10.2492 10.7061 10.359 10.8232L10.9554 11.4594C11.0652 11.5765 11.2502 11.5831 11.3576 11.4638C12.0378 10.7087 12.3528 9.69304 12.3528 8.71902C12.3528 7.74499 12.0378 6.72935 11.3576 5.9742C11.2502 5.85492 11.0652 5.86157 10.9554 5.97868L10.359 6.61485C10.2492 6.73196 10.2569 6.91501 10.3568 7.04061Z"
      fill={props.color}
    />
  </svg>
);
SvgAudioLow.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgAudioLow.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgAudioLow.displayName = "SvgAudioLow";
const Memo = memo(SvgAudioLow);
export default Memo;
