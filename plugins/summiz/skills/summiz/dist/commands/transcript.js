import { parseArgs } from "../lib/args.js";
export async function transcript(client, args) {
    const flags = parseArgs(args, {
        positional: { key: "identifier", label: "A Summiz UID, YouTube video ID, or YouTube URL" },
        flags: {},
    });
    const id = flags.identifier;
    // Detect YouTube URL vs UID vs externalId
    const params = {};
    if (id.startsWith("http://") || id.startsWith("https://")) {
        params.youtubeUrl = id;
    }
    else if (id.length === 7) {
        params.uid = id;
    }
    else {
        params.externalId = id;
    }
    return client.get("get-transcript", params);
}
