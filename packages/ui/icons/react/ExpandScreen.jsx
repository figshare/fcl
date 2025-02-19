import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgExpandScreen = (props) => (
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
    <g clipPath="url(#clip0_12864_33461)">
      <path
        d="M11.0571 0C10.6311 0 10.2857 0.34538 10.2857 0.771429V1.8C10.2857 2.22605 10.6311 2.57143 11.0571 2.57143H13.6105L9.92214 6.2597C9.62088 6.56094 9.62087 7.04937 9.9221 7.35064L10.6493 8.07788C10.9505 8.37917 11.439 8.37919 11.7403 8.07791L15.4286 4.38961V6.94286C15.4286 7.36891 15.774 7.71429 16.2 7.71429H17.2286C17.6546 7.71429 18 7.36891 18 6.94286V0.771429C18 0.34538 17.6546 0 17.2286 0H11.0571Z"
        fill={props.color}
      />
      <path
        d="M0.771429 18C0.34538 18 0 17.6546 0 17.2286V11.0571C0 10.6311 0.34538 10.2857 0.771429 10.2857H1.8C2.22605 10.2857 2.57143 10.6311 2.57143 11.0571V13.6104L6.25973 9.92209C6.56101 9.62081 7.04947 9.62083 7.35073 9.92212L8.0779 10.6494C8.37913 10.9506 8.37912 11.4391 8.07786 11.7403L4.38951 15.4286H6.94286C7.36891 15.4286 7.71429 15.774 7.71429 16.2V17.2286C7.71429 17.6546 7.36891 18 6.94286 18H0.771429Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33461">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgExpandScreen.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgExpandScreen.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgExpandScreen.displayName = "SvgExpandScreen";
const Memo = memo(SvgExpandScreen);
export default Memo;
