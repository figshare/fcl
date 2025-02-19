import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgExclamation = (props) => (
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
    <path
      d="M10.2857 1.28571C10.2857 0.574554 9.71116 0 9 0C8.28883 0 7.71428 0.574554 7.71428 1.28571V11.5714C7.71428 12.2826 8.28883 12.8571 9 12.8571C9.71116 12.8571 10.2857 12.2826 10.2857 11.5714V1.28571ZM9 18C9.42624 18 9.83502 17.8307 10.1364 17.5293C10.4378 17.2279 10.6071 16.8191 10.6071 16.3929C10.6071 15.9666 10.4378 15.5578 10.1364 15.2564C9.83502 14.955 9.42624 14.7857 9 14.7857C8.57375 14.7857 8.16497 14.955 7.86357 15.2564C7.56218 15.5578 7.39285 15.9666 7.39285 16.3929C7.39285 16.8191 7.56218 17.2279 7.86357 17.5293C8.16497 17.8307 8.57375 18 9 18Z"
      fill={props.color}
    />
  </svg>
);
SvgExclamation.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgExclamation.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgExclamation.displayName = "SvgExclamation";
const Memo = memo(SvgExclamation);
export default Memo;
