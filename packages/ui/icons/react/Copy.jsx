import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCopy = (props) => (
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
      d="M14.625 11.8125H7.875C7.56563 11.8125 7.3125 11.5594 7.3125 11.25V2.25C7.3125 1.94062 7.56563 1.6875 7.875 1.6875H12.8004L15.1875 4.07461V11.25C15.1875 11.5594 14.9344 11.8125 14.625 11.8125ZM7.875 13.5H14.625C15.866 13.5 16.875 12.491 16.875 11.25V4.07461C16.875 3.62812 16.6957 3.19922 16.3793 2.88281L13.9957 0.495703C13.6793 0.179297 13.2504 0 12.8039 0H7.875C6.63398 0 5.625 1.00898 5.625 2.25V11.25C5.625 12.491 6.63398 13.5 7.875 13.5ZM3.375 4.5C2.13398 4.5 1.125 5.50898 1.125 6.75V15.75C1.125 16.991 2.13398 18 3.375 18H10.125C11.366 18 12.375 16.991 12.375 15.75V14.625H10.6875V15.75C10.6875 16.0594 10.4344 16.3125 10.125 16.3125H3.375C3.06562 16.3125 2.8125 16.0594 2.8125 15.75V6.75C2.8125 6.44063 3.06562 6.1875 3.375 6.1875H4.5V4.5H3.375Z"
      fill={props.color}
    />
  </svg>
);
SvgCopy.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgCopy.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgCopy.displayName = "SvgCopy";
const Memo = memo(SvgCopy);
export default Memo;
