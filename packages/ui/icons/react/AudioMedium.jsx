import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgAudioMedium = (props) => (
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
      d="M0 7.2654C0 6.2965 0.484451 5.81205 1.45335 5.81205H3.87561L8.24786 2.31424C8.43818 2.16198 8.72011 2.29749 8.72011 2.54122V14.8963C8.72011 15.14 8.43818 15.2755 8.24786 15.1233L3.87561 11.6255H1.45335C0.484451 11.6255 0 11.141 0 10.1721V7.2654Z"
      fill={props.color}
    />
    <path
      d="M12.3139 12.7455C12.2103 12.6229 12.2267 12.4401 12.3423 12.3287C14.2941 10.4482 14.2941 6.98926 12.3423 5.10877C12.2267 4.99739 12.2103 4.8146 12.3139 4.69191L12.8762 4.02544C12.9797 3.90274 13.1639 3.88688 13.2813 3.99634C15.9189 6.4549 15.9189 10.9826 13.2813 13.4411C13.1639 13.5506 12.9797 13.5347 12.8762 13.412L12.3139 12.7455Z"
      fill={props.color}
    />
    <path
      d="M10.3568 7.04061C10.705 7.478 10.8994 8.08044 10.8994 8.71902C10.8994 9.3576 10.705 9.96004 10.3568 10.3974C10.2569 10.523 10.2492 10.7061 10.359 10.8232L10.9554 11.4594C11.0652 11.5765 11.2502 11.5831 11.3576 11.4638C12.0378 10.7087 12.3528 9.69304 12.3528 8.71902C12.3528 7.74499 12.0378 6.72935 11.3576 5.9742C11.2502 5.85492 11.0652 5.86157 10.9554 5.97868L10.359 6.61485C10.2492 6.73196 10.2569 6.91501 10.3568 7.04061Z"
      fill={props.color}
    />
  </svg>
);
SvgAudioMedium.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgAudioMedium.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgAudioMedium.displayName = "SvgAudioMedium";
const Memo = memo(SvgAudioMedium);
export default Memo;
