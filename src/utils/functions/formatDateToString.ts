/**
 * Note:
 * I could use date-fns library here, it would be easier
 * But date-fns is a big lib (about 6.47MB) to use just once
 * So I decided to go with javascript vanila
 */

function formatToTwoNumber(value: number) {
  return value < 10 ? `0${value}` : value.toString();
}

export function formatDateToString(value: string | Date) {
  const dateToFormat = new Date(value);

  return `${formatToTwoNumber(dateToFormat.getMonth() + 1)}/${formatToTwoNumber(
    dateToFormat.getDate(),
  )}/${dateToFormat.getFullYear()}`;
}
