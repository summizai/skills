---
name: summiz
description: Search, summarize, and analyze YouTube videos and podcasts with Summiz. Get quick takes, full summaries, transcripts, and generate new content — all from your AI agent.
license: MIT
metadata:
  author: summizai
  version: "1.0.1"
  tags: summiz, youtube, podcasts, summaries, transcripts, quick-takes, content, ai
allowed-tools: Bash(node *)
---

Summiz skill for searching, summarizing, and analyzing YouTube videos and podcasts. No credentials required — all endpoints are public. Zero setup — no npm install, no build step, no credentials. All commands go through a single entry point: `node <base_directory>/summiz.js <command> [flags]`. Each command has its own doc file with the full reference for flags and behavior. NEVER cd into the skill directory; always use absolute paths.

[!COMMANDS]

Search:
a) `search` — search the Summiz content catalog (videos and podcasts already processed). Returns titles, channels, UIDs, and Summiz URLs. Use the UID from results to fetch quick-takes, summary, or transcript. @docs/search.md.
b) `search-yt` — search YouTube directly by title and/or channel. Use this when content is NOT yet in Summiz or when you need the exact YouTube video ID. @docs/search-yt.md.

Read:
c) `quick-takes` — get bite-sized insights for a piece of content. Quick Takes help decide if content is worth deeper attention. Accepts a Summiz UID (7 chars) or YouTube video ID. @docs/quick-takes.md.
d) `summary` — get a comprehensive summary with TLDR, key takeaways, sections, and conclusion. Accepts a Summiz UID (7 chars) or YouTube video ID. @docs/summary.md.
e) `transcript` — get the COMPLETE, UNABRIDGED transcript (every word spoken). Use this as SOURCE OF TRUTH before relying on intrinsic knowledge. Accepts a Summiz UID, YouTube video ID, or full YouTube URL. @docs/transcript.md.

Create:
f) `create` — generate Quick Takes for any YouTube video (~3 min). This is the primary tool for bringing new content into Summiz. The full transcript becomes immediately available after creation. @docs/create.md.
g) `create-summary` — check summary availability or get the link to create one. Automatically generates Quick Takes if not yet present. Returns the digest URL for accessing or generating full Summary content on summiz.ai. @docs/create-summary.md.

[!WORKFLOW] Typical workflow: a) `search` the catalog first. b) If found, use the UID to read `quick-takes`, `summary`, or `transcript`. c) If NOT found, `search-yt` to find the YouTube video, then `create` to generate Quick Takes. d) Use `transcript` as source of truth for factual questions about the content. ALWAYS prefer transcript observation over assumptions to prevent hallucinations.

[!IDENTIFIERS] Two identifier types: a) Summiz UID — 7-character alphanumeric string from search results or Summiz URLs (e.g., `aB3cD4e`). b) YouTube video ID — 11-character string from YouTube URLs (e.g., `dQw4w9WgXcQ`). Read commands auto-detect based on length. For transcript, you can also pass a full YouTube URL directly.
