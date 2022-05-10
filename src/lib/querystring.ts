type QueryStringValue = string | number | boolean;

/**
 * Creates a query string from an object
 *
 * Supports plain values and arrays, but doesn't support nested arrays
 *
 * @param params the query string values in object form
 */
export const createQueryString = (params: { [key: string]: QueryStringValue | QueryStringValue[] }): string => {
  return Object.keys(params).map(k => {
    const param = params[k];
    if (Array.isArray(param)) {
      return param.map(val => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`).join('&');
    }
    return `${encodeURIComponent(k)}=${encodeURIComponent(param)}`;
  }).join('&');
};
