/** If the parameter is an array, gets the first element of the array (undefined for empty arrays); otherwise returns the parameter. */
export const getParam = (param: string[] | string | undefined): string | undefined => {
  return Array.isArray(param)
    ? param[0]
    : param;
};
