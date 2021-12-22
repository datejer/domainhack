import type { NextApiRequest, NextApiResponse } from "next";
import { extractMatches } from "../../lib/domains/extractMatches";
import { generateHacks } from "../../lib/domains/generateHacks";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { input } = req.query;

  if (!input || typeof input !== "string") {
    res.statusCode = 400;
    return res.json({ message: "Please input a string!" });
  }

  const matches = extractMatches(input);
  const domains = generateHacks(matches, input);

  res.statusCode = 200;
  res.json(domains);
}
