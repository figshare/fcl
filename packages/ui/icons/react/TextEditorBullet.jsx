import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgTextEditorBullet = (props) => (
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
      d="M1.89474 4.98214C2.94117 4.98214 3.78947 4.11869 3.78947 3.05357C3.78947 1.98845 2.94117 1.125 1.89474 1.125C0.848303 1.125 0 1.98845 0 3.05357C0 4.11869 0.848303 4.98214 1.89474 4.98214Z"
      fill={props.color}
    />
    <path d="M18 2.08929H6.63158V4.5H18V2.08929Z" fill={props.color} />
    <path d="M18 7.875H6.63158V10.2857H18V7.875Z" fill={props.color} />
    <path d="M6.63158 13.6607H18V16.0714H6.63158V13.6607Z" fill={props.color} />
    <path
      d="M3.78947 8.83929C3.78947 9.90441 2.94117 10.7679 1.89474 10.7679C0.848303 10.7679 0 9.90441 0 8.83929C0 7.77417 0.848303 6.91071 1.89474 6.91071C2.94117 6.91071 3.78947 7.77417 3.78947 8.83929Z"
      fill={props.color}
    />
    <path
      d="M1.89474 16.5536C2.94117 16.5536 3.78947 15.6901 3.78947 14.625C3.78947 13.5599 2.94117 12.6964 1.89474 12.6964C0.848303 12.6964 0 13.5599 0 14.625C0 15.6901 0.848303 16.5536 1.89474 16.5536Z"
      fill={props.color}
    />
  </svg>
);
SvgTextEditorBullet.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgTextEditorBullet.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgTextEditorBullet.displayName = "SvgTextEditorBullet";
const Memo = memo(SvgTextEditorBullet);
export default Memo;
