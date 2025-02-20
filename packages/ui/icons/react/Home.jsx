import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgHome = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.386688 9.59743C0.0294456 9.59743 -0.136023 9.14116 0.133941 8.90049L8.74725 1.22198C8.8923 1.09267 9.1077 1.09267 9.25275 1.22198L17.8661 8.90049C18.136 9.14116 17.9706 9.59743 17.6133 9.59743H15.1746C14.9615 9.59743 14.7887 9.77516 14.7887 9.99439V16.2134C14.7887 16.5788 14.5007 16.875 14.1455 16.875H11.5728C11.2175 16.875 10.9296 16.5788 10.9296 16.2134V12.2438C10.9296 11.8784 10.6416 11.5822 10.2864 11.5822H7.71362C7.3584 11.5822 7.07043 11.8784 7.07043 12.2438V16.2134C7.07043 16.5788 6.78247 16.875 6.42724 16.875H3.85448C3.49926 16.875 3.2113 16.5788 3.2113 16.2134V9.99439C3.2113 9.77516 3.03852 9.59743 2.82538 9.59743H0.386688Z"
      fill={props.color}
    />
  </svg>
);
SvgHome.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgHome.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgHome.displayName = "SvgHome";
const Memo = memo(SvgHome);
export default Memo;
