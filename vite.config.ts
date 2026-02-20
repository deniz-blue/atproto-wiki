import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from 'fumadocs-mdx/vite';
import * as MdxConfig from './source.config';
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";

export default defineConfig({
	plugins: [
		mdx(MdxConfig),
		tailwindcss(),
		cloudflareDevProxy(),
		reactRouter(),
		tsconfigPaths({
			projects: ['./tsconfig.json'],
		}),
	],
});
