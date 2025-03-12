import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCheckmark = (props) => (
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
      d="M3.33478 7.09826L6.39491 10.1333C6.5466 10.2837 6.79252 10.2837 6.9442 10.1333L14.6652 2.47566C14.9686 2.17478 15.4604 2.17478 15.7638 2.47565L17.7725 4.46783C18.0758 4.76871 18.0758 5.25652 17.7725 5.55739L7.21885 16.0243C6.91548 16.3252 6.42363 16.3252 6.12027 16.0243L0.227524 10.18C-0.0758409 9.87912 -0.0758414 9.39131 0.227523 9.09044L2.2362 7.09826C2.53956 6.79739 3.03141 6.79739 3.33478 7.09826Z"
      fill={props.color}
    />
  </svg>
);
SvgCheckmark.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgCheckmark.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgCheckmark.displayName = "SvgCheckmark";
const Memo = memo(SvgCheckmark);
export default Memo;
