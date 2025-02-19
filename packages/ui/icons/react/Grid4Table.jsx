import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgGrid4Table = (props) => (
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
      d="M2.25 8.875V5.5H7.875V8.875H2.25ZM2.25 11.125H7.875V14.5H2.25V11.125ZM10.125 14.5V11.125H15.75V14.5H10.125ZM15.75 8.875H10.125V5.5H15.75V8.875ZM2.25 1C1.00898 1 0 2.00898 0 3.25V14.5C0 15.741 1.00898 16.75 2.25 16.75H15.75C16.991 16.75 18 15.741 18 14.5V3.25C18 2.00898 16.991 1 15.75 1H2.25Z"
      fill={props.color}
    />
  </svg>
);
SvgGrid4Table.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgGrid4Table.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgGrid4Table.displayName = "SvgGrid4Table";
const Memo = memo(SvgGrid4Table);
export default Memo;
