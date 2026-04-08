Searches YouTube directly via the YouTube Data API. Use this when content is not yet in the Summiz catalog or when you need the exact YouTube video ID. Invoke via `node <base_directory>/summiz.js search-yt [flags]`. At least one of --title or --channel is required. Output is JSON to stdout.

[!FLAGS] a) `--title "<keywords>"` — video title keywords to search for. b) `--channel "<name>"` — channel name keywords to narrow results. c) `--order <relevance|date>` — sort order (default: relevance). Use `date` for latest uploads from a channel. d) `--max-results <1-25>` — number of results (default: 5, max: 25).

[!OUTPUT-SHAPE] Returns an array of YouTube video objects with fields: videoId, title, channelTitle, publishedAt, thumbnailUrl, and the full YouTube URL.

[!USAGE] After finding the desired video, use its videoId as the identifier for `quick-takes`, `summary`, or `transcript`. If content does not exist in Summiz yet, use `create` with the YouTube URL to generate it.
