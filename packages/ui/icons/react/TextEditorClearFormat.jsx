import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgTextEditorClearFormat = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7344 1.125H3.4336V2.35128H7.57171L3.89573 13.6331H0V14.8594H10.3008V13.6331H5.61424L9.28253 2.35128H13.7344V1.125ZM15.4259 12.0546L14.2687 10.1308H13.2286L14.9523 12.7382L13.1749 15.414H14.2247L15.4454 13.4315L16.6661 15.414H17.711L15.9288 12.7382L17.6573 10.1308H16.5978L15.4259 12.0546Z"
      fill={props.color}
    />
  </svg>
);
SvgTextEditorClearFormat.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgTextEditorClearFormat.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgTextEditorClearFormat.displayName = "SvgTextEditorClearFormat";
const Memo = memo(SvgTextEditorClearFormat);
export default Memo;
