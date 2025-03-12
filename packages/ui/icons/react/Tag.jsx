import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgTag = (props) => (
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
      d="M0 1.97098V8.12254C0 8.82204 0.275689 9.49275 0.769459 9.98652L8.01143 17.2285C9.04012 18.2572 10.7066 18.2572 11.7353 17.2285L17.2285 11.7353C18.2572 10.7066 18.2572 9.04013 17.2285 8.01144L9.98651 0.769473C9.49274 0.275703 8.82204 1.42958e-05 8.12253 1.42958e-05H1.97508C0.884673 -0.00410046 0 0.880571 0 1.97098ZM4.60853 3.2877C4.95774 3.2877 5.29266 3.42643 5.53959 3.67336C5.78652 3.92029 5.92525 4.25521 5.92525 4.60442C5.92525 4.95364 5.78652 5.28855 5.53959 5.53548C5.29266 5.78242 4.95774 5.92114 4.60853 5.92114C4.25931 5.92114 3.9244 5.78242 3.67746 5.53548C3.43053 5.28855 3.2918 4.95364 3.2918 4.60442C3.2918 4.25521 3.43053 3.92029 3.67746 3.67336C3.9244 3.42643 4.25931 3.2877 4.60853 3.2877Z"
      fill={props.color}
    />
  </svg>
);
SvgTag.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgTag.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgTag.displayName = "SvgTag";
const Memo = memo(SvgTag);
export default Memo;
