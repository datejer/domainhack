import type { NextApiRequest, NextApiResponse } from "next";
import { extractMatches } from "../../lib/domains/extractMatches";
import { generateHacks } from "../../lib/domains/generateHacks";
import { sanitizeInput } from "../../lib/domains/sanitizeInput";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { input } = req.query;

  if (!input || typeof input !== "string") {
    res.statusCode = 400;
    return res.json({ message: "Please input a string!" });
  }

  const sanitized = sanitizeInput(input);
  const matches = extractMatches(sanitized);
  const domains = generateHacks(matches, sanitized);

  res.statusCode = 200;
  res.json(domains);
}
