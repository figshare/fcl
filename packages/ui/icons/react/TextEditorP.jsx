import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgTextEditorP = (props) => (
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
      d="M3.375 16.875V2.25H8.8918C9.86281 2.25 10.6044 2.29656 11.1165 2.38967C11.8348 2.50938 12.4366 2.73883 12.9222 3.07802C13.4077 3.41056 13.7967 3.87943 14.0894 4.48465C14.3886 5.08987 14.5383 5.75495 14.5383 6.47988C14.5383 7.72357 14.1426 8.77771 13.3511 9.64231C12.5597 10.5003 11.1298 10.9292 9.06139 10.9292H5.31037V16.875H3.375ZM5.31037 9.20336H9.09132C10.3417 9.20336 11.2295 8.97058 11.7549 8.50503C12.2804 8.03948 12.5431 7.38438 12.5431 6.53973C12.5431 5.92787 12.3868 5.40578 12.0742 4.97348C11.7682 4.53453 11.3626 4.24523 10.8571 4.10556C10.5312 4.0191 9.92931 3.97587 9.05141 3.97587H5.31037V9.20336Z"
      fill={props.color}
    />
  </svg>
);
SvgTextEditorP.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgTextEditorP.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgTextEditorP.displayName = "SvgTextEditorP";
const Memo = memo(SvgTextEditorP);
export default Memo;
