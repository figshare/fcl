import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgDocumentXmlSplit = (props) => (
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
      d="M1.92414 6.1681C1.88986 6.1681 1.86207 6.19599 1.86207 6.23023V6.72666C1.86207 6.76091 1.88986 6.78879 1.92414 6.78879H7.38621C7.42049 6.78879 7.44828 6.76091 7.44828 6.72666V6.23023C7.44828 6.20265 7.43045 6.17932 7.40574 6.17144C7.3996 6.16932 7.39303 6.1681 7.38621 6.1681H1.92414Z"
      fill={props.color}
    />
    <path
      d="M1.90218 7.41373C1.87874 7.42251 1.86207 7.44494 1.86207 7.47161V7.96804C1.86207 8.00229 1.88986 8.03017 1.92414 8.03017H7.38621C7.42049 8.03017 7.44828 8.00229 7.44828 7.96804V7.47161C7.44828 7.43737 7.42049 7.40948 7.38621 7.40948H1.92414C1.91955 7.40948 1.91507 7.41009 1.91076 7.411L1.90218 7.41373Z"
      fill={props.color}
    />
    <path
      d="M1.92414 8.65086C1.88986 8.65086 1.86207 8.67874 1.86207 8.71299V9.20942C1.86207 9.24367 1.88986 9.27155 1.92414 9.27155H7.38621C7.42049 9.27155 7.44828 9.24367 7.44828 9.20942V8.71299C7.44828 8.67874 7.42049 8.65086 7.38621 8.65086H1.92414Z"
      fill={props.color}
    />
    <path
      d="M1.89033 9.90224C1.87332 9.91315 1.86207 9.93255 1.86207 9.95437V10.4508C1.86207 10.466 1.86751 10.4799 1.87656 10.4908C1.88795 10.5044 1.90503 10.5129 1.92414 10.5129H7.38621C7.42049 10.5129 7.44828 10.485 7.44828 10.4508V9.95437C7.44828 9.92012 7.42049 9.89224 7.38621 9.89224H1.92414C1.91849 9.89224 1.91302 9.89285 1.90782 9.89436C1.90153 9.89618 1.89565 9.89891 1.89033 9.90224Z"
      fill={props.color}
    />
    <path
      d="M1.92414 11.1336C1.91406 11.1336 1.90456 11.136 1.89615 11.1403C1.87593 11.1506 1.86207 11.1715 1.86207 11.1957V11.6922C1.86207 11.7058 1.86653 11.7185 1.87409 11.7289C1.87834 11.7346 1.88355 11.7398 1.8895 11.7437C1.89939 11.7504 1.91131 11.7543 1.92414 11.7543H7.38621C7.42049 11.7543 7.44828 11.7264 7.44828 11.6922V11.1957C7.44828 11.1788 7.44155 11.1636 7.43062 11.1524L7.42149 11.1448L7.4173 11.1418C7.41138 11.1385 7.40484 11.136 7.39789 11.1348L7.39334 11.1342L7.38621 11.1336H1.92414Z"
      fill={props.color}
    />
    <path
      d="M10.7338 8.92423L9.93103 9.89588H10.4999L11.0222 9.25185L11.543 9.89588H12.115L11.3123 8.93817L12.0429 8.03381H11.4933L11.0318 8.63207L10.5608 8.03381H10.0063L10.7338 8.92423Z"
      fill={props.color}
    />
    <path
      d="M12.3522 8.03381V9.89588H12.7928V8.43023L13.2575 9.89588H13.7142L14.1805 8.43023V9.89588H14.6211V8.03381H13.9097L13.4882 9.30398L13.062 8.03381H12.3522Z"
      fill={props.color}
    />
    <path
      d="M15.105 9.89588V8.04896H15.5793V9.5822H16.7586V9.89588H15.105Z"
      fill={props.color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.62069 3.375C0.277893 3.375 0 3.65292 0 3.99569V13.9267C0 14.2695 0.277893 14.5474 0.62069 14.5474H17.3793C17.7221 14.5474 18 14.2695 18 13.9267V3.99569C18 3.65292 17.7221 3.375 17.3793 3.375H0.62069ZM8.68966 3.99569H0.62069V13.9267H8.68966V3.99569ZM9.31034 3.99569V13.9267H17.3793V3.99569H9.31034Z"
      fill={props.color}
    />
  </svg>
);
SvgDocumentXmlSplit.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDocumentXmlSplit.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgDocumentXmlSplit.displayName = "SvgDocumentXmlSplit";
const Memo = memo(SvgDocumentXmlSplit);
export default Memo;
