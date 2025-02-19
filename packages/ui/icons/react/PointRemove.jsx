import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgPointRemove = (props) => (
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
      d="M5.91845 10.5573C7.04064 9.19959 9.60001 5.90889 9.60001 4.06051C9.60001 1.81877 7.71876 0 5.40001 0C3.08126 0 1.20001 1.81877 1.20001 4.06051C1.20001 5.90889 3.75939 9.19959 4.88157 10.5573C5.15064 10.8809 5.64939 10.8809 5.91845 10.5573ZM5.40001 2.70701C5.77132 2.70701 6.12741 2.84961 6.38996 3.10344C6.65251 3.35727 6.80001 3.70154 6.80001 4.06051C6.80001 4.41948 6.65251 4.76375 6.38996 5.01758C6.12741 5.27141 5.77132 5.41401 5.40001 5.41401C5.02871 5.41401 4.67261 5.27141 4.41006 5.01758C4.14751 4.76375 4.00001 4.41948 4.00001 4.06051C4.00001 3.70154 4.14751 3.35727 4.41006 3.10344C4.67261 2.84961 5.02871 2.70701 5.40001 2.70701Z"
      fill={props.color}
    />
    <path
      d="M10.0257 9.17599C9.79108 8.94133 9.41064 8.94133 9.176 9.17599C8.94135 9.41066 8.94135 9.79111 9.176 10.0258L12.1503 13.0002L9.17645 15.9742C8.9418 16.2089 8.9418 16.5893 9.17645 16.824C9.41109 17.0587 9.79153 17.0587 10.0262 16.824L13 13.85L15.9738 16.824C16.2085 17.0587 16.5889 17.0587 16.8236 16.824C17.0582 16.5893 17.0582 16.2089 16.8236 15.9742L13.8497 13.0002L16.824 10.0258C17.0587 9.79111 17.0587 9.41066 16.824 9.17599C16.5894 8.94133 16.2089 8.94133 15.9743 9.17599L13 12.1504L10.0257 9.17599Z"
      fill={props.color}
    />
  </svg>
);
SvgPointRemove.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgPointRemove.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgPointRemove.displayName = "SvgPointRemove";
const Memo = memo(SvgPointRemove);
export default Memo;
