import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgTextEditorH4 = (props) => (
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
      d="M2.25 13.6003V4.5H3.45427V8.23695H8.18442V4.5H9.38869V13.6003H8.18442V9.31086H3.45427V13.6003H2.25Z"
      fill={props.color}
    />
    <path
      d="M14.5285 13.6003V11.4214H10.5805V10.3972L14.7334 4.5H15.6459V10.3972H16.875V11.4214H15.6459V13.6003H14.5285ZM14.5285 10.3972V6.29398L11.6793 10.3972H14.5285Z"
      fill={props.color}
    />
  </svg>
);
SvgTextEditorH4.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgTextEditorH4.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgTextEditorH4.displayName = "SvgTextEditorH4";
const Memo = memo(SvgTextEditorH4);
export default Memo;
