import { parseArgs } from "../lib/args.js";
export async function searchYt(client, args) {
    const flags = parseArgs(args, {
        flags: {
            "--title": { key: "titleQuery", type: "string" },
            "--channel": { key: "channelQuery", type: "string" },
            "--order": { key: "order", type: "string" },
            "--max-results": { key: "maxResults", type: "number" },
        },
    });
    const params = {};
    if (flags.titleQuery)
        params.titleQuery = flags.titleQuery;
    if (flags.channelQuery)
        params.channelQuery = flags.channelQuery;
    if (flags.order)
        params.order = flags.order;
    if (flags.maxResults !== undefined)
        params.maxResults = String(flags.maxResults);
    if (!params.titleQuery && !params.channelQuery) {
        throw new Error("At least one of --title or --channel is required.");
    }
    return client.get("search-youtube-videos", params);
}
