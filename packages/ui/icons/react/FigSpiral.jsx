import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgFigSpiral = (props) => (
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
    <g clipPath="url(#clip0_12864_34077)">
      <path
        d="M14.4588 2.78696C14.2073 3.12222 13.7463 3.20604 13.4111 2.95459C13.0758 2.70314 12.992 2.24215 13.2434 1.90688C13.4949 1.57162 13.9559 1.4878 14.2912 1.73925C14.6264 1.96975 14.7102 2.45169 14.4588 2.78696Z"
        fill="#566471"
        fillOpacity={0.4}
      />
      <path
        d="M11.5882 2.51417C11.7559 2.19985 12.133 2.07413 12.4473 2.24176C12.7617 2.40939 12.8874 2.78657 12.7197 3.10088C12.5521 3.41519 12.1749 3.54092 11.8606 3.37328C11.5463 3.2266 11.4206 2.82848 11.5882 2.51417Z"
        fill="#566471"
        fillOpacity={0.4}
      />
      <path
        d="M11.2942 3.66694C11.2104 3.93934 10.8961 4.10698 10.6237 4.00221C10.3513 3.91839 10.1837 3.60408 10.2884 3.33167C10.3722 3.05927 10.6866 2.89164 10.959 2.99641C11.2314 3.08023 11.378 3.37358 11.2942 3.66694Z"
        fill="#566471"
        fillOpacity={0.4}
      />
      <path
        d="M10.1837 4.29592C10.1418 4.54737 9.91126 4.69405 9.68076 4.6731C9.45027 4.63119 9.28263 4.40069 9.30359 4.1702C9.3455 3.91875 9.57599 3.77207 9.80649 3.79303C10.0579 3.83493 10.2256 4.06543 10.1837 4.29592Z"
        fill="#566471"
        fillOpacity={0.4}
      />
      <path
        d="M9.36621 5.00786C9.36621 5.2174 9.19858 5.36408 8.98904 5.36408C8.77949 5.36408 8.61186 5.19645 8.61186 5.00786C8.61186 4.79832 8.77949 4.65164 8.98904 4.65164C9.19858 4.65164 9.36621 4.81927 9.36621 5.00786Z"
        fill="#566471"
        fillOpacity={0.4}
      />
      <path
        d="M8.77936 5.7202C8.80031 5.88783 8.69554 6.03451 8.52791 6.05547C8.36028 6.07642 8.2136 5.97165 8.19264 5.80402C8.17169 5.63638 8.27646 5.48971 8.44409 5.46875C8.59077 5.4478 8.7584 5.55257 8.77936 5.7202Z"
        fill="#566471"
        fillOpacity={0.4}
      />
      <path
        d="M4.75707 16.1346C4.50562 16.4699 4.04463 16.5537 3.70936 16.3023C3.37409 16.0508 3.29028 15.5898 3.54173 15.2546C3.79318 14.9193 4.25417 14.8355 4.58943 15.0869C4.9247 15.3174 5.00851 15.7784 4.75707 16.1346Z"
        fill="#A3CD3D"
      />
      <path
        d="M5.26022 14.92C5.42785 14.6057 5.80503 14.48 6.11934 14.6476C6.43365 14.8152 6.55937 15.1924 6.39174 15.5067C6.22411 15.821 5.84693 15.9467 5.53262 15.7791C5.23926 15.6115 5.11354 15.2343 5.26022 14.92Z"
        fill="#A3CD3D"
      />
      <path
        d="M7.71121 14.6892C7.62739 14.9616 7.31308 15.1292 7.04067 15.0245C6.76827 14.9406 6.60064 14.6263 6.70541 14.3539C6.78923 14.0815 7.10354 13.9139 7.37594 14.0187C7.64834 14.1025 7.79502 14.4168 7.71121 14.6892Z"
        fill="#A3CD3D"
      />
      <path
        d="M8.67507 13.8504C8.63316 14.1019 8.40266 14.2486 8.17217 14.2276C7.92072 14.1857 7.77404 13.9552 7.79499 13.7247C7.8369 13.4733 8.0674 13.3266 8.29789 13.3475C8.54934 13.3894 8.71697 13.599 8.67507 13.8504Z"
        fill="#A3CD3D"
      />
      <path
        d="M9.36621 13.0121C9.36621 13.2216 9.19858 13.3683 8.98904 13.3683C8.77949 13.3683 8.61186 13.2007 8.61186 13.0121C8.61186 12.8026 8.77949 12.6559 8.98904 12.6559C9.19858 12.6349 9.36621 12.8026 9.36621 13.0121Z"
        fill="#A3CD3D"
      />
      <path
        d="M9.80621 12.2165C9.82717 12.3841 9.7224 12.5308 9.55476 12.5517C9.38713 12.5727 9.24045 12.4679 9.2195 12.3003C9.19855 12.1326 9.30332 11.986 9.47095 11.965C9.63858 11.9231 9.78526 12.0488 9.80621 12.2165Z"
        fill="#A3CD3D"
      />
      <path
        d="M1.38216 5.74183C1.78029 5.86756 1.98983 6.30759 1.8641 6.70572C1.73838 7.10385 1.29834 7.31339 0.921168 7.18767C0.52304 7.06194 0.313499 6.62191 0.439224 6.24473C0.564948 5.82565 0.98403 5.61611 1.38216 5.74183Z"
        fill="#A3CD3D"
      />
      <path
        d="M2.22176 7.29217C2.57797 7.35504 2.80847 7.66935 2.74561 8.02557C2.68275 8.38179 2.36843 8.61228 2.01221 8.54942C1.65599 8.48656 1.4255 8.17225 1.48836 7.81603C1.55122 7.48076 1.88649 7.22931 2.22176 7.29217Z"
        fill="#A3CD3D"
      />
      <path
        d="M3.20575 8.48663C3.49911 8.48663 3.72961 8.71713 3.72961 9.01049C3.72961 9.30384 3.49911 9.53434 3.20575 9.53434C2.9124 9.53434 2.6819 9.30384 2.6819 9.01049C2.66095 8.71713 2.9124 8.48663 3.20575 8.48663Z"
        fill="#A3CD3D"
      />
      <path
        d="M4.14947 9.32435C4.40091 9.28244 4.61046 9.45007 4.65236 9.70152C4.69427 9.95297 4.52664 10.1625 4.27519 10.2044C4.02374 10.2463 3.8142 10.0787 3.77229 9.82725C3.75134 9.59675 3.91897 9.36626 4.14947 9.32435Z"
        fill="#A3CD3D"
      />
      <path
        d="M5.09244 9.89065C5.28102 9.82779 5.49057 9.93256 5.55343 10.1211C5.61629 10.3097 5.51152 10.5193 5.32293 10.5821C5.13434 10.645 4.9248 10.5402 4.86194 10.3516C4.77813 10.1631 4.90385 9.95351 5.09244 9.89065Z"
        fill="#A3CD3D"
      />
      <path
        d="M5.93039 10.2256C6.07707 10.1418 6.26565 10.2046 6.32851 10.3513C6.41233 10.498 6.34947 10.6866 6.20279 10.7494C6.05611 10.8333 5.86752 10.7704 5.80466 10.6237C5.72085 10.498 5.78371 10.3094 5.93039 10.2256Z"
        fill="#A3CD3D"
      />
      <path
        d="M17.0781 10.8332C17.4762 10.959 17.6857 11.378 17.56 11.7762C17.4343 12.1743 16.9942 12.3838 16.6171 12.2581C16.2189 12.1324 16.0094 11.6924 16.1351 11.2942C16.2608 10.9171 16.6799 10.7075 17.0781 10.8332Z"
        fill="#566471"
      />
      <path
        d="M15.9665 9.47178C16.3227 9.53464 16.5532 9.84895 16.4903 10.2052C16.4275 10.5614 16.1131 10.7919 15.7569 10.729C15.4007 10.6662 15.1702 10.3518 15.2331 9.99563C15.2959 9.63941 15.6312 9.40891 15.9665 9.47178Z"
        fill="#566471"
      />
      <path
        d="M14.7944 8.48663C15.0878 8.48663 15.3183 8.71713 15.3183 9.01049C15.3183 9.30384 15.0878 9.53434 14.7944 9.53434C14.5011 9.53434 14.2706 9.30384 14.2706 9.01049C14.2706 8.71713 14.5011 8.48663 14.7944 8.48663Z"
        fill="#566471"
      />
      <path
        d="M13.705 7.81556C13.9564 7.77365 14.1659 7.94129 14.2079 8.19273C14.2498 8.44418 14.0821 8.65373 13.8307 8.69563C13.5792 8.73754 13.3697 8.56991 13.3278 8.31846C13.2859 8.08796 13.4535 7.85747 13.705 7.81556Z"
        fill="#566471"
      />
      <path
        d="M12.6766 7.41723C12.8652 7.35437 13.0747 7.45914 13.1376 7.64773C13.2004 7.83631 13.0957 8.04586 12.9071 8.10872C12.7185 8.17158 12.5089 8.06681 12.4461 7.87822C12.3832 7.68963 12.488 7.48009 12.6766 7.41723Z"
        fill="#566471"
      />
      <path
        d="M11.7971 7.25049C11.9438 7.16668 12.1324 7.22954 12.1952 7.37622C12.279 7.5229 12.2162 7.71148 12.0695 7.77435C11.9228 7.85816 11.7342 7.7953 11.6714 7.64862C11.5875 7.50194 11.6295 7.33431 11.7971 7.25049Z"
        fill="#566471"
      />
      <path
        d="M4.75707 1.88609C5.00851 2.22135 4.9247 2.7033 4.58943 2.93379C4.25417 3.18524 3.77222 3.10143 3.54173 2.76616C3.29028 2.43089 3.37409 1.94895 3.70936 1.71845C4.04463 1.48796 4.52657 1.55082 4.75707 1.88609Z"
        fill="#566471"
      />
      <path
        d="M4.52615 3.64565C4.7776 3.8971 4.7776 4.29523 4.52615 4.54668C4.2747 4.79812 3.87657 4.79812 3.62513 4.54668C3.37368 4.29523 3.37368 3.8971 3.62513 3.64565C3.87657 3.3942 4.2747 3.3942 4.52615 3.64565Z"
        fill="#566471"
      />
      <path
        d="M4.61034 5.17556C4.84084 5.34319 4.9037 5.67846 4.73607 5.90896C4.56844 6.13945 4.23317 6.20231 4.00268 6.03468C3.77218 5.86705 3.70932 5.53178 3.87695 5.30129C4.04458 5.04984 4.37985 5.00793 4.61034 5.17556Z"
        fill="#566471"
      />
      <path
        d="M4.90376 6.41208C5.1133 6.51685 5.21807 6.78925 5.09235 6.99879C4.98758 7.20833 4.71517 7.31311 4.50563 7.18738C4.29609 7.08261 4.19132 6.81021 4.31704 6.60067C4.40086 6.39112 4.67326 6.30731 4.90376 6.41208Z"
        fill="#566471"
      />
      <path
        d="M5.30156 7.41723C5.49015 7.48009 5.59492 7.68963 5.53206 7.87822C5.46919 8.06681 5.25965 8.17158 5.07107 8.10872C4.88248 8.04586 4.77771 7.83631 4.84057 7.64773C4.90343 7.45914 5.11297 7.35437 5.30156 7.41723Z"
        fill="#566471"
      />
      <path
        d="M5.80475 8.19262C5.97238 8.21357 6.07715 8.3812 6.0562 8.54884C6.03524 8.71647 5.86761 8.82124 5.72093 8.80028C5.5533 8.77933 5.44853 8.6117 5.46948 8.46502C5.49044 8.27643 5.63712 8.17166 5.80475 8.19262Z"
        fill="#566471"
      />
      <path
        d="M14.4588 15.2341C14.7102 15.5693 14.6264 16.0513 14.2912 16.2818C13.9559 16.5332 13.4739 16.4494 13.2434 16.1141C12.992 15.7789 13.0758 15.2969 13.4111 15.0664C13.7463 14.815 14.2073 14.8988 14.4588 15.2341Z"
        fill="#A3CD3D"
      />
      <path
        d="M14.3744 13.4733C14.6258 13.7248 14.6258 14.1229 14.3744 14.3744C14.1229 14.6258 13.7248 14.6258 13.4733 14.3744C13.2219 14.1229 13.2219 13.7248 13.4733 13.4733C13.7248 13.2219 14.1229 13.2219 14.3744 13.4733Z"
        fill="#A3CD3D"
      />
      <path
        d="M13.9971 11.9857C14.2276 12.1533 14.2905 12.4886 14.1228 12.7191C13.9552 12.9496 13.6199 13.0124 13.3895 12.8448C13.159 12.6772 13.0961 12.3419 13.2637 12.1114C13.4314 11.86 13.7666 11.818 13.9971 11.9857Z"
        fill="#A3CD3D"
      />
      <path
        d="M13.4936 10.8122C13.7032 10.917 13.808 11.1894 13.6822 11.3989C13.5775 11.6084 13.3051 11.7132 13.0955 11.5875C12.886 11.4827 12.7812 11.2103 12.9069 11.0008C13.0117 10.7912 13.2841 10.6865 13.4936 10.8122Z"
        fill="#A3CD3D"
      />
      <path
        d="M12.9071 9.89065C13.0957 9.95351 13.2004 10.1631 13.1376 10.3516C13.0747 10.5402 12.8652 10.645 12.6766 10.5821C12.488 10.5193 12.3832 10.3097 12.4461 10.1211C12.5089 9.93256 12.7185 9.82779 12.9071 9.89065Z"
        fill="#A3CD3D"
      />
      <path
        d="M12.2999 9.21953C12.4675 9.24048 12.5723 9.40811 12.5513 9.55479C12.5304 9.72243 12.3628 9.8272 12.2161 9.80624C12.0484 9.78529 11.9437 9.61766 11.9646 9.45002C11.9646 9.30334 12.1323 9.19857 12.2999 9.21953Z"
        fill="#A3CD3D"
      />
      <path
        d="M16.6163 5.74126C17.0145 5.61553 17.4336 5.82507 17.5593 6.2232C17.685 6.62133 17.4755 7.04041 17.0773 7.16614C16.6792 7.29186 16.2601 7.08232 16.1344 6.68419C15.9877 6.28606 16.2182 5.86698 16.6163 5.74126Z"
        fill="#A3CD3D"
        fillOpacity={0.8}
      />
      <path
        d="M14.8987 5.28055C15.213 5.11292 15.5902 5.23864 15.7579 5.55295C15.9255 5.86726 15.7998 6.24444 15.4854 6.41207C15.1711 6.5797 14.794 6.45398 14.6263 6.13967C14.4587 5.82536 14.5844 5.44818 14.8987 5.28055Z"
        fill="#A3CD3D"
        fillOpacity={0.8}
      />
      <path
        d="M13.3689 5.17556C13.5994 5.00793 13.9347 5.04984 14.1023 5.30129C14.27 5.53178 14.2281 5.86705 13.9766 6.03468C13.7461 6.20231 13.4109 6.1604 13.2432 5.90896C13.0756 5.67846 13.1385 5.34319 13.3689 5.17556Z"
        fill="#A3CD3D"
        fillOpacity={0.8}
      />
      <path
        d="M12.0906 5.28054C12.2583 5.11291 12.5516 5.11291 12.7193 5.28054C12.8869 5.44817 12.8869 5.74153 12.7193 5.90916C12.5516 6.0768 12.2583 6.0768 12.0906 5.90916C11.923 5.74153 11.923 5.44817 12.0906 5.28054Z"
        fill="#A3CD3D"
        fillOpacity={0.8}
      />
      <path
        d="M11.6506 5.99302C11.5249 6.16066 11.2944 6.20256 11.1477 6.07684C10.9801 5.95111 10.9382 5.72062 11.0639 5.57394C11.1896 5.40631 11.4201 5.3644 11.5668 5.49012C11.7344 5.5949 11.7554 5.82539 11.6506 5.99302Z"
        fill="#A3CD3D"
        fillOpacity={0.8}
      />
      <path
        d="M10.7494 6.2233C10.6656 6.36998 10.498 6.43284 10.3513 6.34902C10.2046 6.26521 10.1418 6.09757 10.2256 5.95089C10.3094 5.80422 10.477 5.74135 10.6237 5.82517C10.7704 5.88803 10.8333 6.07662 10.7494 6.2233Z"
        fill="#A3CD3D"
        fillOpacity={0.8}
      />
      <path
        d="M0.921168 10.8331C1.3193 10.7074 1.73838 10.9169 1.8641 11.315C1.98983 11.7132 1.78029 12.1322 1.38216 12.2789C0.98403 12.4046 0.564948 12.1951 0.439224 11.797C0.313499 11.3988 0.52304 10.9588 0.921168 10.8331Z"
        fill="#566471"
      />
      <path
        d="M2.51488 11.5875C2.82919 11.4198 3.20637 11.5456 3.374 11.8599C3.54163 12.1742 3.41591 12.5514 3.1016 12.719C2.78729 12.8866 2.41011 12.7609 2.24248 12.4466C2.07485 12.1323 2.20057 11.7551 2.51488 11.5875Z"
        fill="#566471"
      />
      <path
        d="M4.00122 11.9857C4.23172 11.818 4.56698 11.86 4.73462 12.1114C4.90225 12.3419 4.86034 12.6772 4.60889 12.8448C4.3784 13.0124 4.04313 12.9705 3.8755 12.7191C3.70786 12.4886 3.74977 12.1533 4.00122 11.9857Z"
        fill="#566471"
      />
      <path
        d="M5.26003 12.1119C5.42767 11.9443 5.72102 11.9443 5.88866 12.1119C6.05629 12.2795 6.05629 12.5729 5.88866 12.7405C5.72102 12.9082 5.42767 12.9082 5.26003 12.7405C5.0924 12.5729 5.0924 12.2795 5.26003 12.1119Z"
        fill="#566471"
      />
      <path
        d="M6.9367 12.4465C6.81098 12.6141 6.58048 12.656 6.4338 12.5303C6.26617 12.4045 6.22426 12.174 6.34999 12.0274C6.47571 11.8597 6.70621 11.8178 6.85289 11.9436C7.02052 12.0693 7.06243 12.2998 6.9367 12.4465Z"
        fill="#566471"
      />
      <path
        d="M7.77433 12.0695C7.69051 12.2162 7.52288 12.279 7.3762 12.1952C7.22952 12.1114 7.16666 11.9438 7.25048 11.7971C7.33429 11.6504 7.50193 11.5875 7.64861 11.6714C7.79528 11.7342 7.85815 11.9228 7.77433 12.0695Z"
        fill="#566471"
      />
      <path
        d="M9.7646 0.754347C9.7646 1.17343 9.42933 1.5087 9.01025 1.5087C8.59117 1.5087 8.2559 1.17343 8.2559 0.754347C8.2559 0.335265 8.59117 -3.99668e-08 9.01025 -3.99668e-08C9.40838 -3.99668e-08 9.7646 0.335265 9.7646 0.754347Z"
        fill="#A3CD3D"
        fillOpacity={0.1}
      />
      <path
        d="M7.27093 2.24233C7.20807 1.88611 7.45952 1.5718 7.79479 1.50894C8.15101 1.44608 8.46532 1.69753 8.52818 2.03279C8.59104 2.38901 8.33959 2.70332 8.00433 2.76619C7.66906 2.82905 7.3338 2.5776 7.27093 2.24233Z"
        fill="#A3CD3D"
        fillOpacity={0.1}
      />
      <path
        d="M7.71199 3.33167C7.79581 3.60408 7.64913 3.91839 7.37673 4.00221C7.10432 4.08602 6.79001 3.93934 6.70619 3.66694C6.62238 3.39454 6.76906 3.08023 7.04146 2.99641C7.31386 2.89164 7.62817 3.05927 7.71199 3.33167Z"
        fill="#A3CD3D"
        fillOpacity={0.1}
      />
      <path
        d="M7.20717 4.5048C7.31194 4.71434 7.22813 4.98674 7.01858 5.11246C6.80904 5.21723 6.53664 5.13342 6.43187 4.92388C6.3271 4.71434 6.41092 4.44193 6.62046 4.33716C6.83 4.19048 7.08145 4.2743 7.20717 4.5048Z"
        fill="#A3CD3D"
        fillOpacity={0.1}
      />
      <path
        d="M6.9367 5.55318C7.06243 5.72081 7.02052 5.95131 6.85289 6.05608C6.68525 6.1818 6.45476 6.13989 6.34999 5.97226C6.22426 5.80463 6.26617 5.57413 6.4338 5.46936C6.60144 5.36459 6.83193 5.4065 6.9367 5.55318Z"
        fill="#A3CD3D"
        fillOpacity={0.1}
      />
      <path
        d="M6.89428 6.47518C7.02 6.60091 7.02 6.78949 6.89428 6.89427C6.76856 7.01999 6.57997 7.01999 6.4752 6.89427C6.34947 6.76854 6.34947 6.57995 6.4752 6.47518C6.57997 6.34946 6.76856 6.34946 6.89428 6.47518Z"
        fill="#A3CD3D"
        fillOpacity={0.1}
      />
      <path
        d="M9.7646 17.2456C9.7646 17.6647 9.42933 18 9.01025 18C8.59117 18 8.2559 17.6647 8.2559 17.2456C8.2559 16.8265 8.59117 16.4913 9.01025 16.4913C9.40838 16.4913 9.7646 16.8475 9.7646 17.2456Z"
        fill="#566471"
      />
      <path
        d="M9.45065 15.9878C9.38779 15.6315 9.63924 15.3172 9.9745 15.2544C10.3307 15.1915 10.645 15.443 10.7079 15.7782C10.7708 16.1344 10.5193 16.4487 10.184 16.5116C9.82783 16.5745 9.51351 16.323 9.45065 15.9878Z"
        fill="#566471"
      />
      <path
        d="M11.295 14.354C11.3788 14.6264 11.2322 14.9407 10.9597 15.0245C10.6873 15.1083 10.373 14.9616 10.2892 14.6892C10.2054 14.4168 10.3521 14.1025 10.6245 14.0187C10.8969 13.9349 11.2112 14.0816 11.295 14.354Z"
        fill="#566471"
      />
      <path
        d="M11.5875 13.1171C11.6923 13.3267 11.6085 13.5991 11.3989 13.7038C11.1894 13.8086 10.917 13.7248 10.7913 13.5153C10.6865 13.3057 10.7703 13.0333 10.9798 12.9285C11.2103 12.8028 11.4827 12.8866 11.5875 13.1171Z"
        fill="#566471"
      />
      <path
        d="M11.6506 12.0274C11.7763 12.195 11.7344 12.4255 11.5668 12.5303C11.3992 12.656 11.1687 12.6141 11.0639 12.4465C10.9382 12.2788 10.9801 12.0483 11.1477 11.9436C11.2944 11.8178 11.5249 11.8597 11.6506 12.0274Z"
        fill="#566471"
      />
      <path
        d="M11.5247 11.1268C11.6504 11.2526 11.6504 11.4411 11.5247 11.5459C11.3989 11.6716 11.2104 11.6716 11.1056 11.5459C10.9799 11.4202 10.9799 11.2316 11.1056 11.1268C11.2313 11.0011 11.4199 11.0011 11.5247 11.1268Z"
        fill="#566471"
      />
      <path
        d="M12.2577 1.40413C12.132 1.80226 11.6919 2.0118 11.2938 1.88608C10.8957 1.76035 10.6861 1.32031 10.8118 0.943141C10.9376 0.545013 11.3567 0.335472 11.7548 0.461196C12.1739 0.565967 12.4044 1.006 12.2577 1.40413Z"
        fill="#C54D58"
        fillOpacity={0.2}
      />
      <path
        d="M9.45029 2.03271C9.51315 1.67649 9.82746 1.44599 10.1837 1.50885C10.5399 1.57172 10.7704 1.88603 10.7075 2.24225C10.6447 2.59847 10.3304 2.82896 9.97414 2.7661C9.63888 2.70324 9.40838 2.38893 9.45029 2.03271Z"
        fill="#C54D58"
        fillOpacity={0.2}
      />
      <path
        d="M9.53359 3.20598C9.53359 3.49934 9.3031 3.72983 9.00974 3.72983C8.71638 3.72983 8.48589 3.49934 8.48589 3.20598C8.48589 2.91262 8.71638 2.68213 9.00974 2.68213C9.28214 2.68213 9.53359 2.91262 9.53359 3.20598Z"
        fill="#C54D58"
        fillOpacity={0.2}
      />
      <path
        d="M8.67511 4.16951C8.71702 4.42096 8.54939 4.6305 8.29794 4.67241C8.04649 4.71432 7.83695 4.54668 7.79504 4.29524C7.75313 4.04379 7.92076 3.83425 8.17221 3.79234C8.42366 3.75043 8.6332 3.91806 8.67511 4.16951Z"
        fill="#C54D58"
        fillOpacity={0.2}
      />
      <path
        d="M8.10873 5.09157C8.17159 5.28016 8.06682 5.4897 7.87824 5.55256C7.68965 5.61543 7.48011 5.51066 7.41725 5.32207C7.35438 5.13348 7.45916 4.92394 7.64774 4.86108C7.83633 4.79822 8.04587 4.90299 8.10873 5.09157Z"
        fill="#C54D58"
        fillOpacity={0.2}
      />
      <path
        d="M7.77433 5.95089C7.85815 6.09757 7.79528 6.28616 7.64861 6.34902C7.50193 6.43284 7.31334 6.36998 7.25048 6.2233C7.16666 6.07662 7.22952 5.88803 7.3762 5.82517C7.52288 5.74135 7.69051 5.80422 7.77433 5.95089Z"
        fill="#C54D58"
        fillOpacity={0.2}
      />
      <path
        d="M7.16731 17.0773C7.04159 17.4754 6.60155 17.685 6.20343 17.5593C5.8053 17.4335 5.59576 16.9935 5.72148 16.6163C5.84721 16.2182 6.28724 16.0087 6.66442 16.1344C7.0835 16.2601 7.29304 16.6792 7.16731 17.0773Z"
        fill="#5AC4BC"
      />
      <path
        d="M7.27057 15.7781C7.33343 15.4219 7.64774 15.1914 8.00396 15.2543C8.36018 15.3171 8.59068 15.6315 8.52782 15.9877C8.46495 16.3439 8.15064 16.5744 7.79442 16.5115C7.45916 16.4487 7.22866 16.1343 7.27057 15.7781Z"
        fill="#5AC4BC"
      />
      <path
        d="M9.53359 14.8147C9.53359 15.1081 9.3031 15.3386 9.00974 15.3386C8.71638 15.3386 8.48589 15.1081 8.48589 14.8147C8.48589 14.5214 8.71638 14.2909 9.00974 14.2909C9.28214 14.2699 9.53359 14.5214 9.53359 14.8147Z"
        fill="#5AC4BC"
      />
      <path
        d="M10.1839 13.704C10.2258 13.9554 10.0582 14.165 9.80674 14.2069C9.55529 14.2488 9.34575 14.0812 9.30384 13.8297C9.26193 13.5783 9.42957 13.3687 9.68102 13.3268C9.93247 13.3059 10.163 13.4735 10.1839 13.704Z"
        fill="#5AC4BC"
      />
      <path
        d="M10.5814 12.6978C10.6443 12.8864 10.5395 13.0959 10.3509 13.1588C10.1623 13.2217 9.95278 13.1169 9.88992 12.9283C9.82706 12.7397 9.93183 12.5302 10.1204 12.4673C10.309 12.4044 10.5185 12.5092 10.5814 12.6978Z"
        fill="#5AC4BC"
      />
      <path
        d="M10.7494 11.7971C10.8333 11.9438 10.7704 12.1324 10.6237 12.1952C10.477 12.279 10.2885 12.2162 10.2256 12.0695C10.1418 11.9228 10.2046 11.7342 10.3513 11.6714C10.498 11.5875 10.6866 11.6504 10.7494 11.7971Z"
        fill="#5AC4BC"
      />
      <path
        d="M0.754347 8.25589C1.17343 8.25589 1.5087 8.59116 1.5087 9.01024C1.5087 9.42932 1.17343 9.76459 0.754347 9.76459C0.335265 9.76459 -3.99668e-08 9.42932 -3.99668e-08 9.01024C-3.99668e-08 8.59116 0.335265 8.25589 0.754347 8.25589Z"
        fill="#5AC4BC"
      />
      <path
        d="M2.03272 9.47113C2.38894 9.40827 2.70325 9.65972 2.76612 9.99498C2.82898 10.3512 2.57753 10.6655 2.24226 10.7284C1.88604 10.7912 1.57173 10.5398 1.50887 10.2045C1.44601 9.8483 1.6765 9.51304 2.03272 9.47113Z"
        fill="#5AC4BC"
      />
      <path
        d="M3.31047 10.2885C3.58288 10.2047 3.89719 10.3513 3.981 10.6238C4.06482 10.8962 3.91814 11.2105 3.64574 11.2943C3.37333 11.3781 3.05902 11.2314 2.97521 10.959C2.89139 10.6866 3.03807 10.3933 3.31047 10.2885Z"
        fill="#5AC4BC"
      />
      <path
        d="M4.4847 10.8125C4.69424 10.7077 4.96664 10.7915 5.07141 11.0011C5.17618 11.2106 5.09237 11.483 4.88283 11.5878C4.67329 11.6926 4.40088 11.6088 4.29611 11.3992C4.19134 11.1897 4.27516 10.9173 4.4847 10.8125Z"
        fill="#5AC4BC"
      />
      <path
        d="M5.55343 11.0632C5.72107 10.9374 5.95156 10.9793 6.05633 11.147C6.18206 11.3146 6.14015 11.5451 5.97252 11.6499C5.80488 11.7756 5.57439 11.7337 5.46962 11.5661C5.34389 11.3984 5.3858 11.1889 5.55343 11.0632Z"
        fill="#5AC4BC"
      />
      <path
        d="M6.45362 11.1268C6.57935 11.0011 6.76794 11.0011 6.87271 11.1268C6.99843 11.2526 6.99843 11.4411 6.87271 11.5459C6.74698 11.6716 6.55839 11.6716 6.45362 11.5459C6.34885 11.4202 6.34885 11.2316 6.45362 11.1268Z"
        fill="#5AC4BC"
      />
      <path
        d="M17.2457 8.25589C17.6647 8.25589 18 8.59116 18 9.01024C18 9.42932 17.6647 9.76459 17.2457 9.76459C16.8266 9.76459 16.4913 9.42932 16.4913 9.01024C16.4913 8.59116 16.8266 8.25589 17.2457 8.25589Z"
        fill="#C54D58"
      />
      <path
        d="M15.7789 7.29217C16.1351 7.22931 16.4494 7.48076 16.5123 7.81603C16.5751 8.17225 16.3237 8.48656 15.9884 8.54942C15.6322 8.61228 15.3179 8.36083 15.255 8.02557C15.1922 7.66935 15.4227 7.35504 15.7789 7.29217Z"
        fill="#C54D58"
      />
      <path
        d="M14.3525 6.70545C14.6249 6.62163 14.9392 6.76831 15.023 7.04071C15.1068 7.31312 14.9602 7.62743 14.6878 7.71124C14.4154 7.79506 14.101 7.64838 14.0172 7.37598C13.9125 7.10357 14.0591 6.81022 14.3525 6.70545Z"
        fill="#C54D58"
      />
      <path
        d="M13.0966 6.41208C13.3061 6.30731 13.5785 6.39112 13.6833 6.60067C13.788 6.81021 13.7042 7.08261 13.4947 7.18738C13.2851 7.29215 13.0127 7.20833 12.908 6.99879C12.8032 6.78925 12.887 6.5378 13.0966 6.41208Z"
        fill="#C54D58"
      />
      <path
        d="M12.0073 6.3705C12.1749 6.24477 12.4054 6.28668 12.5102 6.45431C12.6359 6.62194 12.594 6.85244 12.4264 6.95721C12.2588 7.08294 12.0283 7.04103 11.9235 6.87339C11.8187 6.70576 11.8606 6.47527 12.0073 6.3705Z"
        fill="#C54D58"
      />
      <path
        d="M11.1056 6.47518C11.2313 6.34946 11.4199 6.34946 11.5247 6.47518C11.6504 6.60091 11.6504 6.78949 11.5247 6.89427C11.3989 7.01999 11.2104 7.01999 11.1056 6.89427C10.9799 6.78949 10.9799 6.60091 11.1056 6.47518Z"
        fill="#C54D58"
      />
      <path
        d="M2.76569 3.54145C3.10095 3.7929 3.18477 4.25389 2.93332 4.58916C2.68187 4.92442 2.22088 5.00824 1.88561 4.75679C1.55035 4.50534 1.46653 4.04435 1.71798 3.70909C1.94848 3.37382 2.43042 3.31096 2.76569 3.54145Z"
        fill="#C54D58"
      />
      <path
        d="M3.07962 5.28055C3.39394 5.44818 3.51966 5.82536 3.35203 6.13967C3.1844 6.45398 2.80722 6.5797 2.49291 6.41207C2.1786 6.24444 2.05287 5.86726 2.22051 5.55295C2.38814 5.23864 2.76531 5.11292 3.07962 5.28055Z"
        fill="#C54D58"
      />
      <path
        d="M3.64643 6.70545C3.91884 6.78926 4.08647 7.10357 3.9817 7.37598C3.89788 7.64838 3.58357 7.81601 3.31117 7.71124C3.03876 7.62743 2.87113 7.31312 2.9759 7.04071C3.05972 6.76831 3.37403 6.62163 3.64643 6.70545Z"
        fill="#C54D58"
      />
      <path
        d="M4.2957 7.81556C4.54715 7.85747 4.69383 8.08796 4.67287 8.31846C4.63096 8.56991 4.40047 8.71659 4.16997 8.69563C3.93948 8.65373 3.77184 8.42323 3.7928 8.19273C3.83471 7.94129 4.04425 7.77365 4.2957 7.81556Z"
        fill="#C54D58"
      />
      <path
        d="M5.00758 8.63312C5.21712 8.63312 5.36379 8.80075 5.36379 8.98934C5.36379 9.19888 5.19616 9.34556 5.00758 9.34556C4.79803 9.34556 4.6304 9.17792 4.6304 8.98934C4.6304 8.80075 4.79803 8.63312 5.00758 8.63312Z"
        fill="#C54D58"
      />
      <path
        d="M5.69896 9.21951C5.86659 9.19856 6.01327 9.30333 6.03423 9.47096C6.05518 9.6386 5.95041 9.78528 5.78278 9.82718C5.61514 9.84814 5.46847 9.74337 5.44751 9.57573C5.42656 9.4081 5.53133 9.26142 5.69896 9.21951Z"
        fill="#C54D58"
      />
      <path
        d="M16.1134 13.2427C16.4487 13.4942 16.5325 13.9552 16.2811 14.2904C16.0296 14.6257 15.5686 14.7095 15.2333 14.4581C14.8981 14.2066 14.8143 13.7456 15.0657 13.4104C15.2962 13.0751 15.7782 12.9913 16.1134 13.2427Z"
        fill="#5AC4BC"
      />
      <path
        d="M15.4854 11.5876C15.7998 11.7552 15.9255 12.1324 15.7579 12.4467C15.5902 12.761 15.213 12.8868 14.8987 12.7191C14.5844 12.5515 14.4587 12.1743 14.6263 11.86C14.794 11.5667 15.1711 11.4409 15.4854 11.5876Z"
        fill="#5AC4BC"
      />
      <path
        d="M14.668 10.2885C14.9404 10.3723 15.108 10.6866 15.0032 10.959C14.9194 11.2314 14.6051 11.3991 14.3327 11.2943C14.0603 11.2105 13.8927 10.8962 13.9974 10.6238C14.1022 10.3513 14.3956 10.2047 14.668 10.2885Z"
        fill="#5AC4BC"
      />
      <path
        d="M13.8292 9.32435C14.0806 9.36626 14.2273 9.59675 14.2063 9.82725C14.1644 10.0787 13.9339 10.2254 13.7034 10.2044C13.452 10.1625 13.3053 9.93202 13.3263 9.70152C13.3682 9.45007 13.5987 9.28244 13.8292 9.32435Z"
        fill="#5AC4BC"
      />
      <path
        d="M12.992 8.63312C13.2016 8.63312 13.3482 8.80075 13.3482 8.98934C13.3482 9.19888 13.1806 9.34556 12.992 9.34556C12.7825 9.34556 12.6358 9.17792 12.6358 8.98934C12.6358 8.80075 12.7825 8.63312 12.992 8.63312Z"
        fill="#5AC4BC"
      />
      <path
        d="M12.1956 8.19263C12.3632 8.17167 12.5099 8.27645 12.5308 8.44408C12.5518 8.61171 12.447 8.75839 12.2794 8.77934C12.1118 8.8003 11.9651 8.69553 11.9441 8.52789C11.9232 8.38122 12.0279 8.21358 12.1956 8.19263Z"
        fill="#5AC4BC"
      />
      <path
        d="M15.2335 3.54101C15.5688 3.28956 16.0507 3.37338 16.2812 3.70864C16.5327 4.04391 16.4489 4.52585 16.1136 4.75635C15.7783 5.0078 15.2964 4.92398 15.0659 4.58871C14.8144 4.2744 14.8773 3.79246 15.2335 3.54101Z"
        fill="#5AC4BC"
        fillOpacity={0.6}
      />
      <path
        d="M13.4733 3.64565C13.7248 3.3942 14.1229 3.3942 14.3744 3.64565C14.6258 3.8971 14.6258 4.29523 14.3744 4.54668C14.1229 4.79812 13.7248 4.79812 13.4733 4.54668C13.2219 4.29523 13.2219 3.87614 13.4733 3.64565Z"
        fill="#5AC4BC"
        fillOpacity={0.6}
      />
      <path
        d="M12.8455 4.63087C12.6779 4.86136 12.3426 4.92423 12.1121 4.75659C11.8816 4.58896 11.8188 4.25369 11.9864 4.0232C12.154 3.7927 12.4893 3.72984 12.7198 3.89747C12.9503 4.06511 13.0131 4.40037 12.8455 4.63087Z"
        fill="#5AC4BC"
        fillOpacity={0.6}
      />
      <path
        d="M11.5875 4.90303C11.4827 5.11257 11.2103 5.21734 11.0008 5.09161C10.7912 4.98684 10.6865 4.71444 10.8122 4.5049C10.917 4.29536 11.1894 4.19059 11.3989 4.31631C11.6084 4.42108 11.6923 4.69349 11.5875 4.90303Z"
        fill="#5AC4BC"
        fillOpacity={0.6}
      />
      <path
        d="M10.5814 5.32207C10.5185 5.51066 10.309 5.61543 10.1204 5.55256C9.93183 5.4897 9.82706 5.28016 9.88992 5.09157C9.95278 4.90299 10.1623 4.79822 10.3509 4.86108C10.5395 4.92394 10.6443 5.13348 10.5814 5.32207Z"
        fill="#5AC4BC"
        fillOpacity={0.6}
      />
      <path
        d="M9.80666 5.80402C9.78571 5.97165 9.61807 6.07642 9.45044 6.05547C9.28281 6.03451 9.17804 5.86688 9.19899 5.7202C9.21995 5.55257 9.38758 5.4478 9.55521 5.46875C9.72284 5.48971 9.82761 5.63638 9.80666 5.80402Z"
        fill="#5AC4BC"
        fillOpacity={0.6}
      />
      <path
        d="M1.88561 13.2427C2.22088 12.9913 2.70282 13.0751 2.93332 13.4104C3.18477 13.7456 3.10095 14.2276 2.76569 14.4581C2.43042 14.7095 1.94848 14.6257 1.71798 14.2904C1.46653 13.9552 1.55035 13.4942 1.88561 13.2427Z"
        fill="#C54D58"
      />
      <path
        d="M3.62513 13.4733C3.87657 13.2219 4.2747 13.2219 4.52615 13.4733C4.7776 13.7248 4.7776 14.1229 4.52615 14.3744C4.2747 14.6258 3.87657 14.6258 3.62513 14.3744C3.37368 14.1229 3.37368 13.7248 3.62513 13.4733Z"
        fill="#C54D58"
      />
      <path
        d="M6.01387 14.0184C5.84624 14.2489 5.51098 14.3117 5.25953 14.1441C5.02903 13.9765 4.96617 13.6412 5.1338 13.4107C5.30143 13.1802 5.6367 13.1174 5.8672 13.285C6.1396 13.4317 6.20246 13.7669 6.01387 14.0184Z"
        fill="#C54D58"
      />
      <path
        d="M7.20803 13.5148C7.10326 13.7244 6.83085 13.8292 6.60036 13.7034C6.39082 13.5987 6.28605 13.3263 6.41177 13.1167C6.51654 12.9072 6.78895 12.8024 6.99849 12.9281C7.22898 13.0329 7.3128 13.3053 7.20803 13.5148Z"
        fill="#C54D58"
      />
      <path
        d="M8.10873 12.9283C8.04587 13.1169 7.83633 13.2217 7.64774 13.1588C7.45916 13.0959 7.35438 12.8864 7.41725 12.6978C7.48011 12.5092 7.68965 12.4044 7.87824 12.4673C8.06682 12.5302 8.17159 12.7188 8.10873 12.9283Z"
        fill="#C54D58"
      />
      <path
        d="M8.77936 12.2999C8.7584 12.4676 8.59077 12.5723 8.44409 12.5514C8.27646 12.5304 8.17169 12.3628 8.19264 12.2161C8.2136 12.0485 8.38123 11.9437 8.54886 11.9647C8.69554 11.9856 8.80031 12.1323 8.77936 12.2999Z"
        fill="#C54D58"
      />
      <path
        d="M7.16687 0.921901C7.29259 1.32003 7.08305 1.73911 6.68492 1.86484C6.2868 1.99056 5.86771 1.78102 5.74199 1.38289C5.61626 0.984763 5.82581 0.565681 6.22393 0.439956C6.62206 0.314232 7.04114 0.523773 7.16687 0.921901Z"
        fill="#5AC4BC"
      />
      <path
        d="M6.4121 2.51417C6.57973 2.82848 6.45401 3.20565 6.1397 3.37328C5.82539 3.54092 5.44821 3.41519 5.28058 3.10088C5.11295 2.78657 5.23867 2.40939 5.55298 2.24176C5.8673 2.07413 6.24447 2.19985 6.4121 2.51417Z"
        fill="#5AC4BC"
      />
      <path
        d="M6.01344 4.00196C6.18107 4.23245 6.13916 4.56772 5.88771 4.73535C5.65722 4.90298 5.32195 4.86108 5.15432 4.60963C4.98669 4.37913 5.0286 4.04387 5.28005 3.87623C5.51054 3.7086 5.84581 3.77146 6.01344 4.00196Z"
        fill="#5AC4BC"
      />
      <path
        d="M5.88866 5.28054C6.05629 5.44817 6.05629 5.74153 5.88866 5.90916C5.72102 6.0768 5.42767 6.0768 5.26003 5.90916C5.0924 5.74153 5.0924 5.44817 5.26003 5.28054C5.44862 5.11291 5.72102 5.11291 5.88866 5.28054Z"
        fill="#5AC4BC"
      />
      <path
        d="M5.97224 6.3705C6.13988 6.49622 6.18178 6.72672 6.05606 6.87339C5.93033 7.04103 5.69984 7.08294 5.55316 6.95721C5.38553 6.83149 5.36457 6.60099 5.46934 6.45431C5.59507 6.28668 5.82556 6.24477 5.97224 6.3705Z"
        fill="#5AC4BC"
      />
      <path
        d="M6.20279 7.25049C6.34947 7.33431 6.41233 7.50194 6.32851 7.64862C6.2447 7.7953 6.07707 7.85816 5.93039 7.77435C5.78371 7.69053 5.72085 7.5229 5.80466 7.37622C5.86752 7.22954 6.05611 7.16668 6.20279 7.25049Z"
        fill="#5AC4BC"
      />
      <path
        d="M12.2572 16.6163C12.383 17.0145 12.1734 17.4335 11.7753 17.5593C11.3772 17.685 10.9581 17.4754 10.8324 17.0773C10.7066 16.6792 10.9162 16.2601 11.3143 16.1344C11.7124 16.0087 12.1315 16.2182 12.2572 16.6163Z"
        fill="#C54D58"
      />
      <path
        d="M12.7197 14.92C12.8874 15.2343 12.7617 15.6115 12.4473 15.7791C12.133 15.9467 11.7559 15.821 11.5882 15.5067C11.4206 15.1924 11.5463 14.8152 11.8606 14.6476C12.1749 14.48 12.5731 14.6057 12.7197 14.92Z"
        fill="#C54D58"
      />
      <path
        d="M12.8455 13.3895C13.0131 13.62 12.9712 13.9552 12.7198 14.1229C12.4893 14.2905 12.154 14.2486 11.9864 13.9971C11.8188 13.7666 11.8607 13.4314 12.1121 13.2637C12.3216 13.0961 12.6569 13.159 12.8455 13.3895Z"
        fill="#C54D58"
      />
      <path
        d="M12.7193 12.1119C12.8869 12.2795 12.8869 12.5729 12.7193 12.7405C12.5516 12.9082 12.2583 12.9082 12.0906 12.7405C11.923 12.5729 11.923 12.2795 12.0906 12.1119C12.2792 11.9443 12.5516 11.9443 12.7193 12.1119Z"
        fill="#C54D58"
      />
      <path
        d="M12.4472 11.0632C12.6148 11.1889 12.6567 11.4194 12.531 11.5661C12.4052 11.7337 12.1748 11.7756 12.0281 11.6499C11.8604 11.5241 11.8185 11.2936 11.9443 11.147C12.049 10.9793 12.2795 10.9374 12.4472 11.0632Z"
        fill="#C54D58"
      />
      <path
        d="M12.0695 10.2259C12.2162 10.3097 12.2791 10.4773 12.1952 10.624C12.1114 10.7707 11.9438 10.8335 11.7971 10.7497C11.6504 10.6659 11.5876 10.4983 11.6714 10.3516C11.7343 10.2049 11.9228 10.163 12.0695 10.2259Z"
        fill="#C54D58"
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_34077">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgFigSpiral.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgFigSpiral.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgFigSpiral.displayName = "SvgFigSpiral";
const Memo = memo(SvgFigSpiral);
export default Memo;
