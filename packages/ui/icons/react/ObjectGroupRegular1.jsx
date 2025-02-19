import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgObjectGroupRegular1 = (props) => (
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
      d="M0.5625 3.99286C0.217969 3.67857 0 3.22143 0 2.71429C0 1.76786 0.755859 1 1.6875 1C2.18672 1 2.63672 1.22143 2.94609 1.57143H15.0539C15.3633 1.22143 15.8133 1 16.3125 1C17.2441 1 18 1.76786 18 2.71429C18 3.22143 17.782 3.67857 17.4375 3.99286V14.0071C17.782 14.3214 18 14.7786 18 15.2857C18 16.2321 17.2441 17 16.3125 17C15.8133 17 15.3633 16.7786 15.0539 16.4286H2.94609C2.63672 16.7786 2.18672 17 1.6875 17C0.755859 17 0 16.2321 0 15.2857C0 14.7786 0.217969 14.3214 0.5625 14.0071V3.99286ZM3.28008 3.28571C3.11133 3.77143 2.73164 4.15714 2.25 4.33214V13.6714C2.72813 13.8429 3.10781 14.2286 3.28008 14.7179H14.7234C14.8922 14.2321 15.2719 13.8464 15.7535 13.6714V4.33214C15.2754 4.16071 14.8957 3.775 14.7234 3.28571H3.28008ZM3.375 5.57143C3.375 4.93929 3.87773 4.42857 4.5 4.42857H9C9.62227 4.42857 10.125 4.93929 10.125 5.57143V9C10.125 9.63214 9.62227 10.1429 9 10.1429H4.5C3.87773 10.1429 3.375 9.63214 3.375 9V5.57143ZM7.875 11.2857H9C10.241 11.2857 11.25 10.2607 11.25 9V7.85714H13.5C14.1223 7.85714 14.625 8.36786 14.625 9V12.4286C14.625 13.0607 14.1223 13.5714 13.5 13.5714H9C8.37773 13.5714 7.875 13.0607 7.875 12.4286V11.2857Z"
      fill={props.color}
    />
  </svg>
);
SvgObjectGroupRegular1.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgObjectGroupRegular1.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgObjectGroupRegular1.displayName = "SvgObjectGroupRegular1";
const Memo = memo(SvgObjectGroupRegular1);
export default Memo;
