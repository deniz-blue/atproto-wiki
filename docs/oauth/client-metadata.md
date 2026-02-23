# `oauth-client-metadata.json`

The `oauth-client-metadata.json` file contains the OAuth client metadata that the [PDS](../pds/index.md) uses to identify the application during the OAuth flow.

This file can actually be named anything. However, if the file is not served at `/oauth-client-metadata.json`, the PDS may show the full URL of the client metadata file, so it's recommended to serve it under there.

::: warning

The `client_id` field in the metadata must be the URL that serves the client metadata file itself.

:::

## Fields

**Required fields:**

- `client_id`: The URL that serves the client metadata file itself
- `scope`: [Scopes](./scopes.md) required by the application
- `redirect_uris`: An array of allowed redirect URIs for the application
- `dpop_bound_access_tokens`: must be `true` *[citation needed]*
- `grant_types`: must include `authorization_code` *[citation needed]*
- `response_types`: must be `["code"]`

**Optional, presentation fields:**

- `client_name`: The name of the client application to be shown to users during the OAuth flow
- `client_uri`: The URL of the client application to be shown to users during the OAuth
- `logo_uri`: The URL of the client application's logo to be shown to users during the OAuth flow

## Local Development

If the `client_id` starts with `http://localhost/`, the PDS will **not** fetch the client metadata from the URL. Instead, it will use the `client_id` as the client metadata directly. The metadata can be configured with query parameters in this case, for example:

```
http://localhost?redirect_uri=http://localhost/oauth/callback&scope=atproto
```

::: info

The `client_id` field must be `localhost` without any port or path when using this method.

You are also only allowed to use `127.0.0.1` (loopback address) for the redirect URI in this case, and not `localhost`, due to security reasons. This is a requirement from the PDS, not a general OAuth requirement. You can use any port you want for the redirect URI, however.

:::

## Example `oauth-client-metadata.json`

```json
{
	"client_id": "https://myapp.com/oauth-client-metadata.json",
	"client_name": "My App",
	"client_uri": "https://myapp.com",
	"logo_uri": "https://myapp.com/icon.png",
	"scope": "atproto",
	"redirect_uris": [
		"https://myapp.com/oauth/callback"
	],
	"dpop_bound_access_tokens": true,
	"application_type": "web",
	"grant_types": [
		"authorization_code",
		"refresh_token"
	],
	"response_types": [
		"code"
	],
	"token_endpoint_auth_method": "none"
}
```
