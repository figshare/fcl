import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgTextEditorBold = (props) => (
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
      d="M3.375 2.25H8.60927C9.64541 2.25 10.4166 2.29988 10.9227 2.39964C11.4348 2.49275 11.8904 2.69227 12.2893 2.99821C12.6943 3.30414 13.0307 3.71317 13.2987 4.22527C13.5666 4.73073 13.7006 5.29937 13.7006 5.93119C13.7006 6.61622 13.5339 7.24471 13.2004 7.81668C12.8729 8.38864 12.4263 8.81762 11.8606 9.1036C12.6585 9.36298 13.2719 9.80525 13.7006 10.4304C14.1294 11.0556 14.3438 11.7905 14.3438 12.6351C14.3438 13.3002 14.2038 13.9487 13.9239 14.5805C13.65 15.2057 13.2719 15.7078 12.7895 16.0869C12.3132 16.4593 11.7236 16.6888 11.021 16.7752C10.5803 16.8284 9.51738 16.8617 7.83217 16.875H3.375V2.25ZM6.01893 4.68417V8.06608H7.75178C8.78196 8.06608 9.4221 8.04945 9.67221 8.0162C10.1248 7.95634 10.4791 7.78342 10.7351 7.49744C10.9971 7.20481 11.1282 6.82239 11.1282 6.35019C11.1282 5.89794 11.015 5.53215 10.7887 5.25281C10.5684 4.96683 10.2379 4.79391 9.79726 4.73406C9.53524 4.7008 8.78196 4.68417 7.53741 4.68417H6.01893ZM6.01893 10.5003V14.4109H8.46636C9.41913 14.4109 10.0235 14.381 10.2796 14.3211C10.6726 14.2413 10.9912 14.0484 11.2353 13.7425C11.4854 13.4299 11.6105 13.0142 11.6105 12.4955C11.6105 12.0565 11.5152 11.6841 11.3247 11.3782C11.1341 11.0722 10.8572 10.8494 10.494 10.7098C10.1367 10.5701 9.3566 10.5003 8.15373 10.5003H6.01893Z"
      fill={props.color}
    />
  </svg>
);
SvgTextEditorBold.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgTextEditorBold.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgTextEditorBold.displayName = "SvgTextEditorBold";
const Memo = memo(SvgTextEditorBold);
export default Memo;
