import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgUpRightAndDownLeftFromCenterSolid = (props) => (
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
    <g clipPath="url(#clip0_19990_3783)">
      <path
        d="M12.0938 0H17.1562C17.6238 0 18 0.376172 18 0.84375V5.90625C18 6.24727 17.7961 6.55664 17.4797 6.68672C17.1633 6.8168 16.8012 6.74648 16.5586 6.50391L15.1875 5.13281L12.1289 8.19141C11.7984 8.52188 11.2641 8.52188 10.9371 8.19141L9.81211 7.06641C9.48164 6.73594 9.48164 6.20156 9.81211 5.87461L12.8707 2.81602L11.4961 1.44141C11.2535 1.19883 11.1832 0.836719 11.3133 0.520312C11.4434 0.203906 11.7527 0 12.0938 0ZM5.90625 18H0.84375C0.376172 18 0 17.6238 0 17.1562V12.0938C0 11.7527 0.203906 11.4434 0.520312 11.3133C0.836719 11.1832 1.19883 11.2535 1.44141 11.4961L2.8125 12.8672L5.87109 9.80859C6.20156 9.47812 6.73594 9.47812 7.06289 9.80859L8.18789 10.9336C8.51836 11.2641 8.51836 11.7984 8.18789 12.1254L5.1293 15.184L6.50039 16.5551C6.74297 16.7977 6.81328 17.1598 6.6832 17.4762C6.55313 17.7926 6.24375 17.9965 5.90273 17.9965L5.90625 18Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_19990_3783">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgUpRightAndDownLeftFromCenterSolid.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgUpRightAndDownLeftFromCenterSolid.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgUpRightAndDownLeftFromCenterSolid.displayName =
  "SvgUpRightAndDownLeftFromCenterSolid";
const Memo = memo(SvgUpRightAndDownLeftFromCenterSolid);
export default Memo;
