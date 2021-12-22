import domains from "../../assets/data/domains.json";

export const extractMatches = (input: string) => {
  return Object.keys(domains)
    .filter((domain) => input.indexOf(domain) !== -1)
    .map((domain) => {
      return {
        name: domain,
        type: domains[domain as keyof typeof domains].type,
        sponsor: domains[domain as keyof typeof domains].sponsor,
      };
    });
};
