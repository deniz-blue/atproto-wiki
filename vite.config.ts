import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from 'fumadocs-mdx/vite';
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
	ssr: {
		noExternal: true,
	},
	plugins: [
		cloudflare({ viteEnvironment: { name: "ssr" } }),
		mdx(await import("./source.config")),
		tailwindcss(),
		reactRouter(),
		tsconfigPaths({
			projects: ['./tsconfig.json'],
		}),
	],
});
