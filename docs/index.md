---
isHome: true
---

# AT Protocol

The AT Protocol is a decentralized data protocol that enables applications to interact with the Atmosphere, a global network of interconnected data and services.

In the AT Protocol, users actually own their data and can choose which applications have access to it.
This allows for a more open and interoperable ecosystem, where users can easily switch between applications without losing their data.

## AT Protocol Concepts

- Users are identified by their [Decentralized Identifier (DID)](identity/did.md) or their [handle](identity/handle.md). Handles are resolved to DIDs.
- Their DID points to a [Personal Data Server (PDS)](pds/index.md).
- The PDS contains the user's [Repository](repo/index.md), which contains their [records](repo/record.md) grouped by [collections](repo/collection.md).
- Records can be validated per-collection using [Lexicons](lexicon/index.md).
- Applications can use [OAuth](oauth/index.md) to request access to write to a user's Repository.
- [Relays](sync/index.md) listen to many PDS'es and aggregates/broadcasts changes, allowing applications to work in real-time.
