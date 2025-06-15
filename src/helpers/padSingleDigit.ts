export const padSingleDigit = (number: number): string => {
  if (number >= 0 && number <= 9) {
    return '0' + number;
  } else {
    return number.toString();
  }
};
