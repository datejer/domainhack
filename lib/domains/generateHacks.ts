type Domain = {
  name: string;
  type: string;
  sponsor: string;
};

export const generateHacks = (domains: Domain[], input: string) => {
  return domains
    .map((domain) => {
      const { name } = domain;

      // If domain is perfect, return without slash
      // If input starts with a valid TLD, replace beginning with "xxx"
      if (input.indexOf(name) === input.length - name.length)
        return input.replace(name, `.${name}`);
      else if (input.indexOf(name) !== 0) return input.replace(name, `.${name}/`);
      else return input.replace(name, `xxx.${name}/`);
    })
    .sort((a, b) => {
      // Sort by position of slash in the string
      // Hoist domains without a slash to the top
      return a.indexOf("/") === -1
        ? -1
        : b.indexOf("/") === -1
        ? 1
        : b.indexOf("/") - a.indexOf("/");
    });
};
