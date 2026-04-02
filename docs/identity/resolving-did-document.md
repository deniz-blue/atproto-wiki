## Resolving DID Documents

To resolve a [DID Document](did-document.md), you must have the [DID](did.md) that the document is associated with. You can obtain a DID by resolving a [handle](handle.md) using the methods described in [Resolving Handles to DIDs](resolving-handles.md).

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
