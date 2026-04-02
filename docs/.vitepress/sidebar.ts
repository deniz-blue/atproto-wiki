const item = (text: string, link?: string) => ({ text, link });
const section = (text: string, items: any[]) => ({ text, items });

export const sidebar = [
	item("AT Protocol", "/"),
	item("AT Protocol For Users", "/for-users"),
	item("Tools & Libraries", "/tools-and-libraries"),
	section("Identity", [
		item("Handle", "/identity/handle"),
		item("Resolving Handles to DIDs", "/identity/resolving-handles"),
		item("DID", "/identity/did"),
		item("Resolving DID Documents", "/identity/resolving-did-document"),
		item("DID Document", "/identity/did-document"),
		item("PLC Directory", "/identity/plc-directory"),
	]),
	section("Personal Data Servers", [
		item("PDS", "/pds"),
	]),
	section("Repositories", [
		item("Repository", "/repo"),
		item("Collection", "/repo/collection"),
		item("Record", "/repo/record"),
	]),
	section("OAuth & Authentication", [
		item("OAuth", "/oauth"),
		item("OAuth Client Metadata", "/oauth/client-metadata"),
		item("Vite OAuth Guide", "/oauth/vite"),
	]),
	section("Applications", [
		item("Working with Records", "/application/records"),
	]),
	section("Lexicons", [
		item("Lexicon", "/lexicon"),
		item("Resolving Lexicons", "/lexicon/resolving"),
	]),
	section("Sync & Relays", [
		item("Sync", "/sync"),
		item("Firehose", "/sync/firehose"),
		item("Jetstream", "/sync/jetstream"),
		item("Tap", "/sync/tap"),
	]),
	section("AppView", [
		item("App Views", "/appview"),
	]),
	section("Microcosm", [
		item("Constellation", "/microcosm/constellation"),
		item("Slingshot", "/microcosm/slingshot"),
		item("Spacedust", "/microcosm/spacedust"),
	]),
];
