import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgFolderRegular = (props) => (
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
      d="M0 3.375C0 2.13398 1.00898 1.125 2.25 1.125H6.89414C7.56563 1.125 8.20898 1.39219 8.68359 1.8668L10.1918 3.375H15.75C16.991 3.375 18 4.38398 18 5.625V14.625C18 15.866 16.991 16.875 15.75 16.875H2.25C1.00898 16.875 0 15.866 0 14.625V3.375ZM2.25 2.8125C1.94062 2.8125 1.6875 3.06562 1.6875 3.375V14.625C1.6875 14.9344 1.94062 15.1875 2.25 15.1875H15.75C16.0594 15.1875 16.3125 14.9344 16.3125 14.625V5.625C16.3125 5.31563 16.0594 5.0625 15.75 5.0625H10.0758C9.70312 5.0625 9.34453 4.91484 9.08086 4.65117L7.4918 3.05859C7.33359 2.90039 7.11914 2.8125 6.89414 2.8125H2.25Z"
      fill={props.color}
    />
  </svg>
);
SvgFolderRegular.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgFolderRegular.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgFolderRegular.displayName = "SvgFolderRegular";
const Memo = memo(SvgFolderRegular);
export default Memo;
