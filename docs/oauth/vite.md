# Vite OAuth Guide

Below is are useful snippets for implementing the OAuth flow in a Vite application.

Make sure you have an `oauth-client-metadata.json` file in `public/`, and that you have the required OAuth scopes configured. See [OAuth Client Metadata](./client-metadata.md) and [Scopes](./scopes.md) for more details.

```ts [vite.config.ts]
// vite.config.ts

import { defineConfig } from "vite";
import metadata from "./public/oauth-client-metadata.json" with { type: "json" };
// ...

const SERVER_HOST = "127.0.0.1";
const SERVER_PORT = 5173;

export default defineConfig({
	// OAuth on local development must be on 127.0.0.1,
	// otherwise the PDS will not redirect to the app after authorization
	server: {
		host: SERVER_HOST,
		port: SERVER_PORT,
	},

	plugins: [
		{
			// Plugin to inject the OAuth client metadata into import.meta.env
			name: "atproto-oauth",
			config(_conf, { command }) {
				process.env.VITE_OAUTH_SCOPE = metadata.scope;
				if (command === "build") {
					process.env.VITE_OAUTH_CLIENT_ID = metadata.client_id;
					process.env.VITE_OAUTH_REDIRECT_URI = metadata.redirect_uris[0];
				} else {
					const redirectUri = `http://${SERVER_HOST}:${SERVER_PORT}${new URL(metadata.redirect_uris[0]!).pathname}`;
					process.env.VITE_OAUTH_CLIENT_ID =
						`http://localhost?redirect_uri=${encodeURIComponent(redirectUri)}` +
						`&scope=${encodeURIComponent(metadata.scope)}`;
					process.env.VITE_OAUTH_REDIRECT_URI = redirectUri;
				}
			},
		},
	],
});
```

Then, in your application code where you configure the OAuth client, you can access the metadata from `import.meta.env`:

::: code-group

```ts [@atcute]
import { configureOAuth } from "@atcute/oauth-browser-client";

configureOAuth({
	metadata: {
		client_id: import.meta.env.VITE_OAUTH_CLIENT_ID,
		redirect_uri: import.meta.env.VITE_OAUTH_REDIRECT_URI,
	},
	// ...
});
```

:::

When you are signing in the user:

::: code-group

```ts [@atcute]
import { createAuthorizationUrl } from "@atcute/oauth-browser-client";

const authUrl = await createAuthorizationUrl({
	scope: import.meta.env.VITE_OAUTH_SCOPE,
	// ...
});
```

:::
