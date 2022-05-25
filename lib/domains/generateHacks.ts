import { Domain } from "../types";

export const generateHacks = (domains: Domain[], input: string) => {
  return domains
    .map((domain) => {
      const { name } = domain;

      // .replace(/-+\./g, ".") removes all hyphens before dots

      // Sometimes the first "if" returned a .domain without anything
      // in front of the dot, so we need to check for that and add xxx.

      if (input.indexOf(name) === input.length - name.length) {
        return Object.assign(domain, {
          name:
            input.replace(name, `.${name}`).replace(/-+\./g, ".").split(".")[0].length === 0
              ? "xxx" + input.replace(name, `.${name}`).replace(/-+\./g, ".")
              : input.replace(name, `.${name}`).replace(/-+\./g, "."),
        });
      } else if (input.indexOf(name) !== 0) {
        return Object.assign(domain, {
          name: input.replace(name, `.${name}/`).replace(/-+\./g, "."),
        });
      } else {
        return Object.assign(domain, {
          name: input.replace(name, `xxx.${name}/`).replace(/-+\./g, "."),
        });
      }
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
