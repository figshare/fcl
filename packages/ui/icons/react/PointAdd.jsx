import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgPointAdd = (props) => (
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
    <g clipPath="url(#clip0_20407_22347)">
      <path
        d="M5.91845 10.5573C7.04064 9.19959 9.60001 5.90889 9.60001 4.06051C9.60001 1.81877 7.71876 0 5.40001 0C3.08126 0 1.20001 1.81877 1.20001 4.06051C1.20001 5.90889 3.75939 9.19959 4.88157 10.5573C5.15064 10.8809 5.64939 10.8809 5.91845 10.5573ZM5.40001 2.70701C5.77132 2.70701 6.12741 2.84961 6.38996 3.10344C6.65251 3.35727 6.80001 3.70154 6.80001 4.06051C6.80001 4.41948 6.65251 4.76375 6.38996 5.01758C6.12741 5.27141 5.77132 5.41401 5.40001 5.41401C5.02871 5.41401 4.67261 5.27141 4.41006 5.01758C4.14751 4.76375 4.00001 4.41948 4.00001 4.06051C4.00001 3.70154 4.14751 3.35727 4.41006 3.10344C4.67261 2.84961 5.02871 2.70701 5.40001 2.70701Z"
        fill={props.color}
      />
      <path
        d="M7.74974 11.9992C7.41789 11.9991 7.14888 12.2682 7.14889 12.6C7.1489 12.9319 7.41793 13.2009 7.74978 13.2009L11.9562 13.201L11.9563 17.4068C11.9563 17.7386 12.2253 18.0076 12.5572 18.0077C12.889 18.0077 13.158 17.7386 13.158 17.4068L13.1579 13.201L17.3637 13.2012C17.6955 13.2012 17.9645 12.9322 17.9645 12.6003C17.9645 12.2685 17.6955 11.9994 17.3636 11.9994L13.1579 11.9993L13.1578 7.79292C13.1577 7.46107 12.8887 7.19204 12.5569 7.19203C12.225 7.19202 11.956 7.46103 11.956 7.79288L11.9561 11.9993L7.74974 11.9992Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_20407_22347">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgPointAdd.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgPointAdd.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgPointAdd.displayName = "SvgPointAdd";
const Memo = memo(SvgPointAdd);
export default Memo;
