import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgUser = (props) => (
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
      d="M15.6789 13.4262C15.6789 13.4262 14.343 13.0223 12.1758 12.2749C12.1556 11.9055 11.8726 11.4087 11.3734 11.4087H11.3198H10.6703L10.774 9.93284C11.8515 9.43686 12.3322 8.65932 12.537 7.62346C12.6908 6.84592 12.8648 5.96935 12.8648 4.89647C12.8648 3.83822 12.5757 1.125 8.97144 1.125C8.94325 1.125 8.90752 1.125 8.88091 1.125C5.65461 1.12414 5.1519 3.77364 5.1519 4.89561C5.1519 5.57068 5.33822 6.8752 5.47883 7.6226C5.65197 8.53791 6.09228 9.54105 7.24095 9.93198L7.34378 11.4078H6.69342H6.64069C6.14062 11.4078 5.86553 11.9391 5.83741 12.3085C3.74044 13.0904 2.08906 13.5286 2.08906 13.5286C0.520287 14.1254 0.044822 13.7344 0 14.512V15.1165V15.8397L0.0272448 16.0292C0.0544896 16.1316 0.106343 16.2186 0.168742 16.2978C0.258386 16.4132 0.377911 16.4864 0.519408 16.5243C0.57214 16.5372 0.624872 16.5536 0.682877 16.5536H17.296C17.4894 16.5536 17.6555 16.4709 17.7768 16.3349C17.9596 16.1695 18 15.8397 18 15.8397V15.1165C18 15.1165 18 14.7204 18 14.5697C18 14.5482 17.9895 14.475 17.9754 14.4293C17.804 13.8877 17.3356 14.1555 15.6789 13.4262Z"
      fill={props.color}
    />
  </svg>
);
SvgUser.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgUser.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgUser.displayName = "SvgUser";
const Memo = memo(SvgUser);
export default Memo;
