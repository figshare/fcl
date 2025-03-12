import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgFileImageRegular = (props) => (
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
      d="M4.5 16.3125C4.19062 16.3125 3.9375 16.0594 3.9375 15.75V2.25C3.9375 1.94062 4.19062 1.6875 4.5 1.6875H10.125V4.5C10.125 5.12227 10.6277 5.625 11.25 5.625H14.0625V15.75C14.0625 16.0594 13.8094 16.3125 13.5 16.3125H4.5ZM4.5 0C3.25898 0 2.25 1.00898 2.25 2.25V15.75C2.25 16.991 3.25898 18 4.5 18H13.5C14.741 18 15.75 16.991 15.75 15.75V5.43164C15.75 4.83398 15.5145 4.26094 15.0926 3.83906L11.9074 0.657422C11.4855 0.235547 10.916 0 10.3184 0H4.5ZM7.875 9C7.875 8.70163 7.75647 8.41548 7.5455 8.2045C7.33452 7.99353 7.04837 7.875 6.75 7.875C6.45163 7.875 6.16548 7.99353 5.9545 8.2045C5.74353 8.41548 5.625 8.70163 5.625 9C5.625 9.29837 5.74353 9.58452 5.9545 9.7955C6.16548 10.0065 6.45163 10.125 6.75 10.125C7.04837 10.125 7.33452 10.0065 7.5455 9.7955C7.75647 9.58452 7.875 9.29837 7.875 9ZM10.3078 10.6488C10.2023 10.4977 10.0301 10.4062 9.84375 10.4062C9.65742 10.4062 9.48516 10.4977 9.37969 10.6488L7.92773 12.7477L7.50938 12.0762C7.40742 11.9109 7.22461 11.8125 7.03125 11.8125C6.83789 11.8125 6.65859 11.9109 6.55312 12.0762L5.14688 14.3262C5.03789 14.4984 5.03437 14.7164 5.13281 14.8957C5.23125 15.075 5.42109 15.184 5.625 15.184H7.3125H8.4375H9.84375H12.375C12.5859 15.184 12.7758 15.068 12.8742 14.8816C12.9727 14.6953 12.9586 14.4738 12.8391 14.3016L10.3078 10.6453V10.6488Z"
      fill={props.color}
    />
  </svg>
);
SvgFileImageRegular.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgFileImageRegular.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgFileImageRegular.displayName = "SvgFileImageRegular";
const Memo = memo(SvgFileImageRegular);
export default Memo;
