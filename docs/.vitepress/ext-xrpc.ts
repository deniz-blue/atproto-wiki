import { MarkdownRenderer } from "vitepress";

export const parseXRPCContent = (content: string) => {
	const lines = content.split("\n").map(line => line.trim()).filter(line => line.length > 0);

	const method = lines[0];
	const params: Record<string, string> = {};
	const body: Record<string, string> = {};
	let response: string | undefined = undefined;

	for (const line of lines.slice(1)) {
		const [key, ...v] = line.split(":");
		const value = v.join(":").trim();

		if (key.startsWith("params."))
			params[key.slice("params.".length)] = JSON.parse(value);
		else if (key.startsWith("body."))
			body[key.slice("body.".length)] = JSON.parse(value);
		else if (key === "response")
			response = JSON.parse(value);
	};

	return {
		method,
		params,
		isQuery: Object.keys(body).length == 0,
		body,
		response,
	};
};

export const generateXRPCOutput = (
	md: MarkdownRenderer,
	parsed: ReturnType<typeof parseXRPCContent>,
	groupId: string,
) => {
	const { method, params, body, isQuery, response } = parsed;

	const snippets: {
		language: string;
		code: string;
		title: string;
	}[] = [
			{
				language: "ts",
				title: "TypeScript (atcute)",
				code: `
const PDS = "https://example.com";
const rpc = new Client({ handler: simpleFetchHandler({ service: PDS }) });

${(isQuery || !!response) ? "const response = " : ""}await rpc.${isQuery ? "get" : "post"}("${method}", {
	params: {
		${Object.entries(params).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join(",\n\t\t")}
	},
});

${response ? `console.log(ok(response));\n${JSON.stringify(response, null, 2).split("\n").map(l => `// ${l}`).join("\n")}` : ``}
`.trim(),
			},
			method === "com.atproto.repo.getRecord" ? {
				language: "ts",
				title: "TypeScript (atproto)",
				code: `
const response = await client.get(${params.collection}, {
	${Object.entries({ rkey: params.rkey }).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join(",\n\t")}
});

${response ? `console.log(response);\n${JSON.stringify(response, null, 2).split("\n").map(l => `// ${l}`).join("\n")}` : ``}
`.trim(),
			} : null,
			{
				language: "sh",
				title: "cURL",
				code: `

PDS=https://example.com
curl -G \${PDS}/xrpc/${method} \\
${Object.entries(params).map(([key, value], i, a) => `  -d "${key}=${value}" ${i < a.length - 1 ? "\\" : ""}`).join("\n")}

${response ? JSON.stringify(response, null, 2).split("\n").map(l => `# ${l}`).join("\n") : ``}
`.trim(),
			},
		].filter((x): x is NonNullable<typeof x> => x !== null);

	const tabs = snippets.map((snippet, idx) => {
		const tabId = `tab-${groupId}-${idx}`;
		const title = md.utils.escapeHtml(snippet.title);

		return (`
		<input type="radio" id="${tabId}" name="group-${groupId}" ${idx === 0 ? "checked" : ""}>
		<label for="${tabId}" data-title="${title}">${title}</label>
	`);
	}).join("");

	const blocks = snippets.map((snippet, idx) => {
		const rendered = md.render(`\`\`\`${snippet.language} [${snippet.title}]\n${snippet.code}\n\`\`\``);

		if (idx === 0) {
			return rendered.replace(
				/(<div class="language-[^"]*?)(")/,
				'$1 active$2',
			);
		}

		return rendered;
	}).join("");

	return (`
		<div class="vp-code-group vp-adaptive-theme">
			<div class="tabs">
				${tabs}
			</div>
			<div class="blocks">
				${blocks}
			</div>
		</div>
	`);
};

export const ExtXRPC = (md: MarkdownRenderer) => {
	const defaultRender = md.renderer.rules.fence!;
	let groupCounter = 0;

	md.renderer.rules.fence = (tokens, idx, options, env, self) => {
		const token = tokens[idx]
		if (token.info.trim() === "xrpc")
			return generateXRPCOutput(md, parseXRPCContent(token.content), `${groupCounter++}`);
		return defaultRender(tokens, idx, options, env, self)
	};
};
