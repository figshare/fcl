import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgReplay = (props) => (
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
      d="M2.51173 2.50978C2.32257 2.32135 2 2.45532 2 2.72232V6.43944V7.2798C2 7.76135 2.39186 8.15143 2.87505 8.15143H3.7501V8.15612H7.4508C7.71833 8.15612 7.85206 7.83246 7.66256 7.64362L5.32924 5.31844C6.27611 4.38584 7.56331 3.7972 8.99961 3.7972C11.8995 3.7972 14.2499 6.13848 14.2499 9.02697C14.2499 11.9147 11.8987 14.2567 8.99961 14.2567C7.45631 14.2567 6.07076 13.5905 5.11001 12.5337C4.98958 12.4012 4.78142 12.3892 4.65503 12.5161L3.84727 13.3265C3.73718 13.437 3.72958 13.6139 3.83503 13.7288C5.1148 15.1234 6.95391 16 8.99961 16C12.8659 16 16 12.8778 16 9.02697C16 5.17539 12.8651 2.05316 8.99961 2.05316C7.08012 2.05316 5.3472 2.82863 4.08419 4.07627L2.51173 2.50978Z"
      fill={props.color}
    />
  </svg>
);
SvgReplay.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgReplay.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgReplay.displayName = "SvgReplay";
const Memo = memo(SvgReplay);
export default Memo;
