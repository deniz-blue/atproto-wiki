# Handles

Handles are a way to represent [DIDs](did.md) in a human readable format.

Handles are just **internet domains** that resolve to [DIDs](did.md).

## Where handles defined

Handles are defined in the `alsoKnownAs` property of a [DID Document](did-document.md), like so:

```json
"alsoKnownAs": [
	"at://example.com"
]
```

Generally, applications will only use the first `at://` handle in the `alsoKnownAs` array as the primary handle for the DID.

## Where handles are used

Applications generally use handles as a more user friendly way to refer to DIDs. For example, instead of showing a user"s DID, an application may show the user's handle.

BlueSky also uses handles while mentioning another user in a post. The mention data will still contain the DID of the mentioned user, however, the post's text content will contain the handle of the mentioned user.

## Handles to DIDs

See [Resolving Handles to DIDs](resolving-handles.md) for more information on how just the handles themselves are resolved to DIDs.
