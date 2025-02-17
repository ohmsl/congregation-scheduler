import { Spacing } from "../types/Spacing";

/**
 * Create a spacing function.
 * Mimics MUI's createSpacing behaviour with a default base of 8.
 *
 * @param factor - Optional base spacing factor.
 * @returns A spacing function that multiplies the base factor.
 */
export const createSpacing = (factor?: number): Spacing => {
  const base = factor !== undefined ? factor : 8;
  return (multiplier: number): number => base * multiplier;
};
