const defaultPrecision = 2;

export const formatPrice = (price: number, precision = defaultPrecision): string => {
  if (Math.floor(price) === price) {
    return price.toString();
  }
  return price.toFixed(precision);
};
