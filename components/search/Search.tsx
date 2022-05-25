import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { Domain } from "../../lib/types";
import styles from "./Search.module.scss";
import { extractMatches } from "../../lib/domains/extractMatches";
import { generateHacks } from "../../lib/domains/generateHacks";
import { sanitizeInput } from "../../lib/domains/sanitizeInput";

export const Search = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Domain[]>([]);

  const doSearch = (value: string) => {
    const sanitized = sanitizeInput(value);
    const matches = extractMatches(sanitized);
    const domains = generateHacks(matches, sanitized);

    setResult(domains as Domain[]);
  };

  const debouncedSearch = useCallback(
    debounce((value) => doSearch(value), 100),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInput(value);
    debouncedSearch(value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") doSearch(input);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="e.g. mycooldomain"
        value={input}
        onChange={handleChange}
        onKeyPress={handleEnter}
      />
      {result.length > 0 && (
        <table className={styles.result}>
          <thead>
            <tr>
              <th>#</th>
              <th>Domain</th>
              <th>Type</th>
              <th>Sponsor</th>
            </tr>
          </thead>
          <tbody>
            {result.map((domain: Domain, i) => (
              <tr key={domain.name}>
                <td className={styles.number}>{i}</td>
                <td>
                  <span className={styles.name}>{domain.name.split(".")[0]}</span>
                  <span className={styles.dot}>.</span>
                  <span className={styles.tld}>{domain.name.split(".")[1].split("/")[0]}</span>
                  <span className={styles.slash}>/</span>
                  <span className={styles.dir}>{domain.name.split(".")[1].split("/")[1]}</span>
                </td>
                <td className={styles.type}>{domain.type}</td>
                <td className={styles.sponsor}>{domain.sponsor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
