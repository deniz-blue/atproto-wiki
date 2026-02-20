# Scopes

Required OAuth scope: `atproto`

If working with blobs: `blob:*/*`

## Resource Types

- `repo`: Access user's [Repository](../repo/index.md)
- `blob`: Access user's Blobs
- `rpc`: XRPC Calls
- `identity`: Manage user's identity, including [DID Document](../identity/did-document.md) and [Handles](.handle.md)
- `account`: Manage user's account, including email and password

### `repo`

Format: `repo:<collection>[?<action>]`

Collection: The collection to access, e.g. `app.bsky.feed.post`
Action: One of `create`, `update` or `delete`
