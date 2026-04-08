export function parseArgs(args, schema) {
    const result = {};
    // Default all boolean flags to false
    if (schema.flags) {
        for (const def of Object.values(schema.flags)) {
            if (def.type === "boolean")
                result[def.key] = false;
        }
    }
    let startIdx = 0;
    // Extract positional arg (also accept --<key> as named alias)
    if (schema.positional) {
        const aliasFlag = `--${schema.positional.key}`;
        const aliasIdx = args.indexOf(aliasFlag);
        if (aliasIdx !== -1) {
            const value = args[aliasIdx + 1];
            if (value === undefined)
                throw new Error(`${aliasFlag} requires a value`);
            result[schema.positional.key] = value;
            args = [...args.slice(0, aliasIdx), ...args.slice(aliasIdx + 2)];
        }
        else {
            const first = args[0];
            if (!first || first.startsWith("--")) {
                throw new Error(`${schema.positional.label} is required as the first argument.`);
            }
            result[schema.positional.key] = first;
            startIdx = 1;
        }
    }
    // Parse flags
    for (let i = startIdx; i < args.length; i++) {
        const arg = args[i];
        const def = schema.flags?.[arg];
        if (!def)
            throw new Error(`Unknown flag: ${arg}`);
        if (def.type === "boolean") {
            result[def.key] = true;
            continue;
        }
        const value = args[++i];
        if (value === undefined)
            throw new Error(`${arg} requires a value`);
        if (def.type === "number") {
            const num = Number(value);
            if (Number.isNaN(num))
                throw new Error(`${arg} requires a numeric value, got "${value}"`);
            result[def.key] = num;
        }
        else {
            result[def.key] = value;
        }
    }
    return result;
}
