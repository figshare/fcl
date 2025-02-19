import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgEyeSlash = (props) => (
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
      d="M16.0955 3.0455C16.5348 2.60616 16.5348 1.89384 16.0955 1.4545C15.6562 1.01517 14.9438 1.01517 14.5045 1.4545L1.9045 14.0545C1.46517 14.4938 1.46517 15.2062 1.9045 15.6455C2.34384 16.0848 3.05616 16.0848 3.4955 15.6455L16.0955 3.0455Z"
      fill={props.color}
    />
    <path
      d="M8.94846 3.15C9.78164 3.15 10.56 3.24264 11.2824 3.40379L10.2804 4.40581C9.86657 4.29209 9.42865 4.23109 8.97552 4.23109C6.42047 4.23109 4.34925 6.17065 4.34925 8.56327C4.34925 9.08758 4.44871 9.59014 4.63093 10.0553L2.84139 11.8448C1.02857 10.511 0 8.95728 0 8.51863C0 7.79529 3.43701 3.15 8.94846 3.15Z"
      fill={props.color}
    />
    <path
      d="M8.97552 5.03888C9.18796 5.03888 9.3963 5.05537 9.59916 5.08706L5.31135 9.37487C5.24588 9.11449 5.21124 8.84297 5.21124 8.56388C5.21124 6.61708 6.89656 5.03888 8.97552 5.03888Z"
      fill={props.color}
    />
    <path
      d="M8.37024 12.0435L12.6439 7.76989C12.7066 8.02508 12.7398 8.29085 12.7398 8.56388C12.7398 10.5107 11.0545 12.0889 8.97552 12.0889C8.76948 12.0889 8.5673 12.0734 8.37024 12.0435Z"
      fill={props.color}
    />
    <path
      d="M8.97552 12.8955C8.52881 12.8955 8.09689 12.8362 7.68824 12.7255L6.73208 13.6817C7.443 13.8519 8.20057 13.95 9 13.95C15.0417 13.95 18 9.34996 18 8.51863C18 8.12144 17.0497 6.54169 15.2159 5.19785L13.3264 7.08739C13.5046 7.54802 13.6018 8.04502 13.6018 8.56327C13.6018 10.9559 11.5306 12.8955 8.97552 12.8955Z"
      fill={props.color}
    />
  </svg>
);
SvgEyeSlash.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgEyeSlash.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgEyeSlash.displayName = "SvgEyeSlash";
const Memo = memo(SvgEyeSlash);
export default Memo;
