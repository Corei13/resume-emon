export const MonthShortNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const MonthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const ValidYears = [...Array(40)].map(
  (_, i) => new Date().getFullYear() + 5 - i
);

export const placeholderImageLink = "https://dummyimage.com/600x600/fff/aaa";
