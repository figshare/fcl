import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgFingerprint = (props) => (
  <svg
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 18 18"
    focusable={false}
    aria-hidden={true}
    role="img"
    alt={props.title}
    {...props}
  >
    <rect width={18} height={18} fill="url(#pattern0_14728_101247)" />
    <defs>
      <pattern
        id="pattern0_14728_101247"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_14728_101247" transform="scale(0.0208333)" />
      </pattern>
      <image
        id="image0_14728_101247"
        width={48}
        height={48}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABWFJREFUaIHNWt112zoM/oBz3+tOUN0JrjtB3QniThBngprWAE0HEOlOEGeCphPEmaDOBHE2sBcA7kPoVKZASVbS037n5CHiH0D8gya8EkIIhaqeqeqYiApVndTHiWijqlsiWhPRnXNu8xrn0ksWhxBGqnoGYK6q4xOXb4loSUTXzrndUBp46ELv/WcReVDV1QDiAaBQ1aWq3g6lARgggRDCWFWvBhJtgpk/Oeduhqz955TJVVXNRORqyEFtEJHR0LW9Gaiqagagi/g9Ea1UdcPM2/qAiIyJaKyqUwBvakP3zDzo9oGeKtSD+DtmXvZVgxDCVETGAHbMvHqJEXcyEEIYi8jPzPCemWdD9ddCVVVfiGiiqjtm/trlblsZCCGMIvGFMXzPzJOX3F6KqqouAXypfdox879tZ7TagKpeYiDx3vsPh2BGRBsiunfObXPzIybJ/6NIwzy3ICuBEEIhIg/G0CMzj9uIr6rqCsCscRjRBsAqF7yqqroBcJZ+Z+b3OVXKBrLIeXPBk85niQ8hjC3i455jVV2KyM8QQnrbYGbzTFXNSsBkIKYI5+n3eHPr3GYRfXx6ISK30bs9wzm3IaLrdLKqnocQzH1NBkRkan0nIvOGEiLWAO675kVcpUzkzhARU6o5FbIY+JEaYQih8N5/SG+HmSdE9A3AXfx7zJwTtwnPjiKe8cOY11A5IO+FLHEd+fqqqi5F5AsAqOo2hPDpYGjRRo70NgavJYB36VkiEgB8Ss5Kjfk/i1BTAkSUurt9PdzHG6v760JEWtXLOXfDzGPY6jWtS4GZLTsrLDvIMTCvGdNj6vMzNtJpvM65HTNPAezTsfqeLfGikQGbKhSJnSHjDmHYSCq1GMU/AwAzfztcgHNu672/MbzcFMCy9v8jmurWwKCChojeGN/qKjaKQfASwKWIPNTFX5/bsmdX1AbQkkp4789VtWDm61SkmWKmrmJzHKvUKH67TOd27NkJUwLe+1tVXeHX7Zku7G9Ag4EQwiTtKMTb+yvR1wYGl3y/G4O7Ei+ElVn2TT+O8EcYcM7tjKRtaU7uwJ+SABaLxQzABYCvzPyxLMvVkH1OaqucAMuHN74NJbqOoRJopAKoGXpZlqu6ihDR9WsQa6EXA0aUbBhh7Pc8Y7FYzJj5LTO/jepyKszsM0UvFTKi5BrAh2TOeQhhXk/6cqWn9/4MQEFEjRqjhl6u25KAuWGS7prqoKq3udIv7jGKUf6mVhs3Uoj6WQkakm8wEG/E0vFxMufOYGAciWpkq977cxH5mUT5kVVHiIiVuuwtieZUaI2kIoo16XMWycyzTNulEJHvVVXtYhvl0I3IScb6btUbZjMhZ8TW5LO6ekQpXGTWA09NqUNelVUrZj4KYFF9Gr0hJCXt8/rMpjkdPzosusY2JrpwkfZVW/pR/RnIhPqDpzkyurIsV8z8Ee2dhxR7K/rGx5NcP8r0aNk4kOvPqOpV6mmcc+tYsH9Fe1J2j6fUoUgbZLGKM5+b2vpRrd1p7/0qcyMbIvqYu5Wox0V8AxjFLsM25/NjJ/DWqsqI6LotEPZpr29x/KLSi4m+iM+z3zMl5T5KK3tGaypRa4M0EH3+g+Xz+6IWG8x6mJmnXRf0Wk9MF6ckazGVmKel65A9ez+zVlU1BxAyw7uyLN9aA977Q840jjc9RXee48qy7FXgnPRO3CKJfVmWo2RuQMvLSgtOkuZJ9UD0+e+RuEoiOjowMnoq8Y/M/P7UuuHkisw5twkhTERkFn/UsVksFumhuWzSwh7AsizLzrcHCy/6sUcOsZX+vWPaPYDVb38nHor4ZDrDrwbtI57y+TUz3/R4seyF/wGXx/Pl0nRT2AAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);
SvgFingerprint.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgFingerprint.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgFingerprint.displayName = "SvgFingerprint";
const Memo = memo(SvgFingerprint);
export default Memo;
