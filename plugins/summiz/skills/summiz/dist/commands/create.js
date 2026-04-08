import { parseArgs } from "../lib/args.js";
export async function create(client, args) {
    const flags = parseArgs(args, {
        positional: { key: "youtubeUrl", label: "A YouTube video URL" },
        flags: {
            "--language": { key: "language", type: "string" },
            "--lang": { key: "language", type: "string" },
        },
    });
    const body = { youtubeUrl: flags.youtubeUrl };
    if (flags.language)
        body.language = flags.language;
    return client.post("create-quick-takes", body);
}
