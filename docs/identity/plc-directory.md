# PLC Directory

The PLC Directory is a directory of DIDs that are registered using the `did:plc` method.

It is maintained by Bluesky and is used to resolve DIDs that use the `did:plc` method.

It is hosted at `https://plc.directory/` and can be queried using the AT Protocol's `com.atproto.identity.resolveHandle` and `com.atproto.identity.resolveDid` APIs.

Many tools and libraries should have support for changing the PLC Directory endpoint, so if you want to run your own PLC Directory, you can do so and point your tools and libraries to it.
