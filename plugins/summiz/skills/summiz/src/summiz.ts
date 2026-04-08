import { createClient } from "./client.js";
import { search } from "./commands/search.js";
import { searchYt } from "./commands/search-yt.js";
import { quickTakes } from "./commands/quick-takes.js";
import { summary } from "./commands/summary.js";
import { transcript } from "./commands/transcript.js";
import { create } from "./commands/create.js";
import { createSummary } from "./commands/create-summary.js";
import { ApiError } from "./client.js";

type CommandFn = (
  client: ReturnType<typeof createClient>,
  args: string[]
) => Promise<unknown>;

const commands: Record<string, CommandFn> = {
  search,
  "search-yt": searchYt,
  "quick-takes": quickTakes,
  summary,
  transcript,
  create,
  "create-summary": createSummary,
};

const COMMAND_NAMES = Object.keys(commands).join(", ");

async function main() {
  const [command, ...args] = process.argv.slice(2);

  if (!command || !commands[command]) {
    console.error(`Usage: summiz <command> [args]\nCommands: ${COMMAND_NAMES}`);
    process.exit(1);
  }

  const client = createClient();
  const result = await commands[command](client, args);

  if (result !== undefined) {
    console.log(JSON.stringify(result, null, 2));
  }

  process.exit(0);
}

main().catch((error) => {
  if (error instanceof ApiError) {
    console.error(`Error (${error.status}): ${error.message}`);
  } else {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Error: ${message}`);
  }
  process.exit(1);
});
