const defaultPrecision = 2;
export const formatPrice = (value?: number, precision = defaultPrecision): string => {
  if (typeof value === 'undefined') {
    return '';
  }
  return Math.round(value) === value ? value.toString() : value.toFixed(precision);
};
