import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgQuestion = (props) => (
  <svg
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={props.width ?? props.inline ? "1em" : "100%"}
    focusable={false}
    aria-hidden={true}
    role="img"
    alt={props.title}
    {...props}
  >
    <path
      d="M5.22222 4.57143C5.22222 3.31071 6.21875 2.28571 7.44444 2.28571H8.55556C9.78125 2.28571 10.7778 3.31071 10.7778 4.57143V4.7C10.7778 5.47857 10.3924 6.20357 9.75695 6.62143L8.29167 7.58929C7.41667 8.16786 6.88889 9.16429 6.88889 10.2321V10.2857C6.88889 10.9179 7.38542 11.4286 8 11.4286C8.61458 11.4286 9.11111 10.9179 9.11111 10.2857V10.2357C9.11111 9.94286 9.25694 9.67143 9.49306 9.51429L10.9583 8.54643C12.2292 7.70357 13 6.25714 13 4.7V4.57143C13 2.04643 11.0104 0 8.55556 0H7.44444C4.98958 0 3 2.04643 3 4.57143C3 5.20357 3.49653 5.71429 4.11111 5.71429C4.72569 5.71429 5.22222 5.20357 5.22222 4.57143ZM8 16C8.36836 16 8.72163 15.8495 8.98209 15.5816C9.24256 15.3137 9.38889 14.9503 9.38889 14.5714C9.38889 14.1925 9.24256 13.8292 8.98209 13.5613C8.72163 13.2934 8.36836 13.1429 8 13.1429C7.63164 13.1429 7.27837 13.2934 7.01791 13.5613C6.75744 13.8292 6.61111 14.1925 6.61111 14.5714C6.61111 14.9503 6.75744 15.3137 7.01791 15.5816C7.27837 15.8495 7.63164 16 8 16Z"
      fill={props.color}
    />
  </svg>
);
SvgQuestion.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgQuestion.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgQuestion.displayName = "SvgQuestion";
const Memo = memo(SvgQuestion);
export default Memo;
