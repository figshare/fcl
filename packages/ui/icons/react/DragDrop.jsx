import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgDragDrop = (props) => (
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
      d="M0.642857 5.625C0.287817 5.625 0 5.91282 0 6.26786C0 6.6229 0.287817 6.91071 0.642857 6.91071H17.3571C17.7122 6.91071 18 6.6229 18 6.26786C18 5.91282 17.7122 5.625 17.3571 5.625H0.642857Z"
      fill={props.color}
    />
    <path
      d="M0.642857 12.0536C0.287817 12.0536 0 12.3414 0 12.6964C0 13.0515 0.287817 13.3393 0.642857 13.3393H17.3571C17.7122 13.3393 18 13.0515 18 12.6964C18 12.3414 17.7122 12.0536 17.3571 12.0536H0.642857Z"
      fill={props.color}
    />
  </svg>
);
SvgDragDrop.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDragDrop.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgDragDrop.displayName = "SvgDragDrop";
const Memo = memo(SvgDragDrop);
export default Memo;
