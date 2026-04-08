import type { SummizClient } from "../client.js";
import { parseArgs } from "../lib/args.js";

export async function summary(client: SummizClient, args: string[]) {
  const flags = parseArgs(args, {
    positional: { key: "identifier", label: "A Summiz UID or YouTube video ID" },
    flags: {},
  });

  const id = flags.identifier as string;
  const params: Record<string, string> = id.length === 7
    ? { uid: id }
    : { externalId: id };

  return client.get("get-summary", params);
}
