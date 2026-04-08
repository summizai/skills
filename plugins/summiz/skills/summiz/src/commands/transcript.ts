import type { SummizClient } from "../client.js";
import { parseArgs } from "../lib/args.js";

export async function transcript(client: SummizClient, args: string[]) {
  const flags = parseArgs(args, {
    positional: { key: "identifier", label: "A Summiz UID, YouTube video ID, or YouTube URL" },
    flags: {},
  });

  const id = flags.identifier as string;

  // Detect YouTube URL vs UID vs externalId
  const params: Record<string, string> = {};
  if (id.startsWith("http://") || id.startsWith("https://")) {
    params.youtubeUrl = id;
  } else if (id.length === 7) {
    params.uid = id;
  } else {
    params.externalId = id;
  }

  return client.get("get-transcript", params);
}
