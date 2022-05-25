import { Domain } from "../types";

export const sanitizeInput = (input: string) => {
  return input
    .replace(/\s/g, "") // remove all whitespace
    .replace(/[^A-Za-z-1-9]/g, "") // remove all non-alphanumeric characters except for hyphens
    .replace(/^-+/g, "") // remove all hyphens at the beginning of the string
    .replace(/-+$/g, ""); // remove all hyphens at the end of the string
};
