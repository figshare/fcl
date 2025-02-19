import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDownloadLock = (props) => (
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
    <g clipPath="url(#clip0_14781_100125)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3697 11.4545H10.8403V10.5195C10.8403 8.97021 12.1045 7.71429 13.6639 7.71429C15.2233 7.71429 16.4874 8.97021 16.4874 10.5195V11.4545H16.958C17.4778 11.4545 17.8992 11.8732 17.8992 12.3896V17.0649C17.8992 17.5814 17.4778 18 16.958 18H10.3697C9.84995 18 9.42857 17.5814 9.42857 17.0649V12.3896C9.42857 11.8732 9.84995 11.4545 10.3697 11.4545ZM15.3109 10.5195V11.4545H12.0168V10.5195C12.0168 9.61574 12.7542 8.88312 13.6639 8.88312C14.5735 8.88312 15.3109 9.61574 15.3109 10.5195ZM13.6639 16.1299C14.4436 16.1299 15.0756 15.5019 15.0756 14.7273C15.0756 13.9526 14.4436 13.3247 13.6639 13.3247C12.8842 13.3247 12.2521 13.9526 12.2521 14.7273C12.2521 15.5019 12.8842 16.1299 13.6639 16.1299Z"
        fill={props.color}
      />
      <path
        d="M7.875 12H2.27679C1.96613 12 1.71429 11.7482 1.71429 11.4375V10.2857C1.71429 9.81233 1.33053 9.42857 0.857143 9.42857C0.383756 9.42857 0 9.81233 0 10.2857V12C0 12.9429 0.771429 13.7143 1.71429 13.7143H7.875V12Z"
        fill={props.color}
      />
      <path
        d="M10.538 5.39513C10.872 5.72919 10.872 6.27081 10.538 6.60487L6.85714 10.2857L3.1763 6.60487C2.84224 6.27081 2.84224 5.72919 3.1763 5.39513C3.5099 5.06153 4.05062 5.061 4.38487 5.39396L6 7.00286V0.857143C6 0.383756 6.38376 0 6.85714 0C7.33053 0 7.71429 0.383756 7.71429 0.857143V7.00286L9.32942 5.39396C9.66367 5.061 10.2044 5.06153 10.538 5.39513Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_14781_100125">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgDownloadLock.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgDownloadLock.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgDownloadLock.displayName = "SvgDownloadLock";
const Memo = memo(SvgDownloadLock);
export default Memo;
