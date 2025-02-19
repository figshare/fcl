import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgRss = (props) => (
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
      d="M16.4001 0L1.59991 0C0.71611 0 0 0.720124 0 1.60888L0 16.3911C0 17.2799 0.71611 18 1.59991 18H16.3993C17.2831 18 17.9992 17.2799 17.9992 16.3911L18 1.60888C18 0.720938 17.2831 0 16.4001 0L16.4001 0ZM4.71955 15.2896C3.80821 15.2896 3.06941 14.5459 3.06941 13.6302C3.06941 12.713 3.80821 11.9709 4.71955 11.9709C5.63008 11.9709 6.36969 12.713 6.36969 13.6302C6.36969 14.5459 5.63008 15.2896 4.71955 15.2896ZM11.0123 15.2896H9.31845C9.32817 15.143 9.34032 14.9972 9.34032 14.8481C9.34032 11.3631 6.52034 8.52734 3.05479 8.52734H3.05398V6.82395H3.05479C7.45439 6.82395 11.0342 10.4238 11.0342 14.8481C11.0342 14.9972 11.0204 15.1422 11.0123 15.2896ZM14.806 15.2896H13.202C13.2984 14.7495 13.3575 14.1972 13.3575 13.6302C13.3575 8.48921 9.1985 4.30686 4.08612 4.30686C3.73698 4.30686 3.39351 4.33048 3.05407 4.36795V2.76314C3.39349 2.73056 3.73778 2.71019 4.08612 2.71019C10.0734 2.71019 14.9452 7.60932 14.9452 13.6302C14.9452 14.1955 14.8894 14.7462 14.8059 15.2896L14.806 15.2896Z"
      fill={props.color}
    />
  </svg>
);
SvgRss.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgRss.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgRss.displayName = "SvgRss";
const Memo = memo(SvgRss);
export default Memo;
