import moment from "moment";
/*
  Date formatting based on the Unicode Technical Standard
  https://unicode.org/reports/tr35/tr35-dates.html
*/

export const DEFAULT_MIN_DATE = moment("1970-01-01").toDate();
export const DEFAULT_MAX_DATE = moment("2037-12-31").toDate();

export const supportedFormats = {
  day: ["d", "dd", "D", "DD"],
  month: ["M", "MM", "MMM", "MMMM", "m", "mm", "mmm", "mmmm"],
  year: ["y", "yy", "yyyy", "Y", "YY", "YYYY"],
  separators: [" ", ".", "-", "/", ","],
};

const section = /([d,D]{1,2}|[y,Y]{1,4}|[m,M]{1,4})/.source;
const separator = /([-./,\s]\s{0,1})/.source;

export const formatRegex = new RegExp([
  "^",
  section,
  separator,
  section,
  separator,
  section,
  "$",
].join(""), "g");

export const dateFormatErrorMessage = `Invalid propType "dateFormat" passed to "Datepicker".
  Supported formats are any combination of the following:

  day: ${supportedFormats.day.join(", ")}
  month: ${supportedFormats.month.join(", ")}
  year: ${supportedFormats.year.join(", ")}
  separators: "${supportedFormats.separators.join("\", \"")}"
`;

export const validateDateFormat = (props, propName) => {
  if (props[propName] === undefined) {
    return null;
  }

  const regex = new RegExp(formatRegex);
  if (!regex.test(props[propName])) {
    return new Error(dateFormatErrorMessage);
  }

  return null;
};

export const getInputType = (format) => {
  for (const f of supportedFormats.day) {
    if (f === format) {
      return "day";
    }
  }

  for (const f of supportedFormats.month) {
    if (f === format) {
      return "month";
    }
  }

  for (const f of supportedFormats.year) {
    if (f === format) {
      return "year";
    }
  }

  return undefined;
};

export function getYearsPeriod(
  date,
  yearItemNumber
) {
  const year = moment(date).year();
  const endPeriod = Math.ceil(year / yearItemNumber) * yearItemNumber;
  const startPeriod = endPeriod - (yearItemNumber - 1);

  return { startPeriod, endPeriod };
}
