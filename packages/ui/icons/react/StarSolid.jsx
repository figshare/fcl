import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgStarSolid = (props) => (
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
    <g clipPath="url(#clip0_14228_100933)">
      <path
        d="M9.97926 0.894821C9.7986 0.519861 9.41683 0.28125 8.99755 0.28125C8.57828 0.28125 8.19991 0.519861 8.01584 0.894821L5.82403 5.40457L0.929098 6.12721C0.52005 6.18857 0.179178 6.47491 0.053055 6.86691C-0.0730679 7.25891 0.0291938 7.69182 0.322344 7.98156L3.87424 11.496L3.03569 16.4625C2.96752 16.8715 3.13795 17.2874 3.47542 17.5294C3.81288 17.7714 4.25942 17.8021 4.62756 17.6078L9.00096 15.2728L13.3744 17.6078C13.7425 17.8021 14.189 17.7748 14.5265 17.5294C14.864 17.284 15.0344 16.8715 14.9662 16.4625L14.1243 11.496L17.6762 7.98156C17.9693 7.69182 18.075 7.25891 17.9455 6.86691C17.8159 6.47491 17.4785 6.18857 17.0694 6.12721L12.1711 5.40457L9.97926 0.894821Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_14228_100933">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgStarSolid.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgStarSolid.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgStarSolid.displayName = "SvgStarSolid";
const Memo = memo(SvgStarSolid);
export default Memo;
