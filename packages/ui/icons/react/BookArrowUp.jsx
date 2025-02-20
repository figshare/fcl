import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgBookArrowUp = (props) => (
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
      d="M14.625 11.2492V18H13.125V11.2492L11.4052 12.969L10.3448 11.9085L12.8145 9.43875C13.3988 8.8545 14.3512 8.8545 14.9355 9.43875L17.4053 11.9085L16.3447 12.969L14.625 11.2492ZM11.625 18H3.375C2.1345 18 1.125 16.9905 1.125 15.75V2.25C1.125 1.0095 2.1345 0 3.375 0H14.625C15.4523 0 16.125 0.67275 16.125 1.5V8.5065L15.996 8.3775C15.6037 7.98525 15.1267 7.73625 14.625 7.60725V1.5H5.625V13.5H9.81525L11.3153 15H3.375C2.961 15 2.625 15.3368 2.625 15.75C2.625 16.1632 2.961 16.5 3.375 16.5H11.625V18ZM2.625 13.629C2.85975 13.5458 3.11175 13.5 3.375 13.5H4.125V1.5H3.375C2.961 1.5 2.625 1.83675 2.625 2.25V13.629Z"
      fill={props.color}
    />
  </svg>
);
SvgBookArrowUp.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgBookArrowUp.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgBookArrowUp.displayName = "SvgBookArrowUp";
const Memo = memo(SvgBookArrowUp);
export default Memo;
