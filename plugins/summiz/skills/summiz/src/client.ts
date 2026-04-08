const BASE_URL = process.env.SUMMIZ_API_URL || "https://www.summiz.ai/api/public";

export interface SummizClient {
  get(endpoint: string, params?: Record<string, string>): Promise<unknown>;
  post(endpoint: string, body: Record<string, unknown>): Promise<unknown>;
}

export function createClient(): SummizClient {
  return { get: apiGet, post: apiPost };
}

async function apiGet(
  endpoint: string,
  params?: Record<string, string>
): Promise<unknown> {
  const url = new URL(`${BASE_URL}/${endpoint}`);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined) url.searchParams.set(k, v);
    }
  }
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) throw new ApiError(res.status, data);
  return data;
}

async function apiPost(
  endpoint: string,
  body: Record<string, unknown>
): Promise<unknown> {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new ApiError(res.status, data);
  return data;
}

export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly data: unknown
  ) {
    const msg =
      typeof data === "object" && data !== null && "error" in data
        ? (data as { error: string }).error
        : `HTTP ${status}`;
    super(msg);
  }
}
