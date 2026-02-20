import { defineConfig } from "vitepress"

const item = (text: string, link?: string) => ({ text, link });

export default defineConfig({
	title: "AT Protocol Wiki",
	description: "AT Protocol Wiki",
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

		sidebar: [
			item("AT Protocol", "/"),
			item("Tools", "/tools"),
			item("Libraries", "/libraries"),
			{
				text: "Identity",
				items: [
					item("DID", "/identity/did"),
					item("PLC Directory", "/identity/plc-directory"),
					item("DID Document", "/identity/did-document"),
					item("Handle", "/identity/handle"),
				],
			},
			{
				text: "Personal Data Servers",
				items: [
					item("PDS", "/pds"),
				],
			},
			{
				text: "Repositories",
				items: [
					item("Repository", "/repo"),
					item("Collection", "/repo/collection"),
					item("Record", "/repo/record"),
				],
			},
			{
				text: "OAuth & Authentication",
				items: [
					item("OAuth", "/oauth"),
				],
			},
			{
				text: "Lexicons",
				items: [
					item("Lexicon", "/lexicon"),
				],
			},
			{
				text: "Relays & Syncing",
				items: [
					item("Relay", "/relay"),
					item("Firehose", "/relay/firehose"),
					item("Jetstream", "/relay/jetstream"),
					item("Tap", "/relay/tap"),
				],
			},
			{
				text: "AppView",
				items: [
					item("App Views", "/appview"),
				],
			},
			{
				text: "Community Services",
				items: [
					item("Constellation", "/microcosm/constellation"),
					item("Slingshot", "/microcosm/slingshot"),
					item("Spacedust", "/microcosm/spacedust"),
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/deniz-blue/atproto-wiki" },
		],
	},
})
