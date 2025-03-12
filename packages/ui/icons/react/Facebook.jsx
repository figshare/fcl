import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgFacebook = (props) => (
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
    <g clipPath="url(#clip0_16130_3892)">
      <path
        d="M16.0714 0H1.92857C1.41708 0 0.926543 0.203188 0.564865 0.564866C0.203188 0.926543 0 1.41708 0 1.92857L0 16.0714C0 16.5829 0.203188 17.0735 0.564865 17.4351C0.926543 17.7968 1.41708 18 1.92857 18H7.44308V11.8804H4.91183V9H7.44308V6.80464C7.44308 4.30754 8.92969 2.92821 11.2066 2.92821C12.2971 2.92821 13.4373 3.12268 13.4373 3.12268V5.57357H12.1809C10.943 5.57357 10.5569 6.34179 10.5569 7.12969V9H13.3204L12.8784 11.8804H10.5569V18H16.0714C16.5829 18 17.0735 17.7968 17.4351 17.4351C17.7968 17.0735 18 16.5829 18 16.0714V1.92857C18 1.41708 17.7968 0.926543 17.4351 0.564866C17.0735 0.203188 16.5829 0 16.0714 0Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_16130_3892">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgFacebook.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgFacebook.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgFacebook.displayName = "SvgFacebook";
const Memo = memo(SvgFacebook);
export default Memo;
