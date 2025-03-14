import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgBarcode = (props) => (
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
      d="M0.84375 1.125C0.376172 1.125 0 1.50117 0 1.96875V16.0312C0 16.4988 0.376172 16.875 0.84375 16.875H1.40625C1.87383 16.875 2.25 16.4988 2.25 16.0312V1.96875C2.25 1.50117 1.87383 1.125 1.40625 1.125H0.84375ZM3.9375 1.125C3.62812 1.125 3.375 1.37812 3.375 1.6875V16.3125C3.375 16.6219 3.62812 16.875 3.9375 16.875C4.24687 16.875 4.5 16.6219 4.5 16.3125V1.6875C4.5 1.37812 4.24687 1.125 3.9375 1.125ZM6.46875 1.125C6.00117 1.125 5.625 1.50117 5.625 1.96875V16.0312C5.625 16.4988 6.00117 16.875 6.46875 16.875H7.03125C7.49883 16.875 7.875 16.4988 7.875 16.0312V1.96875C7.875 1.50117 7.49883 1.125 7.03125 1.125H6.46875ZM9.84375 1.125C9.37617 1.125 9 1.50117 9 1.96875V16.0312C9 16.4988 9.37617 16.875 9.84375 16.875H10.4062C10.8738 16.875 11.25 16.4988 11.25 16.0312V1.96875C11.25 1.50117 10.8738 1.125 10.4062 1.125H9.84375ZM15.75 1.96875V16.0312C15.75 16.4988 16.1262 16.875 16.5938 16.875H17.1562C17.6238 16.875 18 16.4988 18 16.0312V1.96875C18 1.50117 17.6238 1.125 17.1562 1.125H16.5938C16.1262 1.125 15.75 1.50117 15.75 1.96875ZM13.5 1.6875V16.3125C13.5 16.6219 13.7531 16.875 14.0625 16.875C14.3719 16.875 14.625 16.6219 14.625 16.3125V1.6875C14.625 1.37812 14.3719 1.125 14.0625 1.125C13.7531 1.125 13.5 1.37812 13.5 1.6875Z"
      fill={props.color}
    />
  </svg>
);
SvgBarcode.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgBarcode.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgBarcode.displayName = "SvgBarcode";
const Memo = memo(SvgBarcode);
export default Memo;
