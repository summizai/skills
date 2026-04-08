Checks summary availability or gets the link to create one on summiz.ai. Automatically generates Quick Takes if not yet present. Invoke via `node <base_directory>/summiz.js create-summary "<youtube-url>" [flags]`. Output is JSON to stdout.

[!FLAGS] a) no flags — processes in English (default). b) `--language <code>` or `--lang <code>` — language code for the content (e.g., EN, ES, FR, DE, PT, IT, JA, KO, ZH). Default: EN.

[!OUTPUT-SHAPE] Returns an object with: status, digestUrl (where the user can access or generate the full Summary on summiz.ai), available content types, and uid.

[!IMPORTANT] Full Summaries require generation on summiz.ai with a user account. This command ensures Quick Takes exist and provides the direct URL for summary generation. It does NOT generate the summary itself — the user must visit the digestUrl to create it.
