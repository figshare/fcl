import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDownLeftAndUpRightToCenterSolid = (props) => (
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
    <g clipPath="url(#clip0_19990_3780)">
      <path
        d="M15.4336 0.246082C15.7641 -0.0843872 16.2984 -0.0843872 16.6254 0.246082L17.7504 1.37108C18.0809 1.70155 18.0809 2.23593 17.7504 2.56288L14.6918 5.62147L16.0629 6.99257C16.3055 7.23514 16.3758 7.59725 16.2457 7.91366C16.1156 8.23007 15.8062 8.43397 15.4652 8.43397H10.4027C9.93515 8.43397 9.55898 8.0578 9.55898 7.59022V2.52772C9.55898 2.18671 9.76289 1.87733 10.0793 1.74725C10.3957 1.61718 10.7578 1.68749 11.0004 1.93007L12.3715 3.30116L15.4336 0.246082ZM2.53125 9.56249H7.59375C8.06133 9.56249 8.4375 9.93866 8.4375 10.4062V15.4687C8.4375 15.8098 8.23359 16.1191 7.91719 16.2492C7.60078 16.3793 7.23867 16.309 6.99609 16.0664L5.625 14.6953L2.56641 17.7539C2.23594 18.0844 1.70156 18.0844 1.37461 17.7539L0.246093 16.6289C-0.0843758 16.2984 -0.0843758 15.7641 0.246093 15.4371L3.30469 12.3785L1.93359 11.0039C1.69101 10.7613 1.6207 10.3992 1.75078 10.0828C1.88086 9.76639 2.19023 9.56249 2.53125 9.56249Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_19990_3780">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgDownLeftAndUpRightToCenterSolid.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDownLeftAndUpRightToCenterSolid.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgDownLeftAndUpRightToCenterSolid.displayName =
  "SvgDownLeftAndUpRightToCenterSolid";
const Memo = memo(SvgDownLeftAndUpRightToCenterSolid);
export default Memo;
