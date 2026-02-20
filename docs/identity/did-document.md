---
title: DID Document
---

# DID Document

The [DID](did.md) Document is a JSON document (in the form of a [JSON-LD](https://json-ld.org/) document) that contains information about a [DID](did.md), such as the public keys associated with the [DID](did.md), and service endpoints.

DID Documents are resolved from [DIDs](did.md) using a method specific to the DID's method.

For example, the `did:web` method resolves DIDs by fetching a JSON document from a `.well-known` URL, while the `did:plc` method resolves DIDs by fetching a JSON document from the [PLC directory](plc-directory.md).
