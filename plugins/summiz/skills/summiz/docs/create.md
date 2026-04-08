Generates Quick Takes for any YouTube video. This is the primary tool for bringing new content into Summiz. Generation typically completes within 3 minutes. The full transcript becomes immediately available after using this command. Invoke via `node <base_directory>/summiz.js create "<youtube-url>" [flags]`. Output is JSON to stdout.

[!FLAGS] a) no flags — generates Quick Takes in English (default). b) `--language <code>` or `--lang <code>` — language code for the generated content (e.g., EN, ES, FR, DE, PT, IT, JA, KO, ZH). Default: EN.

[!OUTPUT-SHAPE] Returns an object with: status ("completed" or "generating"), digestUrl (link to content on summiz.ai), uid (Summiz identifier for subsequent commands), and available content details.

[!USAGE] Use this every time a user asks about content that does not exist on Summiz yet. After creation, use the returned uid with `quick-takes`, `summary`, or `transcript` to access the generated content.
