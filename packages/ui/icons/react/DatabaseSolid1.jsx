import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDatabaseSolid1 = (props) => (
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
      d="M16 2.8125V4.5C16 6.05391 12.6417 7.3125 8.5 7.3125C4.35826 7.3125 1 6.05391 1 4.5V2.8125C1 1.25859 4.35826 0 8.5 0C12.6417 0 16 1.25859 16 2.8125ZM14.1652 7.54805C14.8616 7.28789 15.5011 6.95391 16 6.54258V10.125C16 11.6789 12.6417 12.9375 8.5 12.9375C4.35826 12.9375 1 11.6789 1 10.125V6.54258C1.49888 6.95742 2.13839 7.28789 2.83482 7.54805C4.33817 8.11055 6.3404 8.4375 8.5 8.4375C10.6596 8.4375 12.6618 8.11055 14.1652 7.54805ZM1 12.1676C1.49888 12.5824 2.13839 12.9129 2.83482 13.173C4.33817 13.7355 6.3404 14.0625 8.5 14.0625C10.6596 14.0625 12.6618 13.7355 14.1652 13.173C14.8616 12.9129 15.5011 12.5789 16 12.1676V15.1875C16 16.7414 12.6417 18 8.5 18C4.35826 18 1 16.7414 1 15.1875V12.1676Z"
      fill={props.color}
    />
  </svg>
);
SvgDatabaseSolid1.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDatabaseSolid1.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgDatabaseSolid1.displayName = "SvgDatabaseSolid1";
const Memo = memo(SvgDatabaseSolid1);
export default Memo;
