import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgPhotoLink = (props) => (
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
    <g clipPath="url(#clip0_12864_34073)">
      <path
        d="M4.5 16.875V13.308C4.9192 13.1598 5.30038 12.9312 5.625 12.6406L5.625 16.875H16.875V5.625H12.6406C12.9312 5.30038 13.1598 4.9192 13.308 4.5H16.875C17.4963 4.5 18 5.00368 18 5.625V16.875C18 17.4963 17.4963 18 16.875 18H5.625C5.00368 18 4.5 17.4963 4.5 16.875Z"
        fill={props.color}
      />
      <path
        d="M8.75363 12.2436L7.03854 15.2451C6.90997 15.4701 7.07243 15.75 7.33157 15.75H15.2515C15.4903 15.75 15.6535 15.5088 15.5649 15.2872L13.7791 10.8228C13.671 10.5524 13.2941 10.5367 13.1639 10.7972L11.4859 14.1532C11.3757 14.3735 11.0743 14.4054 10.9205 14.2131L9.31021 12.2003C9.16137 12.0142 8.87184 12.0368 8.75363 12.2436Z"
        fill={props.color}
      />
      <path
        d="M0.717154 8.03904C-0.255282 9.01147 -0.236367 10.6202 0.759208 11.6158C1.75478 12.6114 3.36353 12.6303 4.33597 11.6578L7.11323 8.88058C8.08567 7.90815 8.06676 6.2994 7.07118 5.30382C6.96866 5.19834 6.82925 5.13784 6.68453 5.13514C6.53931 5.13193 6.40077 5.18768 6.29919 5.28926C6.1976 5.39085 6.14186 5.52939 6.14506 5.67461C6.14776 5.81933 6.20828 5.95875 6.31375 6.06126C6.89333 6.64083 6.90389 7.53901 6.33778 8.10512L3.56051 10.8824C2.9944 11.4485 2.09623 11.4379 1.51665 10.8584C0.937071 10.2788 0.92651 9.3806 1.49262 8.81449L4.14365 6.16347C4.24675 6.0634 4.30399 5.92537 4.30329 5.78068C4.30257 5.63498 4.24356 5.4951 4.14006 5.3916C4.03606 5.2876 3.89617 5.22858 3.75098 5.22837C3.60628 5.22767 3.46825 5.28492 3.36819 5.38801L0.717154 8.03904ZM5.26177 3.49442C4.28934 4.46685 4.30825 6.0756 5.30383 7.07118C5.40584 7.17615 5.54525 7.23666 5.69047 7.23986C5.83519 7.24256 5.97424 7.18732 6.07582 7.08574C6.17741 6.98415 6.23265 6.84511 6.22995 6.70039C6.22674 6.55517 6.16622 6.41575 6.06126 6.31374C5.48168 5.73417 5.47112 4.83599 6.03723 4.26988L8.8145 1.49262C9.38061 0.926508 10.2788 0.937068 10.8584 1.51665C11.4379 2.09622 11.4485 2.9944 10.8824 3.56051L8.23136 6.21153C8.12826 6.3116 8.07051 6.44912 8.07172 6.59432C8.07243 6.73902 8.13095 6.8794 8.23495 6.9834C8.33845 7.08689 8.47883 7.14542 8.62353 7.14612C8.76873 7.14733 8.90625 7.08957 9.00682 6.98699L11.6578 4.33596C12.6303 3.36353 12.6114 1.75478 11.6158 0.759207C10.6202 -0.236366 9.01147 -0.255281 8.03903 0.717153L5.26177 3.49442Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_34073">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgPhotoLink.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgPhotoLink.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgPhotoLink.displayName = "SvgPhotoLink";
const Memo = memo(SvgPhotoLink);
export default Memo;
