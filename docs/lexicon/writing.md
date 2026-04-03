# Writing Lexicons

[Lexicons](./index.md) are just JSON files, so you can write them manually. However, there are some tools that can help you write them more easily.

## @atcute

[@atcute/lex-cli](https://npmx.dev/package/@atcute/lex-cli) combined with [@atcute/lexicon-doc](https://npmx.dev/package/@atcute/lexicon-doc) allows you to write Lexicons in TypeScript and generate JSON files from them.

```ts
import { array, document, object, record, required, string } from '@atcute/lexicon-doc/builder';

export default document({
	id: 'com.example.bookmark',
	defs: {
		main: record({
			key: 'tid',
			description: 'a saved link to come back to later',
			record: object({
				properties: {
					subject: required(string({ format: 'uri' })),
					createdAt: required(string({ format: 'datetime' })),
					tags: array({ items: string(), description: 'tags for organizing bookmarks' }),
				},
			}),
		}),
	},
});
```

## Matt's Lexicon Format

[Matt's Lexicon Format](https://mlf.lol/) is a human-friendly DSL for ATProto Lexicons.

```sh
mlf generate lexicon -i thread.mlf -o lexicons/
```

::: code-group

```ts [thread.mlf]
/// A forum thread
record thread {
    /// Thread title
    title!: string constrained {
        maxLength: 200,
        minLength: 1,
    },
    /// Thread body
    body!: string constrained {
        maxLength: 10000,
    },
    /// Thread creation timestamp
    createdAt!: Datetime,
};
```

```json [lexicons/com/example/thread.json]
{
  "$type": "com.atproto.lexicon.schema",
  "lexicon": 1,
  "id": "com.example.thread",
  "defs": {
    "main": {
      "type": "record",
      "description": "A forum thread",
      "key": "tid",
      "record": {
        "type": "object",
        "required": ["title", "body", "createdAt"],
        "properties": {
          "title": {
            "type": "string",
            "maxLength": 200,
            "minLength": 1,
            "description": "Thread title"
          },
          "body": {
            "type": "string",
            "maxLength": 10000,
            "description": "Thread body content"
          },
          "createdAt": {
            "type": "string",
            "format": "datetime",
            "description": "Thread creation timestamp"
          }
        }
      }
    }
  }
}
```

:::

## typelex

[typelex](https://typelex.org/) is a [TypeSpec](https://typespec.io/) processor for generating ATProto Lexicons using TypeSpec.

::: code-group

```ts [tsp]
import "@typelex/emitter";

namespace app.bsky.actor.profile {
  @rec("self")
  model Main {
    @maxLength(64)
    @maxGraphemes(64)
    displayName?: string;

    @maxLength(256)
    @maxGraphemes(256)
    description?: string;
  }
}
```

```json
{
  "lexicon": 1,
  "id": "app.bsky.actor.profile",
  "defs": {
    "main": {
      "type": "record",
      "key": "self",
      "record": {
        "type": "object",
        "properties": {
          "displayName": {
            "type": "string",
            "maxLength": 64,
            "maxGraphemes": 64
          },
          "description": {
            "type": "string",
            "maxLength": 256,
            "maxGraphemes": 256
          }
        }
      }
    }
  }
}
```

## prototypey

[prototypey](https://prototypey.org) is a library for generating ATProto Lexicons using TypeScript.

::: code-group

```ts
import { lx, type Infer } from "prototypey";

const lex = lx.lexicon("app.bsky.actor.profile", {
  main: lx.record({
    key: "self",
    record: lx.object({
      displayName: lx.string({ maxLength: 64, maxGraphemes: 64 }),
      description: lx.string({ maxLength: 256, maxGraphemes: 256 }),
    }),
  }),
});

type Profile = Infer<typeof lex>;

const aProfile: Profile = {
  $type: "app.bsky.actor.profile",
  displayName: "Benny Harvey"
}
```

```json
{
  "lexicon": 1,
  "id": "app.bsky.actor.profile",
  "defs": {
	"main": {
	  "type": "record",
	  "key": "self",
	  "record": {
		"type": "object",
		"properties": {
		  "displayName": {
			"type": "string",
			"maxLength": 64,
			"maxGraphemes": 64
		  },
		  "description": {
			"type": "string",
			"maxLength": 256,
			"maxGraphemes": 256
		  }
		}
	  }
	}
  }
}

```

