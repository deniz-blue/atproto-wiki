# Lexicon

Lexicons are a way to define the **structure** of data in the AT Protocol. They act like [JSON schema](https://json-schema.org/), but for [Records](../repo/record.md) within the AT Protocol.

## How to resolve a Lexicon

Lexicons are actually stored as **records** in a [Repo](../repo/index.md) under the `com.atproto.lexicon.schema` [collection](../repo/collection.md). Each lexicon has the record key equal to the lexicon's NSID.

The **repository** of the lexicon is determined by doing a DNS `TXT` lookup of the parent of the lexicon's NSID reversed to get a domain, prefixed with `_lexicon`.

For example, to find the lexicon for `app.bsky.feed.post`:

1. Determine the parent NSID: `app.bsky.feed.post` -> `app.bsky.feed`
2. Convert to domain: `app.bsky.feed` -> `feed.bsky.app`
3. Prefix with `_lexicon`
4. DNS `TXT` lookup: `_lexicon.feed.bsky.app` -> `"did=..."`
5. Use the [DID](../identity/did.md) to find the [PDS](../pds/index.md) hosting the [Repo](../repo/index.md) where the lexicon is stored.
6. Fetch the lexicon record from the `com.atproto.lexicon.schema` collection in that repo using the NSID as the record key.

![AT URI path of lexicon of app.bsky.feed.post](appbskypostlexiconpath.png)
