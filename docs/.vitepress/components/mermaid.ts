import mermaid, { type MermaidConfig } from 'mermaid';

// const init = Promise.all([
// 	mermaid.registerExternalDiagrams([zenuml]),
// 	mermaid.registerLayoutLoaders(layouts),
// 	mermaid.registerLayoutLoaders(tidyTreeLayout),
// ]);
mermaid.registerIconPacks([
	{
		name: 'logos',
		loader: () =>
			fetch('https://unpkg.com/@iconify-json/logos/icons.json').then((res) => res.json()),
	},
]);

export const render = async (id: string, code: string, config: MermaidConfig): Promise<string> => {
	// await init;
	mermaid.initialize(config);
	const { svg } = await mermaid.render(id, code);
	return svg;
};
