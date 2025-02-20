import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgPenToSquare = (props) => (
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
    <g clipPath="url(#clip0_16320_16343)">
      <path
        d="M16.5797 0.762891C15.8098 -0.00703087 14.5652 -0.00703087 13.7953 0.762891L12.7371 1.81758L16.1789 5.25938L17.2371 4.20117C18.007 3.43125 18.007 2.18672 17.2371 1.4168L16.5797 0.762891ZM6.06094 8.49727C5.84648 8.71172 5.68125 8.97539 5.58633 9.26719L4.5457 12.3891C4.44375 12.6914 4.52461 13.0254 4.74961 13.2539C4.97461 13.4824 5.30859 13.5598 5.61445 13.4578L8.73633 12.4172C9.02461 12.3223 9.28828 12.157 9.50625 11.9426L15.3879 6.05742L11.9426 2.61211L6.06094 8.49727ZM3.375 2.25C1.51172 2.25 0 3.76172 0 5.625V14.625C0 16.4883 1.51172 18 3.375 18H12.375C14.2383 18 15.75 16.4883 15.75 14.625V11.25C15.75 10.6277 15.2473 10.125 14.625 10.125C14.0027 10.125 13.5 10.6277 13.5 11.25V14.625C13.5 15.2473 12.9973 15.75 12.375 15.75H3.375C2.75273 15.75 2.25 15.2473 2.25 14.625V5.625C2.25 5.00274 2.75273 4.5 3.375 4.5H6.75C7.37227 4.5 7.875 3.99727 7.875 3.375C7.875 2.75273 7.37227 2.25 6.75 2.25H3.375Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_16320_16343">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgPenToSquare.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgPenToSquare.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgPenToSquare.displayName = "SvgPenToSquare";
const Memo = memo(SvgPenToSquare);
export default Memo;
