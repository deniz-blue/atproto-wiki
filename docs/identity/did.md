# Decentralized Identifiers

Decentralized Identifiers does not actually come from the AT Protocol. It is a [standard from the W3C](https://www.w3.org/TR/did-1.1/), and is used by the AT Protocol as a way to identify users and services.

Decentralized Identifiers, or DIDs, can use a variety of methods to resolve to a [DID Document](did-document.md), which contains useful information such as the public keys associated with the DID (so we can verify signatures), and service endpoints (so we can find the user"s PDS).

Currently, the AT Protocol only supports the `did:web` and `did:plc` methods.

## Resolution: DID -> DID Document

DID Documents are resolved depending on the method of the DID. For example, `did:plc` DIDs are resolved by making a request to the [PLC directory](plc-directory.md), while `did:web` DIDs are resolved by fetching a JSON file from a web server.

::: code-group

```ts [@atcute]
import {
	AtprotoWebDidDocumentResolver,
	PlcDidDocumentResolver,
	XrpcDidDocumentResolver,
	CompositeDidDocumentResolver,
} from "@atcute/identity-resolver";

const doc = await didResolver.resolve("did:plc:z72i7hdynmk6r22z27h6tvur");
// -> { "@context": [...], id: "did:plc:...", service: [...], ... }
```

:::
