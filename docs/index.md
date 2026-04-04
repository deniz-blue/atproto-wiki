---
isHome: true
---

# AT Protocol Community Wiki

The AT Protocol is a decentralized data protocol that enables applications to interact with the Atmosphere, a global network of interconnected data and services.

In the AT Protocol, users actually own their data and can choose which applications have access to it.
This allows for a more open and interoperable ecosystem, where users can easily switch between applications without losing their data.

## About this Wiki

This wiki is meant to be more community-driven and less formal than the official documentation. It is meant to be a place where developers can share their knowledge and experiences with the AT Protocol, and to provide more practical guides and examples rather than technical documentation.

There is still a lot missing from this wiki, and it is a work in progress. If you see something missing or want to contribute, don't hesitate to open a pull request on the GitHub repository! Whether you're a seasoned developer or just getting started, your contributions are welcome and appreciated.

## AT Protocol Concepts

- Users are identified by their [Decentralized Identifier (DID)](identity/did.md) or their [handle](identity/handle.md). Handles are resolved to DIDs.
- Their DID points to a [Personal Data Server (PDS)](pds/index.md).
- The PDS contains the user's [Repository](repo/index.md), which contains their [records](repo/record.md) grouped by [collections](repo/collection.md).
- Records can be validated per-collection using [Lexicons](lexicon/index.md).
- Applications can use [OAuth](oauth/index.md) to request access to write to a user's Repository.
- [Relays](sync/index.md) listen to many PDS'es and aggregates/broadcasts changes, allowing applications to work in real-time.

