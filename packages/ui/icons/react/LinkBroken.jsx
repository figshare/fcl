import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgLinkBroken = (props) => (
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
      d="M8.7927 3.98424C7.68396 5.09298 7.70552 6.92723 8.84065 8.06235C8.95696 8.18204 9.11591 8.25103 9.28149 8.25468C9.44649 8.25776 9.60503 8.19478 9.72085 8.07896C9.83668 7.96313 9.89966 7.8046 9.89658 7.63959C9.89293 7.47401 9.82393 7.31505 9.70425 7.19875C9.04343 6.53793 9.03139 5.51386 9.67685 4.8684L12.8434 1.70184C13.4889 1.05638 14.5129 1.06842 15.1738 1.72924C15.8346 2.39006 15.8466 3.41413 15.2012 4.05959L12.1785 7.08221C12.061 7.19631 11.9951 7.35311 11.9965 7.51866C11.9973 7.68363 12.064 7.84369 12.1826 7.96227C12.3006 8.08027 12.4607 8.147 12.6257 8.14781C12.7912 8.14919 12.948 8.08333 13.0627 7.96637L16.0853 4.94374C17.1941 3.835 17.1725 2.00075 16.0374 0.865626C14.9022 -0.269498 13.068 -0.291065 11.9592 0.817678L8.7927 3.98424Z"
      fill={props.color}
    />
    <path
      d="M1.71377 17.1344C0.578646 15.9993 0.55708 14.165 1.66582 13.0563L4.68846 10.0336C4.80254 9.9161 4.95992 9.85081 5.1249 9.85162C5.29044 9.85186 5.44994 9.91915 5.56852 10.0377C5.68652 10.1557 5.75381 10.3152 5.75463 10.4813C5.75543 10.6463 5.69016 10.8037 5.57261 10.9178L2.54998 13.9404C1.90452 14.5859 1.91656 15.6099 2.57738 16.2708C3.2382 16.9316 4.26227 16.9436 4.90773 16.2982L8.07429 13.1316C8.71975 12.4861 8.70771 11.4621 8.04689 10.8012C7.92664 10.6844 7.85764 10.5254 7.85456 10.3604C7.85091 10.1948 7.91447 10.0369 8.03029 9.92104C8.14611 9.80522 8.30407 9.74166 8.46965 9.74532C8.63466 9.74839 8.7936 9.81738 8.9105 9.93765C10.0456 11.0728 10.0672 12.907 8.95844 14.0158L5.79189 17.1823C4.68314 18.2911 2.84889 18.2695 1.71377 17.1344Z"
      fill={props.color}
    />
    <path
      d="M4.86919 4.74569C4.76545 4.49798 4.88215 4.21307 5.12986 4.10932C5.37757 4.00557 5.66248 4.12228 5.76623 4.36999L6.32644 5.70755C6.43019 5.95526 6.31348 6.24017 6.06577 6.34392C5.81806 6.44767 5.53315 6.33097 5.4294 6.08326L4.86919 4.74569Z"
      fill={props.color}
    />
    <path
      d="M4.32981 7.5443C4.59826 7.53656 4.82215 7.74791 4.82989 8.01635C4.83763 8.2848 4.62629 8.50869 4.35784 8.51643L2.9083 8.55823C2.63985 8.56597 2.41596 8.35462 2.40822 8.08618C2.40048 7.81773 2.61182 7.59384 2.88027 7.5861L4.32981 7.5443Z"
      fill={props.color}
    />
    <path
      d="M13.2066 13.6832C13.272 13.9437 13.1139 14.2079 12.8535 14.2733C12.593 14.3388 12.3288 14.1807 12.2634 13.9203L11.9099 12.5139C11.8444 12.2534 12.0025 11.9892 12.2629 11.9237C12.5234 11.8583 12.7876 12.0163 12.8531 12.2768L13.2066 13.6832Z"
      fill={props.color}
    />
    <path
      d="M14.1592 10.997C13.8926 10.9644 13.7029 10.7219 13.7355 10.4553C13.768 10.1888 14.0105 9.99907 14.2771 10.0316L15.7166 10.2075C15.9831 10.2401 16.1728 10.4826 16.1403 10.7491C16.1077 11.0157 15.8652 11.2054 15.5986 11.1729L14.1592 10.997Z"
      fill={props.color}
    />
  </svg>
);
SvgLinkBroken.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgLinkBroken.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgLinkBroken.displayName = "SvgLinkBroken";
const Memo = memo(SvgLinkBroken);
export default Memo;
