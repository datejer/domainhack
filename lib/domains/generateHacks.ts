import { Domain } from "../types";

export const generateHacks = (domains: Domain[], input: string) => {
  return domains
    .map((domain) => {
      const { name } = domain;

      // If domain is perfect, return without slash
      // If input starts with a valid TLD, replace beginning with "xxx"
      if (input.indexOf(name) === input.length - name.length)
        return Object.assign(domain, { name: input.replace(name, `.${name}`) });
      else if (input.indexOf(name) !== 0)
        return Object.assign(domain, { name: input.replace(name, `.${name}/`) });
      else return Object.assign(domain, { name: input.replace(name, `xxx.${name}/`) });
    })
    .sort((a, b) => {
      // Sort by position of slash in the string
      // Hoist domains without a slash to the top
      return a.name.indexOf("/") === -1
        ? -1
        : b.name.indexOf("/") === -1
        ? 1
        : b.name.indexOf("/") - a.name.indexOf("/");
    });
};
