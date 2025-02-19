import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCodeBlock = (props) => (
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
      d="M14.0451 5.14286H17.0113V14.7857H7.12391L7.12391 11.7282C6.81466 11.8349 6.48186 11.8929 6.13518 11.8929V14.7857C6.13518 15.3183 6.57785 15.75 7.12391 15.75H17.0113C17.5573 15.75 18 15.3183 18 14.7857V5.14286C18 4.6103 17.5573 4.17857 17.0113 4.17857H13.8763C13.9856 4.48018 14.0451 4.80474 14.0451 5.14286Z"
      fill={props.color}
    />
    <path
      d="M7.19316 2.26463C6.96002 2.2037 6.72038 2.33864 6.65792 2.56601L4.77273 9.42764C4.71026 9.65502 4.84862 9.88873 5.08175 9.94966C5.31489 10.0106 5.55453 9.87565 5.617 9.64827L7.50219 2.78664C7.56466 2.55927 7.4263 2.32555 7.19316 2.26463Z"
      fill={props.color}
    />
    <path
      d="M2.7712 8.82452C2.58143 9.02426 2.27376 9.02426 2.084 8.82452L0.143747 6.78228C-0.0479035 6.58056 -0.0479275 6.25348 0.143747 6.05173L2.084 4.00948C2.27376 3.80974 2.58143 3.80974 2.7712 4.00948C2.96096 4.20922 2.96096 4.53306 2.7712 4.7328L1.17111 6.417L2.7712 8.1012C2.96096 8.30094 2.96096 8.62478 2.7712 8.82452Z"
      fill={props.color}
    />
    <path
      d="M9.46577 8.82452C9.65553 9.02426 9.9632 9.02426 10.153 8.82452L12.0932 6.78228C12.2849 6.58056 12.2849 6.25348 12.0932 6.05173L10.153 4.00948C9.9632 3.80974 9.65553 3.80974 9.46577 4.00948C9.276 4.20922 9.276 4.53306 9.46577 4.7328L11.0659 6.417L9.46577 8.1012C9.276 8.30094 9.276 8.62478 9.46577 8.82452Z"
      fill={props.color}
    />
  </svg>
);
SvgCodeBlock.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgCodeBlock.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgCodeBlock.displayName = "SvgCodeBlock";
const Memo = memo(SvgCodeBlock);
export default Memo;
