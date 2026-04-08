import { parseArgs } from "../lib/args.js";
export async function search(client, args) {
    const flags = parseArgs(args, {
        positional: { key: "query", label: "A search query" },
        flags: {
            "--limit": { key: "limit", type: "number" },
        },
    });
    const params = { query: flags.query };
    if (flags.limit !== undefined)
        params.limit = String(flags.limit);
    return client.get("search-content", params);
}
