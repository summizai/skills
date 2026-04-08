Fetches Quick Takes for a specific piece of content. Quick Takes are bite-sized insights that help decide if content is worth deeper attention. Invoke via `node <base_directory>/summiz.js quick-takes <identifier>`. Output is JSON to stdout.

[!IDENTIFIER] The positional argument is auto-detected: a) 7-character string → Summiz UID (from `search` results or Summiz URLs). b) any other length → YouTube video ID (e.g., `dQw4w9WgXcQ`). Summiz UID is preferred when available as it is the canonical identifier.

[!OUTPUT-SHAPE] Returns an object with: title, channelName, quickTakes (array of insight strings), digestUrl (link to full content on summiz.ai), and metadata.

[!USAGE] If Quick Takes are not available for the given identifier, use `create` with the YouTube URL to generate them (~3 min). For deeper analysis, follow up with `summary` or `transcript`.
