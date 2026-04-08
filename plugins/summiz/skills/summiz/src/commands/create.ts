import type { SummizClient } from "../client.js";
import { parseArgs } from "../lib/args.js";

export async function create(client: SummizClient, args: string[]) {
  const flags = parseArgs(args, {
    positional: { key: "youtubeUrl", label: "A YouTube video URL" },
    flags: {
      "--language": { key: "language", type: "string" },
      "--lang": { key: "language", type: "string" },
    },
  });

  const body: Record<string, unknown> = { youtubeUrl: flags.youtubeUrl };
  if (flags.language) body.language = flags.language;

  return client.post("create-quick-takes", body);
}
