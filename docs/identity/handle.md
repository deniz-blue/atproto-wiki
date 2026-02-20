# Handles

Handles are a way to represent [DIDs](did.md) in a human readable format.

Handles are just internet domains that resolve to [DIDs](did.md).

## Resolution: Handle -> DID

There are two methods for resolving a handle to a DID:
- [DNS TXT Records](#dns-txt-records)
- [HTTPS .well-known Endpoint](#https-well-known-endpoint)

You can alternatively use the `com.atproto.identity.resolveHandle` XRPC method to resolve a handle to a [DID](did.md), which will use the above methods under the hood.

::: code-group

```ts [@atcute]
import {
	CompositeHandleResolver,
	DohJsonHandleResolver,
	WellKnownHandleResolver,
	XrpcHandleResolver,
} from "@atcute/identity-resolver";

const did = await handleResolver.resolve("bsky.app");
// -> "did:plc:z72i7hdynmk6r22z27h6tvur"
```

:::

## DNS TXT Records

A DNS lookup is performed under the `_atproto` subdomain of the handle"s domain.

The TXT record should have the contents `did=<DID>` where `<DID>` is the DID that the handle resolves to.

For example, to resolve the handle `deniz.blue` to a [DID](did.md), a DNS TXT lookup is performed for the record `_atproto.deniz.blue`. If the record contains `did=did:example:123`, then the handle `deniz.blue` resolves to the DID `did:example:123`.

## HTTPS .well-known Endpoint

An HTTP GET request is made to the `/.well-known/atproto-did` endpoint of the handle"s domain.

`Content-Type` of the response must be `text/plain` and the body of the response should be the DID that the handle resolves to.

For example, to resolve the handle `deniz.blue` to a [DID](did.md), an HTTP GET request is made to `https://deniz.blue/.well-known/atproto-did`. If the response body contains `did:example:123`, then the handle `deniz.blue` resolves to the DID `did:example:123`.
