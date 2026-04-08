Fetches a comprehensive Summary for a specific piece of content. Returns structured content with TLDR, golden nuggets, sections, and conclusion. Invoke via `node <base_directory>/summiz.js summary <identifier>`. Output is JSON to stdout.

[!IDENTIFIER] The positional argument is auto-detected: a) 7-character string → Summiz UID. b) any other length → YouTube video ID. Summiz UID is preferred when available.

[!OUTPUT-SHAPE] Returns an object with: title, channelName, summary content (TLDR, golden nuggets, detailed sections, conclusion), digestUrl, and metadata.

[!USAGE] Summaries require generation on summiz.ai with an account. If summary is not available, use `create-summary` to check availability and get the digest URL where the user can generate it. For factual verification, always cross-reference with `transcript`.
