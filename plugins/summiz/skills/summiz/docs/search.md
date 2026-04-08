Searches the Summiz content catalog for videos and podcasts already processed. Invoke via `node <base_directory>/summiz.js search "<query>" [flags]`. Output is JSON to stdout.

[!FLAGS] a) no flags — returns up to 10 results matching the query. b) `--limit <1-50>` — set number of results (default: 10, max: 50).

[!OUTPUT-SHAPE] Returns an array of content records with fields: title, channelName, uid (7-char Summiz identifier), externalId (YouTube video ID), url (Summiz digest URL), language, and available content types.

[!USAGE] Use the `uid` from results as the identifier for `quick-takes`, `summary`, or `transcript` commands. If search returns no results, use `search-yt` to find the video on YouTube, then `create` to generate content.
