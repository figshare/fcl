import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgLayerGroupSolid1 = (props) => (
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
    <path
      d="M8.26562 1.16251C8.73125 0.946887 9.26875 0.946887 9.73438 1.16251L16.5656 4.31876C16.8312 4.44064 17 4.70626 17 5.00001C17 5.29376 16.8312 5.55939 16.5656 5.68126L9.73438 8.83751C9.26875 9.05314 8.73125 9.05314 8.26562 8.83751L1.43438 5.68126C1.16875 5.55626 1 5.29064 1 5.00001C1 4.70939 1.16875 4.44064 1.43438 4.31876L8.26562 1.16251ZM14.9031 7.55001L16.5656 8.31876C16.8312 8.44064 17 8.70626 17 9.00001C17 9.29376 16.8312 9.55939 16.5656 9.68126L9.73438 12.8375C9.26875 13.0531 8.73125 13.0531 8.26562 12.8375L1.43438 9.68126C1.16875 9.55626 1 9.29064 1 9.00001C1 8.70939 1.16875 8.44064 1.43438 8.31876L3.09687 7.55001L7.84688 9.74376C8.57812 10.0813 9.42188 10.0813 10.1531 9.74376L14.9031 7.55001ZM10.1531 13.7438L14.9031 11.55L16.5656 12.3188C16.8312 12.4406 17 12.7063 17 13C17 13.2938 16.8312 13.5594 16.5656 13.6813L9.73438 16.8375C9.26875 17.0531 8.73125 17.0531 8.26562 16.8375L1.43438 13.6813C1.16875 13.5563 1 13.2906 1 13C1 12.7094 1.16875 12.4406 1.43438 12.3188L3.09687 11.55L7.84688 13.7438C8.57812 14.0813 9.42188 14.0813 10.1531 13.7438Z"
      fill={props.color}
    />
  </svg>
);
SvgLayerGroupSolid1.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgLayerGroupSolid1.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgLayerGroupSolid1.displayName = "SvgLayerGroupSolid1";
const Memo = memo(SvgLayerGroupSolid1);
export default Memo;
