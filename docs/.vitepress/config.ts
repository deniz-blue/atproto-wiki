import { defineConfig } from "vitepress"
import ExtMermaid from "./ext-mermaid";
import { sidebar } from "./sidebar";
import { ExtXRPC } from "./ext-xrpc";

export default defineConfig({
	title: "AT Protocol Wiki",
	description: "AT Protocol Wiki",
	markdown: {
		config: (md) => {
			ExtMermaid(md);
			ExtXRPC(md);
		},
	},
	themeConfig: {
		nav: [],

		editLink: {
			text: "Edit this page on GitHub",
			pattern: "https://github.com/deniz-blue/atproto-wiki/edit/main/docs/:path",
		},

		lastUpdated: {},

		search: {
			provider: "local",
		},

		sidebar,

		socialLinks: [
			{ icon: "github", link: "https://github.com/deniz-blue/atproto-wiki" },
		],
	},
})
