const BASE_URL = process.env.SUMMIZ_API_URL || "https://www.summiz.ai/api/public";
export function createClient() {
    return { get: apiGet, post: apiPost };
}
async function parseResponse(res) {
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
        throw new ApiError(res.status, `Expected JSON but got ${contentType || "unknown content type"} from ${res.url}. The Summiz API may be unavailable or the endpoint may not exist.`);
    }
    const data = await res.json();
    if (!res.ok)
        throw new ApiError(res.status, data);
    return data;
}
async function apiGet(endpoint, params) {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    if (params) {
        for (const [k, v] of Object.entries(params)) {
            if (v !== undefined)
                url.searchParams.set(k, v);
        }
    }
    return parseResponse(await fetch(url));
}
async function apiPost(endpoint, body) {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    return parseResponse(res);
}
export class ApiError extends Error {
    status;
    data;
    constructor(status, data) {
        const msg = typeof data === "string"
            ? data
            : typeof data === "object" && data !== null && "error" in data
                ? data.error
                : `HTTP ${status}`;
        super(msg);
        this.status = status;
        this.data = data;
    }
}
