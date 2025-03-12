import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgMove = (props) => (
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
    <g clipPath="url(#clip0_20397_22283)">
      <path
        d="M9.79453 0.330475C9.35508 -0.108978 8.6414 -0.108978 8.20195 0.330475L5.95195 2.58047C5.62851 2.90391 5.53359 3.38555 5.70937 3.80743C5.88515 4.2293 6.29297 4.50352 6.75 4.50352H7.875V7.87852H4.5V6.75352C4.5 6.30001 4.22578 5.88868 3.8039 5.7129C3.38203 5.53712 2.90039 5.63555 2.57695 5.95547L0.32695 8.20547C-0.112503 8.64493 -0.112503 9.3586 0.32695 9.79805L2.57695 12.0481C2.90039 12.3715 3.38203 12.4664 3.8039 12.2906C4.22578 12.1149 4.5 11.707 4.5 11.25V10.125H7.875V13.5H6.75C6.29648 13.5 5.88515 13.7742 5.70937 14.1961C5.53359 14.618 5.63203 15.0996 5.95195 15.4231L8.20195 17.6731C8.6414 18.1125 9.35508 18.1125 9.79453 17.6731L12.0445 15.4231C12.368 15.0996 12.4629 14.618 12.2871 14.1961C12.1113 13.7742 11.7035 13.5 11.2465 13.5H10.1215V10.125H13.4965V11.25C13.4965 11.7035 13.7707 12.1149 14.1926 12.2906C14.6145 12.4664 15.0961 12.368 15.4195 12.0481L17.6695 9.79805C18.109 9.3586 18.109 8.64493 17.6695 8.20547L15.4195 5.95547C15.0961 5.63204 14.6145 5.53712 14.1926 5.7129C13.7707 5.88868 13.4965 6.29649 13.4965 6.75352V7.87852H10.1215V4.50352H11.2465C11.7 4.50352 12.1113 4.2293 12.2871 3.80743C12.4629 3.38555 12.3645 2.90391 12.0445 2.58047L9.79453 0.330475Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_20397_22283">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgMove.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgMove.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgMove.displayName = "SvgMove";
const Memo = memo(SvgMove);
export default Memo;
