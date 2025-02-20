import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgPrivacy = (props) => (
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
      d="M8.48864 1.79182L14.2159 4.33636V8.18182C14.2159 11.88 11.7777 15.2918 8.48864 16.3064C5.19955 15.2918 2.76136 11.88 2.76136 8.18182V4.33636L8.48864 1.79182ZM8.48864 0L1.125 3.27273V8.18182C1.125 12.7227 4.26682 16.9691 8.48864 18C12.7105 16.9691 15.8523 12.7227 15.8523 8.18182V3.27273L8.48864 0Z"
      fill={props.color}
    />
  </svg>
);
SvgPrivacy.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgPrivacy.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgPrivacy.displayName = "SvgPrivacy";
const Memo = memo(SvgPrivacy);
export default Memo;
