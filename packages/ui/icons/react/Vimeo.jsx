import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgVimeo = (props) => (
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
    <g clipPath="url(#clip0_16130_3890)">
      <path
        d="M16.2 0H1.8C0.807589 0 0 0.807589 0 1.8V16.2C0 17.1924 0.807589 18 1.8 18H16.2C17.1924 18 18 17.1924 18 16.2V1.8C18 0.807589 17.1924 0 16.2 0ZM15.1473 5.97857C15.0911 7.2442 14.2071 8.97991 12.4955 11.1777C10.7277 13.4759 9.22902 14.625 8.00759 14.625C7.24821 14.625 6.60937 13.9259 6.08304 12.5237C5.05848 8.775 4.62054 6.57723 3.77679 6.57723C3.68036 6.57723 3.33884 6.78214 2.75625 7.18795L2.14554 6.40045C3.6442 5.08259 5.07455 3.62009 5.97054 3.53973C6.98304 3.4433 7.6058 4.13438 7.83884 5.61696C8.67054 10.8884 9.04018 11.6839 10.5549 9.29732C11.0973 8.4375 11.3906 7.78259 11.4308 7.33259C11.5714 5.99866 10.3902 6.09107 9.59062 6.43259C10.2295 4.33929 11.4509 3.32277 13.2549 3.37902C14.5929 3.41518 15.2237 4.28304 15.1473 5.97857Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_16130_3890">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgVimeo.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgVimeo.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgVimeo.displayName = "SvgVimeo";
const Memo = memo(SvgVimeo);
export default Memo;
