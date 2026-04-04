# Lexicons

Lexicons are a way to define the **structure** of data in the AT Protocol. They act like [JSON schema](https://json-schema.org/), but for [Records](../repo/record.md) within the AT Protocol.

::: tip

You actually don't need to have lexicons to create records in the AT Protocol. You can create records with any structure you want, and they will be stored in the user's [Repository](../repo/index.md) just fine.

However, lexicons allow developers to agree on a common structure for records in a collection, which allows for better interoperability between applications.

:::

Lexicons can define:
- Structure of records in a collection (e.g. what fields a `post` record has, and what types they are)
- XRPC query and procedure definitions (e.g. what parameters a `createPost` method takes, and what it returns)
- Subscription definitions (e.g. a websocket event subscription)
- Permission sets (e.g. a `publishing` permission set that allows creating/updating/deleting `post` records)
