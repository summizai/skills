import type { SummizClient } from "../client.js";
import { parseArgs } from "../lib/args.js";

export async function search(client: SummizClient, args: string[]) {
  const flags = parseArgs(args, {
    positional: { key: "query", label: "A search query" },
    flags: {
      "--limit": { key: "limit", type: "number" },
    },
  });

  const params: Record<string, string> = { query: flags.query as string };
  if (flags.limit !== undefined) params.limit = String(flags.limit);

  return client.get("search-content", params);
}
