import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgMapPinPlusFill1 = (props) => (
  <svg
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={props.width ?? props.inline ? "1em" : "100%"}
    focusable={false}
    aria-hidden={true}
    role="img"
    alt={props.title}
    {...props}
  >
    <path
      d="M16 2C13.0836 2.00331 10.2877 3.1633 8.22548 5.22548C6.1633 7.28766 5.00331 10.0836 5 13C5 16.925 6.81375 21.085 10.25 25.0312C11.794 26.8145 13.5318 28.4202 15.4312 29.8188C15.5994 29.9365 15.7997 29.9997 16.005 29.9997C16.2103 29.9997 16.4106 29.9365 16.5788 29.8188C18.4747 28.4196 20.2091 26.8139 21.75 25.0312C25.1812 21.085 27 16.925 27 13C26.9967 10.0836 25.8367 7.28766 23.7745 5.22548C21.7123 3.1633 18.9164 2.00331 16 2ZM20 14H17V17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18C15.7348 18 15.4804 17.8946 15.2929 17.7071C15.1054 17.5196 15 17.2652 15 17V14H12C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12H15V9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8C16.2652 8 16.5196 8.10536 16.7071 8.29289C16.8946 8.48043 17 8.73478 17 9V12H20C20.2652 12 20.5196 12.1054 20.7071 12.2929C20.8946 12.4804 21 12.7348 21 13C21 13.2652 20.8946 13.5196 20.7071 13.7071C20.5196 13.8946 20.2652 14 20 14Z"
      fill={props.color}
    />
  </svg>
);
SvgMapPinPlusFill1.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgMapPinPlusFill1.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgMapPinPlusFill1.displayName = "SvgMapPinPlusFill1";
const Memo = memo(SvgMapPinPlusFill1);
export default Memo;
