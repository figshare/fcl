import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCollapseScreen = (props) => (
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
    <g clipPath="url(#clip0_12864_33467)">
      <path
        d="M17.4104 7.53266C17.4104 7.95872 17.065 8.30411 16.639 8.30411H10.4673C10.0413 8.30411 9.69589 7.95872 9.69589 7.53266V1.36104C9.69589 0.934981 10.0413 0.58959 10.4673 0.58959H11.4959C11.922 0.58959 12.2674 0.934981 12.2674 1.36104V3.91437L15.9558 0.225953C16.2571 -0.0753296 16.7456 -0.0753155 17.0468 0.225983L17.774 0.95325C18.0753 1.25453 18.0753 1.74297 17.774 2.04423L14.0855 5.7326H16.639C17.065 5.7326 17.4104 6.078 17.4104 6.50406V7.53266Z"
        fill={props.color}
      />
      <path
        d="M8.30407 10.4673C8.30407 10.0413 7.95868 9.69589 7.53261 9.69589H1.361C0.934936 9.69589 0.589545 10.0413 0.589545 10.4673V11.4959C0.589545 11.922 0.934936 12.2674 1.361 12.2674H3.91442L0.225959 15.9558C-0.0753056 16.257 -0.0753222 16.7455 0.225924 17.0467L0.953114 17.774C1.25438 18.0753 1.74286 18.0753 2.04414 17.774L5.73256 14.0856V16.639C5.73256 17.065 6.07795 17.4104 6.50401 17.4104H7.53261C7.95868 17.4104 8.30407 17.065 8.30407 16.639V10.4673Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33467">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgCollapseScreen.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgCollapseScreen.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgCollapseScreen.displayName = "SvgCollapseScreen";
const Memo = memo(SvgCollapseScreen);
export default Memo;
