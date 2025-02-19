import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgLoader = (props) => (
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
    <g clipPath="url(#clip0_12864_34068)">
      <path
        opacity={0.04}
        d="M6.99107 3.53279C7.31917 3.41198 7.66115 3.31988 8.01397 3.25952L7.18568 0.168091L6.16298 0.442138L6.99107 3.53279Z"
        fill={props.color}
      />
      <path
        opacity={0.05}
        d="M5.64291 4.2416C5.9303 4.03845 6.23691 3.86067 6.55947 3.71154L4.95966 0.940434L4.04274 1.46985L5.64291 4.2416Z"
        fill={props.color}
      />
      <path
        opacity={0.06}
        d="M4.52402 5.2741C4.75039 5.00246 5.00102 4.75174 5.27259 4.52529L3.00953 2.26209L2.26086 3.0108L4.52402 5.2741Z"
        fill={props.color}
      />
      <path
        opacity={0.07}
        d="M4.23904 5.64099L1.46757 4.04079L0.938187 4.95777L3.70875 6.55745C3.85797 6.23492 4.03582 5.92834 4.23904 5.64099Z"
        fill={props.color}
      />
      <path
        opacity={0.08}
        d="M3.53306 6.98693L0.443205 6.15896L0.169174 7.18172L3.25961 8.00985C3.32003 7.65702 3.4122 7.31504 3.53306 6.98693Z"
        fill={props.color}
      />
      <path
        opacity={0.09}
        d="M3.20006 9.52934H0L0 8.4705H3.20006C3.18435 8.64487 3.17632 8.82146 3.17632 8.99992C3.17632 9.17838 3.18435 9.35497 3.20006 9.52934Z"
        fill={props.color}
      />
      <path
        opacity={0.1}
        d="M3.53088 11.0139C3.41002 10.6858 3.31785 10.3438 3.25742 9.99101L0.16478 10.8197L0.43881 11.8425L3.53088 11.0139Z"
        fill={props.color}
      />
      <path
        opacity={0.15}
        d="M4.24058 12.3578C4.03742 12.0704 3.85964 11.7638 3.7105 11.4412L0.938187 13.0419L1.46757 13.9589L4.24058 12.3578Z"
        fill={props.color}
      />
      <path
        opacity={0.25}
        d="M3.00953 15.7393L2.26086 14.9906L4.52472 12.7266C4.7511 12.9983 5.00173 13.249 5.2733 13.4754L3.00953 15.7393Z"
        fill={props.color}
      />
      <path
        opacity={0.3}
        d="M4.95747 17.0584L4.04054 16.5289L5.64075 13.7571C5.92809 13.9604 6.23465 14.1382 6.55716 14.2874L4.95747 17.0584Z"
        fill={props.color}
      />
      <path
        opacity={0.35}
        d="M7.18128 17.8302L6.15858 17.5561L6.98659 14.4658C7.31467 14.5867 7.65663 14.6788 8.00943 14.7393L7.18128 17.8302Z"
        fill={props.color}
      />
      <path
        opacity={0.4}
        d="M9.52874 14.7997C9.35438 14.8155 9.17781 14.8235 8.99936 14.8235C8.82091 14.8235 8.64433 14.8155 8.46997 14.7997V18H9.52874V14.7997Z"
        fill={props.color}
      />
      <path
        opacity={0.45}
        d="M10.8183 17.8292L11.841 17.5552L11.0132 14.4658C10.6852 14.5867 10.3432 14.6789 9.9904 14.7394L10.8183 17.8292Z"
        fill={props.color}
      />
      <path
        opacity={0.5}
        d="M13.0419 17.0576L13.9589 16.5282L12.3591 13.7571C12.0718 13.9604 11.7652 14.1383 11.4427 14.2875L13.0419 17.0576Z"
        fill={props.color}
      />
      <path
        opacity={0.55}
        d="M14.9887 15.7393L15.7373 14.9906L13.4746 12.7277C13.2482 12.9993 12.9975 13.2499 12.7258 13.4763L14.9887 15.7393Z"
        fill={props.color}
      />
      <path
        opacity={0.6}
        d="M14.2886 11.4412C14.1394 11.7638 13.9617 12.0704 13.7585 12.3578L16.5295 13.9577L17.0589 13.0407L14.2886 11.4412Z"
        fill={props.color}
      />
      <path
        opacity={0.65}
        d="M14.7393 9.98991C14.6789 10.3427 14.5868 10.6847 14.466 11.0129L17.5558 11.8408L17.8298 10.8181L14.7393 9.98991Z"
        fill={props.color}
      />
      <path
        opacity={0.7}
        d="M14.7999 9.52934C14.8157 9.35496 14.8237 9.17838 14.8237 8.99992C14.8237 8.82145 14.8157 8.64487 14.7999 8.4705H18V9.52934H14.7999Z"
        fill={props.color}
      />
      <path
        opacity={0.75}
        d="M14.7393 8.01037L17.8276 7.18282L17.5536 6.16006L14.466 6.98743C14.5868 7.31555 14.6789 7.65754 14.7393 8.01037Z"
        fill={props.color}
      />
      <path
        opacity={0.8}
        d="M14.2888 6.55739L17.0574 4.95887L16.528 4.04189L13.7585 5.64094C13.9617 5.92829 14.1396 6.23486 14.2888 6.55739Z"
        fill={props.color}
      />
      <path
        opacity={0.85}
        d="M13.4746 5.27297L15.7366 3.0108L14.988 2.26209L12.7258 4.52435C12.9975 4.75074 13.2482 5.00139 13.4746 5.27297Z"
        fill={props.color}
      />
      <path
        opacity={0.9}
        d="M12.3592 4.24087L13.959 1.46985L13.042 0.940434L11.4427 3.71072C11.7652 3.85988 12.0718 4.03769 12.3592 4.24087Z"
        fill={props.color}
      />
      <path
        opacity={0.95}
        d="M11.0111 3.53294L11.8389 0.443237L10.8162 0.169189L9.9882 3.25963C10.341 3.32001 10.683 3.41213 11.0111 3.53294Z"
        fill={props.color}
      />
      <path
        d="M9.52874 0L8.46997 0V3.20026C8.64433 3.18454 8.82091 3.17651 8.99936 3.17651C9.17781 3.17651 9.35438 3.18454 9.52874 3.20026V0Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_34068">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgLoader.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgLoader.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgLoader.displayName = "SvgLoader";
const Memo = memo(SvgLoader);
export default Memo;
