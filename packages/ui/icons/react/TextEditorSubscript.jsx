import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgTextEditorSubscript = (props) => (
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
      d="M4.88896 1.125L0 14.775H1.78886L3.18694 10.6409H8.51009L9.99501 14.775H11.9141L6.70387 1.125H4.88896ZM7.98906 9.16975H3.67323L5.07132 5.166C5.36657 4.30317 5.59524 3.43414 5.75734 2.5589C5.95417 3.29758 6.2552 4.2411 6.66045 5.38946L7.98906 9.16975Z"
      fill={props.color}
    />
    <path
      d="M18 15.75V14.7127H15.6136C15.6764 14.6121 15.7576 14.5087 15.8574 14.4028C15.96 14.2968 16.201 14.0822 16.5802 13.7589C16.9594 13.4357 17.2217 13.188 17.3671 13.0158C17.5866 12.7561 17.7463 12.5084 17.846 12.2726C17.9487 12.0341 18 11.7838 18 11.5215C18 11.0605 17.8232 10.675 17.4697 10.365C17.1162 10.055 16.63 9.9 16.0114 9.9C15.4468 9.9 14.9764 10.0338 14.6001 10.3014C14.2237 10.569 13.9999 11.0101 13.9286 11.6248L15.1261 11.7361C15.1489 11.4102 15.2344 11.177 15.3827 11.0366C15.531 10.8962 15.7305 10.826 15.9814 10.826C16.2352 10.826 16.4333 10.8935 16.5759 11.0287C16.7213 11.1611 16.794 11.3519 16.794 11.601C16.794 11.8262 16.7113 12.054 16.5459 12.2845C16.4233 12.4514 16.0912 12.7694 15.5495 13.2383C14.8766 13.8185 14.4262 14.2849 14.1981 14.6372C13.97 14.987 13.8331 15.3579 13.7875 15.75H18Z"
      fill={props.color}
    />
  </svg>
);
SvgTextEditorSubscript.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgTextEditorSubscript.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgTextEditorSubscript.displayName = "SvgTextEditorSubscript";
const Memo = memo(SvgTextEditorSubscript);
export default Memo;
