import dayjs from "dayjs";

const formattedDateToDayMonthYear = (unixTimesStamp: number) => {
  const date = dayjs.unix(unixTimesStamp);
  return date.format("DD.MM.YYYY");
};

const formattedDateToHoursAndMinutes = (unixTimesStamp: number) => {
  const date = dayjs.unix(unixTimesStamp);
  return date.format("HH:mm");
};

export { formattedDateToDayMonthYear, formattedDateToHoursAndMinutes };
