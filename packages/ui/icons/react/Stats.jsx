import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgStats = (props) => (
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
      d="M17.1002 3.375H17.46C17.7582 3.375 18 3.61677 18 3.915V4.27412C18 4.27471 18 4.27529 18 4.27588V9.135C18 9.43323 17.7582 9.675 17.46 9.675H16.74C16.4418 9.675 16.2 9.43323 16.2 9.135V6.44779L9.6364 13.0114C9.28492 13.3629 8.71508 13.3629 8.3636 13.0114L5.4 10.0478L1.5364 13.9114C1.18492 14.2629 0.615076 14.2629 0.263604 13.9114C-0.087868 13.5599 -0.087868 12.9901 0.263604 12.6386L4.7636 8.1386C5.11508 7.78713 5.68492 7.78713 6.0364 8.1386L9 11.1022L14.9272 5.175H12.24C11.9418 5.175 11.7 4.93323 11.7 4.635V3.915C11.7 3.61677 11.9418 3.375 12.24 3.375H17.1002C17.1003 3.375 17.1001 3.375 17.1002 3.375Z"
      fill={props.color}
    />
  </svg>
);
SvgStats.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgStats.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgStats.displayName = "SvgStats";
const Memo = memo(SvgStats);
export default Memo;
