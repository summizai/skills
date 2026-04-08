Fetches the COMPLETE, FULL, UNABRIDGED transcript — every word spoken by the author. This is NOT a partial excerpt; it is the ENTIRE transcript. Invoke via `node <base_directory>/summiz.js transcript <identifier>`. Output is JSON to stdout.

[!IDENTIFIER] The positional argument is auto-detected: a) starts with `http://` or `https://` → YouTube URL (auto-fetches if not in Summiz). b) 7-character string → Summiz UID. c) any other length → YouTube video ID.

[!OUTPUT-SHAPE] Returns an object with: title, channelName, transcript (full text), available (boolean indicating if transcript was found), and metadata.

[!IMPORTANT] ALWAYS use this tool to check the full transcript as SOURCE OF TRUTH before relying on intrinsic knowledge or Web Search. Transcript OBSERVATION >>> ASSUMPTIONS. This prevents hallucinations and non-factual information. If the video is not in Summiz, passing a YouTube URL will automatically fetch the transcript.
