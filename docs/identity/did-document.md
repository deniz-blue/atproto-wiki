---
title: DID Document
---

# DID Document

The [DID](did.md) Document is a JSON document (in the form of a [JSON-LD](https://json-ld.org/) document) that contains information about a [DID](did.md), such as the public keys associated with the [DID](did.md), and service endpoints.

DID Documents are resolved from [DIDs](did.md) depending on the method of the DID.

DID Documents are used for:

- [Record](../repo/record.md) Verification
- [Handles](.handle.md) using `alsoKnownAs` 
- Resolving the user's [Personal Data Server (PDS)](../pds/index.md) via `service` entries

Example DID Document:

```json
{
	"@context": [
		"https://www.w3.org/ns/did/v1",
		"https://w3id.org/security/multikey/v1",
		"https://w3id.org/security/suites/secp256k1-2019/v1"
	],
	"id": "did:plc:ewvi7nxzyoun6zhxrhs64oiz",
	"alsoKnownAs": [
		"at://atproto.com"
	],
	"verificationMethod": [
		{
			"id": "did:plc:ewvi7nxzyoun6zhxrhs64oiz#atproto",
			"type": "Multikey",
			"controller": "did:plc:ewvi7nxzyoun6zhxrhs64oiz",
			"publicKeyMultibase": "zQ3shunBKsXixLxKtC5qeSG9E4J5RkGN57im31pcTzbNQnm5w"
		}
	],
	"service": [
		{
			"id": "#atproto_pds",
			"type": "AtprotoPersonalDataServer",
			"serviceEndpoint": "https://enoki.us-east.host.bsky.network"
		}
	]
}
```

