import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgNoteEdit = (props) => (
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
      d="M8.26581 9.12856C8.26581 9.12856 9.10232 9.15337 9.79249 9.54982C10.4553 9.92995 10.8853 10.527 10.8853 10.527L7.64898 12.7822L8.26581 9.12856Z"
      fill={props.color}
    />
    <path
      d="M12.1377 3.03838C12.3723 2.67504 12.5931 2.33318 12.789 2.02979C13.227 2.10302 13.7435 2.23706 14.1975 2.4974C14.6881 2.77923 15.1044 3.18409 15.418 3.54477C14.8192 4.47218 13.9896 5.75674 13.2412 6.91567C12.3567 8.28528 11.5855 9.47942 11.4425 9.70126C11.4463 9.70336 10.8526 9.01235 10.3322 8.71385C9.79205 8.40399 8.82729 8.18286 8.81038 8.19047C9.04637 7.82584 10.8131 5.08975 12.1377 3.03838Z"
      fill={props.color}
    />
    <path
      d="M13.6241 0.736229C14.08 0.0311959 15.0076 -0.219997 15.764 0.214612C16.5213 0.649337 16.7106 1.541 16.2554 2.2469C16.2554 2.2469 16.1555 2.4018 15.9969 2.6472C15.6899 2.29212 15.2839 1.89646 14.8008 1.61958C14.3407 1.35528 13.8145 1.21442 13.3667 1.13513C13.5251 0.890486 13.6241 0.736229 13.6241 0.736229Z"
      fill={props.color}
    />
    <path
      d="M3.82786 2.67585H10.5061L9.85603 3.69746H3.82786C3.53738 3.69746 3.3019 3.92616 3.3019 4.20827V16.4676C3.3019 16.7497 3.53738 16.9784 3.82786 16.9784H14.3469C14.6374 16.9784 14.8728 16.7497 14.8728 16.4676V7.2895L15.9247 5.6363V16.4676C15.9247 17.3139 15.2183 18 14.3469 18H3.82786C2.95643 18 2.25 17.3139 2.25 16.4676V4.20827C2.25 3.36194 2.95643 2.67585 3.82786 2.67585Z"
      fill={props.color}
    />
  </svg>
);
SvgNoteEdit.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgNoteEdit.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgNoteEdit.displayName = "SvgNoteEdit";
const Memo = memo(SvgNoteEdit);
export default Memo;
