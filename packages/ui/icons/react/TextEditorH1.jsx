import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgTextEditorH1 = (props) => (
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
      d="M0 14.9946V2.30195H1.67965V7.51407H8.27706V2.30195H9.95671V14.9946H8.27706V9.01191H1.67965V14.9946H0Z"
      fill={props.color}
    />
    <path
      d="M18 14.9946H16.4416V5.06385C16.0664 5.42172 15.5729 5.77958 14.961 6.13745C14.355 6.49531 13.8095 6.76371 13.3247 6.94264V5.43615C14.1962 5.02633 14.9582 4.52994 15.6104 3.94697C16.2626 3.364 16.7244 2.79834 16.9957 2.25H18V14.9946Z"
      fill={props.color}
    />
  </svg>
);
SvgTextEditorH1.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgTextEditorH1.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgTextEditorH1.displayName = "SvgTextEditorH1";
const Memo = memo(SvgTextEditorH1);
export default Memo;
