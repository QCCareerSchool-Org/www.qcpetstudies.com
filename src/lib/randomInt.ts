/**
 * Generates a random integer bewteen to numbers, inclusive
 * @param min the minimum number
 * @param max the maximum number
 * @returns the random number
 */
export const randomInt = (min: number, max: number): number => Math.floor((Math.random() * (max - min + 1)) + min);
