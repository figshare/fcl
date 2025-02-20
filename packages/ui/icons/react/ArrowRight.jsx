import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgArrowRight = (props) => (
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
      d="M11.4301 7.25037L9.29609 5.08948C8.90044 4.68883 8.90044 4.03926 9.29609 3.63862L10.3707 2.55048C10.7664 2.14984 11.4078 2.14984 11.8035 2.55048L17.7033 8.52457C18.0989 8.92522 18.0989 9.57478 17.7033 9.97543L11.8035 15.9495C11.4078 16.3502 10.7664 16.3502 10.3707 15.9495L9.29609 14.8614C8.90044 14.4607 8.90044 13.8112 9.29609 13.4105L11.4294 11.2504H1.00004C0.447735 11.2504 0 10.8027 0 10.2504V8.25034C0 7.69807 0.447733 7.25037 1.00004 7.25037H11.4301Z"
      fill={props.color}
    />
  </svg>
);
SvgArrowRight.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgArrowRight.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgArrowRight.displayName = "SvgArrowRight";
const Memo = memo(SvgArrowRight);
export default Memo;
