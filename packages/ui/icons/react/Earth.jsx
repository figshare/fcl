import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgEarth = (props) => (
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
    <g clipPath="url(#clip0_12864_33454)">
      <path
        d="M15.451 12.3464C15.4792 12.3985 15.5322 12.4506 15.5313 12.5027C15.5305 12.6249 15.5202 12.7497 15.4878 12.8668C15.4314 13.0702 15.3579 13.2684 15.2904 13.4675C15.2357 13.6282 15.2049 13.864 14.9853 13.8085C14.8751 13.7811 14.8135 13.5615 14.7298 13.4299C14.752 13.4197 14.7759 13.4094 14.7982 13.3992C14.7982 13.2419 14.787 13.0838 14.8041 12.9283C14.8101 12.8685 14.8699 12.8061 14.9195 12.76C15.0443 12.6455 15.1742 12.5361 15.3066 12.4293C15.3476 12.3951 15.4023 12.3737 15.451 12.3464L15.451 12.3464ZM18 9C18 13.9623 13.9632 18 9 18C4.03678 18 0 13.9623 0 9C0 4.03765 4.03678 0 9 0C13.9623 0 18 4.03765 18 9ZM16.1089 5.69038C16.1781 5.68355 16.2491 5.68355 16.3166 5.66816C16.3473 5.66133 16.3764 5.65022 16.4055 5.63826C16.3721 5.56391 16.3379 5.49042 16.3029 5.41779C16.2363 5.40754 16.167 5.40668 16.1012 5.41523C16.0055 5.42804 15.9167 5.47675 15.8218 5.4947C15.5578 5.54511 15.5022 5.65279 15.6552 5.86727C15.7176 5.95443 15.8056 6.03561 15.9004 6.08346C16.0363 6.15268 16.0329 6.18601 15.9209 6.28342C15.7338 6.44664 15.7526 6.52441 15.9748 6.60815C16.0551 6.63891 16.1431 6.65088 16.2021 6.66455C16.4619 6.66968 16.5251 6.59875 16.4482 6.37572C16.3909 6.20994 16.2969 6.05613 16.2192 5.89804C16.1833 5.82796 16.1457 5.76045 16.1089 5.69038L16.1089 5.69038ZM14.5802 3.18908C14.4221 3.2113 14.2623 3.21984 14.1042 3.24292C14.0674 3.2489 14.0051 3.29333 14.0076 3.31384C14.0119 3.35572 14.0709 3.43177 14.0768 3.42835C14.2375 3.34973 14.4392 3.56337 14.5896 3.35059C14.6221 3.3053 14.681 3.26684 14.7425 3.24292C14.7092 3.20959 14.6742 3.17712 14.6391 3.14464C14.6203 3.16515 14.6015 3.18652 14.5802 3.18908L14.5802 3.18908ZM13.9726 5.56044C13.888 5.43055 13.7846 5.48097 13.7017 5.5818C13.6316 5.66811 13.5496 5.74758 13.4975 5.84329C13.4607 5.91165 13.4351 6.01419 13.4625 6.07742C13.4787 6.11844 13.606 6.14493 13.6727 6.1287C14.0119 6.04837 14.346 6.02359 14.6802 6.1475C14.6921 6.15177 14.7049 6.14835 14.787 6.14835C14.8246 6.13468 14.9254 6.1005 15.0254 6.06546C14.9596 5.98513 14.9023 5.89626 14.828 5.82706C14.7477 5.75271 14.6092 5.71597 14.5691 5.62881C14.4964 5.47157 14.4366 5.4673 14.34 5.58779C14.2016 5.75869 14.0939 5.74502 13.9726 5.56044L13.9726 5.56044ZM1.66146 10.744C1.85971 10.6132 1.95285 10.3927 1.84262 10.1535C1.78536 10.027 1.74777 9.81252 1.50678 10.0022C1.39483 10.0885 1.00004 9.86977 0.89237 9.64845C1.02311 11.3028 1.65033 12.8178 2.62536 14.0466C2.6604 13.8236 2.6886 13.5997 2.7168 13.3758C2.74842 13.1254 2.69373 12.9186 2.45105 12.8186C2.10838 12.6785 1.96995 12.3786 1.81356 12.082C1.72298 11.9103 1.6042 11.7522 1.49739 11.5881C1.47688 11.5574 1.42732 11.5104 1.4333 11.5035C1.60591 11.2814 1.35981 10.9438 1.66146 10.7438L1.66146 10.744ZM17.1361 8.99985C17.1361 8.66915 17.1139 8.34442 17.0754 8.02398C16.89 8.03167 16.7097 8.00091 16.5627 7.82573C16.5371 7.79411 16.467 7.76762 16.4328 7.7813C16.1354 7.89068 15.9773 7.68217 15.7902 7.52322C15.7329 7.47366 15.6415 7.46512 15.5655 7.43777C15.5791 7.51383 15.5732 7.59928 15.609 7.66165C15.6697 7.76847 15.7586 7.85819 15.8321 7.95818C15.9457 8.11114 16.0517 8.21796 16.2508 8.05389C16.4738 7.86845 16.6071 8.11969 16.755 8.21027C16.9199 8.31195 16.7789 8.44355 16.7063 8.51876C16.5379 8.69223 16.3636 8.87681 16.1568 8.99303C15.8876 9.14429 15.5868 9.23999 15.2954 9.34766C15.01 9.45363 14.9605 9.40833 14.8605 9.13403C14.7861 8.93065 14.6631 8.74608 14.5597 8.55381C14.4366 8.32565 14.3119 8.09836 14.188 7.87104C14.1529 7.80525 14.1282 7.72834 14.0769 7.67963C14.0418 7.64716 13.9684 7.64887 13.9137 7.65228C13.9026 7.65314 13.8761 7.74543 13.8932 7.77619C14.1598 8.26499 14.4307 8.75206 14.705 9.23573C14.7537 9.32119 14.863 9.38784 14.8767 9.47329C14.9271 9.78776 15.1091 9.72195 15.3151 9.66214C15.4732 9.61599 15.639 9.59976 15.8022 9.56985C15.7483 9.74246 15.7176 9.92704 15.6338 10.0834C15.4954 10.3441 15.3262 10.5705 15.0553 10.7414C14.8237 10.8892 14.6238 11.1328 14.4956 11.3798C14.4221 11.5208 14.5204 11.7515 14.5383 11.942C14.5588 12.1591 14.6187 12.3838 14.5794 12.5898C14.5546 12.7205 14.3973 12.8461 14.2717 12.9324C14.0709 13.07 13.9068 13.1973 14.0222 13.4751C14.0436 13.5255 14.0419 13.6374 14.0188 13.6477C13.7001 13.7835 13.6949 14.1433 13.5018 14.374C13.1617 14.7816 12.7174 14.8167 12.267 14.8696C12.1935 14.8782 12.079 14.7432 12.0252 14.65C11.9226 14.4706 11.8508 14.2732 11.768 14.0826C11.738 14.0151 11.7081 13.9476 11.6851 13.8784C11.6073 13.646 11.5586 13.3998 11.4509 13.1836C11.2937 12.8717 11.2339 12.6128 11.4637 12.2855C11.609 12.0804 11.427 11.8027 11.3535 11.5677C11.321 11.4652 11.2518 11.3567 11.1689 11.29C10.9262 11.0952 10.9673 10.8721 11.0519 10.6243C11.1365 10.3791 11.0672 10.2842 10.8348 10.3458C10.687 10.3851 10.6024 10.374 10.5255 10.2432C10.4221 10.0689 10.2768 10.0903 10.1025 10.1432C9.882 10.2107 9.64957 10.2407 9.42225 10.2834C9.37354 10.2919 9.31202 10.2671 9.27442 10.2885C8.85569 10.5278 8.69761 10.1578 8.47459 9.9484C8.36777 9.84671 8.28745 9.71682 8.17465 9.62367C7.96529 9.44935 7.91487 9.26563 8.01571 9.01697C8.06441 8.89648 8.12936 8.74778 8.09688 8.6367C7.967 8.18038 8.2319 7.90435 8.525 7.65484C8.65916 7.54033 8.78477 7.46 8.82238 7.26431C8.87023 7.01735 9.09242 6.91737 9.30777 6.84731C9.55302 6.76869 9.80595 6.70716 10.0589 6.65247C10.252 6.6106 10.4503 6.59095 10.6451 6.56018C10.646 6.56873 10.6477 6.57642 10.6485 6.58496C10.7605 6.57556 10.8869 6.53027 10.9801 6.56787C11.0664 6.60205 11.1869 6.78236 11.1724 6.80116C11.0254 6.98403 11.1937 7.01906 11.2903 7.06691C11.4791 7.16005 11.674 7.24294 11.8713 7.31472C11.9474 7.34206 12.0773 7.36599 12.1183 7.32583C12.4678 6.98487 12.8352 7.23098 13.1959 7.26858C13.3762 7.28823 13.5582 7.31301 13.7377 7.30361C13.9154 7.29421 14.1359 6.87891 14.0479 6.73534C14.0248 6.69859 13.9462 6.68321 13.8923 6.6815C13.7436 6.67638 13.5949 6.69518 13.448 6.68492C13.2019 6.66612 12.9754 6.61485 12.9541 6.29527C12.9515 6.25254 12.8626 6.2158 12.8139 6.17734C12.7661 6.24485 12.6644 6.35338 12.6789 6.37303C12.7951 6.52428 12.6789 6.5747 12.5823 6.62684C12.4251 6.71229 12.3884 6.57727 12.3439 6.47986C12.1765 6.10899 11.8551 5.89194 11.5407 5.66806C11.5065 5.64413 11.4509 5.65097 11.4048 5.64242C11.4168 5.69455 11.4125 5.76547 11.4441 5.79453C11.5638 5.90134 11.6868 6.00987 11.8261 6.08592C11.9449 6.15086 11.9637 6.20982 11.8927 6.31323C11.7859 6.47132 11.774 6.29272 11.7253 6.26196C11.4988 6.1184 11.2792 5.96287 11.0476 5.82785C10.9972 5.79794 10.9066 5.827 10.8374 5.84152C10.7656 5.8569 10.6955 5.91416 10.6297 5.90732C10.252 5.86801 10.0692 6.13463 9.89913 6.38671C9.70686 6.67213 9.1514 6.77809 8.89762 6.5354C8.70535 6.35082 8.9318 6.1406 8.89249 5.93978C8.88908 5.92098 9.06767 5.85006 9.16765 5.83468C9.26336 5.82015 9.37017 5.868 9.46333 5.84749C9.56843 5.82442 9.70773 5.78169 9.75301 5.70137C9.83163 5.56208 9.74617 5.4433 9.59492 5.38178C9.5539 5.36555 9.51887 5.33222 9.48212 5.30744C9.52314 5.28266 9.56501 5.23822 9.60774 5.23651C10.0871 5.21344 10.3657 4.74942 10.8246 4.6785C10.8477 4.67508 10.8417 4.5563 10.8716 4.50417C10.9092 4.43667 10.9699 4.38283 11.0211 4.32301C11.0639 4.3683 11.1203 4.40676 11.1467 4.46059C11.2707 4.71525 11.5065 4.6221 11.6996 4.63663C11.8423 4.64688 11.9884 4.61185 12.1329 4.59561C12.1671 4.59134 12.2311 4.58108 12.232 4.57168C12.244 4.26748 12.5507 4.26918 12.7131 4.1299C12.8071 4.04957 12.9917 4.07862 13.1335 4.04957C13.1763 4.04017 13.213 4.00343 13.2515 3.97865C13.2113 3.94276 13.172 3.87781 13.1293 3.8761C12.9942 3.87012 12.8524 3.86841 12.7233 3.90259C12.5789 3.9419 12.4567 3.9325 12.432 3.78039C12.4191 3.70434 12.508 3.61034 12.5559 3.52659C12.567 3.50779 12.602 3.50523 12.6182 3.48814C12.6764 3.43259 12.7328 3.37363 12.7892 3.31552C12.7729 3.30014 12.7524 3.26852 12.7404 3.27194C12.6388 3.29587 12.5285 3.30783 12.4414 3.3591C12.3303 3.42405 12.2499 3.5471 12.1363 3.60009C11.9825 3.67358 11.8295 3.69067 12.0423 3.88977C12.1235 3.96411 11.8671 4.34352 11.7022 4.38968C11.521 4.4401 11.3074 4.55204 11.257 4.21792C11.233 4.06154 11.1416 4.06239 11.0177 4.15639C10.8536 4.28115 10.7024 4.22817 10.6229 4.04958C10.5494 3.88209 10.5417 3.7334 10.7502 3.61206C11.0792 3.4215 11.3612 3.1284 11.7064 2.99167C12.1141 2.82931 12.5644 2.74898 13.0036 2.70882C13.2625 2.68575 13.5351 2.8088 13.8017 2.86691C14.0393 2.91818 14.276 2.9686 14.5127 3.02414C13.0643 1.68509 11.1263 0.863887 9.00019 0.863887C8.55241 0.863887 8.11403 0.901488 7.68592 0.971559C7.80897 1.35524 7.9175 1.36036 8.3063 1.16297C8.37894 1.12623 8.47123 1.10999 8.55326 1.11341C8.60197 1.11512 8.64897 1.17408 8.69682 1.20655C8.66691 1.2433 8.64555 1.28945 8.60881 1.31764C8.48063 1.41506 8.33877 1.49539 8.21915 1.60221C8.11404 1.69621 8.00723 1.7808 8.10721 1.97734C8.19693 2.15679 8.04825 2.34735 7.83546 2.39862C7.709 2.42939 7.67481 2.48493 7.70728 2.61055C7.72096 2.66609 7.68336 2.73445 7.66883 2.79598C7.62183 2.76607 7.57654 2.73104 7.52612 2.7054C7.47742 2.68148 7.42444 2.66695 7.37316 2.64815C7.38855 2.696 7.41333 2.74215 7.41674 2.79085C7.42016 2.83102 7.41076 2.89596 7.38513 2.91049C7.32189 2.94809 7.24669 2.96518 7.17491 2.98483C6.80149 3.08823 6.4289 3.19932 6.05121 3.28733C5.79913 3.34544 5.73162 3.57189 5.62736 3.74194C5.52225 3.91455 5.47696 3.95386 5.26418 3.88037C4.82666 3.72826 4.52927 3.51377 4.45665 3.0173C4.43614 2.87373 4.24643 2.75752 4.51219 2.67207C4.52586 2.6678 4.53185 2.63533 4.54124 2.61567C4.50877 2.60456 4.46177 2.5738 4.44383 2.58491C4.26267 2.70284 4.22849 2.61738 4.1926 2.44477L4.1909 2.44221C3.92171 2.6396 3.66622 2.85409 3.42353 3.08311C3.47822 3.10532 3.53035 3.13182 3.57564 3.16856C3.60982 3.1959 3.64998 3.21812 3.68672 3.24205C3.64143 3.2805 3.60042 3.32921 3.54914 3.35143C3.50983 3.36852 3.45429 3.35741 3.40815 3.35057C3.33551 3.34032 3.26373 3.32579 3.19109 3.31126C3.1817 3.32066 3.174 3.32921 3.16461 3.33861C3.21246 3.38988 3.26031 3.43944 3.30304 3.49413C3.32953 3.53002 3.34149 3.57788 3.35944 3.6206C3.32526 3.62744 3.29107 3.64026 3.25689 3.63855C3.13897 3.63428 3.0202 3.63086 2.90226 3.62231C2.83903 3.69409 2.77579 3.76587 2.71512 3.84022C2.76895 3.88294 2.81595 3.93934 2.85184 4.02138C2.87235 4.06838 3.10992 4.09316 3.1569 4.04274C3.3355 3.8556 3.41412 3.97951 3.54229 4.09829C3.76447 4.30423 4.01143 4.48538 4.24729 4.6768C4.28404 4.70671 4.35496 4.75969 4.35069 4.76653C4.18149 5.0545 4.3994 5.12971 4.58997 5.22712C4.60621 5.23567 4.58313 5.3647 4.57801 5.3647C4.40796 5.36727 4.23705 5.35872 4.06615 5.3536C4.09179 5.269 4.11828 5.1844 4.14135 5.09979C4.15502 5.04852 4.16186 4.99639 4.17212 4.94512C4.12853 4.95623 4.08239 4.96221 4.04052 4.98016C3.92601 5.02887 3.80979 5.07501 3.70212 5.13568C3.60897 5.18781 3.5483 5.21772 3.44746 5.1203C3.3885 5.06305 3.24066 5.06561 3.14496 5.09039C3.06122 5.11261 2.99542 5.20404 2.92193 5.26472C3.0014 5.25617 3.08173 5.23481 3.15948 5.24335C3.23468 5.25019 3.36457 5.27753 3.37055 5.31342C3.40644 5.52791 3.58504 5.50057 3.71921 5.54927C3.76792 5.56721 3.81919 5.58003 3.86961 5.59456C3.8209 5.63814 3.7739 5.71932 3.72605 5.71932C3.50558 5.71932 3.2945 5.99021 3.0561 5.73641C3.02362 5.70137 2.78606 5.76888 2.76213 5.83297C2.63822 6.16709 2.18018 6.17137 2.09815 6.49781C2.00842 6.85415 1.72814 6.99172 1.48459 7.1874C1.43674 7.22586 1.43674 7.33353 1.42905 7.41043C1.42563 7.44205 1.46921 7.47623 1.47263 7.51041C1.4863 7.64799 1.49057 7.78642 1.49912 7.92314C1.41025 7.83085 1.30428 7.74967 1.23507 7.64457C1.17782 7.55656 1.10091 7.49418 1.01631 7.44803C0.917189 7.95306 0.864208 8.47006 0.864208 8.99987C0.864208 9.02294 0.865917 9.04516 0.865917 9.06823H0.879589C1.16586 9.05712 1.19491 9.08789 1.17098 9.36988C1.13509 9.78518 1.22396 9.73819 1.59312 9.81167C1.97509 9.88687 2.13146 9.6664 2.37074 9.52796C2.5126 9.44678 2.54763 9.48779 2.5049 9.63819C2.4938 9.6775 2.52285 9.72792 2.53225 9.77406C2.56729 9.74415 2.61087 9.72108 2.63309 9.68519C2.69803 9.57923 2.75357 9.49036 2.88945 9.6117C2.92705 9.64503 3.00652 9.65101 3.06292 9.64332C3.52949 9.5835 3.84737 9.8467 4.15843 10.133C4.20115 10.1723 4.26695 10.2193 4.31651 10.2133C4.60961 10.1774 4.7583 10.3569 4.93178 10.5517C5.08474 10.7217 5.06765 10.7875 4.87709 10.867C4.84205 10.8824 4.82069 10.9294 4.79334 10.9619C4.83949 10.9653 4.89674 10.9875 4.9275 10.9678C5.02919 10.9055 5.09755 10.9114 5.2206 10.9619C5.6453 11.1379 6.09308 11.2541 6.52205 11.4216C6.83566 11.5447 6.91258 11.7045 6.70833 11.9634C6.42976 12.3146 6.29304 12.6863 6.21783 13.1187C6.18194 13.3272 6.02983 13.5246 5.741 13.575C5.47866 13.6212 5.16419 13.6947 5.20862 14.1014C5.21546 14.1663 5.11975 14.245 5.06506 14.3116C4.96679 14.4338 4.86339 14.5517 4.76171 14.6714C4.72069 14.7184 4.68565 14.7859 4.63353 14.8038C4.50278 14.8508 4.32932 14.8354 4.23959 14.9183C4.15841 14.9927 4.17293 15.1653 4.13106 15.2892C4.11824 15.3251 4.04817 15.3738 4.0157 15.367C3.9875 15.3601 3.96357 15.3627 3.93879 15.3627C5.32912 16.4702 7.08784 17.1358 8.99937 17.1358C13.4866 17.1358 17.1361 13.486 17.1361 8.99994L17.1361 8.99985Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33454">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgEarth.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgEarth.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgEarth.displayName = "SvgEarth";
const Memo = memo(SvgEarth);
export default Memo;
