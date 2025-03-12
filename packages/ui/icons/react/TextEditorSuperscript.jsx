import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgTextEditorSuperscript = (props) => (
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
      d="M18 6.975V5.93774H15.4824C15.5486 5.83706 15.6343 5.73373 15.7396 5.62775C15.8479 5.52177 16.102 5.30717 16.5021 4.98393C16.9021 4.6607 17.1789 4.41298 17.3323 4.24076C17.5639 3.98111 17.7323 3.73339 17.8376 3.49759C17.9459 3.25914 18 3.00876 18 2.74647C18 2.28546 17.8135 1.89997 17.4405 1.58998C17.0676 1.27999 16.5547 1.125 15.902 1.125C15.3065 1.125 14.8102 1.2588 14.4131 1.52639C14.0161 1.79399 13.78 2.23512 13.7048 2.8498L14.9681 2.96107C14.9921 2.63519 15.0824 2.40204 15.2388 2.26162C15.3952 2.1212 15.6057 2.05099 15.8704 2.05099C16.1381 2.05099 16.3472 2.11855 16.4976 2.25367C16.651 2.38614 16.7277 2.5769 16.7277 2.82595C16.7277 3.05115 16.6404 3.27901 16.466 3.50951C16.3367 3.67643 15.9862 3.99436 15.4147 4.46332C14.7049 5.04355 14.2297 5.50985 13.989 5.86223C13.7484 6.21196 13.604 6.58288 13.5559 6.975H18Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.15776 2.1L0 15.75H1.88721L3.36217 11.6159H8.97799L10.5446 15.75H12.5692L7.07246 2.1H5.15776ZM8.42832 10.1447H3.87519L5.35015 6.141C5.66163 5.27817 5.90288 4.40914 6.07388 3.5339C6.28154 4.27258 6.59913 5.2161 7.02665 6.36446L8.42832 10.1447Z"
      fill={props.color}
    />
  </svg>
);
SvgTextEditorSuperscript.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgTextEditorSuperscript.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgTextEditorSuperscript.displayName = "SvgTextEditorSuperscript";
const Memo = memo(SvgTextEditorSuperscript);
export default Memo;
