import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgUndo = (props) => (
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
    <g clipPath="url(#clip0_12864_33458)">
      <path
        d="M3.88802 4.28927V6.34448C3.88802 6.55167 3.63635 6.66097 3.47841 6.52236L0.135408 3.5886C-0.0451359 3.43016 -0.0451359 3.15411 0.135408 2.99567L3.47841 0.0619028C3.63635 -0.0767002 3.88802 0.0325923 3.88802 0.239783V2.295H10.4327C14.612 2.295 18 5.59861 18 9.67381C18 13.749 14.612 17.0526 10.4327 17.0526H2.7427C2.47161 17.0526 2.25184 16.8383 2.25184 16.574V15.537C2.25184 15.2726 2.47161 15.0584 2.7427 15.0584H10.4327C13.4825 15.0584 15.9548 12.6476 15.9548 9.67381C15.9548 6.70001 13.4825 4.28927 10.4327 4.28927H3.88802Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33458">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgUndo.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgUndo.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgUndo.displayName = "SvgUndo";
const Memo = memo(SvgUndo);
export default Memo;
