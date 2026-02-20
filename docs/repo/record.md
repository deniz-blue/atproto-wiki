# Record

Records are the most primitive unit of data in the Atmosphere.

A Record is plainly put, simply, a JSON object.

A Record might have a defined schema (see [Lexicons](../lexicon/index.md)), but it doesn't have to.
The only requirement for a Record is that it must be valid JSON.
When creating or updating a Record, it might be validated against a schema depending on the application's request to the [PDS](../pds/index.md) and the PDS's configuration.
