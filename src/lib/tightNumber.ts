const tightNumbers = [ '2', '3', '4', '5', '6', '8' ];

export const tightNumber = (num: number): boolean => {
  const firstDigit = num.toString().substring(0, 1);
  return tightNumbers.includes(firstDigit);
};
