import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgEdit = (props) => (
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
      d="M6.58087 13.3986C5.6335 13.0129 4.5732 13.1374 4.5732 13.1374L4.5 18L8.14832 14.4633C8.14832 14.4633 7.4906 13.7682 6.58087 13.3986ZM8.91061 3.06674C7.65686 5.93045 5.34699 11.2069 5.0793 11.8166C5.09917 11.8035 6.35919 11.91 7.10057 12.2113C7.81475 12.5016 8.69729 13.2881 8.69207 13.2861C8.94616 12.7045 11.2623 7.41604 12.5202 4.54229C12.0549 4.13247 11.4516 3.68449 10.7782 3.41027C10.1549 3.15715 9.47736 3.0798 8.91061 3.06674ZM12.3142 0.150807C11.2759 -0.272069 10.1539 0.22815 9.71472 1.22959C9.71472 1.22959 9.61957 1.44856 9.4669 1.79611C10.0472 1.81519 10.7384 1.89957 11.37 2.15671C12.033 2.4259 12.6217 2.86384 13.0776 3.26764C13.2302 2.91909 13.3264 2.69911 13.3264 2.69911C13.7646 1.69667 13.3536 0.573683 12.3142 0.150807Z"
      fill={props.color}
    />
  </svg>
);
SvgEdit.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgEdit.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgEdit.displayName = "SvgEdit";
const Memo = memo(SvgEdit);
export default Memo;
