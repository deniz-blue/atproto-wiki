# Working with Records

When you're working with the AT Protocol, you'll often need to create, read, update, or delete records in a repo. This page provides an overview of how to work with records in the AT Protocol.

Our examples will assume that you have already resolved the [PDS](../pds/index.md) of the [Repo](../repo/index.md) you want to work with. For write operations, you'll also need to have an authenticated session with the PDS. See the [OAuth](../oauth/index.md) section for more details on how to create an authenticated session.

## Reading a Record

To read a record, you perform the `com.atproto.repo.getRecord` XRPC procedure. This requires the `collection` and `rkey` of the record you want to read.

```xrpc
com.atproto.repo.getRecord
params.repo: "did:plc:ir2qabq56znbbinhktehjmc6"
params.collection: "xyz.statusphere.status"
params.rkey: "3mfjss76fysxr"
response: { "$type": "xyz.statusphere.status", "status": "🌸", "createdAt": "2026-02-23T14:00:08.919Z" }
```
