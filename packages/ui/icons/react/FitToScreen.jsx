import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgFitToScreen = (props) => (
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
    <g clipPath="url(#clip0_12864_33446)">
      <path
        d="M9.69203 12.6915L10.4402 12.0212C10.5789 11.8969 10.8037 11.8969 10.9424 12.0212L11.3191 12.3587C11.4577 12.4829 11.4577 12.6844 11.3191 12.8087L9.25111 14.6616C9.11242 14.7859 8.88758 14.7859 8.74889 14.6616L6.68094 12.8087C6.54225 12.6844 6.54225 12.4829 6.68094 12.3587L7.0576 12.0212C7.19628 11.8969 7.42113 11.8969 7.55982 12.0212L8.30741 12.691L8.30741 10.3125C8.30741 10.0895 8.50467 9.90865 8.74799 9.90865H9.25145C9.49478 9.90865 9.69203 10.0895 9.69203 10.3125V12.6915Z"
        fill={props.color}
      />
      <path
        d="M10.4402 5.71923L9.69203 5.04886V7.42791C9.69203 7.65093 9.49478 7.83173 9.25145 7.83173H8.74799C8.50467 7.83173 8.30741 7.65093 8.30741 7.42791L8.30741 5.04936L7.55982 5.71923C7.42113 5.8435 7.19628 5.8435 7.0576 5.71923L6.68094 5.38173C6.54225 5.25746 6.54225 5.05599 6.68094 4.93173L8.74889 3.07878C8.88758 2.95451 9.11242 2.95451 9.25111 3.07878L11.3191 4.93173C11.4577 5.05599 11.4577 5.25746 11.3191 5.38173L10.9424 5.71923C10.8037 5.8435 10.5789 5.8435 10.4402 5.71923Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.07692 0.5625C0.92987 0.5625 0 1.49237 0 2.63942V15.101C0 16.248 0.929871 17.1779 2.07692 17.1779H15.9231C17.0701 17.1779 18 16.248 18 15.101V2.63942C18 1.49237 17.0701 0.5625 15.9231 0.5625H2.07692ZM15.9231 1.25481H2.07692C1.31222 1.25481 0.692308 1.87472 0.692308 2.63942V15.101C0.692308 15.8657 1.31222 16.4856 2.07692 16.4856H15.9231C16.6878 16.4856 17.3077 15.8657 17.3077 15.101V2.63942C17.3077 1.87472 16.6878 1.25481 15.9231 1.25481Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33446">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgFitToScreen.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgFitToScreen.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgFitToScreen.displayName = "SvgFitToScreen";
const Memo = memo(SvgFitToScreen);
export default Memo;
