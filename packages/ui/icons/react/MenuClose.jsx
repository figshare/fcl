import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgMenuClose = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.1886 7.87549L13.0646 9.00032L14.1897 10.1255H11.4028L10.9759 9.69862C10.5914 9.31416 10.5913 8.68983 10.9757 8.30529L10.9728 8.30203L11.3994 7.87549H14.1886ZM13.8458 15.7505H2.24998C1.62771 15.7505 1.12498 15.2477 1.12498 14.6255C1.12498 14.0033 1.62771 13.5005 2.24998 13.5005H11.5958L13.8458 15.7505ZM16.8471 14.8761C16.5189 14.9628 16.1548 14.8775 15.8977 14.6205L14.7778 13.5005H15.75C16.3722 13.5005 16.875 14.0033 16.875 14.6255C16.875 14.7117 16.8653 14.7956 16.8471 14.8761ZM8.69 10.1255C8.52015 9.66499 8.43811 9.21568 8.4379 8.94921C8.43748 8.43799 8.99997 7.87549 8.99997 7.87549H2.24998C1.62771 7.87549 1.12498 8.37823 1.12498 9.00049C1.12498 9.62275 1.62771 10.1255 2.24998 10.1255H8.69ZM11.941 4.50049H2.24998C1.62771 4.50049 1.12498 3.99776 1.12498 3.37549C1.12498 2.75322 1.62771 2.25049 2.24998 2.25049H13.9017L11.941 4.50049ZM14.7744 4.50049L15.8941 3.38066C16.1521 3.12277 16.5181 3.03762 16.8472 3.1255C16.8654 3.20587 16.875 3.28954 16.875 3.37549C16.875 3.99776 16.3722 4.50049 15.75 4.50049H14.7744Z"
      fill={props.color}
    />
    <path
      d="M10.9759 8.30512C10.5914 8.68963 10.5914 9.3141 10.9759 9.69862L15.8977 14.6205C16.2823 15.0051 16.9067 15.0051 17.2913 14.6205C17.6758 14.236 17.6758 13.6115 17.2913 13.227L13.0646 9.00032L17.2882 4.77366C17.6728 4.38915 17.6728 3.76469 17.2882 3.38016C16.9037 2.99564 16.2792 2.99564 15.8947 3.38016L10.9728 8.30203L10.9759 8.30512Z"
      fill={props.color}
    />
  </svg>
);
SvgMenuClose.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgMenuClose.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgMenuClose.displayName = "SvgMenuClose";
const Memo = memo(SvgMenuClose);
export default Memo;
