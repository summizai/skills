import { parseArgs } from "../lib/args.js";
export async function summary(client, args) {
    const flags = parseArgs(args, {
        positional: { key: "identifier", label: "A Summiz UID or YouTube video ID" },
        flags: {},
    });
    const id = flags.identifier;
    const params = id.length === 7
        ? { uid: id }
        : { externalId: id };
    return client.get("get-summary", params);
}
