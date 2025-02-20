import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgFileVideoRegular = (props) => (
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
      d="M13.25 16.3125C13.5594 16.3125 13.8125 16.0594 13.8125 15.75V5.625H11C10.3777 5.625 9.875 5.12227 9.875 4.5V1.6875H4.25C3.94062 1.6875 3.6875 1.94062 3.6875 2.25V15.75C3.6875 16.0594 3.94062 16.3125 4.25 16.3125H13.25ZM2 2.25C2 1.00898 3.00898 0 4.25 0H10.0684C10.666 0 11.2391 0.235547 11.6609 0.657422L14.8426 3.83906C15.2645 4.26094 15.5 4.83398 15.5 5.43164V15.75C15.5 16.991 14.491 18 13.25 18H4.25C3.00898 18 2 16.991 2 15.75V2.25ZM4.8125 10.125C4.8125 9.50273 5.31523 9 5.9375 9H9.3125C9.93477 9 10.4375 9.50273 10.4375 10.125V10.6875L12.016 9.63633C12.0863 9.59062 12.1707 9.5625 12.2551 9.5625C12.4941 9.5625 12.6875 9.75586 12.6875 9.99492V13.6301C12.6875 13.8691 12.4941 14.0625 12.2551 14.0625C12.1707 14.0625 12.0863 14.0379 12.016 13.9887L10.4375 12.9375V13.5C10.4375 14.1223 9.93477 14.625 9.3125 14.625H5.9375C5.31523 14.625 4.8125 14.1223 4.8125 13.5V10.125Z"
      fill={props.color}
    />
  </svg>
);
SvgFileVideoRegular.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgFileVideoRegular.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgFileVideoRegular.displayName = "SvgFileVideoRegular";
const Memo = memo(SvgFileVideoRegular);
export default Memo;
