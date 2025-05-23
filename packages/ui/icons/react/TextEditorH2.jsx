import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgTextEditorH2 = (props) => (
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
      d="M1.125 13.9587V3.41814H2.51987V7.74654H7.99867V3.41814H9.39353V13.9587H7.99867V8.99041H2.51987V13.9587H1.125Z"
      fill={props.color}
    />
    <path
      d="M18 12.7148V13.9587H11.0329C11.0233 13.6472 11.0736 13.3476 11.1839 13.06C11.3612 12.5854 11.644 12.1181 12.0323 11.6579C12.4253 11.1978 12.9909 10.6657 13.7291 10.0617C14.8747 9.12223 15.6489 8.37926 16.0515 7.83282C16.4541 7.28158 16.6555 6.7615 16.6555 6.27258C16.6555 5.75969 16.4709 5.32829 16.1018 4.97838C15.7375 4.62367 15.2606 4.44631 14.671 4.44631C14.0479 4.44631 13.5494 4.63326 13.1755 5.00714C12.8016 5.38102 12.6123 5.8987 12.6075 6.56018L11.2773 6.42357C11.3684 5.43135 11.7111 4.6764 12.3055 4.15871C12.8999 3.63624 13.698 3.375 14.6998 3.375C15.7112 3.375 16.5117 3.65541 17.1012 4.21623C17.6908 4.77706 17.9856 5.47209 17.9856 6.30134C17.9856 6.72316 17.8993 7.13778 17.7268 7.54522C17.5542 7.95265 17.2666 8.38166 16.864 8.83223C16.4661 9.28281 15.8022 9.90115 14.8723 10.6873C14.0958 11.3392 13.5973 11.7825 13.3768 12.0174C13.1563 12.2475 12.9742 12.48 12.8304 12.7148H18Z"
      fill={props.color}
    />
  </svg>
);
SvgTextEditorH2.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgTextEditorH2.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgTextEditorH2.displayName = "SvgTextEditorH2";
const Memo = memo(SvgTextEditorH2);
export default Memo;
