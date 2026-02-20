# AT Protocol

The AT Protocol is a decentralized data protocol that enables applications to interact with the Atmosphere, a global network of interconnected data and services.

In the AT Protocol, users actually own their data and can choose which applications have access to it.
This allows for a more open and interoperable ecosystem, where users can easily switch between applications without losing their data.

## In Summary

- Users are identified by their [Decentralized Identifier (DID)](identity/did.md) or their [handle](identity/handle.md). Handles are resolved to DIDs.
- Their DID points to a [Personal Data Server (PDS)](pds/index.md).
- The PDS contains the user's [Repository](repo/index.md), which is a [collection](repo/collection.md) of [records](repo/record.md).
- Records can be validated per-collection using [Lexicons](lexicon/index.md).
- Applications can use [OAuth](oauth/index.md) to request access to a user's data.
- [Relays](relay/index.md) listen to changes in Repositories and can be used to build real-time applications.

<!-- ## Start Hacking

<Cards>
	<Card title="Tools" href="/tools" />
	<Card title="Libraries" href="/libraries" />
</Cards>

## Learn Concepts

<Cards>
	<Card title="Identity" href="/identity" />
	<Card title="PDS" href="/pds" />
	<Card title="Repository" href="/repo" />
	<Card title="Relays" href="/relay" />
</Cards> -->
