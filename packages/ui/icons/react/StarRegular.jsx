import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgStarRegular = (props) => (
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
    <g clipPath="url(#clip0_14228_100938)">
      <path
        d="M9.00029 0.28125C9.31407 0.28125 9.60056 0.458601 9.73698 0.741681L12.0767 5.56086L17.3017 6.33165C17.6086 6.37599 17.8644 6.59086 17.9599 6.88758C18.0554 7.1843 17.977 7.5049 17.7587 7.72318L13.9695 11.4817L14.8631 16.7886C14.9143 17.0955 14.7881 17.4059 14.5357 17.59C14.2833 17.7742 13.9457 17.7947 13.6728 17.648L9.00029 15.1515L4.33118 17.6446C4.05492 17.7913 3.72069 17.7708 3.4683 17.5866C3.21592 17.4025 3.08631 17.0921 3.13747 16.7851L4.03105 11.4782L0.241874 7.72318C0.0201852 7.5049 -0.054848 7.18089 0.0406488 6.88758C0.136146 6.59427 0.391941 6.3794 0.698895 6.33165L5.92393 5.56086L8.26361 0.741681C8.40344 0.458601 8.68652 0.28125 9.00029 0.28125ZM9.00029 2.97562L7.20973 6.66589C7.09036 6.90805 6.86185 7.07858 6.59241 7.1195L2.55767 7.71295L5.48738 10.6154C5.67496 10.8029 5.76364 11.069 5.7193 11.3316L5.02695 15.4141L8.6149 13.4973C8.85705 13.3677 9.14695 13.3677 9.38569 13.4973L12.9736 15.4141L12.2847 11.335C12.2404 11.0724 12.3256 10.8064 12.5166 10.6188L15.4463 7.71636L11.4116 7.1195C11.1456 7.07858 10.9136 6.91146 10.7943 6.66589L9.00029 2.97562Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_14228_100938">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgStarRegular.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgStarRegular.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgStarRegular.displayName = "SvgStarRegular";
const Memo = memo(SvgStarRegular);
export default Memo;
