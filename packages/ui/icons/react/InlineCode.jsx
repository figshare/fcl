import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgInlineCode = (props) => (
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
      d="M10.5836 3.39776C10.2406 3.30298 9.88812 3.51288 9.79623 3.86658L7.02317 14.5402C6.93128 14.8939 7.13479 15.2575 7.47774 15.3522C7.82068 15.447 8.17318 15.2371 8.26507 14.8834L11.0381 4.20977C11.13 3.85608 10.9265 3.49253 10.5836 3.39776Z"
      fill={props.color}
    />
    <path
      d="M4.07636 13.6013C3.79722 13.912 3.34465 13.912 3.06551 13.6013L0.211448 10.4245C-0.0704648 10.1107 -0.0705002 9.60189 0.211448 9.28805L3.06551 6.11123C3.34465 5.80052 3.79722 5.80052 4.07636 6.11123C4.3555 6.42193 4.3555 6.92569 4.07636 7.23639L1.72267 9.85626L4.07636 12.4761C4.3555 12.7868 4.3555 13.2906 4.07636 13.6013Z"
      fill={props.color}
    />
    <path
      d="M13.9236 13.6013C14.2028 13.912 14.6554 13.912 14.9345 13.6013L17.7886 10.4245C18.0705 10.1107 18.0705 9.60189 17.7886 9.28805L14.9345 6.11123C14.6554 5.80052 14.2028 5.80052 13.9236 6.11123C13.6445 6.42193 13.6445 6.92569 13.9236 7.23639L16.2773 9.85626L13.9236 12.4761C13.6445 12.7868 13.6445 13.2906 13.9236 13.6013Z"
      fill={props.color}
    />
  </svg>
);
SvgInlineCode.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgInlineCode.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgInlineCode.displayName = "SvgInlineCode";
const Memo = memo(SvgInlineCode);
export default Memo;
