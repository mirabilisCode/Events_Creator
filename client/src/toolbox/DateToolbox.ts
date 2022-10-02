const getDayName = (baseDate: Date): string => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return days[baseDate?.getDay()];
};

const getMonthName = (baseDate: Date): string => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return months[baseDate?.getMonth()];
};

const getDateWithOrder = (baseDate: Date): string => {
  const dayOfMonthNumber = baseDate?.getDate().toString();
  const order = dayOfMonthNumber.endsWith("1") ? "st" : dayOfMonthNumber.endsWith("2") ? "nd" : dayOfMonthNumber.endsWith("3") ? "rd" : "th";

  return `${dayOfMonthNumber}${order}`;
};

export { getDayName, getMonthName, getDateWithOrder };
